import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IdCard, RotateCcw } from "lucide-react";
import ShareResult from "@/components/quiz/ShareResult";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { getResult, resultShares, results } from "@/api/quiz";
import { toBn } from "@/lib/utils/format";

export const generateStaticParams = () => results.map((result) => ({ type: result.id }));

export const generateMetadata = async ({ params }) => {
  const { type } = await params;
  const result = getResult(type);
  if (!result) return { title: "ফলাফল পাওয়া যায়নি" };
  return {
    title: `আমি ছিলাম ${result.title}`,
    description: result.text,
    alternates: { canonical: `/quiz/result/${type}` },
    openGraph: { title: `আমি ছিলাম ${result.title}`, description: "তুমি কী ছিলে? দুই মিনিটে জেনে নাও।", images: [result.image.src] },
  };
};

const ResultPage = async ({ params }) => {
  const { type } = await params;
  const result = getResult(type);
  if (!result) notFound();

  return (
    <div className="site-container px-5 sm:px-8 xl:px-0">
      <div className="grid items-start gap-10 pt-6 lg:grid-cols-[1fr_400px] lg:gap-14">
        {/* School progress report: double-ruled border, a red grade stamp, the head teacher's signature */}
        <article className="relative bg-[#fffaf0] p-2 shadow-[0_20px_36px_-20px_rgb(60_40_10/0.6)] [background-image:var(--grain)]">
          <div className="border-[3px] border-double border-leaf/70 px-5 py-7 md:px-9">
            <header className="border-b-2 border-leaf/40 pb-4 text-center">
              <p className="font-display text-sm font-bold text-ink-3">শৈশব বিদ্যালয়, স্মৃতির বাক্স</p>
              <p className="font-display text-xl font-extrabold text-leaf">অগ্রগতি প্রতিবেদন</p>
            </header>

            <p className="mt-6 text-sm font-semibold text-ink-3">ছাত্র/ছাত্রীর ধরন</p>
            <h1 className="mt-1 font-display text-[40px] leading-[1.15] font-extrabold text-leaf md:text-6xl">
              তুমি ছিলে <span className="brush">{result.title}!</span>
            </h1>
            <p className="mt-4 max-w-[560px] text-lg text-ink-2">{result.text}</p>

            <section aria-labelledby="traits" className="mt-7">
              <h2 id="traits" className="font-display text-lg font-bold text-ink">বিশেষ গুণাবলি</h2>
              <table className="mt-2 w-full border-collapse text-[15px]">
                <thead>
                  <tr className="border-y-2 border-ink/60 text-left text-xs text-ink-3">
                    <th scope="col" className="py-1.5 font-semibold">গুণ</th>
                    <th scope="col" className="py-1.5 text-right font-semibold">শিক্ষকের মন্তব্য</th>
                  </tr>
                </thead>
                <tbody>
                  {result.traits.map((trait) => (
                    <tr key={trait.id} className="border-b border-dotted border-ink/30">
                      <td className="py-2.5">
                        <span className="flex items-center gap-2.5 font-semibold text-ink-2">
                          <Icon name={trait.icon} className="size-5 shrink-0 text-leaf" />
                          {trait.label}
                        </span>
                      </td>
                      <td className="py-2.5 text-right font-hand text-lg text-brick">চমৎকার!</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <div className="mt-8 flex items-end justify-between gap-4">
              <p className="text-sm text-ink-3">অভিভাবকের স্বাক্ষর: ............</p>
              <p className="text-center text-sm text-ink-3">
                <span className="block font-hand text-2xl text-ink-blue">স্মৃতি</span>
                প্রধান শিক্ষক
              </p>
            </div>
          </div>
          <p className="absolute top-8 right-6 grid size-24 rotate-12 place-items-center rounded-full border-4 border-brick/70 text-center font-display text-3xl leading-none font-extrabold text-brick/80 md:size-28">
            A+
          </p>
        </article>

        <div>
          <article className="frame-rickshaw text-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={result.image} alt="" fill priority sizes="(max-width: 1024px) 80vw, 360px" placeholder="blur" className="object-cover" />
            </div>
            <p className="mt-3 text-sm text-ink-3">তোমার শৈশব পরিচয়পত্র</p>
            <p className="font-display text-3xl leading-tight font-extrabold text-brick">{result.title}</p>
            <p className="mt-1 pb-2 font-hand text-ink-blue">তুমি কী ছিলে? smritirbaksho.com/quiz</p>
          </article>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ShareResult title={result.title} />
            <Button href="/card" variant="green">
              <IdCard aria-hidden="true" className="size-[18px]" />
              পুরো কার্ড তৈরি করুন
            </Button>
          </div>
          <Link href="/quiz" className="mx-auto mt-2 flex min-h-11 w-fit items-center gap-2 text-sm font-semibold text-ink-2 hover:text-leaf">
            <RotateCcw aria-hidden="true" className="size-4" />
            আবার খেলি
          </Link>
        </div>
      </div>

      {/* The class result list pinned outside the staff room */}
      <section aria-labelledby="others" className="mt-16">
        <SectionTitle id="others" flowers="left" className="text-2xl md:text-2xl">বাকিরা কী পেয়েছে</SectionTitle>
        <ol className="mt-5 max-w-[760px] bg-[#fdf8ec] px-5 py-4 shadow-[0_14px_26px_-16px_rgb(60_40_10/0.55)] [background-image:var(--grain)]">
          {results.map((item) => {
            const isMine = item.id === result.id;
            return (
              <li key={item.id} className="border-b border-dotted border-ink/25 last:border-0">
                <Link
                  href={`/quiz/result/${item.id}`}
                  aria-current={isMine ? "page" : undefined}
                  className={`grid min-h-12 grid-cols-[1fr_120px_48px] items-center gap-3 px-2 sm:grid-cols-[1fr_200px_56px] ${isMine ? "bg-marker/40" : "hover:bg-paper-2/50"}`}
                >
                  <span className="font-semibold text-ink">
                    {item.title}
                    {isMine && <span className="ml-2 font-hand text-brick">← তুমি</span>}
                  </span>
                  <span className="h-2.5 rounded-full bg-[#e3d6b8]">
                    <span className="block h-full rounded-full bg-leaf" style={{ width: `${resultShares[item.id] * 3}%` }} />
                  </span>
                  <span className="text-right font-display font-bold text-ink-2">{toBn(resultShares[item.id])}%</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
};

export default ResultPage;
