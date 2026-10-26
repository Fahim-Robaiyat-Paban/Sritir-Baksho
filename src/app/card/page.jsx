import CardMaker from "@/components/card/CardMaker";

export const metadata = {
  title: "শৈশব পরিচয়পত্র তৈরি করুন",
  description: "ডাকনাম, পাড়া, প্রিয় খেলা আর খাবার দিয়ে দুই মিনিটে নিজের শৈশব পরিচয়পত্র বানান, তারপর ডাউনলোড করে শেয়ার করুন।",
  alternates: { canonical: "/card" },
};

const CardPage = () => {
  return <CardMaker />;
};

export default CardPage;
