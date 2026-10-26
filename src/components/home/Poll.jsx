"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Check, Crown } from "lucide-react";
import Icon from "@/components/ui/Icon";
import PaperShade from "@/components/ui/PaperShade";
import Polaroid from "@/components/ui/Polaroid";
import Tape from "@/components/ui/Tape";
import { poll } from "@/api/poll";
import { usePollStore } from "@/lib/store/usePollStore";
import { useRehydrate } from "@/lib/store/useRehydrate";
import { EASE } from "@/lib/utils/motion";
import { toBn, toBnCount } from "@/lib/utils/format";

// Bar fill: the option's colour easing into a lighter tint, with a soft glow of the same colour
const barStyle = (color) => ({
  background: `linear-gradient(90deg, ${color}, color-mix(in oklab, ${color} 55%, white))`,
  boxShadow: `0 0 10px ${color}60`,
});

const [questionStart, questionEnd] = poll.question.split(poll.highlight);

const Poll = () => {
  useRehydrate(usePollStore);
  const hasHydrated = usePollStore((state) => state.hasHydrated);
  const storedVote = usePollStore((state) => state.votes[poll.id]);
  const vote = usePollStore((state) => state.vote);
  const myVote = hasHydrated ? storedVote : undefined;

  // Bars fill in once the poll scrolls into view, then follow any vote change
  const listRef = useRef(null);
  const inView = useInView(listRef, { once: true, margin: "-80px" });

  const counts = poll.options.map((option) => option.votes + (option.id === myVote ? 1 : 0));
  const total = counts.reduce((sum, n) => sum + n, 0);
  const percents = counts.map((n) => Math.round((n / total) * 100));
  const leaderIndex = counts.indexOf(Math.max(...counts));
  const leader = poll.options[leaderIndex];

  return (
    <section aria-labelledby="poll-title" className="site-container mt-11 px-5 sm:px-8 xl:px-0">
      <div className="paper relative isolate">
        <PaperShade ruled>
          {/* Faint green wash behind the leader panel */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_90%_at_100%_55%,rgb(30_74_56/0.11),transparent_70%)]" />
        </PaperShade>
        <p className="absolute -top-4 -left-3 z-[2] -rotate-5 bg-marker px-4 py-1 font-hand text-[19px] text-ink shadow-[0_4px_10px_-6px_rgb(0_0_0/0.4)]">
          আজকের ভোট
        </p>

        <div className="grid gap-10 px-5 pt-11 pb-8 md:px-12 md:pt-12 md:pb-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14">
          <div>
            <h2 id="poll-title" className="font-display text-[26px] leading-snug font-extrabold text-leaf md:text-[34px]">
              {questionStart}
              <span className="brush">{poll.highlight}</span>
              {questionEnd}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <p className="rounded-full bg-leaf px-3 py-0.5 font-bold text-white shadow-[0_4px_10px_-6px_rgb(0_0_0/0.4)]">
                মোট {toBnCount(total)} ভোট
              </p>
              <p aria-live="polite" className="text-ink-3">
                {myVote ? "আপনার ভোট নেওয়া হয়েছে, চাইলে বদলাতে পারেন।" : "একটা খেলায় চাপ দিয়ে ভোট দিন।"}
              </p>
            </div>

            <ul ref={listRef} className="mt-7 grid gap-3 md:grid-cols-2 md:gap-x-5">
              {poll.options.map((option, i) => {
                const chosen = option.id === myVote;
                return (
                  <li key={option.id}>
                    <button
                      type="button"
                      onClick={() => vote(poll.id, option.id)}
                      aria-pressed={chosen}
                      className={`grid w-full grid-cols-[44px_1fr] items-center gap-x-3.5 rounded-xl border px-3 py-2.5 text-left transition-colors ${chosen ? "border-leaf bg-[linear-gradient(135deg,var(--color-leaf),var(--color-leaf-2))] text-white shadow-[0_14px_26px_-14px_rgb(22_58_44/0.8)]" : "border-[#e2d3b2]/80 bg-white/40 text-ink hover:border-[#d2bf95] hover:bg-white/75"}`}
                    >
                      <span className={`grid size-11 place-items-center rounded-full transition-colors ${chosen ? "bg-white/15 text-marker" : "bg-[#eadcba] text-leaf"}`}>
                        {chosen ? <Check aria-hidden="true" className="size-5" /> : <Icon name={option.icon} />}
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-2">
                          <span className="truncate text-[15px] font-semibold">{option.label}</span>
                          {i === leaderIndex && (
                            <span className="inline-flex shrink-0 items-center gap-1 rounded-sm bg-marker px-1.5 text-[11px] font-bold text-ink">
                              <Crown aria-hidden="true" className="size-3" />
                              এগিয়ে
                            </span>
                          )}
                          <span className={`ml-auto shrink-0 font-display text-base font-bold ${chosen ? "text-white" : "text-ink-2"}`}>{toBn(percents[i])}%</span>
                        </span>
                        <span className={`mt-1.5 block h-2.5 rounded-full ${chosen ? "bg-white/20" : "bg-[#e3d6b8]"}`}>
                          <motion.span
                            className="block h-full rounded-full"
                            style={barStyle(option.color)}
                            initial={{ width: 0 }}
                            animate={{ width: inView ? `${percents[i]}%` : 0 }}
                            transition={{ duration: 0.9, ease: EASE, delay: inView ? i * 0.06 : 0 }}
                          />
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Whichever game is ahead right now */}
          <aside aria-label="এখন এগিয়ে আছে" className="grid grid-cols-[110px_1fr] items-center gap-5 border-t border-dashed border-line pt-7 lg:grid-cols-1 lg:content-center lg:border-t-0 lg:pt-0 lg:text-center">
            <div className="relative mx-auto w-full max-w-[200px] rotate-2 drop-shadow-[0_22px_26px_rgb(60_40_10/0.35)]">
              <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
              <Polaroid image={leader.image} alt={leader.label} sizes="(max-width: 1024px) 110px, 200px" />
            </div>
            <div>
              <p className="font-hand text-[17px] text-ink-blue">এখন এগিয়ে আছে…</p>
              <p className="font-display text-2xl leading-tight font-extrabold text-leaf">{leader.label}</p>
              <p className="mt-1 text-sm text-ink-3">
                <span className="font-display text-2xl font-extrabold text-brick">{toBn(percents[leaderIndex])}%</span> ভোট পেয়েছে
              </p>
              {leader.href && (
                <Link href={leader.href} className="mt-1 inline-flex min-h-11 items-center text-sm font-semibold text-leaf underline underline-offset-4 hover:text-brick">
                  খেলার নিয়ম দেখুন
                </Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Poll;
