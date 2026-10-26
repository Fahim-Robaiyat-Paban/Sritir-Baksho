import quizGate from "@/assets/images/quiz-gate.jpg";
import quizMarbles from "@/assets/images/quiz-marbles.jpg";
import quizHouse from "@/assets/images/quiz-house.jpg";
import quizDoor from "@/assets/images/quiz-door.jpg";
import foodJhalmuri from "@/assets/images/food-jhalmuri.jpg";
import gameCricket from "@/assets/images/game-cricket.jpg";
import gameTop from "@/assets/images/game-top.jpg";

export const results = [
  {
    id: "hide-seek",
    title: "লুকোচুরির চ্যাম্পিয়ন",
    text: "তুমি ছিলে সেই ধরনের, যে কখনো সহজে ধরা পড়ত না। লুকিয়ে থাকতে, চুপচাপ থাকতে আর একটু দুষ্টুমি করতে, এই ছিল তোমার বিশেষত্ব!",
    image: quizDoor,
    traits: [
      { id: "t1", icon: "door", label: "লুকিয়ে থাকার অসাধারণ দক্ষতা" },
      { id: "t2", icon: "flag", label: "কোণায় কোণায় অ্যাডভেঞ্চার খোঁজা" },
      { id: "t3", icon: "kite", label: "দুষ্টুমি আর কল্পনাশক্তি দারুণ ছিল" },
      { id: "t4", icon: "book", label: "বন্ধুদের জন্য সবসময় ভালোবাসা" },
    ],
  },
  {
    id: "cricket-king",
    title: "এলাকার ক্রিকেট কিং",
    text: "ছুটির ঘণ্টা মানেই ব্যাট হাতে মাঠে। পাড়ার সব ম্যাচে তোমার নাম আগে লেখা হতো, আর জানালার কাচ ভাঙার দায়ও প্রায়ই তোমার!",
    image: gameCricket,
    traits: [
      { id: "t1", icon: "flag", label: "দলের অধিনায়ক" },
      { id: "t2", icon: "sun", label: "রোদ-বৃষ্টি মানত না" },
      { id: "t3", icon: "heart", label: "বন্ধুদের নিয়ে চলত" },
      { id: "t4", icon: "door", label: "জানালার কাচের শত্রু" },
    ],
  },
  {
    id: "jhalmuri-fan",
    title: "স্কুল গেটের ঝালমুড়ি ভক্ত",
    text: "টিফিনের টাকা কোথায় যাবে, সেটা তুমি আগে থেকেই জানতে। আচারওয়ালা চাচা তোমাকে নামে চিনত!",
    image: foodJhalmuri,
    traits: [
      { id: "t1", icon: "food", label: "স্বাদের আসল বিশেষজ্ঞ" },
      { id: "t2", icon: "heart", label: "ভাগ করে খাওয়ায় বিশ্বাসী" },
      { id: "t3", icon: "sun", label: "দুপুরের রাজা" },
      { id: "t4", icon: "book", label: "টিফিন বক্স সবসময় খালি" },
    ],
  },
  {
    id: "dreamer",
    title: "জানালার পাশের স্বপ্নবাজ",
    text: "বৃষ্টি দেখতে দেখতে তুমি হারিয়ে যেতে গল্পের দেশে। খাতার শেষ পাতাগুলো ভরা থাকত তোমার আঁকা আর লেখায়।",
    image: quizHouse,
    traits: [
      { id: "t1", icon: "rain", label: "বৃষ্টির প্রেমে পড়া" },
      { id: "t2", icon: "book", label: "গল্পের বইয়ের পোকা" },
      { id: "t3", icon: "kite", label: "কল্পনার আকাশে ওড়া" },
      { id: "t4", icon: "heart", label: "নরম মনের মানুষ" },
    ],
  },
  {
    id: "marble-master",
    title: "মার্বেল ও লাটিমের ওস্তাদ",
    text: "তোমার পকেট কখনো খালি থাকত না। টিনের কৌটা ভর্তি জেতা গুটি, আর হাতের তালুতে ঘোরানো লাটিম, তুমি ছিলে পাড়ার ওস্তাদ।",
    image: gameTop,
    traits: [
      { id: "t1", icon: "marble", label: "নিখুঁত নিশানা" },
      { id: "t2", icon: "flag", label: "হার মানা ছিল না স্বভাবে" },
      { id: "t3", icon: "sun", label: "সারা বিকেল মাঠে" },
      { id: "t4", icon: "heart", label: "গুটি ধার দিত বন্ধুদের" },
    ],
  },
];

export const questions = [
  {
    id: "q1",
    text: "স্কুল ছুটির ঘণ্টা বাজার পর তুমি প্রথমে কী করতে?",
    options: [
      { id: "a", label: "ব্যাগ রেখে সোজা মাঠে, ব্যাট হাতে", result: "cricket-king", image: gameCricket },
      { id: "b", label: "বন্ধুদের নিয়ে কোথাও লুকিয়ে পড়তাম", result: "hide-seek", image: quizMarbles },
      { id: "c", label: "স্কুল গেটের সামনে ঝালমুড়ি খেতে যেতাম", result: "jhalmuri-fan", image: foodJhalmuri },
      { id: "d", label: "কোনো এক কোণে বসে বৃষ্টি দেখতাম", result: "dreamer", image: quizHouse },
    ],
  },
  {
    id: "q2",
    text: "তোমার পকেটে সবসময় কী থাকত?",
    options: [
      { id: "a", label: "কয়েকটা কাচের মার্বেল", result: "marble-master" },
      { id: "b", label: "টিফিনের জমানো টাকা", result: "jhalmuri-fan" },
      { id: "c", label: "ছোট্ট একটা পেন্সিল আর কাগজ", result: "dreamer" },
      { id: "d", label: "টেপ মোড়ানো টেনিস বল", result: "cricket-king" },
    ],
  },
  {
    id: "q3",
    text: "বৃষ্টি নামলে তুমি কোথায়?",
    options: [
      { id: "a", label: "উঠানে কাগজের নৌকা ছাড়ছি", result: "dreamer" },
      { id: "b", label: "সিঁড়ির নিচে লুকিয়ে, কেউ যেন না খোঁজে", result: "hide-seek" },
      { id: "c", label: "বারান্দায় পাঁচগুটি খেলছি", result: "marble-master" },
      { id: "d", label: "ভিজে ভিজে ক্রিকেট চলছেই", result: "cricket-king" },
    ],
  },
  {
    id: "q4",
    text: "পাড়ায় তোমাকে সবাই কী নামে চিনত?",
    options: [
      { id: "a", label: "যাকে কখনো খুঁজে পাওয়া যায় না", result: "hide-seek" },
      { id: "b", label: "যার কাছে সবচেয়ে বেশি গুটি", result: "marble-master" },
      { id: "c", label: "যে সবসময় কিছু না কিছু খায়", result: "jhalmuri-fan" },
      { id: "d", label: "যে সবসময় গল্প বলে", result: "dreamer" },
    ],
  },
  {
    id: "q5",
    text: "ঈদের সেলামি দিয়ে প্রথমে কী কিনতে?",
    options: [
      { id: "a", label: "নতুন একটা লাটিম", result: "marble-master" },
      { id: "b", label: "একটা ভালো ব্যাট", result: "cricket-king" },
      { id: "c", label: "একগাদা চকলেট আর আচার", result: "jhalmuri-fan" },
      { id: "d", label: "লুকিয়ে রাখতাম, কাউকে বলতাম না", result: "hide-seek" },
    ],
  },
];

// Stand-in shares until real result counts come from the backend
export const resultShares = { "hide-seek": 19, "cricket-king": 28, "jhalmuri-fan": 24, dreamer: 16, "marble-master": 13 };


export const getResult = (id) => results.find((result) => result.id === id) ?? null;

export const scoreQuiz = (answers) => {
  const tally = {};
  answers.forEach((resultId) => {
    tally[resultId] = (tally[resultId] ?? 0) + 1;
  });
  return Object.keys(tally).reduce((best, id) => (tally[id] > (tally[best] ?? 0) ? id : best), answers[0]);
};
