import { describe, expect, it } from "vitest";
import { SmsRouter, isValidNumber, standardise } from "./sms-routing";

// Mirrors the cases in CarrierServiceTests.java in sms-routing-service.

describe("standardise", () => {
  it("strips spaces, dashes and brackets but keeps the leading +", () => {
    expect(standardise("+61 (412) 345-678")).toBe("+61412345678");
  });
});

describe("isValidNumber", () => {
  it.each(["+61412345678", "+61 412 345 678", "+61-412-345-678"])(
    "accepts %s",
    (raw) => expect(isValidNumber(raw)).toBe(true),
  );

  it.each([
    ["missing the + prefix", "61412345678"],
    ["too short", "+6141234"],
    ["too long", "+6141234567891234"],
    ["containing letters", "+61 41abc"],
    ["empty", ""],
  ])("rejects a number %s", (_, raw) => expect(isValidNumber(raw)).toBe(false));
});

describe("SmsRouter", () => {
  const router = () => new SmsRouter(new Set(["+61400000000"]));

  it("alternates AU traffic between Telstra and Optus", () => {
    const r = router();
    expect(r.carrierFor("+61412345678")).toBe("TELSTRA");
    expect(r.carrierFor("+61412345678")).toBe("OPTUS");
    expect(r.carrierFor("+61412345678")).toBe("TELSTRA");
  });

  it("routes NZ numbers to Spark and everything else to Global", () => {
    const r = router();
    expect(r.carrierFor("+64215550199")).toBe("SPARK");
    expect(r.carrierFor("+447700900123")).toBe("GLOBAL");
  });

  it("delivers to a valid number that hasn't opted out", () => {
    expect(router().send("+64 21 555 0199")).toEqual({
      kind: "delivered",
      number: "+64215550199",
      carrier: "SPARK",
    });
  });

  it("blocks an opted-out number but still assigns a carrier, like MessageService", () => {
    expect(router().send("+61 400 000 000")).toEqual({
      kind: "blocked",
      number: "+61400000000",
      carrier: "TELSTRA",
    });
  });

  it("rejects an invalid number before routing", () => {
    expect(router().send("+61 41abc")).toEqual({
      kind: "invalid",
      raw: "+61 41abc",
    });
  });
});
