import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundDecor from "@/components/BackgroundDecor";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="relative">
          <BackgroundDecor />
          <div className="relative z-[1]">
            <Categories />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
