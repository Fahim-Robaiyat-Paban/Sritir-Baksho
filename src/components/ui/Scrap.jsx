// A torn note in blue handwriting, taped to the page
const Scrap = ({ className = "", children }) => {
  return (
    <p
      className={`paper z-[2] px-4 py-3.5 font-hand text-[17px] leading-snug text-ink-blue shadow-[0_8px_18px_-10px_rgb(60_40_10/0.45)] ${className}`}
    >
      {children}
    </p>
  );
};

export default Scrap;
