"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { toBlob } from "html-to-image";
import { Download, IdCard as IdCardIcon, MapPin, Heart, Quote, RotateCcw, Share2, Tag } from "lucide-react";
import IdCard from "@/components/card/IdCard";
import Button from "@/components/ui/Button";
import Scrap from "@/components/ui/Scrap";
import Tape from "@/components/ui/Tape";
import { cardInks, cardObjects, cardThemes } from "@/api/cardOptions";
import { useCardStore } from "@/lib/store/useCardStore";
import { useRehydrate } from "@/lib/store/useRehydrate";
import { toBn } from "@/lib/utils/format";

const steps = [
  { id: "who", title: "আপনি কে ছিলেন?", hint: "আপনার নাম, ডাকনাম ও এলাকা লিখুন।" },
  { id: "para", title: "আপনার পাড়া", hint: "সবচেয়ে কাছের বন্ধুদের নাম দিন।" },
  { id: "likes", title: "আপনার পছন্দের জিনিসগুলো", hint: "খেলা, খাবার, দিনের প্রিয় সময়।" },
  { id: "line", title: "এক লাইনে বলুন", hint: "আপনার শৈশবকে নিয়ে একটি লাইন লিখুন।" },
];

const themeSwatches = {
  notebook: "bg-[linear-gradient(90deg,transparent_10px,#e9a3a0_10px_11px,transparent_11px),repeating-linear-gradient(#fbf8f0_0_7px,#bcd0e8_7px_8px)]",
  rickshaw: "bg-[url('/decor/frame-rickshaw.jpg')] bg-cover bg-center",
  postcard: "bg-[radial-gradient(circle_at_30%_20%,#f2e3c0,#d9c08e)]",
  slate: "bg-[radial-gradient(circle_at_30%_20%,#3d4a44,#232c28)] border-4 border-[#a8713f]",
  thonga: "bg-[repeating-linear-gradient(#ebe1c9_0_4px,#c9bb9a_4px_5px)]",
};

// One slam-book line: a dotted rule to write on, answers show up in blue handwriting
const Field = ({ id, label, icon: Glyph, value, onChange, placeholder, required = false, invalid = false }) => (
  <div>
    <label htmlFor={id} className="sr-only">{label}</label>
    <div className={`flex h-12 items-center gap-3 border-b-2 border-dotted px-1 focus-within:border-leaf ${invalid ? "border-brick" : "border-[#9fb3d1]"}`}>
      {Glyph && <Glyph aria-hidden="true" className="size-[18px] shrink-0 text-leaf" />}
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        maxLength={60}
        required={required}
        aria-invalid={invalid || undefined}
        className="w-full bg-transparent font-hand text-[18px] text-ink-blue outline-none placeholder:font-body placeholder:text-[14px] placeholder:text-ink-3/80"
      />
    </div>
  </div>
);

const Step = ({ index, step, children }) => (
  <section aria-labelledby={`step-${step.id}`} className="mt-6 grid grid-cols-[34px_minmax(0,1fr)] gap-x-3 gap-y-2">
    <span aria-hidden="true" className="grid size-8 -rotate-6 place-items-center rounded-full border-2 border-brick font-hand text-lg leading-none text-brick">{toBn(index + 1)}</span>
    <div>
      <h2 id={`step-${step.id}`} className="font-display text-xl leading-snug font-bold text-leaf">{step.title}</h2>
      <p className="text-[13px] text-ink-3">{step.hint}</p>
    </div>
    <div className="col-start-2 grid gap-2">{children}</div>
  </section>
);

// Spiral rings down the left edge of the slam book
const rings = Array.from({ length: 18 }, (_, i) => `ring-${i}`);

const CardMaker = () => {
  useRehydrate(useCardStore);
  const card = useCardStore((state) => state.card);
  const setField = useCardStore((state) => state.setField);
  const reset = useCardStore((state) => state.reset);
  const cardRef = useRef(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [showErrors, setShowErrors] = useState(false);

  const missingName = !card.name.trim();

  const renderImage = async () => {
    // Fonts must be ready, otherwise the PNG falls back to system Bangla glyphs
    await document.fonts.ready;
    return toBlob(cardRef.current, { pixelRatio: 2, cacheBust: true, backgroundColor: "#f1e6cc" });
  };

  const guard = () => {
    if (!missingName) return true;
    setShowErrors(true);
    setStatus({ type: "error", message: "কার্ড বানাতে অন্তত আপনার নামটা লিখুন।" });
    document.getElementById("card-name")?.focus();
    return false;
  };

  const handleDownload = async () => {
    if (!guard()) return;
    setStatus({ type: "busy", message: "ছবি তৈরি হচ্ছে…" });
    try {
      const blob = await renderImage();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "shoishob-porichoypotro.png";
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setStatus({ type: "done", message: "কার্ডটা ডাউনলোড হয়েছে। এবার শেয়ার করে বন্ধুদের ট্যাগ করুন!" });
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "ছবিটা তৈরি করা গেল না। আরেকবার চেষ্টা করুন।" });
    }
  };

  const handleShare = async () => {
    if (!guard()) return;
    setStatus({ type: "busy", message: "শেয়ারের জন্য তৈরি হচ্ছে…" });
    try {
      const blob = await renderImage();
      const file = new File([blob], "shoishob-porichoypotro.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "আমার শৈশব পরিচয়পত্র", text: "তুমি কেমন ছিলে? বানাও তোমারটাও!" });
        setStatus({ type: "idle", message: "" });
        return;
      }
      await navigator.clipboard.writeText(`${window.location.origin}/card`);
      setStatus({ type: "done", message: "এই ব্রাউজারে সরাসরি শেয়ার হয় না, তাই লিংকটা কপি করা হয়েছে। ছবির জন্য ডাউনলোড করুন।" });
    } catch (error) {
      if (error?.name === "AbortError") {
        setStatus({ type: "idle", message: "" });
        return;
      }
      console.error(error);
      setStatus({ type: "error", message: "শেয়ার করা গেল না। ডাউনলোড করে শেয়ার করুন।" });
    }
  };

  const handleReset = () => {
    reset();
    setShowErrors(false);
    setStatus({ type: "idle", message: "" });
  };

  return (
    <div className="site-container mt-2 px-3 sm:px-8 xl:px-0">
      {/* One study desk under a lamp; everything on the page is lying on it */}
      <div className="relative rounded-t-2xl bg-[#5f3a1d] shadow-[inset_0_0_80px_rgb(0_0_0/0.45)] [background-image:radial-gradient(ellipse_45%_40%_at_52%_30%,rgb(255_214_150/0.32),transparent_70%),repeating-linear-gradient(91deg,rgb(0_0_0/0.07)_0_2px,transparent_2px_11px),repeating-linear-gradient(89deg,rgb(255_255_255/0.035)_0_1px,transparent_1px_19px),linear-gradient(180deg,#7a4e29,#55331a)]">
      <div className="grid items-start gap-8 px-4 pt-8 pb-12 sm:px-7 lg:grid-cols-2 lg:gap-9 lg:px-9 lg:pt-10 xl:grid-cols-[minmax(0,410px)_minmax(0,1fr)_minmax(0,270px)]">
      {/* Form: a 90s slam book lying open on the desk */}
      <form
        onSubmit={(event) => event.preventDefault()}
        className="relative order-2 -rotate-1 rounded-r-md bg-[#fdf7ea] py-8 pr-5 pl-14 shadow-[3px_3px_0_#efe4cc,6px_6px_0_#e4d6b6,8px_14px_26px_-6px_rgb(0_0_0/0.55)] [background-image:linear-gradient(90deg,transparent_44px,rgb(196_35_44/0.35)_44px_46px,transparent_46px),repeating-linear-gradient(transparent_0_35px,rgb(43_74_139/0.07)_35px_36px),var(--grain)] md:pr-8 md:pl-16 lg:order-none"
      >
        {/* Spiral binding down the left edge */}
        <div aria-hidden="true" className="absolute inset-y-4 -left-3 flex flex-col justify-between">
          {rings.map((ring) => (
            <span key={ring} className="relative h-3 w-9">
              <span className="absolute top-1/2 right-0.5 size-2.5 -translate-y-1/2 rounded-full bg-[#5f3a1d] shadow-[inset_0_1px_2px_rgb(0_0_0/0.5)]" />
              <span className="absolute inset-y-0 left-0 w-7 rounded-full border-[3px] border-[#a3a8ad] border-r-transparent shadow-[0_1px_1px_rgb(0_0_0/0.4)]" />
            </span>
          ))}
        </div>
        <p className="absolute -top-3 right-6 rotate-6 bg-marker px-2.5 py-0.5 font-hand text-sm text-ink shadow-[0_3px_6px_-3px_rgb(0_0_0/0.4)]">স্ল্যাম বুক</p>

        <h1 className="font-display text-2xl leading-snug font-extrabold text-leaf md:text-3xl">
          তৈরি করুন আপনার
          <br />
          <span className="brush mt-0.5 text-[28px] md:text-4xl">শৈশব পরিচয়পত্র</span>
        </h1>
        <p className="mt-1.5 text-[15px] text-ink-2">কয়েকটি সহজ ধাপে আপনার শৈশবকে ফিরে পান।</p>

        <Step index={0} step={steps[0]}>
          <Field id="card-name" label="আপনার নাম" icon={IdCardIcon} value={card.name} onChange={(v) => setField("name", v)} placeholder="আপনার নাম" required invalid={showErrors && missingName} />
          <Field id="card-nick" label="ডাকনাম" icon={Tag} value={card.nick} onChange={(v) => setField("nick", v)} placeholder="ডাকনাম (যদি থাকে)" />
          <Field id="card-area" label="এলাকা" icon={MapPin} value={card.area} onChange={(v) => setField("area", v)} placeholder="আপনার এলাকা, যেমন: মিরপুর, ঢাকা" />
          <p id="object-label" className="mt-1 text-[13px] font-semibold text-ink-2">আপনার ছোটবেলার জিনিসটি বেছে নিন</p>
          <div role="radiogroup" aria-labelledby="object-label" className="flex gap-2.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none]">
            {cardObjects.map((object) => {
              const selected = card.object === object.id;
              return (
                <button
                  key={object.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  aria-label={object.label}
                  onClick={() => setField("object", object.id)}
                  className={`relative my-1 h-[54px] w-[62px] shrink-0 overflow-hidden rounded-lg border-[3px] border-white shadow-[0_4px_8px_-3px_rgb(60_40_10/0.5)] transition-transform ${selected ? "-rotate-3 ring-2 ring-brick" : "hover:-rotate-2"}`}
                >
                  <Image src={object.image} alt="" fill sizes="62px" className="object-cover" />
                </button>
              );
            })}
          </div>
        </Step>

        <Step index={1} step={steps[1]}>
          <Field id="card-friends" label="বন্ধুদের নাম" icon={Heart} value={card.friends} onChange={(v) => setField("friends", v)} placeholder="যেমন: রাকিব, সিয়াম" />
        </Step>

        <Step index={2} step={steps[2]}>
          <div className="grid gap-2">
            <Field id="card-game" label="প্রিয় খেলা" value={card.game} onChange={(v) => setField("game", v)} placeholder="খেলা: লাটিম" />
            <Field id="card-food" label="প্রিয় খাবার" value={card.food} onChange={(v) => setField("food", v)} placeholder="খাবার: ঝালমুড়ি" />
            <Field id="card-time" label="প্রিয় সময়" value={card.time} onChange={(v) => setField("time", v)} placeholder="সময়: বিকেল" />
          </div>
        </Step>

        <Step index={3} step={steps[3]}>
          <Field id="card-line" label="এক লাইনে আপনার শৈশব" icon={Quote} value={card.line} onChange={(v) => setField("line", v)} placeholder="যেমন: আমি ছিলাম পাড়ার সবার চেয়ে দুষ্টু!" />
        </Step>

        <button type="button" onClick={handleReset} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-3 hover:text-brick">
          <RotateCcw aria-hidden="true" className="size-4" />
          নতুন করে শুরু করুন
        </button>
      </form>

      {/* Live preview: the card lying straight on the desk, its label on a taped paper strip */}
      <section aria-label="কার্ডের প্রিভিউ" className="relative order-1 text-center lg:order-none">
        <div className="relative mx-auto w-fit rotate-1 bg-[#fbf3df] px-5 py-1.5 shadow-[0_6px_12px_-6px_rgb(0_0_0/0.6)]">
          <Tape className="-top-3 -left-5 h-5 w-12 -rotate-12" />
          <h2 className="font-hand text-[19px] text-ink-blue md:text-[22px]">আপনার শৈশব পরিচয়পত্র</h2>
        </div>
        <div className="relative mx-auto mt-6 max-w-[430px] -rotate-1 text-left drop-shadow-[0_26px_30px_rgb(0_0_0/0.55)]">
          <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
          <div ref={cardRef} className="p-1">
            <IdCard card={{ ...card, name: card.name || "আপনার নাম" }} />
          </div>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute top-[58%] -right-6 hidden h-3 w-56 rotate-[62deg] xl:block">
          <span className="absolute inset-y-0 right-0 w-5 rounded-r-full bg-[#e88f9a]" />
          <span className="absolute inset-y-0 right-5 w-2 bg-[#c9c9c9]" />
          <span className="absolute inset-y-0 right-7 left-6 bg-[linear-gradient(#f6c949,#e4a72b_55%,#c98a1c)]" />
          <span className="absolute inset-y-0 left-0 w-6 bg-[#e8c79a] [clip-path:polygon(0_50%,100%_0,100%_100%)]" />
          <span className="absolute top-1/2 left-0 h-1 w-2 -translate-y-1/2 bg-[#333] [clip-path:polygon(0_50%,100%_0,100%_100%)]" />
        </div>
        <div className="sticky bottom-3 z-[5] mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" onClick={handleDownload} disabled={status.type === "busy"}>
            <Download aria-hidden="true" className="size-5" />
            ডাউনলোড করুন
          </Button>
          <Button size="lg" variant="cream" onClick={handleShare} disabled={status.type === "busy"}>
            <Share2 aria-hidden="true" className="size-5" />
            শেয়ার করুন
          </Button>
        </div>
        <p role="status" className={`mt-3 min-h-6 text-sm font-semibold drop-shadow ${status.type === "error" ? "text-[#ffb4a8]" : "text-[#f3c968]"}`}>
          {status.message}
        </p>
      </section>

      {/* Theme + ink: an old enamel pencil box with a printed gold border */}
      <aside className="relative order-3 rotate-[1.5deg] rounded-xl bg-[#2f6f73] px-5 pt-7 pb-6 text-[#f3ead3] shadow-[inset_0_0_0_6px_#2f6f73,inset_0_0_0_7px_rgb(243_201_104/0.55),0_20px_28px_-10px_rgb(0_0_0/0.6)] [background-image:linear-gradient(135deg,rgb(255_255_255/0.13),transparent_40%,rgb(0_0_0/0.2)),var(--grain)] lg:col-span-2 xl:col-span-1">
        {/* Hinges */}
        <span aria-hidden="true" className="absolute -top-1.5 left-8 h-3 w-10 rounded-sm bg-[linear-gradient(#e2bf6e,#9a7330)]" />
        <span aria-hidden="true" className="absolute -top-1.5 right-8 h-3 w-10 rounded-sm bg-[linear-gradient(#e2bf6e,#9a7330)]" />

        <h2 className="font-display text-xl font-bold text-white">থিম নির্বাচন করুন</h2>
        <p className="text-[13px] text-[#cfe0d9]">আপনার পছন্দের ডিজাইনটি বেছে নিন।</p>
        <div role="radiogroup" aria-label="থিম" className="mt-3.5 grid grid-cols-3 gap-2.5">
          {cardThemes.map((theme) => {
            const selected = card.theme === theme.id;
            return (
              <button key={theme.id} type="button" role="radio" aria-checked={selected} onClick={() => setField("theme", theme.id)} className="text-center text-xs font-semibold text-[#f3ead3]">
                <span className={`mb-1.5 block aspect-[3/4] rounded-md border-2 shadow-[0_6px_12px_-6px_rgb(0_0_0/0.6)] transition-transform ${themeSwatches[theme.id]} ${selected ? "-translate-y-1 border-marker ring-2 ring-marker/40" : "border-white/30 hover:-translate-y-0.5"}`} />
                {theme.label}
              </button>
            );
          })}
        </div>

        <hr className="my-6 border-dashed border-white/25" />

        <h2 className="font-display text-xl font-bold text-white">লেখার রং</h2>
        <p className="text-[13px] text-[#cfe0d9]">কার্ডের তথ্যগুলো কোন কালিতে লেখা হবে।</p>
        <div role="radiogroup" aria-label="লেখার রং" className="mt-3 flex gap-3">
          {cardInks.map((ink) => {
            const selected = card.ink === ink.id;
            return (
              // Ink bottle: black cap on a glass body filled with the colour
              <button
                key={ink.id}
                type="button"
                role="radio"
                aria-checked={selected}
                aria-label={ink.label}
                onClick={() => setField("ink", ink.id)}
                className={`relative h-14 w-11 transition-transform ${selected ? "-translate-y-1.5" : "hover:-translate-y-0.5"}`}
              >
                <span aria-hidden="true" className="absolute top-0 left-1/2 h-3.5 w-5 -translate-x-1/2 rounded-t-[3px] bg-[#1f1f1f]" />
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0.5 bottom-0 h-10 rounded-md rounded-t-xl border-2 shadow-[inset_4px_0_0_rgb(255_255_255/0.25),0_4px_8px_-3px_rgb(0_0_0/0.5)] ${selected ? "border-marker" : "border-white/50"}`}
                  style={{ background: ink.value }}
                />
              </button>
            );
          })}
        </div>

        <div className="relative mx-1.5 mt-8 hidden xl:block">
          <Tape className="-top-3 left-6 -rotate-6" />
          <Scrap className="-rotate-3 text-lg">একটা ছোট কার্ড, অনেক বড় স্মৃতি… ♡</Scrap>
        </div>
      </aside>
      </div>
      </div>
      {/* Front edge of the desk */}
      <div aria-hidden="true" className="h-4 rounded-b-lg bg-[linear-gradient(#4a2c14,#2f1c0c)] shadow-[0_14px_24px_-10px_rgb(40_20_5/0.7)]" />
    </div>
  );
};

export default CardMaker;
