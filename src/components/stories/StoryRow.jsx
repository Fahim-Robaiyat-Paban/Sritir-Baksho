import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { toBn } from "@/lib/utils/format";

// Compact horizontal story item for side panels
const StoryRow = ({ story }) => {
  return (
    <Link href={`/stories/${story.slug}`} className="grid grid-cols-[88px_1fr] gap-3 text-[13px] text-ink-3">
      <span className="relative h-[88px] overflow-hidden rounded">
        <Image src={story.image} alt={story.title} fill sizes="88px" placeholder="blur" className="object-cover" />
      </span>
      <span>
        <span className="block text-[15px] leading-snug font-bold text-ink">{story.title}</span>
        <span className="mt-1 line-clamp-2 block leading-relaxed">{story.excerpt}</span>
      </span>
      <span className="col-span-2 flex items-center justify-between border-t border-dashed border-line pt-2">
        <span>{story.date}</span>
        <span className="flex items-center gap-1">
          <MessageCircle aria-hidden="true" className="size-3.5" />
          {toBn(story.comments)}
        </span>
      </span>
    </Link>
  );
};

export default StoryRow;
