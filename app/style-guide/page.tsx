"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PixelTigerLogo from "@/components/PixelTigerLogo";

const NAV_ITEMS = [
  { id: "colors",      label: "Colors" },
  { id: "typography",  label: "Typography" },
  { id: "interactive", label: "Interactive States" },
];

const COLORS = [
  { name: "Espresso",    hex: "#302E26", rgb: "48, 46, 38",     onDark: true  },
  { name: "Cream",       hex: "#F5EFE3", rgb: "245, 239, 227",  onDark: false },
  { name: "Tiger Orange",hex: "#FF6222", rgb: "255, 98, 34",    onDark: false },
  { name: "Sage",        hex: "#5EA288", rgb: "94, 162, 136",   onDark: false },
  { name: "Red",         hex: "#FF5E5E", rgb: "255, 94, 94",    onDark: false },
  { name: "Paper",       hex: "#FFFEF7", rgb: "255, 254, 247",  onDark: false },
];

function relativeLuminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const lin = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function SubHeader({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-orange pb-5 mb-10 w-full">
      <h3>{title}</h3>
    </div>
  );
}

function ColorVar({ color, panelBg, label }: { color: string; panelBg: string; label?: string }) {
  const isDark = panelBg.toLowerCase() === "#302e26";
  return (
    <div
      className="h-[14px] w-[100px] flex overflow-hidden shrink-0"
      style={{ backgroundColor: color }}
    >
      <div className="h-full w-[14px] shrink-0 border border-[rgba(128,128,128,0.4)]" />
      <div
        className="flex-1 flex items-center pl-2 overflow-hidden"
        style={{ backgroundColor: panelBg }}
      >
        <span
          className={`font-inter text-[11px] font-normal whitespace-nowrap leading-[1.1] ${
            isDark ? "text-white/90" : "text-black/90"
          }`}
        >
          {label ?? color.toUpperCase()}
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Colors Section
// ---------------------------------------------------------------------------

const ELEMENT_BG_IMAGE = "https://www.figma.com/api/mcp/asset/c1d8558c-b546-4ca2-9422-0437418931ac";

const ELEMENT_PANELS: Array<{
  bg: string | null;
  bgImage?: string;
  varBg: string;
  items: Array<{ text: string; style: React.CSSProperties; cls: string; swatch: string; label?: string }>;
}> = [
  {
    bg: "#302E26",
    varBg: "#302E26",
    items: [
      { text: "Heading",         style: { color: "#F5EFE3" }, cls: "text-[40px] font-black uppercase tracking-[-1px] leading-[1.1]",    swatch: "#F5EFE3" },
      { text: "Paragraph",       style: { color: "#F5EFE3" }, cls: "text-[20px] font-medium leading-[1.4]",                             swatch: "#F5EFE3" },
      { text: "Link",            style: { color: "#FF6222" }, cls: "text-[20px] font-medium leading-[1.4] underline",                   swatch: "#FF6222" },
      { text: "Emphasis",        style: { color: "#5EA288" }, cls: "text-[26px] font-black uppercase tracking-[-0.5px] leading-[1.2]",  swatch: "#5EA288" },
      { text: "Site Background", style: { color: "#F5EFE3" }, cls: "text-base font-medium leading-[1.4]",                              swatch: "#302E26" },
      { text: "Divider",         style: { color: "#F5EFE3" }, cls: "text-base font-medium leading-[1.4]",                              swatch: "#FF6222" },
    ],
  },
  {
    bg: null,
    bgImage: ELEMENT_BG_IMAGE,
    varBg: "#7cb19d",
    items: [
      { text: "Heading",            style: { color: "#302E26" }, cls: "text-[40px] font-black uppercase tracking-[-1px] leading-[1.1]",    swatch: "#302E26" },
      { text: "Paragraph",          style: { color: "#302E26" }, cls: "text-[20px] font-medium leading-[1.4]",                            swatch: "#302E26" },
      { text: "Link",               style: { color: "#302E26" }, cls: "text-[20px] font-medium leading-[1.4] underline",                  swatch: "#302E26" },
      { text: "Emphasis",           style: { color: "#302E26" }, cls: "text-[32px] font-black uppercase tracking-[-0.5px] leading-[1.1]", swatch: "#302E26" },
      { text: "Section Background", style: { color: "#302E26" }, cls: "text-base font-medium leading-[1.4]",                             swatch: "#7cb19d", label: "Image" },
      { text: "Divider",            style: { color: "#302E26" }, cls: "text-base font-medium leading-[1.4]",                             swatch: "#302E26" },
    ],
  },
  {
    bg: "#5EA288",
    varBg: "#5EA288",
    items: [
      { text: "Heading",            style: { color: "#302E26" }, cls: "text-[40px] font-black uppercase tracking-[-1px] leading-[1.1]",    swatch: "#302E26" },
      { text: "Paragraph",          style: { color: "#302E26" }, cls: "text-[20px] font-medium leading-[1.4]",                            swatch: "#302E26" },
      { text: "Link",               style: { color: "#302E26" }, cls: "text-[20px] font-medium leading-[1.4] underline",                  swatch: "#302E26" },
      { text: "Emphasis",           style: { color: "#302E26" }, cls: "text-[32px] font-black uppercase tracking-[-0.5px] leading-[1.1]", swatch: "#302E26" },
      { text: "Section Background", style: { color: "#302E26" }, cls: "text-base font-medium leading-[1.4]",                             swatch: "#5EA288" },
      { text: "Divider",            style: { color: "#302E26" }, cls: "text-base font-medium leading-[1.4]",                             swatch: "#302E26" },
    ],
  },
  {
    bg: "#FF6222",
    varBg: "#FF6222",
    items: [
      { text: "Heading",            style: { color: "#302E26" }, cls: "text-[40px] font-black uppercase tracking-[-1px] leading-[1.1]",    swatch: "#302E26" },
      { text: "Paragraph",          style: { color: "#302E26" }, cls: "text-[20px] font-medium leading-[1.4]",                            swatch: "#302E26" },
      { text: "Link",               style: { color: "#302E26" }, cls: "text-[20px] font-medium leading-[1.4] underline",                  swatch: "#302E26" },
      { text: "Emphasis",           style: { color: "#302E26" }, cls: "text-[26px] font-black uppercase tracking-[-0.5px] leading-[1.2]", swatch: "#302E26" },
      { text: "Section Background", style: { color: "#302E26" }, cls: "text-base font-medium leading-[1.4]",                             swatch: "#FF6222" },
      { text: "Divider",            style: { color: "#302E26" }, cls: "text-base font-medium leading-[1.4]",                             swatch: "#302E26" },
    ],
  },
];

function ColorsSection() {
  const contrastMatrix = COLORS.map((bg) =>
    COLORS.map((fg) => {
      if (bg.hex === fg.hex) return { ratio: 1, badge: "", isSame: true };
      const bgL = relativeLuminance(bg.hex);
      const fgL = relativeLuminance(fg.hex);
      const ratio = (Math.max(bgL, fgL) + 0.05) / (Math.min(bgL, fgL) + 0.05);
      const badge = ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : "Fail";
      return { ratio, badge, isSame: false };
    })
  );

  return (
    <section id="colors" className="p-10">

      {/* PRIMARY */}
      <div className="mb-12">
        <SubHeader title="Primary" />
        <div className="flex gap-[10px] flex-wrap">
          {COLORS.map((c) => (
            <div
              key={c.name}
              className="w-[150px] h-[150px] flex flex-col justify-end border border-[rgba(128,128,128,0.4)] shrink-0"
              style={{ backgroundColor: c.hex }}
            >
              <div className="bg-[rgba(242,242,242,0.9)] p-1.5 flex flex-col gap-1">
                <p className="font-inter text-base font-semibold leading-[1.2] text-black capitalize">
                  {c.name}
                </p>
                <p className="font-inter text-xs font-normal leading-[1.1] text-black/80 uppercase">
                  {c.hex}
                </p>
                <p className="font-inter text-xs font-normal leading-[1.1] text-black/80">
                  rgb({c.rgb})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ADA GUIDELINES PASSABILITY */}
      <div className="mb-12">
        <SubHeader title="ADA Guidelines Passability" />
        <div className="overflow-x-auto">
          <div className="flex flex-col gap-1" style={{ minWidth: "max-content" }}>

            {/* Column header row */}
            <div className="flex gap-1">
              <div className="w-[220px] h-[90px] shrink-0" />
              {COLORS.map((col) => (
                <div
                  key={col.hex}
                  className="w-[170px] h-[90px] shrink-0 border border-[rgba(128,128,128,0.4)] px-3 py-2 flex flex-col justify-center gap-1"
                  style={{ backgroundColor: col.hex }}
                >
                  <p
                    className="font-inter text-xs font-normal leading-[1.3]"
                    style={{ color: col.onDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)" }}
                  >
                    {col.name.toLowerCase()}
                  </p>
                  <p
                    className="font-inter text-sm font-semibold leading-[1.3]"
                    style={{ color: col.onDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)" }}
                  >
                    {col.hex.toLowerCase()}
                  </p>
                </div>
              ))}
            </div>

            {/* Data rows */}
            {COLORS.map((row, rowIdx) => (
              <div key={row.hex} className="flex gap-1">
                <div
                  className="w-[220px] h-[90px] shrink-0 border border-[rgba(128,128,128,0.4)] px-3 py-2 flex flex-col justify-center gap-1"
                  style={{ backgroundColor: row.hex }}
                >
                  <p
                    className="font-inter text-xs font-normal leading-[1.3]"
                    style={{ color: row.onDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)" }}
                  >
                    {row.name.toLowerCase()}
                  </p>
                  <p
                    className="font-inter text-sm font-semibold leading-[1.3]"
                    style={{ color: row.onDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)" }}
                  >
                    {row.hex.toLowerCase()}
                  </p>
                </div>
                {COLORS.map((col, colIdx) => {
                  const cell = contrastMatrix[rowIdx][colIdx];
                  return (
                    <div
                      key={col.hex}
                      className="w-[170px] h-[90px] shrink-0 border border-[rgba(128,128,128,0.4)] p-2 flex flex-col justify-between"
                      style={{ backgroundColor: row.hex, opacity: cell.isSame ? 0 : 1 }}
                    >
                      {!cell.isSame && (
                        <>
                          <p
                            className="font-inter text-sm font-normal leading-[1.3]"
                            style={{ color: col.hex }}
                          >
                            Text
                          </p>
                          <div className="inline-flex gap-1 bg-[#f5f7fa] px-1 py-0.5 rounded-sm">
                            <span className="font-inter text-[10px] text-[#3f4d5a] leading-[1.3]">
                              {cell.ratio.toFixed(2)}
                            </span>
                            <span className="font-inter text-[10px] text-[#3f4d5a] leading-[1.3]">
                              {cell.badge}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <p className="font-inter text-base text-white/90 mt-4">
          Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point
          (typically 24px) or larger.
        </p>
      </div>

      {/* ELEMENT COLORS */}
      <div>
        <SubHeader title="Element Colors" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {ELEMENT_PANELS.map((panel, i) => (
            <div
              key={panel.bg ?? `image-${i}`}
              className="border border-[rgba(128,128,128,0.4)] p-8 flex flex-col gap-8 relative overflow-hidden"
              style={panel.bg ? { backgroundColor: panel.bg } : {}}
            >
              {panel.bgImage && (
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  src={panel.bgImage}
                />
              )}
              {panel.items.map((item) => (
                <div key={item.text} className="flex items-center gap-2 relative z-10">
                  <p
                    className={`flex-1 text-center font-greycliff ${item.cls}`}
                    style={item.style}
                  >
                    {item.text}
                  </p>
                  <ColorVar color={item.swatch} panelBg={panel.varBg} label={item.label} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Typography Section
// ---------------------------------------------------------------------------

const HEADINGS = [
  { tag: "h1" as const, size: "80px", mobileSz: "54px", lh: "110%", ls: "-1px"  },
  { tag: "h2" as const, size: "64px", mobileSz: "40px", lh: "110%", ls: "-1px"  },
  { tag: "h3" as const, size: "40px", mobileSz: "34px", lh: "110%", ls: "-1px"  },
  { tag: "h4" as const, size: "32px", mobileSz: "28px", lh: "110%", ls: "-0.5px"},
  { tag: "h5" as const, size: "26px", mobileSz: "22px", lh: "120%", ls: "-0.5px"},
  { tag: "h6" as const, size: "20px", mobileSz: "20px", lh: "120%", ls: "0px"   },
];

const ALPHABET = (
  <>
    <p className="leading-[1.2] mb-0">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
    <p className="leading-[1.2] mb-0">abcdefghijklmnopqrstuvwxyz</p>
    <p className="leading-[1.2]">1234567890-.,!?&apos; &ldquo;&rdquo;</p>
  </>
);

function TypoSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-[1_0_0] min-w-px flex flex-col gap-[5px]">
      <p className="font-inter text-[12px] text-white/40">{label}</p>
      <p className="font-inter text-[16px] text-white/90">{value}</p>
    </div>
  );
}

function TypographySection() {
  return (
    <section id="typography" className="p-10">

      {/* FONTS */}
      <div className="mb-12">
        <SubHeader title="Fonts" />
        <div className="flex flex-col gap-10">

          {/* Headings & Buttons panel */}
          <div className="bg-espresso border border-[rgba(128,128,128,0.4)] flex flex-col gap-5 px-5 py-[30px]">
            <p className="font-greycliff font-black text-[20px] text-cream uppercase leading-[1.2] whitespace-nowrap">
              Headings &amp; Buttons
            </p>
            <div className="flex gap-[30px] items-start w-full overflow-x-auto">
              <div className="flex-[1_0_0] min-w-0 flex flex-col gap-4 text-cream/90 leading-[1.2]">
                <p className="font-greycliff font-black text-[60px] w-full">Greycliff CF</p>
                <p className="font-inter font-normal text-[20px]">Adobe Font</p>
              </div>
              <div className="w-[400px] shrink-0 flex flex-col leading-[1.2] text-cream/90">
                <p className="font-greycliff font-black text-[20px]">Heavy</p>
              </div>
              <div className="w-[600px] shrink-0 text-cream/90">
                <div className="font-greycliff font-black text-[24px]">{ALPHABET}</div>
              </div>
            </div>
          </div>

          {/* Body panel */}
          <div className="bg-espresso border border-[rgba(128,128,128,0.4)] flex flex-col gap-5 px-5 py-[30px]">
            <p className="font-greycliff font-black text-[20px] text-cream uppercase leading-[1.2] whitespace-nowrap">
              Body
            </p>
            <div className="flex gap-[30px] items-start w-full overflow-x-auto">
              <div className="flex-[1_0_0] min-w-0 flex flex-col gap-4 text-cream/90 leading-[1.2]">
                <p className="font-greycliff font-medium text-[60px] w-full">Greycliff CF</p>
                <p className="font-inter font-normal text-[20px]">Adobe Font</p>
              </div>
              <div className="w-[400px] shrink-0 flex flex-col gap-4 leading-[1.2] text-[20px] text-cream/90">
                <p className="font-greycliff font-medium">Medium</p>
                <p className="font-greycliff font-medium italic">Medium Oblique</p>
                <p className="font-greycliff font-black">Heavy</p>
                <p className="font-greycliff font-black italic">Heavy Oblique</p>
              </div>
              <div className="w-[600px] shrink-0 text-cream/90">
                <div className="font-greycliff font-medium text-[24px]">{ALPHABET}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <div>
        <SubHeader title="Styles" />
        <div className="flex flex-col gap-[40px]">

          {/* Column headers */}
          <div className="flex gap-[30px]">
            <div className="flex-[1_0_0] min-w-px border-b-2 border-orange pb-5">
              <p className="font-greycliff font-black text-[20px] text-cream uppercase leading-[1.2]">Desktop</p>
            </div>
            <div className="w-[400px] shrink-0 border-b-2 border-orange pb-5">
              <p className="font-greycliff font-black text-[20px] text-cream uppercase leading-[1.2]">Mobile</p>
            </div>
          </div>

          {/* Heading rows */}
          {HEADINGS.map(({ tag: Tag, size, mobileSz, lh, ls }) => (
            <div key={size} className="flex gap-[30px] items-start">
              <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                <div className="bg-espresso border border-[rgba(128,128,128,0.4)] px-5 py-[30px] overflow-hidden">
                  <Tag className="whitespace-nowrap">{Tag.toUpperCase()} Heading</Tag>
                </div>
                <div className="flex gap-[10px]">
                  <TypoSpec label="Font" value="Greycliff CF" />
                  <TypoSpec label="Weight" value="Heavy" />
                  <TypoSpec label="Size" value={size} />
                  <TypoSpec label="Line Height" value={lh} />
                  <TypoSpec label="Letter Spacing" value={ls} />
                  <TypoSpec label="Case" value="Uppercase" />
                </div>
              </div>
              <div className="w-[400px] shrink-0 self-stretch flex flex-col gap-[10px]">
                <div className="bg-espresso border border-[rgba(128,128,128,0.4)] px-5 py-[30px] flex-1 overflow-hidden flex items-center">
                  <Tag style={{ fontSize: mobileSz }} className="whitespace-nowrap">{Tag.toUpperCase()} Heading</Tag>
                </div>
                <div className="flex">
                  <TypoSpec label="Size" value={mobileSz} />
                </div>
              </div>
            </div>
          ))}

          {/* Paragraph */}
          <div className="flex gap-[30px] items-start">
            <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 flex flex-col gap-[30px]">
                <div className="font-greycliff font-medium text-[20px] text-cream leading-[1.4]">
                  <p className="mb-4">Paragraph. Lorem ipsum dolor sit amet consectetur. Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales. Bibendum neque viverra commodo tortor amet sollicitudin.</p>
                  <p>Donec ac dictum mi hendrerit nec etiam praesent. Volutpat netus ut egestas pharetra. Lacinia tortor sagittis velit maecenas vitae ornare ornare congue. Massa est quis nulla curabitur.{" "}
                    <span className="text-orange underline">Inline text links should underline and be link color</span>.
                  </p>
                </div>
                <div className="flex gap-[6px] items-center whitespace-nowrap">
                  <span className="font-greycliff font-black text-[20px] text-cream leading-[1.4]">Bold</span>
                  <span className="font-greycliff font-medium italic text-[20px] text-cream leading-[1.4]">Italic</span>
                  <span className="font-greycliff font-medium text-[20px] text-orange underline leading-[1.4]">Link</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <TypoSpec label="Font" value="Greycliff CF" />
                <TypoSpec label="Weight" value="Medium" />
                <TypoSpec label="Size" value="20px" />
                <TypoSpec label="Line Height" value="140%" />
                <TypoSpec label="Letter Spacing" value="0px" />
                <TypoSpec label="Paragraph Spacing" value="16px" />
              </div>
            </div>
            <div className="w-[400px] shrink-0 self-stretch flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 flex-1 flex flex-col gap-[30px]">
                <p className="font-greycliff font-medium text-[18px] text-cream leading-[1.4]">
                  Paragraph. Lorem ipsum dolor sit amet consectetur. Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales.
                </p>
                <div className="flex gap-[6px] items-center whitespace-nowrap">
                  <span className="font-greycliff font-black text-[18px] text-cream leading-[1.4]">Bold</span>
                  <span className="font-greycliff font-medium italic text-[18px] text-cream leading-[1.4]">Italic</span>
                  <span className="font-greycliff font-medium text-[18px] text-orange underline leading-[1.4]">Link</span>
                </div>
              </div>
              <div className="flex">
                <TypoSpec label="Size" value="18px" />
              </div>
            </div>
          </div>

          {/* Lists */}
          <div className="flex gap-[30px] items-start">
            <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5">
                <div className="grid grid-cols-2 gap-[10px] font-greycliff font-medium text-[20px] text-cream leading-[1.4]">
                  <ol className="list-decimal pl-[30px]">
                    <li className="mb-2">Ordered List</li>
                    <li className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li className="mb-2">Morbi et nisl hendrerit.</li>
                    <li className="mb-2">Aliquet mi sed, scelerisque tortor.</li>
                    <li className="mb-2">Aliquam eu scelerisque quam.</li>
                    <li className="mb-2">Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales. Bibendum neque viverra commodo tortor amet sollicitudin.</li>
                    <li>Aliquam nulla risus, fermentum feugiat tortor quis, facilisis cursus arcu.</li>
                  </ol>
                  <ul className="list-disc pl-[30px]">
                    <li className="mb-2">Unordered List</li>
                    <li className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li className="mb-2">Morbi et nisl hendrerit.</li>
                    <li className="mb-2">Aliquet mi sed, scelerisque tortor.</li>
                    <li className="mb-2">Aliquam eu scelerisque quam.</li>
                    <li className="mb-2">Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales. Bibendum neque viverra commodo tortor amet sollicitudin.</li>
                    <li>Aliquam nulla risus, fermentum feugiat tortor quis, facilisis cursus arcu.</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <TypoSpec label="Font" value="Greycliff CF" />
                <TypoSpec label="Weight" value="Medium" />
                <TypoSpec label="Size" value="20px" />
                <TypoSpec label="Line Height" value="140%" />
                <TypoSpec label="Letter Spacing" value="0px" />
                <TypoSpec label="Paragraph Spacing" value="16px" />
              </div>
            </div>
            <div className="w-[400px] shrink-0 self-stretch flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 flex-1 flex flex-col gap-[30px] font-greycliff font-medium text-[18px] text-cream leading-[1.4]">
                <ol className="list-decimal pl-[27px]">
                  <li className="mb-2">Ordered List</li>
                  <li className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales.</li>
                </ol>
                <ul className="list-disc pl-[27px]">
                  <li className="mb-2">Unordered List</li>
                  <li className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales.</li>
                </ul>
              </div>
              <div className="flex">
                <TypoSpec label="Size" value="18px" />
              </div>
            </div>
          </div>

          {/* Small Paragraph */}
          <div className="flex gap-[30px] items-start">
            <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5">
                <div className="font-greycliff font-medium text-[16px] text-cream leading-[1.4]">
                  <p className="mb-4">Small Paragraph. Lorem ipsum dolor sit amet consectetur. Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales. Bibendum neque viverra commodo tortor amet sollicitudin.</p>
                  <p>Donec ac dictum mi hendrerit nec etiam praesent. Volutpat netus ut egestas pharetra. Lacinia tortor sagittis velit maecenas vitae ornare ornare congue. Massa est quis nulla curabitur.</p>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <TypoSpec label="Font" value="Greycliff CF" />
                <TypoSpec label="Weight" value="Medium" />
                <TypoSpec label="Size" value="16px" />
                <TypoSpec label="Line Height" value="140%" />
                <TypoSpec label="Letter Spacing" value="0px" />
                <TypoSpec label="Paragraph Spacing" value="16px" />
              </div>
            </div>
            <div className="w-[400px] shrink-0 self-stretch flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 flex-1">
                <p className="font-greycliff font-medium text-[16px] text-cream leading-[1.4]">Small Paragraph. Lorem ipsum dolor sit amet consectetur. Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales.</p>
              </div>
              <div className="flex">
                <TypoSpec label="Size" value="16px" />
              </div>
            </div>
          </div>

          {/* Large Paragraph */}
          <div className="flex gap-[30px] items-start">
            <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5">
                <div className="font-greycliff font-medium text-[26px] text-cream leading-[1.4]">
                  <p className="mb-4">Large Paragraph. Lorem ipsum dolor sit amet consectetur. Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales. Bibendum neque viverra commodo tortor amet sollicitudin.</p>
                  <p>Donec ac dictum mi hendrerit nec etiam praesent. Volutpat netus ut egestas pharetra. Lacinia tortor sagittis velit maecenas vitae ornare ornare congue. Massa est quis nulla curabitur.</p>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <TypoSpec label="Font" value="Greycliff CF" />
                <TypoSpec label="Weight" value="Medium" />
                <TypoSpec label="Size" value="26px" />
                <TypoSpec label="Line Height" value="140%" />
                <TypoSpec label="Letter Spacing" value="0px" />
                <TypoSpec label="Paragraph Spacing" value="16px" />
              </div>
            </div>
            <div className="w-[400px] shrink-0 self-stretch flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 flex-1">
                <p className="font-greycliff font-medium text-[22px] text-cream leading-[1.4]">Large Paragraph. Lorem ipsum dolor sit amet consectetur. Amet elementum purus morbi sapien vitae. Risus augue duis sit venenatis cras lorem sodales.</p>
              </div>
              <div className="flex">
                <TypoSpec label="Size" value="22px" />
              </div>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="flex gap-[30px] items-start">
            <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5">
                <p className="font-greycliff font-medium italic text-[26px] text-cream leading-[1.4]">
                  &ldquo;Pull quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus in. Faucibus nisl tincidunt eget nullam non nisi est sit amet.&rdquo;
                </p>
              </div>
              <div className="flex gap-[10px]">
                <TypoSpec label="Font" value="Greycliff CF" />
                <TypoSpec label="Weight" value="Medium Oblique" />
                <TypoSpec label="Size" value="26px" />
                <TypoSpec label="Line Height" value="140%" />
                <TypoSpec label="Letter Spacing" value="0px" />
                <TypoSpec label="Paragraph Spacing" value="16px" />
              </div>
            </div>
            <div className="w-[400px] shrink-0 self-stretch flex flex-col gap-[10px]">
              <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 flex-1">
                <p className="font-greycliff font-medium italic text-[22px] text-cream leading-[1.4]">
                  &ldquo;Pull quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.&rdquo;
                </p>
              </div>
              <div className="flex">
                <TypoSpec label="Size" value="22px" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Interactive States Section
// ---------------------------------------------------------------------------

const BTN_PIXELS: Record<string, Record<string, [string, string, string]>> = {
  orange: {
    default:  ["https://www.figma.com/api/mcp/asset/1eaafc22-e697-4889-a092-aaaa2f2e5be5","https://www.figma.com/api/mcp/asset/b1447c60-0492-4918-810d-9c094f4b6931","https://www.figma.com/api/mcp/asset/40df98e7-254d-437e-9f14-84190e346b1f"],
    hover:    ["https://www.figma.com/api/mcp/asset/2de1d6fb-4e08-4856-a766-1bbc0a1f832a","https://www.figma.com/api/mcp/asset/e5ee0472-478b-42c5-8d38-6651934ca719","https://www.figma.com/api/mcp/asset/48d300d3-8f05-49d2-8931-91100742e5d7"],
    disabled: ["https://www.figma.com/api/mcp/asset/f6dbf682-9e5f-45b4-b16c-64b0d7cfb9f6","https://www.figma.com/api/mcp/asset/54545f1b-2874-4b28-b39d-32e4ec81aacf","https://www.figma.com/api/mcp/asset/da33bc98-2825-41e8-ae3e-265e4e7b9a89"],
  },
  sage: {
    default:  ["https://www.figma.com/api/mcp/asset/3a6195e8-5d96-47ff-88e8-da54566b88fb","https://www.figma.com/api/mcp/asset/bf381ab2-1c6a-4ccb-9ea7-7f77cee9682c","https://www.figma.com/api/mcp/asset/4b2984a8-c298-4fb6-a4cd-56e69fcb5292"],
    hover:    ["https://www.figma.com/api/mcp/asset/dc4168e1-d0bc-4611-b6f1-b070881bf4ed","https://www.figma.com/api/mcp/asset/d6b712d7-0cf0-4946-89d1-aa51e8d4a436","https://www.figma.com/api/mcp/asset/b52f495a-86d4-4d31-bbb4-14de862d133e"],
    disabled: ["https://www.figma.com/api/mcp/asset/a31d92e5-4dbe-458a-883d-8bf375aaccd1","https://www.figma.com/api/mcp/asset/1768352f-cd2f-46e0-b36d-4765e2f9f3c4","https://www.figma.com/api/mcp/asset/bb8b210f-f887-40e6-a49b-55552606e1de"],
  },
};


function PixelIcon({ v }: { v: [string, string, string] }) {
  return (
    <div className="h-[14px] w-[15px] overflow-hidden relative shrink-0">
      <div className="absolute inset-[66.61%_0_0_69.61%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={v[0]} />
      </div>
      <div className="absolute inset-[0_46.88%_16.68%_22.73%]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={v[1]} />
      </div>
      <div className="absolute bottom-1/2 flex items-center justify-center left-0 right-[24.18%] top-[33.32%]" style={{ containerType: "size" } as React.CSSProperties}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={v[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BtnColorChip({ label: chipLabel, color }: { label: string; color: string }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <p className="font-inter text-[12px] text-white/40 leading-[1.1]">{chipLabel}</p>
      <div className="h-[14px] w-full flex overflow-hidden" style={{ backgroundColor: color }}>
        <div className="h-full w-[14px] shrink-0 border border-[rgba(128,128,128,0.4)]" />
        <div className="flex-1 flex items-center pl-2 overflow-hidden bg-espresso">
          <span className="font-inter text-[11px] text-white/90 whitespace-nowrap leading-[1.1]">
            {color.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}

function InteractiveSection() {
  const [formInputs, setFormInputs] = useState(["", "Field Text", "Field Text", "Field Text"]);
  const [selectOpen, setSelectOpen] = useState([false, false, true, false]);
  const [checkStates, setCheckStates] = useState([false, true, true, true]);
  const [radioStates, setRadioStates] = useState([false, true, true, true]);
  const [toggleStates, setToggleStates] = useState([false, true, true, false]);

  const FORM_COLS = [
    { borderColor: "#F5EFE3", borderWidth: "1px" },
    { borderColor: "#F5EFE3", borderWidth: "1px" },
    { borderColor: "#5EA288", borderWidth: "2px" },
    { borderColor: "#FF0000", borderWidth: "2px" },
  ];

  return (
    <section id="interactive" className="p-10">

      {/* BUTTONS */}
      <div className="mb-12">
        <SubHeader title="Buttons" />

        {/* Typography specs */}
        <div className="flex gap-[10px] items-start w-full mb-[40px]">
          <TypoSpec label="Font" value="Greycliff CF" />
          <TypoSpec label="Weight" value="Heavy" />
          <TypoSpec label="Case" value="Uppercase" />
          <TypoSpec label="Size" value="20px" />
          <TypoSpec label="Line Height" value="100%" />
          <TypoSpec label="Letter Spacing" value="0px" />
        </div>

        <div className="flex flex-col gap-[40px]">

          {/* Column headers */}
          <div className="flex gap-[30px]">
            {(["Default", "Hover/Active", "Disabled"] as const).map((lbl) => (
              <div key={lbl} className="flex-[1_0_0] min-w-px border-b-2 border-orange pb-5">
                <p className="font-greycliff font-black text-[20px] text-cream uppercase leading-[1.2]">{lbl}</p>
              </div>
            ))}
          </div>

          {/* Orange Fill buttons */}
          <div className="flex gap-[30px]">
            {[
              { bg: "#FF6222", text: "#302E26", v: BTN_PIXELS.orange.default },
              { bg: "#F5EFE3", text: "#302E26", v: BTN_PIXELS.orange.hover },
              { bg: "#CCCCCC", text: "#545454", v: BTN_PIXELS.orange.disabled },
            ].map((s, i) => (
              <div key={i} className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-[20px] flex items-center">
                  <div className="flex items-center gap-2 px-6 py-4 overflow-hidden shrink-0" style={{ backgroundColor: s.bg }}>
                    <span className="font-greycliff font-black text-[20px] uppercase tracking-[0.75px] leading-none whitespace-nowrap" style={{ color: s.text }}>Button Label</span>
                    <PixelIcon v={s.v as [string,string,string]} />
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                    <BtnColorChip label="Text Color" color={s.text} />
                    <BtnColorChip label="Pixel Color" color="#FFFEF7" />
                  </div>
                  <div className="flex-[1_0_0] min-w-px">
                    <BtnColorChip label="Background Color" color={s.bg} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sage Outline buttons */}
          <div className="flex gap-[30px]">
            {[
              { bg: "#5EA288", text: "#302E26", v: BTN_PIXELS.sage.default },
              { bg: "#F5EFE3", text: "#302E26", v: BTN_PIXELS.sage.hover },
              { bg: "#CCCCCC", text: "#545454", v: BTN_PIXELS.sage.disabled },
            ].map((s, i) => (
              <div key={i} className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-[20px] flex items-center">
                  <div className="flex items-center gap-2 px-6 py-4 overflow-hidden shrink-0" style={{ backgroundColor: s.bg }}>
                    <span className="font-greycliff font-black text-[20px] uppercase tracking-[0.75px] leading-none whitespace-nowrap" style={{ color: s.text }}>Button Label</span>
                    <PixelIcon v={s.v as [string,string,string]} />
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                    <BtnColorChip label="Text Color" color={s.text} />
                    <BtnColorChip label="Pixel Color" color="#FFFEF7" />
                  </div>
                  <div className="flex-[1_0_0] min-w-px">
                    <BtnColorChip label="Background Color" color={s.bg} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Text/Arrow buttons */}
          <div className="flex gap-[30px]">
            {[
              { textColor: "#FF6222" },
              { textColor: "#F5EFE3" },
              { textColor: "#545454" },
            ].map((s, i) => (
              <div key={i} className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-[20px] flex items-center">
                  <div className="flex items-center gap-[4px] shrink-0">
                    <span className="font-greycliff font-black text-[20px] uppercase tracking-[0.75px] leading-none whitespace-nowrap" style={{ color: s.textColor }}>Button Label</span>
                    <span className="font-greycliff font-black text-[20px] leading-none" style={{ color: s.textColor }}>→</span>
                  </div>
                </div>
                <BtnColorChip label="Text Color" color={s.textColor} />
              </div>
            ))}
          </div>

          {/* Text Links */}
          <div className="flex gap-[30px]">
            {[
              { textColor: "#FF6222", hidden: false },
              { textColor: "#F5EFE3", hidden: false },
              { textColor: "#545454", hidden: true },
            ].map((s, i) => (
              <div key={i} className={`flex-[1_0_0] min-w-px flex flex-col gap-[10px]${s.hidden ? " opacity-0" : ""}`}>
                <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-[20px] flex items-center">
                  <span className="font-greycliff font-medium text-[20px] leading-[1.4] underline whitespace-nowrap" style={{ color: s.textColor }}>Text Link</span>
                </div>
                <BtnColorChip label="Text Color" color={s.textColor} />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* FORM FIELDS */}
      <div>
        <SubHeader title="Form Fields" />

        {/* Typography spec rows */}
        <div className="flex gap-[30px] mb-[40px]">
          <div className="flex-[1_0_0] min-w-px flex flex-col gap-3">
            <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 h-full content-center">
              <p className="font-greycliff font-black text-[20px] text-cream uppercase leading-[1.2]">
                Field Label<span className="text-[#FF5E5E]">*</span>
              </p>
            </div>
            <p className="font-inter text-[16px] text-white/90">H6</p>
            <div className="flex gap-[10px]">
              <TypoSpec label="Font" value="Greycliff CF" />
              <TypoSpec label="Weight" value="Heavy" />
              <TypoSpec label="Size" value="20px" />
              <TypoSpec label="Line Height" value="120%" />
              <TypoSpec label="Letter Spacing" value="0px" />
              <TypoSpec label="Case" value="Original" />
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px flex flex-col gap-3">
            <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 flex gap-5 items-center">
              <div className="flex-[1_0_0] min-w-px flex items-center gap-3 px-3 py-3 border border-cream">
                <span className="flex-1 font-greycliff font-medium text-[20px] text-cream leading-[1.4]">Field Text</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EA288" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <div className="flex-[1_0_0] min-w-px flex items-start gap-3">
                <div className="w-5 h-5 shrink-0 border border-cream flex items-center justify-center mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#5EA288" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7l4 4 6-6"/>
                  </svg>
                </div>
                <span className="font-greycliff font-medium text-[20px] text-cream leading-[1.4]">Checkbox text</span>
              </div>
            </div>
            <p className="font-inter text-[16px] text-white/90">p</p>
            <div className="flex gap-[10px]">
              <TypoSpec label="Font" value="Greycliff CF" />
              <TypoSpec label="Weight" value="Medium" />
              <TypoSpec label="Size" value="20px" />
              <TypoSpec label="Line Height" value="140%" />
              <TypoSpec label="Letter Spacing" value="0px" />
              <TypoSpec label="Paragraph Spacing" value="16px" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[40px]">

          {/* Column headers */}
          <div className="flex gap-[30px]">
            {["Default / Placeholder", "Entered / Selected", "Active", "Error"].map((lbl) => (
              <div key={lbl} className="flex-[1_0_0] min-w-px border-b-2 border-orange pb-5">
                <p className="font-greycliff font-black text-[20px] text-cream uppercase leading-[1.2]">{lbl}</p>
              </div>
            ))}
          </div>

          {/* Text input + Select row */}
          <div className="flex gap-[30px]">
            {FORM_COLS.map((col, i) => (
              <div key={i} className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 flex flex-col gap-[30px] flex-1">
                  {/* Text input */}
                  <div className="flex flex-col gap-3">
                    <p className="font-greycliff font-black text-[20px] text-cream uppercase leading-[1.2]">
                      Field Label<span className="text-[#FF5E5E]">*</span>
                    </p>
                    <div className="flex items-center" style={{ border: `${col.borderWidth} solid ${col.borderColor}` }}>
                      <input
                        type="text"
                        value={formInputs[i]}
                        onChange={e => setFormInputs(prev => { const v = [...prev]; v[i] = e.target.value; return v; })}
                        placeholder="Field Text"
                        className="flex-1 min-w-0 bg-espresso font-greycliff font-medium text-[20px] text-cream leading-[1.4] px-3 py-3 outline-none placeholder:text-cream/40"
                      />
                      <div className="pr-3 shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EA288" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Select */}
                  <div className="flex flex-col gap-3">
                    <p className="font-greycliff font-black text-[20px] text-cream uppercase leading-[1.2]">
                      Field Label<span className="text-[#FF5E5E]">*</span>
                    </p>
                    <div style={{ border: `${col.borderWidth} solid ${col.borderColor}` }}>
                      <button
                        type="button"
                        onClick={() => setSelectOpen(prev => { const v = [...prev]; v[i] = !v[i]; return v; })}
                        className="w-full flex items-center justify-between px-3 py-3 bg-espresso font-greycliff font-medium text-[20px] text-cream leading-[1.4] text-left"
                      >
                        <span>Field Text</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5EA288" strokeWidth="2" className="shrink-0">
                          {selectOpen[i] ? <path d="M18 15l-6-6-6 6"/> : <path d="M6 9l6 6 6-6"/>}
                        </svg>
                      </button>
                      {selectOpen[i] && (
                        <div className="bg-espresso flex flex-col gap-6 p-3" style={{ borderTop: `1px solid ${col.borderColor}` }}>
                          {["Option", "Option", "Option"].map((opt, oi) => (
                            <button
                              key={oi}
                              type="button"
                              className="text-left font-greycliff font-medium text-[20px] text-cream leading-[1.4] hover:text-orange"
                              onClick={() => setSelectOpen(prev => { const v = [...prev]; v[i] = false; return v; })}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Spec chips */}
                <div className="flex gap-[10px]">
                  <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                    <BtnColorChip label="Text Color" color="#F5EFE3" />
                    <BtnColorChip label="Icon Color" color="#5EA288" />
                  </div>
                  <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                    <BtnColorChip label="Border Color" color={col.borderColor} />
                    <TypoSpec label="Border Weight" value={col.borderWidth} />
                    <TypoSpec label="Border Radius" value="0px" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkbox + Radio + Toggle row */}
          <div className="flex gap-[30px]">
            {FORM_COLS.map((col, i) => {
              const dotColor = col.borderColor === "#FF0000" ? "#FF0000" : "#5EA288";
              return (
                <div key={i} className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                  <div className="bg-espresso border border-[rgba(128,128,128,0.4)] p-5 flex flex-col gap-[30px]">
                    {/* Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div
                        className="shrink-0 flex items-center justify-center mt-0.5 bg-espresso"
                        style={{ width: "20px", height: "20px", border: `${col.borderWidth} solid ${col.borderColor}`, cursor: "pointer" }}
                        onClick={() => setCheckStates(prev => { const v = [...prev]; v[i] = !v[i]; return v; })}
                      >
                        {checkStates[i] && (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#5EA288" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 7l4 4 6-6"/>
                          </svg>
                        )}
                      </div>
                      <span className="font-greycliff font-medium text-[20px] text-cream leading-[1.4]">Checkbox text</span>
                    </label>
                    {/* Radio */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div
                        className="shrink-0 rounded-full flex items-center justify-center mt-0.5"
                        style={{ width: "20px", height: "20px", border: `${col.borderWidth} solid ${col.borderColor}`, cursor: "pointer" }}
                        onClick={() => setRadioStates(prev => { const v = [...prev]; v[i] = !v[i]; return v; })}
                      >
                        {radioStates[i] && (
                          <div className="rounded-full" style={{ width: "10px", height: "10px", backgroundColor: dotColor }} />
                        )}
                      </div>
                      <span className="font-greycliff font-medium text-[20px] text-cream leading-[1.4]">Radio button text</span>
                    </label>
                    {/* Toggle */}
                    <div className="flex items-center gap-3">
                      <div
                        className="relative shrink-0 rounded-full cursor-pointer transition-colors duration-200"
                        style={{ width: "36px", height: "19px", backgroundColor: toggleStates[i] ? "#5EA288" : "rgba(245,239,227,0.2)" }}
                        onClick={() => setToggleStates(prev => { const v = [...prev]; v[i] = !v[i]; return v; })}
                      >
                        <div
                          className="absolute top-[1.5px] rounded-full transition-[left] duration-200"
                          style={{ width: "16px", height: "16px", backgroundColor: "#FFFEF7", left: toggleStates[i] ? "18.5px" : "1.5px" }}
                        />
                      </div>
                      <span className="font-greycliff font-medium text-[20px] text-cream leading-[1.4]">Toggle button text</span>
                    </div>
                  </div>
                  {/* Spec chips */}
                  <div className="flex gap-[10px]">
                    <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                      <BtnColorChip label="Text Color" color="#F5EFE3" />
                      <BtnColorChip label="Selector Color" color="#5EA288" />
                    </div>
                    <div className="flex-[1_0_0] min-w-px flex flex-col gap-[10px]">
                      <BtnColorChip label="Border Color" color={col.borderColor} />
                      <TypoSpec label="Border Weight" value={col.borderWidth} />
                      <TypoSpec label="Border Radius" value="0px" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function StyleGuidePage() {
  const [active, setActive] = useState("colors");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeLabel = NAV_ITEMS.find(({ id }) => id === active)?.label ?? "Style Guide";

  return (
    <>
      {/* Sidebar — desktop only, fixed so it doesn't affect document flow */}
      <aside className="hidden md:flex flex-col w-[330px] fixed top-0 left-0 h-full z-30 overflow-y-auto shrink-0">
        <div className="bg-cream h-[110px] flex items-center px-[30px] py-5 shrink-0">
          <Link href="/">
            <PixelTigerLogo variant="dark" className="h-12 w-auto" />
          </Link>
        </div>
        <nav className="bg-sage flex-1 py-[30px]">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full text-left px-[30px] py-[15px] font-greycliff text-[26px] font-black uppercase tracking-[-0.5px] leading-[1.2] text-espresso cursor-pointer border-none transition-colors ${
                active === id ? "bg-orange" : "bg-transparent hover:bg-orange/20"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content wrapper — column layout, offset on desktop to clear fixed sidebar */}
      <div className="md:ml-82.5 flex flex-col min-h-screen bg-espresso">

        {/* Mobile nav strip — inside the column so it stacks above content */}
        <div className="md:hidden bg-sage flex overflow-x-auto shrink-0">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-6 py-4 font-greycliff text-[18px] font-black uppercase tracking-[-0.5px] text-espresso whitespace-nowrap cursor-pointer border-none shrink-0 transition-colors ${
                active === id ? "bg-orange" : "bg-transparent"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Sticky orange header */}
        <div className="bg-orange sticky top-0 z-20 px-[30px] py-[20px] flex items-center justify-between gap-2.5">
          <h2 className="text-espresso flex-1 min-w-0 truncate">
            {activeLabel}
          </h2>
          <p className="hidden sm:block font-greycliff text-[20px] md:text-[26px] text-espresso shrink-0 whitespace-nowrap">
            Pixel Tiger Website <strong className="font-black">2026</strong>
          </p>
        </div>

        <ColorsSection />
        <TypographySection />
        <InteractiveSection />
      </div>
    </>
  );
}
