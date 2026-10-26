import Image from "next/image";
import { BookOpen, Box, IdCard, Images, Mail, MapPin, PenLine } from "lucide-react";
import ContactForm from "@/components/about/ContactForm";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Tape from "@/components/ui/Tape";
import { toBn } from "@/lib/utils/format";
import aboutSchool from "@/assets/images/about-school.jpg";

export const metadata = {
  title: "আমাদের কথা",
  description: "স্মৃতির বাক্স ৮০, ৯০ আর ২০০০-এর দশকে বড় হওয়া বাংলাদেশিদের নস্টালজিয়া কমিউনিটি। কেন বানালাম, কীভাবে কাজ করে, আর কীভাবে যোগাযোগ করবেন।",
  alternates: { canonical: "/about" },
};

// TODO: replace with live counts from the backend
const stats = [
  { id: "games", icon: BookOpen, value: "১২০+", label: "ঐতিহ্যবাহী খেলা" },
  { id: "stories", icon: PenLine, value: "৫০০০+", label: "স্মৃতির গল্প" },
  { id: "cards", icon: IdCard, value: "১০,০০০+", label: "শৈশব পরিচয়পত্র" },
];

const steps = [
  { id: "write", icon: PenLine, title: "আপনার শৈশব লিখুন", text: "নাম, এলাকা, বন্ধু, খেলা, খাবার আর সময়, কয়েকটা তথ্য দিন।" },
  { id: "card", icon: IdCard, title: "আপনার কার্ড পান", text: "মুহূর্তেই তৈরি হবে আপনার শৈশব পরিচয়পত্র, শেয়ার করার জন্য প্রস্তুত।" },
  { id: "join", icon: Images, title: "যোগ দিন কমিউনিটিতে", text: "গল্প লিখুন, অন্যদের কার্ড দেখুন, খেলাগুলো মনে করুন।" },
];

// Notches on a ticket stub's long edges
const ticketMask = "radial-gradient(circle 9px at 0 50%, #0000 98%, #000) left / 51% 100% no-repeat, radial-gradient(circle 9px at 100% 50%, #0000 98%, #000) right / 51% 100% no-repeat";

const AboutPage = () => {
  return (
    <div className="site-container px-5 sm:px-8 xl:px-0">
      <section className="grid items-center gap-10 pt-6 lg:grid-cols-[1fr_420px] lg:gap-14">
        <div>
          <h1 className="font-display text-[38px] leading-[1.2] font-extrabold text-leaf md:text-6xl">
            শৈশব শুধু একটা সময় না,
            <br />
            <span className="brush">এটা এক অনুভূতি!</span>
          </h1>
          {/* A handwritten letter from the people behind the box */}
          <div className="relative mt-7 max-w-[580px] -rotate-1 bg-[#fffaf0] px-6 py-5 shadow-[0_14px_26px_-14px_rgb(60_40_10/0.55)] [background-image:repeating-linear-gradient(transparent_0_31px,rgb(43_74_139/0.1)_31px_32px),var(--grain)]">
            <Tape className="-top-3 left-8 -rotate-6" />
            <p className="font-hand text-lg text-ink-blue">প্রিয় বন্ধু,</p>
            <p className="mt-1 font-hand text-[18px] leading-8 text-ink-blue">
              স্মৃতির বাক্স হলো ৮০, ৯০ আর ২০০০-এর দশকে বড় হওয়া বাংলাদেশের মানুষদের জন্য এক নস্টালজিয়া কমিউনিটি, যেখানে আমরা ফিরে যাই আমাদের শৈশবের গলি, খেলা, স্কুল, খাবার, বৃষ্টি আর সেই নির্ভেজাল দিনগুলোতে।
            </p>
            <p className="mt-2 text-right font-hand text-lg text-ink-blue">ইতি, স্মৃতির বাক্স</p>
          </div>
        </div>
        <figure className="relative rotate-2 bg-[#fbf8f0] p-2.5 pb-10 shadow-[0_14px_30px_-14px_rgb(60_40_10/0.5)]">
          <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-3" />
          <div className="relative aspect-[200/172] overflow-hidden">
            <Image src={aboutSchool} alt="সূর্যাস্তে খালি স্কুল মাঠ" fill priority sizes="(max-width: 1024px) 90vw, 420px" placeholder="blur" className="object-cover" />
          </div>
          <figcaption className="absolute inset-x-0 bottom-2.5 text-center font-hand text-lg text-ink-2">স্কুল ছুটির পরের মাঠ</figcaption>
        </figure>
      </section>

      <Reveal as="section" className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-[560px]">
          <SectionTitle flowers="left" className="text-2xl md:text-3xl">কেন স্মৃতির বাক্স?</SectionTitle>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
            আজকের শিশুরা মার্বেল চেনে না, ডাংগুলির নিয়ম জানে না। যারা জানে, তারা এখন শহরের অফিসে, প্রবাসে, ব্যস্ত জীবনে। কিন্তু একটা ছবি, একটা ডাকনাম শুনলেই মনে পড়ে যায় পুরো একটা বিকেল। এই প্ল্যাটফর্মে আপনি পাবেন আপনার মতো মানুষদের গল্প, খেলাধুলার কথা আর পুরনো দিনের স্বাদ, সব এক জায়গায়।
          </p>
        </div>
        {/* Old cinema ticket stubs: notched edges, a dashed tear line */}
        <dl className="grid gap-4 sm:grid-cols-3">
          {stats.map(({ id, icon: Glyph, value, label }, i) => (
            <div key={id} className={`drop-shadow-[0_10px_12px_rgb(60_40_10/0.35)] ${i === 1 ? "rotate-2" : "-rotate-2"}`}>
              <div className="flex flex-col items-center bg-[#f3dc9a] px-6 py-4 text-center [background-image:var(--grain)]" style={{ mask: ticketMask, WebkitMask: ticketMask }}>
                <Glyph aria-hidden="true" className="size-6 text-leaf" />
                <dd className="mt-1 font-display text-3xl font-extrabold text-brick">{value}</dd>
                <dt className="order-last mt-2 w-full border-t-2 border-dashed border-ink/30 pt-2 text-[13px] font-semibold text-ink-2">{label}</dt>
              </div>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal as="section" className="mt-16">
        <SectionTitle flowers="left" className="text-2xl md:text-3xl">কীভাবে কাজ করে?</SectionTitle>
        {/* Tear-off wall calendar pages: binding strip, red date band, a big numeral */}
        <ol className="mt-7 grid gap-7 md:grid-cols-3">
          {steps.map(({ id, icon: Glyph, title, text }, i) => (
            <li key={id} className={`bg-white shadow-[0_14px_26px_-14px_rgb(60_40_10/0.55)] ${i === 1 ? "md:translate-y-4" : ""}`}>
              <div aria-hidden="true" className="flex h-4 items-center justify-center gap-6 bg-[#3a3a3a]">
                <span className="size-2 rounded-full bg-paper" />
                <span className="size-2 rounded-full bg-paper" />
              </div>
              <div className="flex items-center justify-between bg-brick px-5 py-1.5 text-white">
                <span className="font-display text-sm font-bold">ধাপ</span>
                <Glyph aria-hidden="true" className="size-5" />
              </div>
              <div className="px-6 pt-3 pb-7 text-center [background-image:var(--grain)]">
                <p aria-hidden="true" className="font-display text-7xl leading-none font-extrabold text-ink">{toBn(i + 1)}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-leaf">{title}</h3>
                <p className="mt-1.5 text-[15px] text-ink-2">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* An aerogramme: pale blue paper, a stamp box in the corner, the address written in */}
      <section id="contact" aria-labelledby="contact-title" className="relative mt-20 grid scroll-mt-6 gap-8 bg-[#dbe7f1] p-6 shadow-[0_20px_34px_-20px_rgb(30_50_80/0.6)] [background-image:linear-gradient(135deg,rgb(255_255_255/0.4),transparent_50%),var(--grain)] md:p-9 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-display text-xs font-bold tracking-wide text-ink-blue/70">এরোগ্রাম</p>
          <h2 id="contact-title" className="mt-1 flex items-center gap-3 font-display text-3xl font-extrabold text-ink-blue">
            <Box aria-hidden="true" className="size-8" />
            যোগাযোগ করুন
          </h2>
          <p className="mt-3 text-ink-2">কোনো প্রশ্ন, পরামর্শ বা গল্প শেয়ার করতে চান? আমাদের লিখুন। আমরা আপনার কথা শুনতে চাই।</p>
          <div className="mt-6 border-l-4 border-ink-blue/30 pl-4">
            <p className="text-xs font-semibold text-ink-3">প্রাপক</p>
            <ul className="mt-1 grid gap-2 font-hand text-[18px] text-ink-blue">
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="size-5" />
                <a href="mailto:hello@smritirbaksho.com" className="underline-offset-4 hover:underline">hello@smritirbaksho.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin aria-hidden="true" className="size-5" />
                ঢাকা, বাংলাদেশ
              </li>
            </ul>
          </div>
        </div>
        <ContactForm />
        <p aria-hidden="true" className="absolute top-5 right-5 hidden h-20 w-16 place-items-center border-2 border-dashed border-ink-blue/40 text-center text-[10px] font-semibold text-ink-blue/50 md:grid">
          ডাকটিকিট<br />এখানে
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
