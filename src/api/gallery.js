import { cacheLife } from "next/cache";
import { mockDelay } from "@/lib/utils/format";

export const galleryEras = [
  { id: "all", label: "সব" },
  { id: "80s", label: "৮০-র দশক" },
  { id: "90s", label: "৯০-র দশক" },
  { id: "2000s", label: "২০০০-এর দশক" },
];

const cards = [
  { id: "c1", era: "90s", theme: "rickshaw", ink: "blue", object: "marbles", name: "রাশেদ করিম", nick: "গুটি", area: "পুরান ঢাকা", friends: "রাইহান, সোহেল", game: "গুটি", food: "আলুপুরি", time: "বিকেল", line: "পকেট ভর্তি মার্বেলই ছিল আমার সম্পদ।" },
  { id: "c2", era: "2000s", theme: "notebook", ink: "blue", object: "kite", name: "আকাশ মাহমুদ", nick: "আকাশ", area: "মিরপুর", friends: "রিয়াম, তানভীর", game: "ঘুড়ি উড়ানো", food: "চানাচুর", time: "দুপুর", line: "ঘুড়ির মতো উড়তে চেয়েছিলাম।" },
  { id: "c3", era: "90s", theme: "postcard", ink: "brown", object: "boat", name: "নুসরাত জাহান", nick: "পরী", area: "যশোর", friends: "মিতু, শান্তা", game: "কাগজের নৌকা", food: "আমড়া", time: "সকাল", line: "বৃষ্টির দিনগুলো ছিল সবচেয়ে সুন্দর।" },
  { id: "c4", era: "80s", theme: "rickshaw", ink: "green", object: "top", name: "মাহফুজ আলম", nick: "লাটিম", area: "বরিশাল", friends: "জাহিদ, ফারুক", game: "লাটিম", food: "চটপটি", time: "বিকেল", line: "লাটিম ঘুরলে সময় থেমে যেত।" },
  { id: "c5", era: "2000s", theme: "notebook", ink: "red", object: "cricket", name: "সাকিব হাসান", nick: "সাকি", area: "উত্তরা", friends: "রাফি, সিয়াম", game: "পাড়ার ক্রিকেট", food: "ফুচকা", time: "বিকেল", line: "ইটের স্টাম্পেই ছিল বিশ্বকাপ।" },
  { id: "c6", era: "90s", theme: "postcard", ink: "blue", object: "kite", name: "তানজিলা রহমান", nick: "তনু", area: "কুমিল্লা", friends: "রাখি, মৌ", game: "এক্কা-দোক্কা", food: "আচার", time: "সন্ধ্যা", line: "চক দিয়ে আঁকা ঘরগুলো আজও মনে আছে।" },
  { id: "c7", era: "80s", theme: "notebook", ink: "green", object: "marbles", name: "জাহিদুল ইসলাম", nick: "জাহিদ", area: "ময়মনসিংহ", friends: "কামাল, বাবু", game: "গোল্লাছুট", food: "মুড়ি-গুড়", time: "সকাল", line: "মাঠটাই ছিল পুরো পৃথিবী।" },
  { id: "c8", era: "2000s", theme: "rickshaw", ink: "red", object: "boat", name: "মিতু আক্তার", nick: "মিতু", area: "রাজশাহী", friends: "শিলা, রুমি", game: "পাঁচগুটি", food: "কাঁচা আম", time: "দুপুর", line: "বারান্দায় বসে বৃষ্টি গোনা।" },
  { id: "c9", era: "90s", theme: "notebook", ink: "blue", object: "top", name: "নাঈম আহমেদ", nick: "নাঈম", area: "সিলেট", friends: "আরিফ, মেহেদী", game: "লুকোচুরি", food: "জিলাপি", time: "বিকেল", line: "লুকিয়ে ছিলাম, কেউ খুঁজে পায়নি।" },
  { id: "c10", era: "80s", theme: "postcard", ink: "brown", object: "cricket", name: "কামরুল হাসান", nick: "কামু", area: "চট্টগ্রাম", friends: "সাইফুল, রনি", game: "সাতচাড়া", food: "পিঠা", time: "সকাল", line: "সাতটা চাড়া, অনেক গল্প।" },
  { id: "c11", era: "2000s", theme: "postcard", ink: "green", object: "marbles", name: "রিয়া চৌধুরী", nick: "রিয়া", area: "খুলনা", friends: "নিশা, দীপা", game: "দড়ি লাফ", food: "আইসক্রিম", time: "বিকেল", line: "দড়ি লাফে আমিই ছিলাম চ্যাম্পিয়ন।" },
];

export async function getGalleryCards({ era = "all" } = {}) {
  "use cache";
  cacheLife("hours");
  await mockDelay();
  return cards.filter((card) => era === "all" || card.era === era);
}
