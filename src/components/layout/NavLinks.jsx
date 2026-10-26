"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/api/site";

export const isActivePath = (pathname, href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="প্রধান মেনু" className="ml-3 hidden gap-6 text-base font-semibold text-ink-2 lg:flex">
      {navLinks.map((link) => {
        const active = isActivePath(pathname, link.href);
        return (
          <Link
            key={link.id}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`border-b-2 py-1.5 transition-colors ${active ? "border-brick text-brick" : "border-transparent hover:text-leaf"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
