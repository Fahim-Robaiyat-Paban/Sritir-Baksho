"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { Menu, Search, X } from "lucide-react";
import { navLinks } from "@/api/site";
import { buttonClass } from "@/components/ui/Button";
import { isActivePath } from "@/components/layout/NavLinks";
import { EASE } from "@/lib/utils/motion";

const subscribe = () => () => {};

const MobileMenu = () => {
  const pathname = usePathname();
  const lenis = useLenis();
  // The drawer belongs to the page it was opened on, so navigating closes it
  const [openedOn, setOpenedOn] = useState(null);
  const open = openedOn === pathname;
  const setOpen = (value) => setOpenedOn(value ? pathname : null);
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    if (!open) return undefined;
    lenis?.stop();
    const onKey = (event) => {
      if (event.key === "Escape") setOpenedOn(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  return (
    <>
      <button
        type="button"
        aria-label="মেনু খুলুন"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="ml-auto grid size-11 place-items-center text-leaf lg:hidden"
      >
        <Menu className="size-7" />
      </button>

      {isClient &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <motion.button
                  type="button"
                  aria-label="মেনু বন্ধ করুন"
                  className="absolute inset-0 bg-ink/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label="মেনু"
                  className="paper absolute inset-y-0 right-0 flex w-[82%] max-w-sm flex-col p-6"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <button
                    type="button"
                    aria-label="মেনু বন্ধ করুন"
                    onClick={() => setOpen(false)}
                    className="ml-auto grid size-11 place-items-center text-leaf"
                  >
                    <X className="size-7" />
                  </button>

                  <form action="/search" className="mt-2 flex h-12 items-center gap-2.5 rounded-full border-[1.5px] border-[#cdbb95] bg-card px-4">
                    <Search aria-hidden="true" className="size-4 text-ink-2" />
                    <label htmlFor="mobile-search" className="sr-only">খুঁজুন</label>
                    <input id="mobile-search" name="q" placeholder="খেলা, গল্প…" className="w-full bg-transparent text-base outline-none placeholder:text-ink-3" />
                  </form>

                  <nav aria-label="মোবাইল মেনু" className="mt-6 flex flex-col">
                    {navLinks.map((link) => (
                      <Link
                        key={link.id}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-12 items-center border-b border-dashed border-line font-display text-xl font-bold ${
                          isActivePath(pathname, link.href) ? "text-brick" : "text-leaf"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <Link href="/card" onClick={() => setOpen(false)} className={buttonClass({ size: "lg", className: "mt-auto" })}>
                    আমার কার্ড তৈরি করুন
                  </Link>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default MobileMenu;
