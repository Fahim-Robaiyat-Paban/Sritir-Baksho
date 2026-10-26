import { questions } from "@/api/quiz";
import Button from "@/components/ui/Button";

const optionLetters = ["ক", "খ", "গ", "ঘ"];
const chalk = "[text-shadow:0_0_1px_rgb(255_255_255/0.55),0_0_8px_rgb(255_255_255/0.08)]";

// The quiz teaser written in chalk on a classroom blackboard, previewing the first question
const QuizBoard = () => {
  const [first] = questions;

  return (
    <div className="relative rotate-[0.6deg] rounded-md border-[10px] border-[#7a4f27] bg-[#2b322e] px-6 pt-6 pb-8 shadow-[inset_0_0_40px_rgb(0_0_0/0.45),0_18px_30px_-16px_rgb(40_25_10/0.7)] [background-image:radial-gradient(ellipse_at_30%_15%,rgb(255_255_255/0.08),transparent_60%),radial-gradient(ellipse_at_85%_90%,rgb(255_255_255/0.05),transparent_55%),var(--grain)] md:px-7">
      <p className={`font-hand text-lg text-marker ${chalk}`}>আজকের কুইজ</p>
      <h2 className={`mt-1 font-hand text-[26px] leading-snug text-[#f6f2e8] md:text-[28px] ${chalk}`}>
        আপনি কেমন ধরনের শৈশবের ছেলে/মেয়ে ছিলেন?
      </h2>

      <div className="mt-5 border-t border-dashed border-white/20 pt-4">
        <p className={`font-hand text-[17px] text-[#ece7da] ${chalk}`}>প্রশ্ন ১: {first.text}</p>
        <ul className={`mt-2.5 grid gap-1.5 font-hand text-[15px] text-[#ece7da]/80 ${chalk}`}>
          {first.options.map((option, i) => (
            <li key={option.id}>
              {optionLetters[i]}) {option.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <Button href="/quiz" variant="cream">কুইজ খেলুন</Button>
        <p className={`font-hand text-[15px] text-[#ece7da]/70 ${chalk}`}>পাঁচটা প্রশ্ন, দুই মিনিট</p>
      </div>

      {/* Chalk ledge with a stub of chalk resting on it */}
      <div aria-hidden="true" className="absolute inset-x-4 -bottom-[10px] h-2 rounded-t-sm bg-[#5e3b1c]">
        <span className="absolute -top-1.5 right-8 h-2 w-7 rotate-3 rounded-full bg-[#f2efe6] shadow-[0_1px_2px_rgb(0_0_0/0.4)]" />
      </div>
    </div>
  );
};

export default QuizBoard;
