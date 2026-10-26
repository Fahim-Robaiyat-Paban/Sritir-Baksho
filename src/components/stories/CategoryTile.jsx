import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { stampEdgeStyle } from "@/lib/utils/stampEdge";

// A postage stamp from a sheet: perforated edges, the picture, a value in the corner
const CategoryTile = ({ category }) => {
  return (
    <Link href={`/stories?cat=${category.id}`} className="group block drop-shadow-[0_8px_10px_rgb(60_40_10/0.35)] transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1">
      <div className="bg-[#fbf3df] p-1.5" style={stampEdgeStyle}>
        <div className="border border-[#c9b07a] p-1.5">
          <div className="relative aspect-[16/12] overflow-hidden">
            <Image src={category.image} alt={category.label} fill sizes="(max-width: 768px) 62vw, 230px" placeholder="blur" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute top-1.5 right-1.5 bg-[#fbf3df]/90 px-1.5 font-display text-sm leading-tight font-extrabold text-brick">৳১</span>
          </div>
          <p className="flex items-center gap-2 px-1 pt-2 font-display text-[18px] font-bold text-leaf">
            <Icon name={category.icon} className="size-5" />
            {category.label}
          </p>
          <p className="truncate px-1 pb-0.5 text-[13px] text-ink-3">{category.hint}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryTile;
