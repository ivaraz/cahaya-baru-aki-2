import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
// import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <CTA />
        {/* <Hero /> */}
        <Services />
        <Location />
        {/* <Benefits /> */}
        {/* <Products /> */}
        {/* <About /> */}
        {/* <Testimonials /> */}
      </main>
      <Footer />
      {/* <FloatingWhatsApp /> */}
    </div>
  );
}
