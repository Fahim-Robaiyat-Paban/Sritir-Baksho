"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Scrap from "@/components/ui/Scrap";
import { EASE } from "@/lib/utils/motion";
import heroAlley from "@/assets/images/hero-alley.jpg";
import stamp from "@/assets/images/stamp.jpg";

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const Hero = () => {
  return (
    <section className="site-container px-5 sm:px-8 xl:px-0">
      <div className="relative mt-1">
        <Image
          src={stamp}
          alt=""
          width={92}
          height={88}
          className="absolute -top-4 -left-11 z-[3] hidden -rotate-8 shadow-[0_6px_14px_-6px_rgb(0_0_0/0.4)] xl:block"
        />

        <div className="torn relative overflow-hidden rounded-md bg-[#24180e] pb-64 text-[#fff7e6] md:pb-0 md:h-[460px]">
          <motion.div
            className="absolute inset-x-0 bottom-0 h-72 [mask:linear-gradient(to_bottom,transparent,#000_35%)] md:inset-y-0 md:right-0 md:left-auto md:h-full md:w-[68%] md:[mask:linear-gradient(to_right,transparent,#000_28%)]"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: EASE }}
          >
            <Image src={heroAlley} alt="সূর্যাস্তে পুরনো গলি, ধুলোয় মার্বেল আর তারে আটকে থাকা ঘুড়ি" fill priority sizes="(max-width: 768px) 100vw, 820px" placeholder="blur" className="object-cover" />
          </motion.div>

          <div className="relative z-[2] max-w-[560px] px-6 pt-9 md:flex md:h-full md:flex-col md:justify-center md:pt-0 md:pb-2 md:pl-14">
            <motion.h1 {...rise(0.15)} className="font-display text-[42px] leading-[1.18] font-extrabold text-white [text-shadow:0_2px_14px_rgb(0_0_0/0.4)] md:text-[68px]">
              মনে আছে সেই <span className="brush text-leaf [text-shadow:none]">শৈশবের</span> দিনগুলো?
            </motion.h1>
            <motion.p {...rise(0.35)} className="mt-4 max-w-[430px] text-base text-[#f1e5cb] md:text-lg">
              একটা সময় ছিল, যখন বড় হওয়া মানেই ছিল খেলা, বন্ধু, স্কুল আর অসীম আনন্দ…
            </motion.p>
            <motion.div {...rise(0.5)} className="mt-6">
              <Button href="/card" size="lg">
                <span className="sm:hidden">শৈশব পরিচয়পত্র বানান</span>
                <span className="hidden sm:inline">আমার শৈশব পরিচয়পত্র তৈরি করুন</span>
                <ArrowRight aria-hidden="true" className="size-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        <Scrap className="absolute top-9 -right-8 hidden w-[190px] rotate-4 xl:block">সেই দিনগুলো আর ফিরে আসে না, কিন্তু মনে থাকে সারাজীবন…</Scrap>
      </div>
    </section>
  );
};

export default Hero;
