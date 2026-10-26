"use client";
import { useState } from "react";
import { Share2 } from "lucide-react";
import Button from "@/components/ui/Button";

const ShareResult = ({ title }) => {
  const [message, setMessage] = useState("");

  const handleShare = async () => {
    const url = window.location.href;
    const text = `আমি ছিলাম ${title}! তুমি কী ছিলে? দুই মিনিটে জেনে নাও।`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "শৈশব কুইজ", text, url });
        return;
      }
      await navigator.clipboard.writeText(`${text} ${url}`);
      setMessage("লিংক কপি হয়েছে, এবার যেকোনো জায়গায় পেস্ট করুন।");
    } catch (error) {
      if (error?.name === "AbortError") return;
      console.error(error);
      setMessage("শেয়ার করা গেল না, লিংকটা ঠিকানা বার থেকে কপি করুন।");
    }
  };

  return (
    <div>
      <Button onClick={handleShare} className="w-full">
        <Share2 aria-hidden="true" className="size-[18px]" />
        ফলাফল শেয়ার করুন
      </Button>
      <p role="status" className="mt-2 min-h-5 text-center text-sm font-semibold text-leaf">{message}</p>
    </div>
  );
};

export default ShareResult;
