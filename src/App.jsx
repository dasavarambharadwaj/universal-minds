import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <IntroSection />
      <div className="flex flex-col min-h-screen gap-8">
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
