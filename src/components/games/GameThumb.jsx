import Image from "next/image";
import Link from "next/link";

// Small polaroid-style tile used in the home strip and "related games"; the name sits on the card itself
const GameThumb = ({ game, className = "" }) => {
  return (
    <Link
      href={`/games/${game.slug}`}
      className={`group block rounded-md border border-[#e2d3b2] bg-card p-1.5 pb-2.5 text-center shadow-[0_12px_24px_-16px_rgb(90_60_20/0.6)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${className}`}
    >
      <span className="relative block aspect-square overflow-hidden rounded">
        <Image src={game.image} alt={game.name} fill sizes="(max-width: 768px) 25vw, 160px" placeholder="blur" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </span>
      <span className="mt-2 block truncate px-0.5 text-[13px] font-semibold text-ink group-hover:text-leaf md:text-[15px]">{game.name}</span>
    </Link>
  );
};

export default GameThumb;
