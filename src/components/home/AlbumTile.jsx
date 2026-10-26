import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

// Full-bleed photo with its caption laid over a dark fade; `featured` is the big tile in the album collage
const AlbumTile = ({ category, featured = false, className = "" }) => {
  return (
    <Link
      href={`/stories?cat=${category.id}`}
      className={`group relative block aspect-[4/5] overflow-hidden rounded-lg shadow-[0_18px_34px_-20px_rgb(60_40_10/0.75)] md:aspect-auto ${className}`}
    >
      <Image
        src={category.image}
        alt={category.label}
        fill
        sizes={featured ? "(max-width: 768px) 70vw, 600px" : "(max-width: 768px) 70vw, 300px"}
        placeholder="blur"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgb(20_14_6/0.82),rgb(20_14_6/0.25)_45%,transparent_70%)]" />
      <span className={`absolute inset-x-0 bottom-0 ${featured ? "p-6 md:p-8" : "p-4 md:p-5"}`}>
        <span className="flex items-center gap-2.5">
          <span className={`grid shrink-0 place-items-center rounded-full bg-marker text-ink ${featured ? "size-10" : "size-8"}`}>
            <Icon name={category.icon} className={featured ? "size-5" : "size-4"} />
          </span>
          <span className={`font-display leading-tight font-extrabold text-white ${featured ? "text-3xl md:text-4xl" : "text-xl"}`}>{category.label}</span>
        </span>
        <span className={`mt-1.5 block text-[#eadfc4] ${featured ? "text-base" : "text-sm"}`}>{category.hint}</span>
      </span>
    </Link>
  );
};

export default AlbumTile;
