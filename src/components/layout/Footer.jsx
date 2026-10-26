import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { footerLinks, socialLinks } from "@/api/site";
import logo from "@/assets/images/logo.svg";

const socialIcons = { facebook: FaFacebookF, youtube: FaYoutube, instagram: FaInstagram };

// A row of brass rivets along a metal strip, tiled across the full width
const rivets =
  "bg-[radial-gradient(circle_at_50%_45%,#f3dc9a_0_1.5px,#b8893a_2.5px,#7a5a22_3.5px,transparent_4px)] bg-[length:44px_100%] bg-repeat-x";

// Brass L-bracket for one corner of the trunk; className sets the corner and rotation
const Corner = ({ className = "" }) => (
  <span
    aria-hidden="true"
    className={`absolute z-[2] size-5 border-t-4 border-l-4 border-[#c99a4a] shadow-[inset_1px_1px_0_#f3dc9a] ${className}`}
  />
);

// The footer is the painted tin trunk the site is named after, sitting inside the container:
// a lid on top, a riveted brass band, hand-painted trim, a hasp, brass corners and little feet.
const Footer = () => {
  return (
    <footer className="site-container relative z-[1] mt-16 px-5 pb-8 sm:px-8 lg:mt-24 xl:px-0">
      <div className="relative drop-shadow-[0_22px_30px_rgb(50_20_10/0.45)]">
        {/* Lid: a little wider than the body, with its own lip */}
        <div aria-hidden="true" className="relative -mx-2 h-4 rounded-t-xl bg-[linear-gradient(#8a2a30,#6e1c22)] shadow-[0_3px_4px_rgb(0_0_0/0.35)]" />

        {/* Body */}
        <div className="relative overflow-hidden rounded-b-lg bg-[#6e1c22] text-[#f1dfc0] [background-image:linear-gradient(90deg,rgb(0_0_0/0.3),transparent_14%,rgb(255_255_255/0.07)_50%,transparent_86%,rgb(0_0_0/0.3)),var(--grain)] shadow-[inset_10px_0_14px_-8px_rgb(0_0_0/0.5),inset_-10px_0_14px_-8px_rgb(0_0_0/0.5)]">
          {/* Brass band with rivets, then the painted trim */}
          <div aria-hidden="true" className="relative h-3 bg-[linear-gradient(#e2bf6e,#b8893a_55%,#8a6526)]">
            <div className={`absolute inset-0 ${rivets}`} />
          </div>
          <div aria-hidden="true" className="h-[3px] bg-mustard" />
          <div aria-hidden="true" className="mt-[3px] h-[2px] bg-[#2e9c8f]" />

          <Corner className="top-[22px] left-2" />
          <Corner className="top-[22px] right-2 rotate-90" />
          <Corner className="bottom-2 left-2 -rotate-90" />
          <Corner className="right-2 bottom-2 rotate-180" />

          {/* Name plate in the middle, links on one side, brass studs on the other */}
          <div className="grid items-center gap-4 px-7 pt-9 pb-6 text-sm md:px-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:pt-10 lg:pb-6">
            <nav aria-label="ফুটার" className="order-2 flex flex-wrap justify-center gap-x-6 gap-y-1 lg:order-none lg:justify-start">
              {footerLinks.map((link) => (
                <Link key={link.id} href={link.href} className="inline-flex min-h-11 items-center hover:text-[#f3c968]">
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link href="/" className="relative mx-auto block rounded-md bg-[#f4e6c6] px-8 py-3.5 text-center ring-2 ring-[#c99a4a] shadow-[inset_0_0_0_4px_#f4e6c6,inset_0_0_0_5px_rgb(110_28_34/0.25),0_6px_12px_-4px_rgb(0_0_0/0.45)] [background-image:var(--grain)]">
              {/* Screws */}
              <span aria-hidden="true" className="absolute top-1.5 left-1.5 size-1.5 rounded-full bg-[#9a7330]" />
              <span aria-hidden="true" className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-[#9a7330]" />
              <span aria-hidden="true" className="absolute bottom-1.5 left-1.5 size-1.5 rounded-full bg-[#9a7330]" />
              <span aria-hidden="true" className="absolute right-1.5 bottom-1.5 size-1.5 rounded-full bg-[#9a7330]" />
              <span className="flex items-center justify-center gap-2.5 font-display text-[26px] leading-none font-extrabold text-[#6e1c22]">
                <Image src={logo} alt="" width={34} height={28} />
                স্মৃতির বাক্স
              </span>
              <span className="mt-1.5 block font-hand text-[15px] text-[#8a5a2b]">শৈশব শুধু একটা সময় নয়, এটা একটা অনুভূতি</span>
            </Link>

            <ul className="order-3 flex justify-center gap-2.5 lg:order-none lg:justify-end">
              {socialLinks.map((social) => {
                const Glyph = socialIcons[social.id];
                return (
                  <li key={social.id}>
                    {/* Brass studs */}
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid size-11 place-items-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#f3dc9a,#c99a4a_55%,#8a6526)] text-[#4a1216] shadow-[inset_0_-2px_3px_rgb(0_0_0/0.3),0_2px_4px_rgb(0_0_0/0.35)] transition-transform hover:-translate-y-0.5"
                    >
                      <Glyph className="size-[17px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-t border-[#c99a4a]/40 bg-[#561418]/80">
            <p className="py-2.5 text-center text-xs text-[#d9bf98]">© ২০২৫ স্মৃতির বাক্স</p>
          </div>
        </div>

        {/* Hasp hanging from the lid over the band */}
        <div aria-hidden="true" className="absolute top-1 left-1/2 z-[3] hidden h-12 w-9 -translate-x-1/2 rounded-b-lg border border-[#7a5a22] bg-[linear-gradient(#e8c87a,#b8893a)] shadow-[0_4px_8px_rgb(0_0_0/0.4)] md:block">
          <span className="absolute top-5 left-1/2 h-3 w-1.5 -translate-x-1/2 rounded-full bg-[#3b2a10]" />
        </div>

        {/* Feet */}
        <span aria-hidden="true" className="absolute -bottom-2.5 left-8 h-3 w-12 rounded-b-md bg-[linear-gradient(#b8893a,#7a5a22)]" />
        <span aria-hidden="true" className="absolute right-8 -bottom-2.5 h-3 w-12 rounded-b-md bg-[linear-gradient(#b8893a,#7a5a22)]" />
      </div>
    </footer>
  );
};

export default Footer;
