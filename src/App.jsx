import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ChatBot from "./components/ChatBot";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import EnhancedCursor from "./components/EnhancedCursor";
import FloatingParticles from "./components/FloatingParticles";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <SmoothScroll>
      <div className="bg-black min-h-screen text-white relative overflow-x-hidden">
        <style>{`
          * {
            cursor: none !important;
          }
        `}</style>
        <ScrollProgress />
        <EnhancedCursor />
        <FloatingParticles />
        <Navbar />
        <Hero />
        <About />
        <Languages />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <ChatBot />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;

