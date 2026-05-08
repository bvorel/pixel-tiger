"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import PixelTigerLogo from "./PixelTigerLogo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [menuScale, setMenuScale] = useState(1);

  useEffect(() => {
    const update = () => {
      setMenuScale(Math.min(1, window.innerWidth / 1280));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      {/* Top bar */}
      <header className="w-full bg-sage sticky top-0 z-40">
        <div className="mx-auto px-6 flex items-center h-20">
          <Link href="/" className="flex items-center gap-4 flex-1 min-w-0" onClick={() => setOpen(false)}>
            <PixelTigerLogo variant="dark" className="h-15 w-auto shrink-0" />
            <span
              className="hidden md:block text-espresso leading-[1.4] font-black truncate"
              style={{ fontFamily: "'greycliff-cf', sans-serif", fontSize: "26px" }}
            >
              A full-service production, post, and print house.
            </span>
          </Link>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-1.25 p-2 cursor-pointer shrink-0"
          >
            <span className="block w-8 h-0.5 bg-espresso" />
            <span className="block w-8 h-0.5 bg-espresso" />
            <span className="block w-8 h-0.5 bg-espresso" />
          </button>
        </div>
      </header>

      {/* Alt menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-orange flex flex-col overflow-hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo top-left */}
        <div className="p-6 flex-shrink-0">
          <Link href="/" onClick={() => setOpen(false)}>
            <PixelTigerLogo variant="dark" className="h-17.75 md:h-22.25 w-auto" />
          </Link>
        </div>

        {/* Close button - absolute top-right */}
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-0 right-0 w-20 h-20 flex items-center justify-center cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2L18 18M18 2L2 18" stroke="#302e26" strokeWidth="2.5" strokeLinecap="square" />
          </svg>
        </button>

        {/* Mobile menu items */}
        <nav className="md:hidden flex-1 flex flex-col justify-end px-6 pb-8">
          <div className="flex flex-col gap-7.5 mb-7.5">
            <div>
              <Image src="/nav/mobile/production.png" alt="Production" width={297} height={40} style={{ height: "40px", width: "auto" }} />
            </div>
            <div className="flex items-center gap-1.5">
              <Image src="/nav/mobile/social.png" alt="Social" width={170} height={40} style={{ height: "40px", width: "auto" }} />
              <Image src="/nav/deco/mobile-sm.png" alt="" width={7} height={7} style={{ height: "7px", width: "auto" }} />
            </div>
            <div className="flex items-center gap-1.5">
              <Image src="/nav/mobile/digital.png" alt="Digital" width={193} height={40} style={{ height: "40px", width: "auto" }} />
              <Image src="/nav/deco/mobile-md.png" alt="" width={19} height={17} style={{ height: "17px", width: "auto" }} />
            </div>
            <div>
              <Image src="/nav/mobile/photography.png" alt="Photography" width={333} height={40} style={{ height: "40px", width: "auto" }} />
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-end gap-1.5">
                <Image src="/nav/mobile/post.png" alt="Post" width={120} height={40} style={{ height: "40px", width: "auto" }} />
                <Image src="/nav/deco/mobile-lg.png" alt="" width={23} height={21} style={{ height: "21px", width: "auto" }} />
              </div>
              <Image src="/nav/mobile/post-production.png" alt="Production" width={297} height={40} style={{ height: "40px", width: "auto" }} />
            </div>
            <div>
              <Image src="/nav/mobile/print.png" alt="Print" width={145} height={40} style={{ height: "40px", width: "auto" }} />
            </div>
            <div className="flex items-center gap-2.5">
              <Image src="/nav/mobile/ooh.png" alt="Ooh" width={89} height={40} style={{ height: "40px", width: "auto" }} />
              <Image src="/nav/deco/mobile-xs.png" alt="" width={17} height={17} style={{ height: "17px", width: "auto" }} />
            </div>
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 bg-espresso text-orange px-6 py-4 font-black uppercase tracking-[0.75px] hover:bg-cream hover:text-espresso transition-colors"
            style={{ fontFamily: "'greycliff-cf', sans-serif", fontSize: "18px" }}
          >
            Drop us a Line →
          </Link>
        </nav>

        {/* Desktop menu items */}
        <div className="hidden md:flex flex-1 items-end overflow-hidden px-6 pb-6">
          <div
            style={{
              position: "relative",
              width: "1232px",
              height: "600px",
              transformOrigin: "bottom left",
              transform: `scale(${menuScale})`,
              flexShrink: 0,
            }}
          >
            {/* Row 1: Production */}
            <Image src="/nav/desktop/production.png" alt="Production" width={803} height={108}
              style={{ position: "absolute", left: 0, top: 0, width: "803px", height: "108px" }} />

            {/* Row 2: Social + Digital */}
            <Image src="/nav/desktop/social.png" alt="Social" width={459} height={108}
              style={{ position: "absolute", left: "99px", top: "121px", width: "459px", height: "108px" }} />
            <Image src="/nav/desktop/digital.png" alt="Digital" width={522} height={108}
              style={{ position: "absolute", left: "710px", top: "121px", width: "522px", height: "108px" }} />

            {/* Deco dot */}
            <Image src="/nav/deco/desktop-dot.png" alt="" width={25} height={25}
              style={{ position: "absolute", left: "20px", top: "162px", width: "25px", height: "25px" }} />
            {/* Deco-a */}
            <Image src="/nav/deco/desktop-a.png" alt="" width={70} height={61}
              style={{ position: "absolute", left: "592px", top: "146px", width: "70px", height: "61px" }} />

            {/* Row 3: Photography */}
            <Image src="/nav/desktop/photography.png" alt="Photography" width={900} height={108}
              style={{ position: "absolute", left: 0, top: "242px", width: "900px", height: "108px" }} />
            {/* Deco-c */}
            <Image src="/nav/deco/desktop-c.png" alt="" width={82} height={75}
              style={{ position: "absolute", left: "927px", top: "259px", width: "82px", height: "75px" }} />

            {/* Row 4: Post Production */}
            <Image src="/nav/desktop/post.png" alt="Post" width={323} height={108}
              style={{ position: "absolute", left: 0, top: "363px", width: "323px", height: "108px" }} />
            <Image src="/nav/desktop/post-production.png" alt="Production" width={803} height={108}
              style={{ position: "absolute", left: "376px", top: "363px", width: "803px", height: "108px" }} />

            {/* Row 5: Print + OOH */}
            <Image src="/nav/desktop/print.png" alt="Print" width={391} height={108}
              style={{ position: "absolute", left: "494px", top: "484px", width: "391px", height: "108px" }} />
            <Image src="/nav/desktop/ooh.png" alt="Ooh" width={241} height={108}
              style={{ position: "absolute", left: "989px", top: "484px", width: "241px", height: "108px" }} />
            {/* Deco-b */}
            <Image src="/nav/deco/desktop-b.png" alt="" width={61} height={61}
              style={{ position: "absolute", left: "900px", top: "511px", width: "61px", height: "61px" }} />

            {/* Drop us a Line button */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-espresso text-orange font-black uppercase tracking-[0.75px] hover:bg-cream hover:text-espresso transition-colors"
              style={{
                fontFamily: "'greycliff-cf', sans-serif",
                fontSize: "20px",
                padding: "16px 24px",
                position: "absolute",
                left: 0,
                top: "546px",
              }}
            >
              Drop us a Line →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
