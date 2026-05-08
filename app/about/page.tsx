import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-espresso py-24 px-6">
        <div className="max-w-285 mx-auto">
          <div className="h-0.5 bg-orange mb-10" />
          <h1
            className="text-cream font-black uppercase mb-8"
            style={{
              fontFamily: "'greycliff-cf', sans-serif",
              fontSize: "clamp(3rem, 8vw, 80px)",
              letterSpacing: "-1px",
              lineHeight: 1.05,
            }}
          >
            About Us
          </h1>
          <p className="text-cream max-w-2xl mb-6 text-[20px] leading-[1.4]" style={{ fontFamily: "'greycliff-cf', sans-serif" }}>
            Pixel Tiger is a full-service production, post, and print house based
            in Dallas, TX. We are a small team of creatives passionate about building
            clean, bold, and impactful work for brands that demand more.
          </p>
          <p className="text-cream max-w-2xl mb-10 text-[20px] leading-[1.4]" style={{ fontFamily: "'greycliff-cf', sans-serif" }}>
            Our work spans production, social, digital, photography, post production,
            print, and out-of-home. Founded with a belief that great work comes from
            deep collaboration, we partner with clients who share that value.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange text-espresso px-6 py-4 font-black uppercase text-base tracking-[0.75px] hover:bg-cream transition-colors"
            style={{ fontFamily: "'greycliff-cf', sans-serif" }}
          >
            Drop us a line →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
