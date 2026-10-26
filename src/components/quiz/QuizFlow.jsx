"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { questions, scoreQuiz } from "@/api/quiz";
import { toBn } from "@/lib/utils/format";
import { EASE } from "@/lib/utils/motion";

const letters = ["ক", "খ", "গ", "ঘ"];

const QuizFlow = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const question = questions[index];
  const selected = answers[index];
  const isLast = index === questions.length - 1;

  const choose = (resultId) => {
    const next = [...answers];
    next[index] = resultId;
    setAnswers(next);
  };

  const goNext = () => {
    if (!selected) return;
    if (isLast) {
      router.push(`/quiz/result/${scoreQuiz(answers)}`);
      return;
    }
    setIndex(index + 1);
  };

  return (
    // An exam paper with an OMR answer strip: magenta print on pink stock, bubbles to fill in
    <div className="mx-auto w-full max-w-[820px] bg-[#fff3f4] shadow-[0_20px_36px_-20px_rgb(90_30_50/0.55)] [background-image:linear-gradient(90deg,transparent_22px,rgb(196_35_90/0.12)_22px_23px,transparent_23px),var(--grain)]">
      <header className="border-b-2 border-[#c4235a]/40 px-6 pt-6 pb-4 text-center md:px-10">
        <p className="font-display text-sm font-bold text-[#a3184b]">শৈশব বিদ্যালয়, স্মৃতির বাক্স</p>
        <p className="font-display text-2xl font-extrabold text-[#7a1238]">বার্ষিক শৈশব পরীক্ষা</p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[13px] font-semibold text-[#a3184b]">
          <p>পূর্ণমান: {toBn(questions.length)}</p>
          {/* Roll-number style boxes: one per question, filled as you go */}
          <div aria-hidden="true" className="flex gap-1">
            {questions.map((item, i) => (
              <span key={item.id} className={`grid size-7 place-items-center border-[1.5px] border-[#c4235a]/60 font-display text-sm ${i <= index ? "bg-[#c4235a] text-white" : "text-[#c4235a]/70"}`}>
                {toBn(i + 1)}
              </span>
            ))}
          </div>
          <p>সময়: প্রায় {toBn(questions.length - index)} মিনিট</p>
        </div>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.fieldset
          key={question.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="px-6 pt-8 pb-4 md:px-10"
        >
          <legend className="font-display text-[26px] leading-snug font-extrabold text-ink md:text-4xl">
            <span className="mr-2 text-[#c4235a]">{toBn(index + 1)}.</span>
            {question.text}
          </legend>
          <p className="mt-2 text-sm text-ink-3">সঠিক উত্তরের বৃত্তটি ভরাট করো। (সবচেয়ে কাছাকাছি উত্তরটাই সঠিক!)</p>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {question.options.map((option, i) => {
              const isChosen = selected === option.result;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isChosen}
                  onClick={() => choose(option.result)}
                  className={`flex min-h-20 items-center gap-4 border-[1.5px] px-4 py-3 text-left transition-colors ${isChosen ? "border-[#c4235a] bg-white" : "border-[#c4235a]/25 bg-white/50 hover:border-[#c4235a]/60 hover:bg-white"}`}
                >
                  {/* OMR bubble: shows its letter, fills solid when chosen */}
                  <span className={`grid size-10 shrink-0 place-items-center rounded-full border-2 font-display text-lg font-bold transition-colors ${isChosen ? "border-ink bg-ink text-white" : "border-[#c4235a] text-[#c4235a]"}`}>
                    {letters[i]}
                  </span>
                  {option.image && (
                    <span className="relative hidden h-16 w-20 shrink-0 overflow-hidden border-2 border-white shadow-sm sm:block">
                      <Image src={option.image} alt="" fill sizes="80px" className="object-cover" />
                    </span>
                  )}
                  <span className="font-display text-lg leading-snug font-semibold text-ink">{option.label}</span>
                </button>
              );
            })}
          </div>
        </motion.fieldset>
      </AnimatePresence>

      <div className="flex items-center justify-between gap-3 border-t-2 border-dashed border-[#c4235a]/30 px-6 py-6 md:px-10">
        <Button variant="line" onClick={() => setIndex(index - 1)} disabled={index === 0}>
          <ArrowLeft aria-hidden="true" className="size-4" />
          আগের প্রশ্ন
        </Button>
        <Button size="lg" onClick={goNext} disabled={!selected}>
          {isLast ? "খাতা জমা দিই" : "পরের প্রশ্ন"}
          <ArrowRight aria-hidden="true" className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default QuizFlow;
