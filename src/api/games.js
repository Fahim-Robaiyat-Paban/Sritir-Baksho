import { cacheLife } from "next/cache";
import { mockDelay } from "@/lib/utils/format";
import gollachutField from "@/assets/images/gollachut-field.jpg";
import marbles from "@/assets/images/game-marbles.jpg";
import top from "@/assets/images/game-top.jpg";
import kite from "@/assets/images/game-kite.jpg";
import rope from "@/assets/images/game-rope.jpg";
import hopscotch from "@/assets/images/game-hopscotch.jpg";
import cricket from "@/assets/images/game-cricket.jpg";
import handkerchief from "@/assets/images/game-handkerchief.jpg";
import woodenTop from "@/assets/images/game-wooden-top.jpg";
import stones from "@/assets/images/game-stones.jpg";
import tin from "@/assets/images/game-tin.jpg";
import boat from "@/assets/images/game-boat.jpg";

export const gameCategories = [
  { id: "all", label: "সব খেলা" },
  { id: "field", label: "মাঠের খেলা" },
  { id: "indoor", label: "ঘরের খেলা" },
  { id: "team", label: "দলের খেলা" },
  { id: "seasonal", label: "মৌসুমি খেলা" },
];

const games = [
  {
    slug: "gollachut",
    name: "গোল্লাছুট",
    line: "হাত ছেড়ে এক দৌড়, পাহারাদার পেছনে!",
    category: "team",
    image: gollachutField,
    players: "৮–১২ জন, দুই দলে",
    place: "খোলা মাঠ",
    duration: "২০–৪০ মিনিট",
    gear: "একটা খুঁটি, ব্যস",
    season: "শীতের বিকেলে",
    intro:
      "একটা খুঁটি পোঁতা গোল্লা, তাকে ঘিরে একদল হাত ধরাধরি করে ঘুরছে। হঠাৎ একজন হাত ছেড়ে দৌড়, আর মাঠজুড়ে পাহারাদারদের তাড়া। গোল্লাছুট শুধু খেলা না, বাংলার বিকেলের একটা শব্দ।",
    steps: [
      "দুই দলে সমান খেলোয়াড়। এক দল গোল্লার দল, অন্য দল পাহারাদার।",
      "মাঠের এক পাশে খুঁটি পোঁতা হয়, ২০–৩০ হাত দূরে একটা সীমানা ঠিক করা হয়।",
      "গোল্লার দলের প্রধান খুঁটি ছুঁয়ে থাকে, বাকিরা হাত ধরে শিকলের মতো ঘোরে।",
      "সুযোগ বুঝে একজন হাত ছেড়ে সীমানার দিকে দৌড় দেয়। পাহারাদার ছুঁয়ে দিলে সে বাদ।",
      "সবাই নিরাপদে সীমানা ছুঁলে গোল্লার দল পয়েন্ট পায়। সবাই বাদ পড়লে দল বদল।",
    ],
    regionalNames: [
      { id: "dhaka", name: "গোল্লাছুট", region: "ঢাকা, ময়মনসিংহ" },
      { id: "cumilla", name: "বুড়ির ঘর", region: "কুমিল্লা" },
      { id: "rajshahi", name: "ছুটখেলা", region: "রাজশাহী" },
      { id: "khulna", name: "গোল্লা দৌড়", region: "খুলনা" },
    ],
    facts: [
      "কোনো সরঞ্জাম লাগত না, একটা খোলা মাঠ আর একদল বন্ধু থাকলেই চলত।",
      "দৌড়ের গতির চেয়ে সময় বোঝাটাই ছিল আসল কৌশল।",
      "শিকল যত লম্বা হতো, ঘোরার গতি তত বাড়ত।",
    ],
    related: ["rumal-churi", "satchara", "cricket", "marbles"],
  },
  {
    slug: "marbles",
    name: "গুটি (মার্বেল)",
    line: "ছোট ছোট গুটি নিয়ে মাঠে যুদ্ধ!",
    category: "field",
    image: marbles,
    players: "২–৬ জন",
    place: "উঠান বা মাটির রাস্তা",
    duration: "যতক্ষণ গুটি থাকে",
    gear: "কাচের মার্বেল",
    season: "সারা বছর",
    intro: "পকেট ভর্তি কাচের গুটি, মাটিতে আঁকা একটা গর্ত। আঙুলের এক টোকায় জিতে নেওয়া যেত বন্ধুর সবচেয়ে প্রিয় মার্বেলটাও।",
    steps: [
      "মাটিতে ছোট একটা গর্ত খোঁড়া হয়, কয়েক হাত দূরে একটা দাগ টানা হয়।",
      "দাগ থেকে সবাই নিজের গুটি গর্তের দিকে ছোড়ে, যার গুটি সবচেয়ে কাছে সে আগে খেলে।",
      "আঙুলের টোকায় অন্যের গুটিতে লাগাতে পারলে সেই গুটি তোমার।",
    ],
    regionalNames: [
      { id: "dhaka", name: "মার্বেল", region: "ঢাকা" },
      { id: "chattogram", name: "গুলি", region: "চট্টগ্রাম" },
    ],
    facts: ["রঙিন ভেতরের নকশাওয়ালা গুটির দাম ছিল সবচেয়ে বেশি।", "জেতা গুটি জমিয়ে রাখা হতো টিনের কৌটায়।"],
    related: ["latim", "panchguti", "gollachut"],
  },
  {
    slug: "latim",
    name: "লাটিম",
    line: "ঘুরছে লাটিম, ঘুরছে শৈশব!",
    category: "field",
    image: top,
    players: "১ বা তার বেশি",
    place: "শক্ত মাটি বা পাকা উঠান",
    duration: "যতক্ষণ ঘোরে",
    gear: "লাটিম আর সুতলি",
    season: "শীতকাল",
    intro: "সুতলি পেঁচিয়ে এক টানে ছেড়ে দেওয়া, তারপর মাটিতে গুনগুন করে ঘুরতে থাকা লাটিম। হাতের তালুতে তুলে নিতে পারলে তুমিই ওস্তাদ।",
    steps: [
      "লাটিমের পেরেকের দিক থেকে সুতলি শক্ত করে পেঁচাও।",
      "সুতলির মাথা আঙুলে আটকে জোরে ছুড়ে টান দাও।",
      "সবচেয়ে বেশিক্ষণ যার লাটিম ঘোরে, সে জেতে।",
    ],
    regionalNames: [
      { id: "dhaka", name: "লাটিম", region: "ঢাকা" },
      { id: "sylhet", name: "লাট্টু", region: "সিলেট" },
    ],
    facts: ["কাঠের লাটিমে রং করা হতো নিজের হাতে।", "হাতের তালুতে ঘোরানো ছিল সবচেয়ে কঠিন কৌশল।"],
    related: ["lattu-ladai", "marbles", "kite"],
  },
  {
    slug: "kite",
    name: "ঘুড়ি ওড়ানো",
    line: "আকাশ ছোঁয়ার ছোট স্বপ্ন!",
    category: "seasonal",
    image: kite,
    players: "১ বা তার বেশি",
    place: "ছাদ বা খোলা মাঠ",
    duration: "পুরো বিকেল",
    gear: "ঘুড়ি, নাটাই, মাঞ্জা সুতা",
    season: "পৌষ সংক্রান্তি, বসন্ত",
    intro: "ছাদে ছাদে রঙিন ঘুড়ি, আর আকাশজুড়ে কাটাকাটির লড়াই। “ভোকাট্টা!” চিৎকারটা আজও কানে বাজে।",
    steps: [
      "বাতাসের দিকে পিঠ দিয়ে দাঁড়াও, বন্ধু ঘুড়িটা একটু দূরে ধরে রাখবে।",
      "বন্ধু ছেড়ে দিলে আলতো টান দিয়ে ঘুড়ি ওপরে তোলো।",
      "ঢিল আর টান দিয়ে ঘুড়ি নিয়ন্ত্রণ করো, অন্যের সুতা কাটতে পারলে জয়।",
    ],
    regionalNames: [{ id: "dhaka", name: "ঘুড্ডি", region: "পুরান ঢাকা" }],
    facts: ["পুরান ঢাকার সাকরাইন উৎসবে আজও আকাশ ঘুড়িতে ভরে যায়।", "মাঞ্জা সুতা বানানো হতো কাচের গুঁড়া আর আঠা দিয়ে।"],
    related: ["paper-boat", "latim", "cricket"],
  },
  {
    slug: "dori-laf",
    name: "দড়ি লাফ",
    line: "লাফাই, গুনি, থামতে পারি না!",
    category: "field",
    image: rope,
    players: "১–৫ জন",
    place: "উঠান",
    duration: "১০–২০ মিনিট",
    gear: "একটা লম্বা দড়ি",
    season: "সারা বছর",
    intro: "দুই পাশে দুজন দড়ি ঘোরায়, মাঝখানে একজন গুনে গুনে লাফায়। ছড়া কাটতে কাটতে কে কত বার পারে, সেটাই প্রতিযোগিতা।",
    steps: ["দুজন দড়ির দুই মাথা ধরে ঘোরাবে।", "একজন সময় বুঝে মাঝে ঢুকে লাফানো শুরু করবে।", "পায়ে দড়ি লাগলে পরের জনের পালা।"],
    regionalNames: [{ id: "all", name: "স্কিপিং", region: "শহরে" }],
    facts: ["লাফের সাথে ছড়া বলা হতো, ছড়া শেষ মানে পালা শেষ।"],
    related: ["ekka-dokka", "rumal-churi"],
  },
  {
    slug: "ekka-dokka",
    name: "এক্কা-দোক্কা",
    line: "চক দিয়ে ঘর, এক পায়ে লাফ!",
    category: "field",
    image: hopscotch,
    players: "২–৪ জন",
    place: "উঠান বা পাকা রাস্তা",
    duration: "২০ মিনিট",
    gear: "চক আর একটা চাড়া",
    season: "সারা বছর",
    intro: "মাটিতে চক দিয়ে আঁকা ঘর, হাতে একটা ভাঙা হাঁড়ির চাড়া। এক পায়ে লাফিয়ে দাগ না ছুঁয়ে পুরো ঘর পার হওয়াই খেলা।",
    steps: ["মাটিতে আট ঘরের নকশা আঁকো।", "প্রথম ঘরে চাড়া ছুড়ে এক পায়ে লাফিয়ে সব ঘর পার হও।", "দাগে পা পড়লে বা চাড়া ঘরের বাইরে গেলে পালা শেষ।"],
    regionalNames: [{ id: "dhaka", name: "কিতকিত", region: "পশ্চিমাঞ্চল" }],
    facts: ["চাড়া হিসেবে ভাঙা মাটির হাঁড়ির টুকরাই ছিল সবচেয়ে ভালো।"],
    related: ["dori-laf", "panchguti"],
  },
  {
    slug: "cricket",
    name: "পাড়ার ক্রিকেট",
    line: "ছোট ব্যাট, বড় স্বপ্ন!",
    category: "team",
    image: cricket,
    players: "৪–১২ জন",
    place: "গলি বা মাঠ",
    duration: "যতক্ষণ আলো থাকে",
    gear: "ব্যাট, টেপ টেনিস বল, ইটের স্টাম্প",
    season: "সারা বছর",
    intro: "ইট দিয়ে স্টাম্প, টেপ মোড়ানো টেনিস বল, আর পাশের বাড়ির জানালায় লাগলেই আউট। পাড়ার ক্রিকেটের নিয়ম পাড়াতেই তৈরি হতো।",
    steps: ["দুই দলে ভাগ হও, টস করে ব্যাটিং ঠিক করো।", "দেয়ালে সরাসরি বল লাগলে আউট, এক বাউন্সে ধরলেও আউট।", "নির্দিষ্ট ওভার শেষে বেশি রান যাদের, তারা জেতে।"],
    regionalNames: [{ id: "all", name: "গলি ক্রিকেট", region: "সারা দেশে" }],
    facts: ["ব্যাটের মালিক আউট হলে খেলা প্রায়ই সেখানেই শেষ!"],
    related: ["gollachut", "satchara"],
  },
  {
    slug: "rumal-churi",
    name: "রুমাল চুরি",
    line: "পেছনে রুমাল, দৌড় শুরু!",
    category: "team",
    image: handkerchief,
    players: "৮ বা তার বেশি",
    place: "উঠান বা মাঠ",
    duration: "২০–৩০ মিনিট",
    gear: "একটা রুমাল",
    season: "সারা বছর",
    intro: "সবাই গোল হয়ে বসে, একজন রুমাল হাতে চারপাশে ঘোরে। কারো পেছনে চুপিচুপি রুমাল ফেলে দিলেই শুরু হয় দৌড়।",
    steps: ["সবাই গোল হয়ে ভেতরের দিকে মুখ করে বসবে।", "একজন রুমাল নিয়ে ঘুরবে আর কারো পেছনে ফেলে দেবে।", "যার পেছনে পড়েছে, সে টের পেয়ে তাড়া করবে। ধরতে না পারলে তার পালা।"],
    regionalNames: [{ id: "all", name: "রুমাল চোর", region: "উত্তরাঞ্চল" }],
    facts: ["পেছনে না তাকিয়ে রুমাল টের পাওয়াটাই আসল দক্ষতা।"],
    related: ["gollachut", "dori-laf"],
  },
  {
    slug: "lattu-ladai",
    name: "লাট্টু লড়াই",
    line: "কার লাট্টু বেশিক্ষণ টেকে?",
    category: "field",
    image: woodenTop,
    players: "২–৬ জন",
    place: "মাটির উঠান",
    duration: "১৫–৩০ মিনিট",
    gear: "কাঠের লাট্টু",
    season: "শীতকাল",
    intro: "গোল দাগের ভেতরে সবাই একসাথে লাট্টু ছাড়ে। একটা আরেকটাকে ধাক্কা দিয়ে দাগের বাইরে ফেলতে পারলেই জয়।",
    steps: ["মাটিতে বড় একটা গোল দাগ আঁকো।", "সবাই একসাথে দাগের ভেতরে লাট্টু ছাড়বে।", "শেষ পর্যন্ত যার লাট্টু দাগের ভেতরে ঘোরে, সে জেতে।"],
    regionalNames: [{ id: "all", name: "লাট্টু খেলা", region: "সারা দেশে" }],
    facts: ["হারলে প্রতিপক্ষের লাট্টুর পেরেক দিয়ে নিজের লাট্টুতে দাগ নেওয়ার নিয়মও ছিল!"],
    related: ["latim", "marbles"],
  },
  {
    slug: "panchguti",
    name: "পাঁচগুটি",
    line: "এক হাতে পাঁচটা পাথর!",
    category: "indoor",
    image: stones,
    players: "২–৪ জন",
    place: "বারান্দা বা ঘরের মেঝে",
    duration: "১৫ মিনিট",
    gear: "পাঁচটা ছোট পাথর",
    season: "বর্ষাকাল",
    intro: "বৃষ্টির দুপুরে বারান্দায় বসে পাঁচটা গোল পাথর। একটা ওপরে ছুড়ে বাকিগুলো তুলে নেওয়ার খেলায় হাত হতো চোখের চেয়েও দ্রুত।",
    steps: ["পাঁচটা পাথর মেঝেতে ছড়িয়ে দাও।", "একটা ওপরে ছুড়ে সেটা নামার আগেই একটা করে পাথর তোলো।", "ধাপে ধাপে দুটো, তিনটে করে তুলতে হয়, পড়ে গেলে পালা শেষ।"],
    regionalNames: [{ id: "all", name: "গুটি খেলা", region: "গ্রামাঞ্চলে" }],
    facts: ["নদীর ধারের মসৃণ পাথর ছিল সবচেয়ে কাঙ্ক্ষিত।"],
    related: ["marbles", "ekka-dokka"],
  },
  {
    slug: "satchara",
    name: "সাতচাড়া",
    line: "সাতটা চাড়া, একটা বল!",
    category: "team",
    image: tin,
    players: "৬–১০ জন, দুই দলে",
    place: "মাঠ বা গলি",
    duration: "২০–৩০ মিনিট",
    gear: "সাতটা চাড়া বা টিন, একটা বল",
    season: "সারা বছর",
    intro: "সাতটা চাড়া একটার ওপর আরেকটা সাজানো। বল ছুড়ে ভাঙো, তারপর প্রতিপক্ষের বল খেয়ে বাদ পড়ার আগে আবার সাজাও।",
    steps: ["সাতটা চাড়া বা টিন একটার ওপর আরেকটা সাজাও।", "এক দল দূর থেকে বল ছুড়ে স্তূপটা ভাঙবে।", "অন্য দলের বলের আঘাত এড়িয়ে আবার সাজাতে পারলে পয়েন্ট।"],
    regionalNames: [{ id: "all", name: "সাতগুটি", region: "দক্ষিণাঞ্চলে" }],
    facts: ["খালি কনডেন্সড মিল্কের টিন দিয়েও খেলা হতো।"],
    related: ["gollachut", "cricket"],
  },
  {
    slug: "paper-boat",
    name: "কাগজের নৌকা",
    line: "বৃষ্টিতে ভাসে স্বপ্নের নৌকা!",
    category: "seasonal",
    image: boat,
    players: "যে কেউ",
    place: "বৃষ্টির পানি জমা উঠান",
    duration: "বৃষ্টি যতক্ষণ",
    gear: "পুরনো খাতার পাতা",
    season: "বর্ষাকাল",
    intro: "পুরনো খাতার পাতা ছিঁড়ে ভাঁজ করা নৌকা, উঠানের জমা পানিতে ছেড়ে দেওয়া। কার নৌকা সবচেয়ে দূরে যায়, সেটাই ছিল বর্ষার সবচেয়ে বড় প্রতিযোগিতা।",
    steps: ["খাতার পাতা আধাআধি ভাঁজ করে নৌকার আকার দাও।", "জমা পানিতে সবাই একসাথে নৌকা ছাড়বে।", "যার নৌকা ডোবার আগে সবচেয়ে দূরে যায়, সে জেতে।"],
    regionalNames: [{ id: "all", name: "কাগজের নাও", region: "গ্রামাঞ্চলে" }],
    facts: ["কেউ কেউ নৌকায় নিজের নাম লিখে দিত, যেন হারিয়ে না যায়।"],
    related: ["kite", "panchguti"],
  },
];

const toCard = ({ slug, name, line, category, image }) => ({ slug, name, line, category, image });

export async function getGames({ category = "all", q = "" } = {}) {
  "use cache";
  cacheLife("hours");
  await mockDelay();
  const query = q.trim();
  return games
    .filter((game) => category === "all" || game.category === category)
    .filter((game) => !query || game.name.includes(query) || game.line.includes(query))
    .map(toCard);
}

export async function getGame(slug) {
  "use cache";
  cacheLife("hours");
  await mockDelay();
  const game = games.find((item) => item.slug === slug);
  if (!game) return null;
  const related = game.related.map((id) => games.find((item) => item.slug === id)).filter(Boolean).map(toCard);
  return { ...game, related };
}

export const getGameSlugs = () => games.map((game) => game.slug);

export const getCategoryLabel = (id) => gameCategories.find((cat) => cat.id === id)?.label ?? "";
