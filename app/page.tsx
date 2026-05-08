import SiteLayout from "@/components/SiteLayout";

export default function Home() {
  return (
    <SiteLayout>
      <section className="flex-1 relative min-h-100">
        <img
          src="/home-cover.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>
    </SiteLayout>
  );
}
