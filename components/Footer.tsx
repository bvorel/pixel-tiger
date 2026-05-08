import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange text-espresso">
      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-3 md:items-center gap-6 max-w-285 mx-auto px-3 py-8">
        <div>
          <p className="font-black text-[20px] leading-[1.2]" style={{ fontFamily: "'greycliff-cf', sans-serif" }}>
            Drop us a line:<br />
            <Link href="mailto:hello@pixeltiger.com" className="hover:underline">
              hello@pixeltiger.com
            </Link>
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <Link href="https://instagram.com" aria-label="Instagram"
            className="size-11.5 rounded-full bg-espresso flex items-center justify-center hover:opacity-80 transition-opacity">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fffef7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="#fffef7" stroke="none" />
            </svg>
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook"
            className="size-11.5 rounded-full bg-espresso flex items-center justify-center hover:opacity-80 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fffef7">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </Link>
        </div>

        <div className="text-right">
          <p className="font-black text-[20px] leading-[1.2]" style={{ fontFamily: "'greycliff-cf', sans-serif" }}>
            2700 Commerce St.<br />
            Suite 100B<br />
            Dallas, TX 75038
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-center gap-6 text-center px-3 py-8">
        <p className="font-black text-[18px] leading-[1.2]" style={{ fontFamily: "'greycliff-cf', sans-serif" }}>
          Drop us a line:<br />
          <Link href="mailto:hello@pixeltiger.com" className="hover:underline">
            hello@pixeltiger.com
          </Link>
        </p>

        <div className="flex gap-6">
          <Link href="https://instagram.com" aria-label="Instagram"
            className="size-11.5 rounded-full bg-espresso flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fffef7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="#fffef7" stroke="none" />
            </svg>
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook"
            className="size-11.5 rounded-full bg-espresso flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fffef7">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </Link>
        </div>

        <p className="font-black text-[18px] leading-[1.2]" style={{ fontFamily: "'greycliff-cf', sans-serif" }}>
          2700 Commerce St.<br />
          Suite 100B<br />
          Dallas, TX 75038
        </p>
      </div>
    </footer>
  );
}
