// Background layers for a `paper` panel: the same cream, shaded a touch lighter at the top left
// and a touch deeper at the bottom right. Put it first inside a `paper relative isolate` element.
const PaperShade = ({ ruled = false, children }) => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
      {ruled && (
        // Faint exercise-book rules, fading out toward the bottom right
        <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent_0_33px,rgb(43_74_139/0.08)_33px_34px)] [mask:radial-gradient(ellipse_80%_90%_at_0%_0%,#000_20%,transparent_75%)]" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(255_251_240/0.55)_0%,transparent_45%,rgb(205_182_135/0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_10%_0%,rgb(255_250_235/0.85),transparent_70%)]" />
      {children}
    </div>
  );
};

export default PaperShade;
