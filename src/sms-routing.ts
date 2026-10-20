// Routing rules for the hero demo. They mirror CarrierService and MessageService in
// https://github.com/ColtonRandall/sms-routing-service so the demo behaves like the real service.

export type Carrier = "TELSTRA" | "OPTUS" | "SPARK" | "GLOBAL";

export type RouteResult =
  | { kind: "invalid"; raw: string }
  | { kind: "blocked"; number: string; carrier: Carrier }
  | { kind: "delivered"; number: string; carrier: Carrier };

const AU_PREFIX = "+61";
const NZ_PREFIX = "+64";

/** Strips spaces, dashes and brackets, keeping digits and the leading +. */
export function standardise(raw: string): string {
  return raw.replace(/[^0-9+]/g, "");
}

/** A + followed by 8 to 15 digits, with no letters anywhere in the original input. */
export function isValidNumber(raw: string): boolean {
  if (/[a-zA-Z]/.test(raw)) return false;
  return /^\+[0-9]{8,15}$/.test(standardise(raw));
}

export class SmsRouter {
  // AU traffic alternates between two carriers, like the AtomicBoolean in CarrierService.
  private useTelstra = true;

  constructor(private readonly optedOut: ReadonlySet<string>) {}

  carrierFor(number: string): Carrier {
    if (number.startsWith(AU_PREFIX)) {
      const carrier: Carrier = this.useTelstra ? "TELSTRA" : "OPTUS";
      this.useTelstra = !this.useTelstra;
      return carrier;
    }
    if (number.startsWith(NZ_PREFIX)) return "SPARK";
    return "GLOBAL";
  }

  send(raw: string): RouteResult {
    if (!isValidNumber(raw)) return { kind: "invalid", raw };

    const number = standardise(raw);
    const carrier = this.carrierFor(number);
    return this.optedOut.has(number)
      ? { kind: "blocked", number, carrier }
      : { kind: "delivered", number, carrier };
  }
}
