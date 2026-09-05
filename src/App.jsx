import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import About from "./components/About";
import WhyHandmade from "./components/WhyHandmade";
import InstagramGallery from "./components/InstagramGallery";
import OrderSection from "./components/OrderSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <About />
        <WhyHandmade />
        <InstagramGallery />
        <OrderSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
