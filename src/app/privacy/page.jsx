import Link from "next/link";
import { Check } from "lucide-react";
import { toBn } from "@/lib/utils/format";

export const metadata = {
  title: "গোপনীয়তা ও শর্তাবলী",
  description: "স্মৃতির বাক্স কী তথ্য রাখে, আপনার ছবি কোথায় যায়, কী প্রকাশ্য আর কীভাবে মুছে ফেলবেন।",
  alternates: { canonical: "/privacy" },
};

const sections = [
  { id: "collect", title: "কী তথ্য রাখি", body: ["কার্ড বা গল্প বানানোর সময় আপনি যা লেখেন (নাম, ডাকনাম, এলাকা, প্রিয় খেলা), শুধু সেটুকুই আমরা রাখি। যোগাযোগ ফর্মে ইমেইল দিলে সেটা শুধু আপনাকে উত্তর দিতে ব্যবহার হয়।"] },
  { id: "card", title: "আপনার কার্ড", body: ["কার্ডের ছবি আপনার ডিভাইসেই তৈরি হয়। আপনি যা টাইপ করেন, তা আপনার ব্রাউজারেই সেভ থাকে যাতে পাতা রিফ্রেশ করলেও হারিয়ে না যায়। গ্যালারিতে প্রকাশ না করলে কিছুই আমাদের সার্ভারে যায় না।"] },
  { id: "public", title: "কী প্রকাশ্য, কী না", body: ["গ্যালারিতে প্রকাশ করলে আপনার কার্ডে যা লেখা আছে সবাই দেখতে পাবে। প্রকাশের আগে আমরা প্রিভিউ দেখাই, আর যেকোনো সময় প্রকাশ বন্ধ করতে পারেন।"] },
  { id: "delete", title: "মুছে ফেলা", body: ["যেকোনো কার্ড বা গল্প মুছে ফেলতে hello@smritirbaksho.com-এ লিখুন। ৭ দিনের মধ্যে সব তথ্য স্থায়ীভাবে মুছে ফেলা হবে।"] },
];

const rules = [
  "শুধু নিজের স্মৃতি আর নিজের তোলা বা অনুমতি পাওয়া ছবি দিন।",
  "অন্য কারো ছবি বা পুরো নাম তাদের অনুমতি ছাড়া প্রকাশ করবেন না।",
  "কাউকে অপমান বা হেয় করে এমন কিছু লিখবেন না।",
];

const summary = ["কার্ড বানাতে কোনো অ্যাকাউন্ট লাগে না।", "আপনি না চাইলে আপনার কার্ড কেউ দেখবে না।", "আমরা আপনার তথ্য কারো কাছে বিক্রি করি না।"];

const PrivacyPage = () => {
  return (
    <div className="site-container grid gap-10 px-5 pt-6 sm:px-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16 xl:px-0">
      <nav aria-label="এই পাতায়" className="hidden self-start border-l-2 border-ink/30 pl-4 lg:sticky lg:top-6 lg:block">
        <p className="mb-3 font-display text-sm font-bold text-ink">সূচিপত্র</p>
        {[...sections, { id: "terms", title: "ব্যবহারের নিয়ম" }].map((section, i) => (
          <a key={section.id} href={`#${section.id}`} className="flex min-h-10 items-center gap-2 text-[15px] text-ink-2 hover:text-leaf">
            <span className="w-5 text-ink-3">{toBn(i + 1)}.</span>
            {section.title}
          </a>
        ))}
      </nav>

      {/* An official notice: thin onion-skin paper, a memo number, a rubber stamp and a signature */}
      <article className="relative max-w-[780px] bg-[#fbf8f1] px-6 py-9 shadow-[0_2px_0_#ece6d6,0_4px_0_#e2dbc8,0_20px_34px_-20px_rgb(60_40_10/0.55)] [background-image:var(--grain)] md:px-12 md:py-12">
        <header className="border-b-[3px] border-double border-ink/60 pb-5 text-center">
          <p className="font-display text-sm font-bold text-ink-3">স্মৃতির বাক্স কার্যালয়, ঢাকা</p>
          <p className="mt-1 font-display text-2xl font-extrabold tracking-wide text-ink">বিজ্ঞপ্তি</p>
          <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-ink-2">
            <p>স্মারক নং: স্মৃবা/২০২৫/০১</p>
            <p>তারিখ: ১ জানুয়ারি ২০২৫</p>
          </div>
        </header>

        <h1 className="mt-7 font-display text-[34px] leading-tight font-extrabold text-leaf md:text-[44px]">
          বিষয়: <span className="underline decoration-brick decoration-2 underline-offset-8">গোপনীয়তা ও শর্তাবলী</span>
        </h1>

        <section aria-labelledby="summary" className="mt-8 border-2 border-ink/70 px-5 py-5">
          <h2 id="summary" className="-mt-8 mb-2 w-fit bg-[#fbf8f1] px-2 font-display text-lg font-bold text-ink">সংক্ষেপে</h2>
          <ul className="grid gap-2.5">
            {summary.map((item) => (
              <li key={item} className="flex gap-3">
                <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-leaf" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {sections.map((section, i) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2 id={section.id} className="mt-10 scroll-mt-6 font-display text-2xl font-bold text-ink md:text-[26px]">
              <span className="mr-2 text-brick">{toBn(i + 1)}.</span>
              {section.title}
            </h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-[17px] leading-[1.85] text-[#2b2f2a]">{paragraph}</p>
            ))}
          </section>
        ))}

        <section aria-labelledby="terms">
          <h2 id="terms" className="mt-10 scroll-mt-6 font-display text-2xl font-bold text-ink md:text-[26px]">
            <span className="mr-2 text-brick">{toBn(sections.length + 1)}.</span>
            ব্যবহারের নিয়ম
          </h2>
          <p className="mt-3 text-[17px] leading-[1.85] text-[#2b2f2a]">স্মৃতির বাক্স সবার জন্য একটা আনন্দের জায়গা। তাই কয়েকটা সহজ নিয়ম:</p>
          <ul className="mt-2 list-disc pl-6 text-[17px] leading-[1.85] text-[#2b2f2a]">
            {rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <p className="mt-3 text-[17px] leading-[1.85] text-[#2b2f2a]">
            নিয়ম ভাঙলে আমরা সেই কন্টেন্ট সরিয়ে দিতে পারি। কোনো প্রশ্ন থাকলে{" "}
            <Link href="/about#contact" className="font-semibold text-leaf underline underline-offset-4">যোগাযোগ করুন</Link>।
          </p>
        </section>

        <div className="mt-12 flex items-end justify-between gap-6">
          <p className="grid size-28 -rotate-12 place-items-center rounded-full border-[3px] border-ink-blue/60 text-center font-display text-sm leading-tight font-bold text-ink-blue/70">
            স্মৃতির বাক্স<br />অনুমোদিত
          </p>
          <p className="text-center text-sm text-ink-3">
            <span className="block font-hand text-2xl text-ink-blue">স্মৃতি</span>
            পরিচালক, স্মৃতির বাক্স
          </p>
        </div>
      </article>
    </div>
  );
};

export default PrivacyPage;
