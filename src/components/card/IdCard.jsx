import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Polaroid from "@/components/ui/Polaroid";
import { cardFields, getCardInk, getCardObject } from "@/api/cardOptions";
import logo from "@/assets/images/logo.svg";
import stamp from "@/assets/images/stamp.jpg";

const themeClasses = {
  rickshaw: "frame-rickshaw px-1.5 pt-1",
  notebook: "frame-notebook py-8 pr-7",
  postcard: "frame-postcard px-7 py-8",
  slate: "frame-slate px-5 py-6",
  thonga: "frame-thonga px-6 pt-12 pb-6",
};

// Text colours: light themes use the site's ink, the slate uses chalk
const lightTone = {
  title: "text-leaf",
  label: "text-ink-2",
  icon: "text-leaf",
  note: "text-ink-blue",
  line: "text-ink-2",
  rule: "border-[#6e5a32]/20",
  empty: "text-ink-3/60",
};
const chalkTone = {
  title: "text-[#fff8d6] [text-shadow:0_0_6px_rgb(255_255_255/0.25)]",
  label: "text-[#f6e7a6]",
  icon: "text-[#f6e7a6]",
  note: "text-[#bfe3f5]",
  line: "text-[#f6c9a8]",
  rule: "border-dashed border-white/25",
  empty: "text-white/40",
};

const NotebookHoles = () => (
  <div
    aria-hidden="true"
    className="absolute top-5 bottom-5 left-3.5 w-3.5 bg-[radial-gradient(circle,var(--color-paper-2)_5px,transparent_6px)] bg-[length:14px_34px]"
  />
);

const ChalkDoodles = () => (
  <div aria-hidden="true" className="font-hand text-[13px] text-white/35">
    <span className="absolute top-2 left-3 -rotate-6">অ আ ক খ</span>
    <span className="absolute top-2 right-3 rotate-6">২ + ২ = ৪</span>
    <span className="absolute right-4 bottom-4 flex gap-1.5">
      <i className="h-2 w-7 rounded-sm bg-[#f4f1e6]" />
      <i className="h-2 w-5 rounded-sm bg-[#f2b8c6]" />
      <i className="h-2 w-4 rounded-sm bg-[#a9d8f0]" />
    </span>
  </div>
);

const Masthead = () => (
  <div aria-hidden="true" className="relative mb-1 flex justify-between border-b-2 border-ink pb-0.5 text-[11px] text-ink-3">
    <span>দৈনিক শৈশব</span>
    <span>বিশেষ সংখ্যা</span>
    <span>দাম: ২ টাকা</span>
  </div>
);

const IdCard = ({ card, fields = cardFields, compact = false, className = "" }) => {
  const object = getCardObject(card.object);
  const slate = card.theme === "slate";
  const tone = slate ? chalkTone : lightTone;
  const ink = slate ? "#fdfaf0" : getCardInk(card.ink).value;

  return (
    <article className={`relative ${slate ? "" : "text-ink"} ${themeClasses[card.theme] ?? themeClasses.rickshaw} ${compact ? "text-[13px]" : "text-[15px]"} ${className}`}>
      {card.theme === "notebook" && <NotebookHoles />}
      {card.theme === "postcard" && (
        <Image src={stamp} alt="" width={62} height={60} className="absolute top-4 right-4 rotate-6 shadow-sm" />
      )}
      {slate && !compact && <ChalkDoodles />}
      {card.theme === "thonga" && !compact && <Masthead />}

      <h3 className={`text-center font-display leading-tight font-extrabold ${tone.title} ${compact ? "text-xl" : "text-[30px]"}`}>
        শৈশব পরিচয়পত্র
      </h3>
      {!compact && <p className={`text-center font-display text-[15px] font-bold ${slate ? tone.line : tone.title}`}>আমার ছোটবেলার আমি</p>}

      <div className={`grid grid-cols-[1.15fr_1fr] items-center gap-4 ${compact ? "my-3" : "my-4"}`}>
        <Polaroid image={object.image} alt={object.label} sizes={compact ? "140px" : "200px"} className="-rotate-3" />
        <p className={`font-hand leading-snug ${tone.note} ${compact ? "text-sm" : "text-[17px]"}`}>
          আমার সঙ্গী ছিল এই {object.label}…
        </p>
      </div>

      <dl className={`grid ${compact ? "grid-cols-[96px_1fr]" : "grid-cols-[112px_1fr] sm:grid-cols-[122px_1fr]"}`}>
        {fields.map((field) => (
          <div key={field.id} className="contents">
            <dt className={`flex items-center gap-2 border-b py-1.5 font-semibold ${tone.rule} ${tone.label}`}>
              <Icon name={field.icon} className={`size-4 shrink-0 ${tone.icon}`} />
              {field.label}
            </dt>
            <dd className={`border-b py-1.5 font-semibold ${tone.rule} ${slate ? "font-hand" : ""}`} style={{ color: ink }}>
              {card[field.id] || <span className={tone.empty}>…</span>}
            </dd>
          </div>
        ))}
      </dl>

      {!compact && card.line && (
        <p className={`mt-3.5 text-center font-hand text-base leading-snug ${tone.line}`}>“{card.line}”</p>
      )}

      <p className={`mt-3 flex items-center justify-center gap-1.5 font-display text-[15px] font-extrabold ${tone.title}`}>
        <Image src={logo} alt="" width={24} height={20} />
        স্মৃতির বাক্স
      </p>
    </article>
  );
};

export default IdCard;
