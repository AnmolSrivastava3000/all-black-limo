import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}