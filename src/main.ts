import "./styles.css";
import { SmsRouter, type RouteResult } from "./sms-routing";
import { setUpEasterEgg } from "./easter-egg";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function byId<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el as T;
}

/* ---------- SMS routing demo ---------- */

type TraceLine = { time: string; html: string };

const escapeHtml = (text: string) =>
  text.replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!,
  );

function traceFor(result: RouteResult): TraceLine[] {
  const lines: TraceLine[] = [
    { time: "0.000", html: `<span class="k">POST</span> /messages` },
  ];

  if (result.kind === "invalid") {
    lines.push({ time: "0.002", html: `validate "${escapeHtml(result.raw)}"` });
    lines.push({
      time: "0.003",
      html: `<span class="bad">400 Bad Request · invalid number</span>`,
    });
    return lines;
  }

  const { number, carrier } = result;
  const blocked = result.kind === "blocked";
  lines.push({ time: "0.002", html: `standardise → ${number}` });
  lines.push({
    time: "0.004",
    html: blocked
      ? `opt-out check · <span class="w">opted out</span>`
      : "opt-out check · clear",
  });
  lines.push({
    time: "0.006",
    html: `route ${number.slice(0, 3)} → <span class="k">${carrier}</span>`,
  });

  if (blocked) {
    lines.push({
      time: "0.007",
      html: `<span class="bad">status BLOCKED</span>`,
    });
  } else {
    lines.push({ time: "0.011", html: "status SENT" });
    lines.push({
      time: "1.870",
      html: `<span class="ok">status DELIVERED ✓</span>`,
    });
  }
  return lines;
}

function setUpSmsDemo() {
  const router = new SmsRouter(new Set(["+61400000000"]));
  const trace = byId<HTMLOListElement>("trace");
  const input = byId<HTMLInputElement>("num");
  let timers: number[] = [];

  const render = (raw: string, animate: boolean) => {
    timers.forEach(clearTimeout);
    timers = [];
    trace.replaceChildren();

    traceFor(router.send(raw)).forEach(({ time, html }, i) => {
      const add = () => {
        const li = document.createElement("li");
        if (animate) li.className = "in";
        li.innerHTML = `<span class="t">${time}s</span><span>${html}</span>`;
        trace.appendChild(li);
      };
      if (!animate || prefersReducedMotion) add();
      else timers.push(window.setTimeout(add, i * 160));
    });
  };

  byId<HTMLFormElement>("c-form").addEventListener("submit", (e) => {
    e.preventDefault();
    render(input.value, true);
  });

  byId("presets").addEventListener("click", (e) => {
    const button = (e.target as HTMLElement).closest<HTMLButtonElement>(
      "button",
    );
    if (!button?.dataset.n) return;
    input.value = button.dataset.n;
    render(input.value, true);
  });

  render(input.value, false);
}

/* ---------- Theme toggle ---------- */

function setUpThemeToggle() {
  const root = document.documentElement;
  byId("theme").addEventListener("click", () => {
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const current = root.dataset.theme ?? (systemDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private browsing); the toggle still works for this visit.
    }
  });
}

/* ---------- Copy email ---------- */

function setUpCopyEmail() {
  const button = byId<HTMLButtonElement>("copy");
  const address = byId("addr");

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(address.textContent ?? "");
      button.textContent = "Copied";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(address);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      button.textContent = "Selected, press copy";
    }
    window.setTimeout(() => (button.textContent = "Copy email"), 2000);
  });
}

setUpSmsDemo();
setUpThemeToggle();
setUpCopyEmail();
setUpEasterEgg();
