import Link from "next/link";

const styles = {
  // Rounded pills
  pill: {
    nav: "-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0",
    item: "h-11 rounded-full border-[1.5px] px-5",
    active: "border-leaf bg-leaf text-white",
    idle: "border-[#cdbb95] bg-card/60 text-ink-2 hover:border-leaf hover:text-leaf",
  },
  // Manila folder tabs sitting on a shelf line
  tab: {
    nav: "-mx-5 flex gap-1 overflow-x-auto border-b-2 border-[#b89a62] px-5 [scrollbar-width:none] sm:mx-0 sm:px-0",
    item: "relative -mb-0.5 h-11 rounded-t-lg border-2 border-b-0 px-5",
    active: "z-[1] border-[#b89a62] bg-[#f6ead0] text-leaf",
    idle: "border-transparent bg-[#e6d3a6] text-ink-2 hover:bg-[#eedfba] hover:text-leaf",
  },
};

// Filters live in the URL, so each chip is just a link to the filtered view
const FilterChips = ({ items, active, hrefFor, label, variant = "pill" }) => {
  const look = styles[variant] ?? styles.pill;
  return (
    <nav aria-label={label} className={look.nav}>
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <Link
            key={item.id}
            href={hrefFor(item.id)}
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex shrink-0 items-center text-[15px] font-semibold whitespace-nowrap transition-colors ${look.item} ${isActive ? look.active : look.idle}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default FilterChips;
