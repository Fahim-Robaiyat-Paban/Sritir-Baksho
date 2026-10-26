"use client";
import { useEffect } from "react";
import { Flame } from "lucide-react";
import Button from "@/components/ui/Button";

// Load-shedding: the room goes dark and only the hurricane lamp is lit
const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="site-container px-5 pt-8 sm:px-8 xl:px-0">
      <div className="mx-auto max-w-[620px] rounded-lg bg-[#1d1a16] px-6 py-12 text-center shadow-[0_22px_40px_-20px_rgb(0_0_0/0.8)] [background-image:radial-gradient(circle_at_50%_28%,rgb(255_190_90/0.38),rgb(255_150_60/0.08)_35%,transparent_60%),var(--grain)]">
        <Flame aria-hidden="true" className="mx-auto size-14 fill-[#f6b23c] text-[#ffd77a] drop-shadow-[0_0_18px_rgb(255_180_80/0.8)]" />
        <h1 className="mt-5 font-display text-4xl font-extrabold text-[#fbe6c0] md:text-5xl">লোডশেডিং চলছে!</h1>
        <p className="mx-auto mt-3 max-w-md text-[#d9c4a0]">কিছু একটা গোলমাল হয়েছে, পাতাটা লোড করা গেল না। হারিকেনটা জ্বালিয়ে একটু অপেক্ষা করুন, তারপর আবার চেষ্টা করুন।</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button onClick={reset}>আবার চেষ্টা করুন</Button>
          <Button href="/" variant="cream">হোমে ফিরে যান</Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
