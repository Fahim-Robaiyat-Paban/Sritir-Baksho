import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getStoryCategoryLabel } from "@/api/stories";
import { toBn } from "@/lib/utils/format";

// The latest stories set like a clipped page from an old Bangla newspaper
const NewsClipping = ({ stories }) => {
  const [lead, ...rest] = stories;

  return (
    <div className="drop-shadow-[0_16px_22px_rgb(60_40_10/0.32)]">
      <article className="torn relative isolate -rotate-[0.4deg] bg-[#efe6cf] px-5 pt-5 pb-9 [background-image:var(--grain)] md:px-8 md:pt-6">
        {/* Newsprint texture: fine halftone dots, a faint centre fold, and edges yellowed with age */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(150_115_60/0.16)_100%),linear-gradient(90deg,transparent_49.7%,rgb(60_45_20/0.06)_50%,rgb(255_255_255/0.3)_50.3%,transparent_50.8%),radial-gradient(rgb(60_45_20/0.07)_0.7px,transparent_1.1px)] bg-[length:100%_100%,100%_100%,4px_4px]"
        />
        <header className="border-y-[3px] border-double border-ink/70 py-2 text-center">
          <h2 className="font-display text-[34px] leading-none font-extrabold text-ink md:text-[44px]">স্মৃতির খবর</h2>
        </header>
        <div className="flex items-center justify-between gap-3 border-b border-ink/30 py-1.5 text-[13px] text-ink-2">
          <p className="font-semibold">নতুন স্মৃতিচারণ, {toBn(stories.length)}টি গল্প</p>
          <Link href="/stories" className="inline-flex min-h-11 items-center font-bold text-leaf underline underline-offset-4 md:min-h-0">
            সব গল্প পড়ুন
          </Link>
        </div>

        <div className="mt-5 grid gap-6 md:grid-cols-[1.35fr_1fr] md:gap-0 md:divide-x md:divide-ink/25">
          {/* Lead story */}
          <Link href={`/stories/${lead.slug}`} className="group md:pr-6">
            <p className="text-xs font-bold text-brick">{getStoryCategoryLabel(lead.category)}</p>
            <h3 className="mt-1 font-display text-2xl leading-snug font-extrabold text-ink group-hover:text-leaf md:text-[28px]">{lead.title}</h3>
            <div className="relative mt-3 aspect-[16/9] overflow-hidden">
              <Image src={lead.image} alt={lead.title} fill sizes="(max-width: 768px) 90vw, 420px" placeholder="blur" className="object-cover sepia-[.35] transition duration-500 group-hover:sepia-0" />
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{lead.excerpt}</p>
            <p className="mt-2 flex items-center gap-3 text-xs text-ink-3">
              {lead.date}
              <span className="flex items-center gap-1">
                <MessageCircle aria-hidden="true" className="size-3.5" />
                {toBn(lead.comments)}
              </span>
            </p>
          </Link>

          {/* Side columns */}
          <div className="grid content-start divide-y divide-ink/25 border-t border-ink/25 md:border-t-0 md:pl-6">
            {rest.map((story) => (
              <Link key={story.slug} href={`/stories/${story.slug}`} className="group grid grid-cols-[1fr_76px] gap-3 py-4 first:pt-4 md:first:pt-0">
                <div>
                  <p className="text-xs font-bold text-brick">{getStoryCategoryLabel(story.category)}</p>
                  <h3 className="mt-0.5 font-display text-lg leading-snug font-bold text-ink group-hover:text-leaf">{story.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-2">{story.excerpt}</p>
                </div>
                <div className="relative mt-1 aspect-square overflow-hidden">
                  <Image src={story.image} alt={story.title} fill sizes="76px" placeholder="blur" className="object-cover sepia-[.35] transition duration-500 group-hover:sepia-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsClipping;
