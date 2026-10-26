import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getStoryCategoryLabel } from "@/api/stories";
import { toBn } from "@/lib/utils/format";

// An airmail envelope: red and blue striped border, a round postmark stamped over the photo
const StoryCard = ({ story }) => {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group flex flex-col p-[6px] shadow-[0_12px_22px_-14px_rgb(60_40_10/0.6)] transition-transform duration-300 [background-image:repeating-linear-gradient(-45deg,#c4232c_0_9px,#fbf6ea_9px_16px,#2b4a8b_16px_25px,#fbf6ea_25px_32px)] hover:-translate-y-1 hover:rotate-1"
    >
      <span className="flex h-full flex-col bg-[#fbf6ea] p-2.5 pb-3 [background-image:var(--grain)]">
        <span className="relative block aspect-[16/10] overflow-hidden">
          <Image src={story.image} alt={story.title} fill sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 280px" placeholder="blur" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute top-2 right-2 grid size-16 rotate-12 place-items-center rounded-full border-2 border-dashed border-ink/60 bg-[#fbf6ea]/75 text-center text-[10px] leading-tight font-bold text-ink/70 backdrop-blur-[1px]">
            {story.date}
          </span>
        </span>
        <span className="block px-1 pt-3 font-display text-lg leading-snug font-bold text-ink group-hover:text-leaf">{story.title}</span>
        <span className="line-clamp-2 block px-1 pt-1 text-sm leading-relaxed text-ink-2">{story.excerpt}</span>
        <span className="mt-auto flex items-center justify-between border-t border-dashed border-line px-1 pt-2.5 text-xs text-ink-3">
          <span className="font-semibold text-brick">{getStoryCategoryLabel(story.category)}</span>
          <span className="flex items-center gap-3">
            {toBn(story.readMins)} মিনিট
            <span className="flex items-center gap-1">
              <MessageCircle aria-hidden="true" className="size-3.5" />
              {toBn(story.comments)}
            </span>
          </span>
        </span>
      </span>
    </Link>
  );
};

export default StoryCard;
