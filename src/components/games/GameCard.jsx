import Image from "next/image";
import Link from "next/link";
import { getCategoryLabel } from "@/api/games";

// A library index card: manila stock, a red rule under the heading, a punched hole at the bottom
const GameCard = ({ game }) => {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group relative flex flex-col bg-[#f6ead0] p-2.5 pb-7 shadow-[0_12px_22px_-14px_rgb(90_60_20/0.6)] transition-transform duration-300 [background-image:repeating-linear-gradient(transparent_0_23px,rgb(43_74_139/0.12)_23px_24px),var(--grain)] hover:-translate-y-1 hover:-rotate-1"
    >
      <span className="flex items-baseline justify-between gap-2 border-b-2 border-brick/60 px-1 pb-1.5">
        <span className="truncate font-display text-lg leading-snug font-bold text-leaf group-hover:text-brick md:text-xl">{game.name}</span>
        <span className="shrink-0 text-[11px] font-semibold text-ink-3">{getCategoryLabel(game.category)}</span>
      </span>
      <span className="relative mt-2.5 block aspect-[16/10] overflow-hidden">
        <Image src={game.image} alt={game.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px" placeholder="blur" className="object-cover sepia-[.2] transition duration-500 group-hover:scale-105 group-hover:sepia-0" />
      </span>
      <span className="mt-2 block px-1 text-sm leading-[24px] text-ink-2">{game.line}</span>
      <span aria-hidden="true" className="absolute bottom-2 left-1/2 size-3 -translate-x-1/2 rounded-full bg-paper shadow-[inset_0_1px_2px_rgb(0_0_0/0.35)]" />
    </Link>
  );
};

export default GameCard;
