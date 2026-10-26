import objectMarbles from "@/assets/images/object-marbles.jpg";
import objectTop from "@/assets/images/object-top.jpg";
import objectKite from "@/assets/images/object-kite.jpg";
import gameCricket from "@/assets/images/game-cricket.jpg";
import gameBoat from "@/assets/images/game-boat.jpg";

// Childhood objects stand in for a portrait photo on every card
export const cardObjects = [
  { id: "marbles", label: "মার্বেল", image: objectMarbles },
  { id: "top", label: "লাটিম", image: objectTop },
  { id: "kite", label: "ঘুড়ি", image: objectKite },
  { id: "cricket", label: "ব্যাট-বল", image: gameCricket },
  { id: "boat", label: "কাগজের নৌকা", image: gameBoat },
];

export const cardThemes = [
  { id: "notebook", label: "স্কুল নোটবুক" },
  { id: "rickshaw", label: "রঙিন রিকশা ফুল" },
  { id: "postcard", label: "পুরনো পোস্টকার্ড" },
];

export const cardInks = [
  { id: "blue", label: "নীল কালি", value: "#2b4a8b" },
  { id: "green", label: "সবুজ", value: "#1e4a38" },
  { id: "red", label: "লাল", value: "#a01b23" },
  { id: "brown", label: "বাদামি", value: "#6b4a1f" },
];

export const cardFields = [
  { id: "name", label: "নাম", icon: "id" },
  { id: "nick", label: "ডাকনাম", icon: "tag" },
  { id: "area", label: "এলাকা", icon: "home" },
  { id: "friends", label: "সেরা বন্ধু", icon: "heart" },
  { id: "game", label: "প্রিয় খেলা", icon: "marble" },
  { id: "food", label: "প্রিয় খাবার", icon: "food" },
  { id: "time", label: "প্রিয় সময়", icon: "sun" },
];

export const defaultCard = {
  name: "",
  nick: "",
  area: "",
  friends: "",
  game: "",
  food: "",
  time: "",
  line: "",
  object: "top",
  theme: "rickshaw",
  ink: "blue",
};

export const sampleCard = {
  name: "ফাহিম রহমান",
  nick: "ফাহিমু",
  area: "মিরপুর, ঢাকা",
  friends: "রাকিব, সিয়াম",
  game: "লাটিম",
  food: "ঝালমুড়ি",
  time: "বিকেল",
  line: "আমার শৈশব ছিল মেঘ, রোদ আর গলির খেলায় ভরা!",
  object: "top",
  theme: "rickshaw",
  ink: "blue",
};

export const getCardObject = (id) => cardObjects.find((item) => item.id === id) ?? cardObjects[0];

export const getCardInk = (id) => cardInks.find((item) => item.id === id) ?? cardInks[0];
