import gameMarbles from "@/assets/images/game-marbles.jpg";
import gameTop from "@/assets/images/game-top.jpg";
import gollachutField from "@/assets/images/gollachut-field.jpg";
import quizDoor from "@/assets/images/quiz-door.jpg";
import gameKite from "@/assets/images/game-kite.jpg";
import gameHandkerchief from "@/assets/images/game-handkerchief.jpg";

// Base vote counts; a real vote endpoint replaces these once the backend exists.
// `href` is set only where the game has its own page in the library.
export const poll = {
  id: "favourite-game",
  question: "কোন খেলাটা আপনি সবচেয়ে বেশি খেলতেন?",
  highlight: "সবচেয়ে বেশি", // part of the question that gets the marker stroke
  options: [
    { id: "marbles", label: "গুটি (মার্বেল)", icon: "marble", color: "#c4232c", votes: 1248, image: gameMarbles, href: "/games/marbles" },
    { id: "latim", label: "লাটিম", icon: "top", color: "#1e4a38", votes: 980, image: gameTop, href: "/games/latim" },
    { id: "gollachut", label: "গোল্লাছুট", icon: "flag", color: "#e4a72b", votes: 802, image: gollachutField, href: "/games/gollachut" },
    { id: "hide-seek", label: "লুকোচুরি", icon: "door", color: "#2b4a8b", votes: 668, image: quizDoor },
    { id: "kite", label: "ঘুড়ি ওড়ানো", icon: "kite", color: "#8b5fa8", votes: 446, image: gameKite, href: "/games/kite" },
    { id: "kanamachi", label: "কানামাছি", icon: "blind", color: "#2e9c8f", votes: 312, image: gameHandkerchief },
  ],
};
