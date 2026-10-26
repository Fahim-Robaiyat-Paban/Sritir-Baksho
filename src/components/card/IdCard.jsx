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
};

const NotebookHoles = () => (
  <div
    aria-hidden="true"
    className="absolute top-5 bottom-5 left-3.5 w-3.5 bg-[radial-gradient(circle,var(--color-paper-2)_5px,transparent_6px)] bg-[length:14px_34px]"
  />
);

const IdCard = ({ card, fields = cardFields, compact = false, className = "" }) => {
  const object = getCardObject(card.object);
  const ink = getCardInk(card.ink).value;

  return (
    <article className={`relative text-ink ${themeClasses[card.theme] ?? themeClasses.rickshaw} ${compact ? "text-[13px]" : "text-[15px]"} ${className}`}>
      {card.theme === "notebook" && <NotebookHoles />}
      {card.theme === "postcard" && (
        <Image src={stamp} alt="" width={62} height={60} className="absolute top-4 right-4 rotate-6 shadow-sm" />
      )}

      <h3 className={`text-center font-display leading-tight font-extrabold text-leaf ${compact ? "text-xl" : "text-[30px]"}`}>
        শৈশব পরিচয়পত্র
      </h3>
      {!compact && <p className="text-center font-display text-[15px] font-bold text-leaf">আমার ছোটবেলার আমি</p>}

      <div className={`grid grid-cols-[1.15fr_1fr] items-center gap-4 ${compact ? "my-3" : "my-4"}`}>
        <Polaroid image={object.image} alt={object.label} sizes={compact ? "140px" : "200px"} className="-rotate-3" />
        <p className={`font-hand leading-snug text-ink-blue ${compact ? "text-sm" : "text-[17px]"}`}>
          আমার সঙ্গী ছিল এই {object.label}…
        </p>
      </div>

      <dl className={`grid ${compact ? "grid-cols-[96px_1fr]" : "grid-cols-[112px_1fr] sm:grid-cols-[122px_1fr]"}`}>
        {fields.map((field) => (
          <div key={field.id} className="contents">
            <dt className="flex items-center gap-2 border-b border-[#6e5a32]/20 py-1.5 font-semibold text-ink-2">
              <Icon name={field.icon} className="size-4 shrink-0 text-leaf" />
              {field.label}
            </dt>
            <dd className="border-b border-[#6e5a32]/20 py-1.5 font-semibold" style={{ color: ink }}>
              {card[field.id] || <span className="text-ink-3/60">…</span>}
            </dd>
          </div>
        ))}
      </dl>

      {!compact && card.line && (
        <p className="mt-3.5 text-center font-hand text-base leading-snug text-ink-2">“{card.line}”</p>
      )}

      <p className="mt-3 flex items-center justify-center gap-1.5 font-display text-[15px] font-extrabold text-leaf">
        <Image src={logo} alt="" width={24} height={20} />
        স্মৃতির বাক্স
      </p>
    </article>
  );
};

export default IdCard;
