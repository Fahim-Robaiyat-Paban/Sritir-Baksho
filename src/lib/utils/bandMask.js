// Mask for full-width green bands: never fully solid, densest through the middle of the
// container and easing out to the screen edges, so the scrapbook background reads through
const bandFade = [
  "rgb(0 0 0 / 0.25) 0",
  "rgb(0 0 0 / 0.25) calc(50% - 820px)",
  "rgb(0 0 0 / 0.42) calc(50% - 640px)",
  "rgb(0 0 0 / 0.6) calc(50% - 460px)",
  "rgb(0 0 0 / 0.74) calc(50% - 280px)",
  "rgb(0 0 0 / 0.82) calc(50% - 100px)",
  "rgb(0 0 0 / 0.82) calc(50% + 100px)",
  "rgb(0 0 0 / 0.74) calc(50% + 280px)",
  "rgb(0 0 0 / 0.6) calc(50% + 460px)",
  "rgb(0 0 0 / 0.42) calc(50% + 640px)",
  "rgb(0 0 0 / 0.25) calc(50% + 820px)",
  "rgb(0 0 0 / 0.25) 100%",
].join(", ");

export const bandMask = `linear-gradient(to right, ${bandFade})`;

export const bandMaskStyle = { maskImage: bandMask, WebkitMaskImage: bandMask };
