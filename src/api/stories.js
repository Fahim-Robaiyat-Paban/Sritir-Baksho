import { cacheLife } from "next/cache";
import { mockDelay } from "@/lib/utils/format";
import albumGames from "@/assets/images/album-games.jpg";
import albumSchool from "@/assets/images/album-school.jpg";
import albumRain from "@/assets/images/album-rain.jpg";
import albumFriends from "@/assets/images/album-friends.jpg";
import foodJhalmuri from "@/assets/images/food-jhalmuri.jpg";
import storyField from "@/assets/images/story-field.jpg";
import storyKiteAlley from "@/assets/images/story-kite-alley.jpg";

export const storyCategories = [
  { id: "games", label: "খেলা", hint: "গুটি, লাটিম, গোল্লাছুট…", image: albumGames, icon: "marble" },
  { id: "school", label: "স্কুল জীবন", hint: "খাতা, বেঞ্চ, পরীক্ষা…", image: albumSchool, icon: "book" },
  { id: "rain", label: "বৃষ্টির দুপুর", hint: "ভেজা মাটি, কাঁঠাল পাতা…", image: albumRain, icon: "rain" },
  { id: "food", label: "খাবার", hint: "ঝালমুড়ি, চানাচুর, আচার…", image: foodJhalmuri, icon: "food" },
  { id: "friends", label: "বন্ধুরা", hint: "একসাথে, সবসময়…", image: albumFriends, icon: "heart" },
];

export const divisions = [
  { id: "dhaka", label: "ঢাকা" },
  { id: "chattogram", label: "চট্টগ্রাম" },
  { id: "rajshahi", label: "রাজশাহী" },
  { id: "khulna", label: "খুলনা" },
  { id: "barishal", label: "বরিশাল" },
  { id: "sylhet", label: "সিলেট" },
  { id: "rangpur", label: "রংপুর" },
  { id: "mymensingh", label: "ময়মনসিংহ" },
];

const stories = [
  {
    slug: "amader-parar-kacha-math",
    title: "আমাদের পাড়ার সেই কাঁচা মাঠ",
    excerpt: "একটা মাঠ, কিছু বন্ধু, আর অসীম আনন্দ। এই ছিল আমাদের শৈশবের সবচেয়ে বড় সম্পদ।",
    category: "games",
    division: "dhaka",
    image: storyField,
    date: "১২ মার্চ ২০২৫",
    readMins: 4,
    reactions: 1247,
    comments: 23,
    author: "পাবন",
    facts: { place: "আমাদের পাড়ার মাঠ", years: "১৯৯৫–২০০২", games: "গোল্লাছুট, ফুটবল, ক্রিকেট", season: "গরমের ছুটি" },
    body: [
      "আমাদের পাড়ার মাঠটা ছিল আসলে একটা খালি জমি। চারপাশে ছিল কাঁচা দেয়াল, একপাশে বড় একটা গাছ আর অন্য পাশে ছিল একটা পুরনো টিনের ঘর। মাঠটা এত বড় ছিল না, কিন্তু আমাদের কাছে সেটাই ছিল বিশাল একটা দুনিয়া।",
      "সকালে স্কুলের পর ব্যাগ রেখে সোজা চলে যেতাম মাঠে। গোল্লাছুট, ফুটবল, ক্রিকেট, আর মাঝে মাঝে লাটিম। গরমের ছুটিতে মাঠটাই ছিল আমাদের পুরো রাজত্ব। দুপুরে সবাই মিলে গাছের নিচে বসে পানি খেতাম।",
      "সেই মাঠে আমরা শিখেছি হার-জিত, দলবদ্ধতা, আর সত্যিকারের বন্ধুত্ব। এখন সেই মাঠে নাকি ফ্ল্যাটবাড়ি উঠেছে। মাঝে মাঝে গেলে এখনও চোখের সামনে ভেসে ওঠে সেই দিনগুলো।",
    ],
    pullQuote: "শৈশবের আনন্দ ছিল খুব সাধারণ, কিন্তু এখন মনে হয়, সেই সাধারণ জিনিসগুলোই সবচেয়ে অসাধারণ ছিল।",
  },
  {
    slug: "ghuri-uranor-dinguli",
    title: "আমাদের সেই ঘুড়ি উড়ানো দিনগুলো",
    excerpt: "বেলা শেষ হয়ে আসছে। পাড়ার সব ছেলেরা ছাদে উঠে গেছে। কাগজের ঘুড়িটা হাতে নিয়ে আমি দাঁড়িয়ে আছি, হাওয়ার খোঁজে…",
    category: "games",
    division: "dhaka",
    image: storyKiteAlley,
    date: "৮ মার্চ ২০২৫",
    readMins: 5,
    reactions: 986,
    comments: 31,
    author: "সাকিব",
    facts: { place: "পুরান ঢাকার ছাদ", years: "১৯৯৮–২০০৪", games: "ঘুড়ি ওড়ানো", season: "পৌষ সংক্রান্তি" },
    body: [
      "পৌষের শেষ দিন মানেই ছিল সাকরাইন। সকাল থেকে ছাদে ছাদে রঙিন ঘুড়ি, আর নাটাই হাতে আমরা ছোটরা বড়দের পেছনে পেছনে ঘুরতাম।",
      "মাঞ্জা দেওয়া সুতা বানাতে কাচ গুঁড়া করা হতো আগের রাতে। হাত কেটে যেত, তবু কেউ থামত না। “ভোকাট্টা!” চিৎকারে পুরো পাড়া কেঁপে উঠত।",
      "আজ ছাদে উঠলে আকাশটা অনেক ফাঁকা লাগে। তবু প্রতি বছর একটা ঘুড়ি কিনি, শুধু ছেলেবেলার সেই বিকেলটাকে মনে করার জন্য।",
    ],
    pullQuote: "ঘুড়ি মানেই স্বাধীনতা, আকাশটা তখন আমাদের ছিল।",
  },
  {
    slug: "schooler-baranda",
    title: "আমাদের স্কুলের বারান্দা",
    excerpt: "সকালের প্রার্থনা, তারপর ক্লাস। কতদিন পর মনে পড়ল সেই দিনগুলো!",
    category: "school",
    division: "chattogram",
    image: albumSchool,
    date: "৫ মার্চ ২০২৫",
    readMins: 3,
    reactions: 642,
    comments: 12,
    author: "তানভীর",
    facts: { place: "পাড়ার সরকারি স্কুল", years: "১৯৯৬–২০০১", games: "টিফিনে কানামাছি", season: "সারা বছর" },
    body: [
      "লোহার গেট পেরিয়ে লম্বা বারান্দা। ঘণ্টা পড়ার আগে সবাই দৌড়ে লাইনে দাঁড়াত, জাতীয় সংগীত শেষ হলে আবার দৌড়।",
      "টিফিনের সময়টা ছিল দিনের সেরা অংশ। কেউ বাসা থেকে রুটি-ভাজি আনত, কেউ গেটের বাইরে আচারওয়ালার দিকে ছুটত।",
      "পরীক্ষার আগের দিন বারান্দার কোণায় বসে বন্ধুর খাতা থেকে নোট টুকে নেওয়ার কথা মনে পড়লে আজও হাসি পায়।",
    ],
    pullQuote: "ঘণ্টার শব্দটা এখনো কানে বাজে, ছুটির ঘণ্টা সবচেয়ে মধুর ছিল।",
  },
  {
    slug: "brishtir-dupure-amkurano",
    title: "বৃষ্টির দুপুরে আমকুড়ানো",
    excerpt: "বৃষ্টি নামলেই মা বানাতেন গরম খিচুড়ি, আর আমরা জানালায় বসে বৃষ্টি গুনতাম।",
    category: "rain",
    division: "rajshahi",
    image: albumRain,
    date: "২ মার্চ ২০২৫",
    readMins: 4,
    reactions: 815,
    comments: 16,
    author: "মিতু",
    facts: { place: "নানাবাড়ির উঠান", years: "২০০০–২০০৫", games: "কাগজের নৌকা", season: "বর্ষাকাল" },
    body: [
      "বৈশাখের ঝড় এলেই আমরা ছুটতাম আমবাগানে। বাতাসে আম পড়ার শব্দ শুনে কে আগে পৌঁছাবে, সেটাই প্রতিযোগিতা।",
      "ভিজে চুপচুপে হয়ে বাড়ি ফিরলে বকা জুটত ঠিকই, কিন্তু কোঁচড় ভর্তি কাঁচা আম দেখলে মা-ও হেসে ফেলতেন।",
      "সেই আম লবণ-মরিচ দিয়ে মেখে বারান্দায় বসে খাওয়ার স্বাদ পৃথিবীর কোনো রেস্তোরাঁয় পাওয়া যাবে না।",
    ],
    pullQuote: "বৃষ্টির শব্দটা আজও সেই উঠানে নিয়ে যায়।",
  },
  {
    slug: "school-gater-jhalmuri",
    title: "স্কুল গেটের ঝালমুড়ি",
    excerpt: "এক টাকার ঝালমুড়ি, সাথে কাঁচামরিচ আর লেবু। সেই স্বাদ এখনও খুঁজি।",
    category: "food",
    division: "khulna",
    image: foodJhalmuri,
    date: "২৮ ফেব্রুয়ারি ২০২৫",
    readMins: 3,
    reactions: 1103,
    comments: 27,
    author: "রাশেদ",
    facts: { place: "স্কুলের গেট", years: "১৯৯৪–২০০০", games: "টিফিনের দৌড়", season: "সারা বছর" },
    body: [
      "ছুটির ঘণ্টা বাজার আগেই গেটের বাইরে ঝালমুড়িওয়ালা চাচা টিনের কৌটা নিয়ে দাঁড়িয়ে থাকতেন।",
      "খবরের কাগজের ঠোঙায় মুড়ি, চানাচুর, পেঁয়াজ, কাঁচামরিচ আর একটু সরিষার তেল। ঝাঁকানোর শব্দেই জিভে পানি আসত।",
      "পকেটে টাকা না থাকলে বন্ধুর ঠোঙা থেকে এক মুঠো চেয়ে নেওয়া, আর পরের দিন সেটা ফেরত দেওয়া ছিল অলিখিত নিয়ম।",
    ],
    pullQuote: "এক টাকার ঠোঙায় ছিল পুরো দুপুরের আনন্দ।",
  },
  {
    slug: "parar-bondhura",
    title: "পাড়ার সেই বন্ধুরা",
    excerpt: "কেউ এখন বিদেশে, কেউ অন্য শহরে। কিন্তু ডাকনামগুলো আজও মনে আছে।",
    category: "friends",
    division: "sylhet",
    image: albumFriends,
    date: "২৪ ফেব্রুয়ারি ২০২৫",
    readMins: 4,
    reactions: 734,
    comments: 19,
    author: "নাঈম",
    facts: { place: "চা-বাগানের পাশের পাড়া", years: "১৯৯৭–২০০৩", games: "লুকোচুরি, ক্রিকেট", season: "শীতের ছুটি" },
    body: [
      "আমাদের দলে ছিল সাতজন। প্রত্যেকের একটা করে ডাকনাম, যেগুলো আসল নামের চেয়ে বেশি পরিচিত ছিল।",
      "মাগরিবের আজান পড়লেই সবাই বাড়ির দিকে দৌড়, কিন্তু পরের দিন বিকেলের প্ল্যান তখনই ঠিক হয়ে যেত।",
      "এখন সবার একটা গ্রুপ চ্যাট আছে। মাঝে মাঝে কেউ একটা পুরনো ছবি পাঠালে সারা রাত গল্প চলে।",
    ],
    pullQuote: "ডাকনামগুলো রয়ে গেছে, শুধু মাঠটা হারিয়ে গেছে।",
  },
];

const toCard = ({ slug, title, excerpt, category, division, image, date, readMins, reactions, comments }) => ({
  slug,
  title,
  excerpt,
  category,
  division,
  image,
  date,
  readMins,
  reactions,
  comments,
});

export async function getStories({ category = "", division = "" } = {}) {
  "use cache";
  cacheLife("hours");
  await mockDelay();
  return stories
    .filter((story) => !category || story.category === category)
    .filter((story) => !division || story.division === division)
    .map(toCard);
}

export async function getStory(slug) {
  "use cache";
  cacheLife("hours");
  await mockDelay();
  const story = stories.find((item) => item.slug === slug);
  if (!story) return null;
  const more = stories.filter((item) => item.slug !== slug).slice(0, 4).map(toCard);
  return { ...story, more };
}

export async function getDivisionCounts() {
  "use cache";
  cacheLife("hours");
  return divisions.map((division) => ({
    ...division,
    count: stories.filter((story) => story.division === division.id).length,
  }));
}

export const getStorySlugs = () => stories.map((story) => story.slug);

export const getStoryCategoryLabel = (id) => storyCategories.find((cat) => cat.id === id)?.label ?? "";
