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
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-x-hidden">
      <CursorGlow />
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
  );
}

export default App;
