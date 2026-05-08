import SiteLayout from "@/components/SiteLayout";

export default function ContactPage() {
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
            Contact
          </h1>
          <p className="text-cream mb-12 text-[20px] leading-[1.4]" style={{ fontFamily: "'greycliff-cf', sans-serif" }}>
            Have a project in mind? Send us a message and we&apos;ll get back to you.
          </p>

          <form className="max-w-lg space-y-6">
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Jane Smith" },
              { id: "email", label: "Email", type: "email", placeholder: "jane@example.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label
                  className="block text-cream font-black uppercase text-sm tracking-[0.75px] mb-2"
                  style={{ fontFamily: "'greycliff-cf', sans-serif" }}
                  htmlFor={id}
                >
                  {label} <span className="text-orange">*</span>
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-espresso text-cream border border-cream/30 px-3 py-3 text-[20px] focus:outline-none focus:border-sage focus:border-2 placeholder:text-cream/40"
                  style={{ fontFamily: "'greycliff-cf', sans-serif", borderRadius: 0 }}
                />
              </div>
            ))}

            <div>
              <label
                className="block text-cream font-black uppercase text-sm tracking-[0.75px] mb-2"
                style={{ fontFamily: "'greycliff-cf', sans-serif" }}
                htmlFor="message"
              >
                Message <span className="text-orange">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-espresso text-cream border border-cream/30 px-3 py-3 text-[20px] focus:outline-none focus:border-sage focus:border-2 resize-none placeholder:text-cream/40"
                style={{ fontFamily: "'greycliff-cf', sans-serif", borderRadius: 0 }}
              />
            </div>

            <button
              type="submit"
              className="bg-orange text-espresso px-6 py-4 font-black uppercase text-base tracking-[0.75px] hover:bg-cream transition-colors"
              style={{ fontFamily: "'greycliff-cf', sans-serif" }}
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
