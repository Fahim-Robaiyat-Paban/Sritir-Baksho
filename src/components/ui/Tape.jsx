// A strip of masking tape with torn ends; position it with className
const Tape = ({ className = "" }) => {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-[3] h-6 w-20 bg-[#f3e7c4]/80 shadow-[0_1px_3px_rgb(0_0_0/0.18)] [clip-path:polygon(3%_0,97%_6%,100%_30%,96%_55%,100%_80%,95%_100%,4%_96%,0_70%,4%_45%,0_18%)] ${className}`}
    />
  );
};

export default Tape;
