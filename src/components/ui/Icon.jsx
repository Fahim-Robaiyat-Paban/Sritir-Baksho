import { BookOpen, CloudRain, DoorOpen, Flag, Heart, House, IdCard, MapPin, Moon, Soup, Sun, Tag } from "lucide-react";

// Object icons drawn to match Lucide's 24px / 2px-stroke style (no people, no animals)
const Marble = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="7" cy="15" r="4" />
    <circle cx="17" cy="15" r="4" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SpinningTop = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v4M5 9h14l-7 12zM6.5 11.5h11" />
  </svg>
);

const Kite = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l7 7-7 9-7-9zM5 9h14M12 2v16M12 18c-1 2 1 3 0 4" />
  </svg>
);

const Blindfold = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 11c6-3 14-3 20 0v3c-6-3-14-3-20 0zM20 14l1 5M18 14l-1 5" />
  </svg>
);

const icons = {
  id: IdCard,
  tag: Tag,
  home: House,
  pin: MapPin,
  heart: Heart,
  food: Soup,
  sun: Sun,
  book: BookOpen,
  rain: CloudRain,
  door: DoorOpen,
  flag: Flag,
  moon: Moon,
  marble: Marble,
  top: SpinningTop,
  kite: Kite,
  blind: Blindfold,
};

const Icon = ({ name, className = "size-5" }) => {
  const Glyph = icons[name] ?? Heart;
  return <Glyph aria-hidden="true" className={className} />;
};

export default Icon;
