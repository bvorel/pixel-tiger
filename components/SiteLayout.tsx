import Nav from "./Nav";
import Footer from "./Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#302e26]">
      <Nav />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
