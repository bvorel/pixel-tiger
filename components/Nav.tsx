"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PixelTigerLogo from "./PixelTigerLogo";

function PixelIcon() {
  return (
    <div className="h-[14px] w-[15px] overflow-hidden relative shrink-0">
      <div className="absolute inset-[66.61%_0_0_69.61%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/nav/pixel-v1.svg" />
      </div>
      <div className="absolute inset-[0_46.88%_16.68%_22.73%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src="/nav/pixel-v2.svg" />
      </div>
      <div className="absolute bottom-1/2 flex items-center justify-center left-0 right-[24.18%] top-[33.32%]" style={{ containerType: "size" } as React.CSSProperties}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src="/nav/pixel-v3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

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
            <PixelTigerLogo variant="dark" className="h-[71px] md:h-[89px] w-auto" />
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
          <div className="flex flex-col gap-[30px] mb-[30px]">
            <div>
              <img src="/nav/mobile/production.svg" alt="Production" style={{ height: "40px", width: "auto" }} />
            </div>
            <div className="flex items-center gap-[6px]">
              <img src="/nav/mobile/social.svg" alt="Social" style={{ height: "40px", width: "auto" }} />
              <div className="rotate-180">
                <img src="/nav/deco/mobile-sm.svg" alt="" style={{ height: "7px", width: "auto" }} />
              </div>
            </div>
            <div className="flex items-center gap-[6px]">
              <img src="/nav/mobile/digital.svg" alt="Digital" style={{ height: "40px", width: "auto" }} />
              <img src="/nav/deco/mobile-md.svg" alt="" style={{ height: "17px", width: "auto" }} />
            </div>
            <div>
              <img src="/nav/mobile/photography.svg" alt="Photography" style={{ height: "40px", width: "auto" }} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-end gap-[6px]">
                <img src="/nav/mobile/post.svg" alt="Post" style={{ height: "40px", width: "auto" }} />
                <img src="/nav/deco/mobile-lg.svg" alt="" style={{ height: "21px", width: "auto" }} />
              </div>
              <img src="/nav/mobile/post-production.svg" alt="Production" style={{ height: "40px", width: "auto" }} />
            </div>
            <div>
              <img src="/nav/mobile/print.svg" alt="Print" style={{ height: "40px", width: "auto" }} />
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/nav/mobile/ooh.svg" alt="OOH" style={{ height: "40px", width: "auto" }} />
              <img src="/nav/deco/mobile-xs.svg" alt="" style={{ height: "17px", width: "auto" }} />
            </div>
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 bg-espresso text-orange font-black uppercase tracking-[0.75px] hover:bg-cream hover:text-espresso transition-colors"
            style={{ fontFamily: "'greycliff-cf', sans-serif", fontSize: "18px", padding: "16px 24px" }}
          >
            Drop us a Line
            <PixelIcon />
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
            <img src="/nav/desktop/production.svg" alt="Production"
              style={{ position: "absolute", left: 0, top: 0, width: "803px", height: "108px" }} />

            {/* Row 2: Social + Digital */}
            <img src="/nav/desktop/social.svg" alt="Social"
              style={{ position: "absolute", left: "99px", top: "121px", width: "459px", height: "108px" }} />
            <img src="/nav/desktop/digital.svg" alt="Digital"
              style={{ position: "absolute", left: "710px", top: "121px", width: "522px", height: "108px" }} />

            {/* Deco dot (rotated 180°) */}
            <div style={{ position: "absolute", left: "20px", top: "162px", width: "25px", height: "25px", transform: "rotate(180deg)" }}>
              <img src="/nav/deco/desktop-dot.svg" alt="" style={{ width: "100%", height: "100%" }} />
            </div>
            {/* Deco-a */}
            <img src="/nav/deco/desktop-a.svg" alt=""
              style={{ position: "absolute", left: "592px", top: "146px", width: "70px", height: "61px" }} />

            {/* Row 3: Photography */}
            <img src="/nav/desktop/photography.svg" alt="Photography"
              style={{ position: "absolute", left: 0, top: "242px", width: "900px", height: "108px" }} />
            {/* Deco-c */}
            <img src="/nav/deco/desktop-c.svg" alt=""
              style={{ position: "absolute", left: "927px", top: "259px", width: "82px", height: "75px" }} />

            {/* Row 4: Post Production */}
            <img src="/nav/desktop/post.svg" alt="Post"
              style={{ position: "absolute", left: 0, top: "363px", width: "323px", height: "108px" }} />
            <img src="/nav/desktop/post-production.svg" alt="Production"
              style={{ position: "absolute", left: "376px", top: "363px", width: "803px", height: "108px" }} />

            {/* Row 5: Print + OOH */}
            <img src="/nav/desktop/print.svg" alt="Print"
              style={{ position: "absolute", left: "494px", top: "484px", width: "391px", height: "108px" }} />
            <img src="/nav/desktop/ooh.svg" alt="OOH"
              style={{ position: "absolute", left: "989px", top: "484px", width: "241px", height: "108px" }} />
            {/* Deco-b */}
            <img src="/nav/deco/desktop-b.svg" alt=""
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
              Drop us a Line
              <PixelIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
