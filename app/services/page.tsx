import SiteLayout from "@/components/SiteLayout";

const services = [
  { title: "Production", description: "Full-scale production capabilities from pre-production planning through final delivery. We handle every detail." },
  { title: "Social", description: "Content built for the platforms your audience lives on — scroll-stopping, brand-right, and always on strategy." },
  { title: "Digital", description: "Digital campaigns, web experiences, and interactive content that perform and convert." },
  { title: "Photography", description: "Commercial and editorial photography that captures your brand at its best." },
  { title: "Post Production", description: "Color, edit, sound design, and finishing — every frame polished to perfection." },
  { title: "Print", description: "Offset and digital print for collateral, packaging, signage, and everything in between." },
  { title: "Ooh", description: "Out-of-home creative that makes people stop, look, and remember — at scale." },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-espresso py-24 px-6">
        <div className="max-w-285 mx-auto">
          <div className="h-0.5 bg-orange mb-10" />
          <h1
            className="text-cream font-black uppercase mb-4"
            style={{
              fontFamily: "'greycliff-cf', sans-serif",
              fontSize: "clamp(3rem, 8vw, 80px)",
              letterSpacing: "-1px",
              lineHeight: 1.05,
            }}
          >
            Services
          </h1>
          <p className="text-cream mb-16 text-[20px] leading-[1.4]" style={{ fontFamily: "'greycliff-cf', sans-serif" }}>
            Everything you need — under one roof.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, description }) => (
              <div key={title} className="bg-[#3d3b31] p-8 group hover:bg-orange transition-colors">
                <h2
                  className="text-cream group-hover:text-espresso font-black uppercase mb-4"
                  style={{
                    fontFamily: "'greycliff-cf', sans-serif",
                    fontSize: "26px",
                    letterSpacing: "-0.5px",
                    lineHeight: 1.1,
                  }}
                >
                  {title}
                </h2>
                <div className="h-0.5 bg-orange group-hover:bg-espresso transition-colors w-8 mb-4" />
                <p
                  className="text-cream/70 group-hover:text-espresso/80 text-base leading-relaxed transition-colors"
                  style={{ fontFamily: "'greycliff-cf', sans-serif" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
