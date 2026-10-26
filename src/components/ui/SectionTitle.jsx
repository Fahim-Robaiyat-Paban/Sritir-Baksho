import { Flower2 } from "lucide-react";

const SectionTitle = ({ as: Tag = "h2", id, centered = false, flowers = "both", className = "", children }) => {
  return (
    <Tag
      id={id}
      className={`flex items-center gap-3 font-display text-2xl leading-tight font-extrabold text-leaf md:text-3xl ${centered ? "justify-center text-center" : ""} ${className}`}
    >
      {flowers !== "none" && <Flower2 aria-hidden="true" className="size-5 shrink-0 text-brick" />}
      {children}
      {flowers === "both" && <Flower2 aria-hidden="true" className="size-5 shrink-0 text-brick" />}
    </Tag>
  );
};

export default SectionTitle;
