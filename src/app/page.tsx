import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Showcase from "@/components/Showcase";
import Ecosystem from "@/components/Ecosystem";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Story />
        <Showcase />
        <Ecosystem />
        <WhyChoose />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
