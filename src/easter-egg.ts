// A small nod to my private pilot licence and the move from Auckland to Melbourne.
// Click the plane on the experience timeline, or enter the Konami code, to send a plane across the page.

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const BANNER = "AKL → MEL · cleared for takeoff";

const PLANE_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>`;

let inFlight = false;

function showToast() {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = BANNER;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

export function fly() {
  if (inFlight) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showToast();
    return;
  }

  inFlight = true;
  const flight = document.createElement("div");
  flight.className = "flight";
  flight.setAttribute("aria-hidden", "true");
  flight.innerHTML = `<span class="banner">${BANNER}</span>${PLANE_SVG}`;
  document.body.appendChild(flight);

  const width = window.innerWidth;
  const height = window.innerHeight;
  const start = { x: -flight.offsetWidth - 40, y: height * 0.72 };
  const end = { x: width + 40, y: height * 0.18 };

  // A gentle climb-out: shallow at first, steeper through the middle, levelling off at the end.
  const frames = [0, 0.25, 0.5, 0.75, 1].map((t) => {
    const x = start.x + (end.x - start.x) * t;
    const climb = t * t * (3 - 2 * t);
    const y = start.y + (end.y - start.y) * climb;
    const pitch = -18 * Math.sin(Math.PI * t);
    return { transform: `translate(${x}px, ${y}px) rotate(${pitch}deg)` };
  });

  const animation = flight.animate(frames, {
    duration: 3400,
    easing: "ease-in-out",
  });
  animation.onfinish = () => {
    flight.remove();
    inFlight = false;
  };
}

export function setUpEasterEgg() {
  document.getElementById("fly")?.addEventListener("click", fly);

  let progress = 0;
  window.addEventListener("keydown", (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    progress =
      key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
    if (progress === KONAMI.length) {
      progress = 0;
      fly();
    }
  });

  console.log(
    "%cHey, fellow engineer.%c\nThe demo's routing rules live in src/sms-routing.ts: https://github.com/ColtonRandall/dev-portfolio\nThere's also a plane on this page you can fly. ↑ ↑ ↓ ↓ ← → ← → B A works too.",
    "font: 700 14px system-ui; color: #2747D6",
    "font: 13px system-ui",
  );
}
