import Image from "next/image";
import Link from "next/link";
import { IdCard, Search } from "lucide-react";
import NavLinks from "@/components/layout/NavLinks";
import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import logo from "@/assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="site-container flex h-16 items-center gap-6 px-5 sm:px-8 lg:h-[84px] xl:px-0">
      <Link href="/" className="flex shrink-0 items-center gap-2.5 font-display text-2xl leading-none font-extrabold text-leaf lg:text-[30px]">
        <Image src={logo} alt="" width={46} height={38} priority className="w-9 lg:w-[46px]" />
        স্মৃতির বাক্স
      </Link>

      <NavLinks />

      <form action="/search" role="search" className="ml-auto hidden h-11 max-w-[300px] flex-1 items-center gap-2.5 rounded-full border-[1.5px] border-[#cdbb95] bg-card/70 px-4 lg:flex">
        <Search aria-hidden="true" className="size-4 shrink-0 text-ink-2" />
        <label htmlFor="site-search" className="sr-only">সাইটে খুঁজুন</label>
        <input id="site-search" name="q" placeholder="খেলা, স্কুল, খাবার…" className="w-full bg-transparent text-[15px] outline-none placeholder:text-ink-3" />
      </form>

      <div className="hidden lg:block">
        <Button href="/card" size="sm">
          <IdCard aria-hidden="true" className="size-[18px]" />
          আমার কার্ড তৈরি করুন
        </Button>
      </div>

      <MobileMenu />
    </header>
  );
};

export default Navbar;
