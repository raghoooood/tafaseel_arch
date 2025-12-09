"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ✅ Detect active page

  // Close menu on Escape + when screen resizes to desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () =>
      window.innerWidth >= 1024 && setOpen(false);

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav
     className="
        sticky top-0 z-[500]  // <— safe but far below modal
        w-full px-6 py-4
        backdrop-blur-xl bg-white/70
        border-b border-gold-light/30
        shadow-[0_4px_30px_rgba(0,0,0,0.04)]
        flex items-center justify-between
">

      {/* LOGO */}
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Tafaseel Logo"
          width={170}
          height={60}
          className="cursor-pointer select-none"
        />
      </Link>

      {/* DESKTOP NAV */}
      <ul className="hidden lg:flex gap-10 items-center">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.key}>
              <Link
                href={link.href}
                className={`
                  relative group font-montserrat font-medium tracking-wide
                  transition-all duration-300 py-2
                  ${
                    isActive
                      ? "text-gold"
                      : "text-charcoal hover:text-gold"
                  }
                `}
              >
                {link.label}

                {/* Luxury underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] 
                    gold-gradient transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* MOBILE HAMBURGER */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle navigation menu"
        className="lg:hidden group flex flex-col justify-center items-center w-10 h-10"
      >
        <span
          className={`
            h-[2px] w-7 bg-charcoal rounded-full transition-all duration-300
            ${open ? "rotate-45 translate-y-[6px]" : ""}
          `}
        />
        <span
          className={`
            h-[2px] w-7 my-1 bg-charcoal rounded-full transition-all duration-300
            ${open ? "opacity-0" : ""}
          `}
        />
        <span
          className={`
            h-[2px] w-7 bg-charcoal rounded-full transition-all duration-300
            ${open ? "-rotate-45 -translate-y-[6px]" : ""}
          `}
        />
      </button>

      {/* MOBILE BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
        />
      )}

      {/* MOBILE MENU PANEL */}
      <div
        className={`
          lg:hidden absolute left-0 right-0 top-full z-50
          transform-gpu transition-all duration-300
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"}
        `}
      >
        <div className="
          bg-white/95 backdrop-blur-xl border-t border-gold-light/20
          shadow-xl rounded-b-3xl px-6 py-6 flex flex-col gap-4
        ">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`
                  text-sm py-3 px-3 rounded-lg font-poppins transition-all
                  ${
                    isActive
                      ? "text-gold bg-gold-light/10"
                      : "text-charcoal hover:bg-gold hover:text-white"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}

          {/* MOBILE BUTTONS */}
          <div className="mt-3 pt-4 border-t border-gold-light/20 flex gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="
                px-4 py-2 gold-gradient text-white rounded-lg text-sm w-full text-center
              "
            >
              Contact Us
            </Link>

            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
