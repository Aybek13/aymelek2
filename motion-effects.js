// Motion animations for the static GitHub Pages build.
// npm dependency is declared in package.json for local Vite development.
import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12/+esm";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduced) {
  animate(".moon", { rotate: [0, 8, -6, 0], y: [0, -12, 0] }, { duration: 8, repeat: Infinity, easing: "ease-in-out" });
  document.querySelectorAll(".showcase").forEach((section) => {
    inView(section, () => {
      animate(section.querySelector("h2"), { opacity: [0.3, 1], y: [28, 0] }, { duration: 0.8, easing: "ease-out" });
    }, { amount: 0.2 });
  });
  document.querySelectorAll(".category").forEach((card) => {
    card.addEventListener("pointerenter", () => animate(card, { y: -7, scale: 1.015 }, { duration: 0.25 }));
    card.addEventListener("pointerleave", () => animate(card, { y: 0, scale: 1 }, { duration: 0.25 }));
  });
}
