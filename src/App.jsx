import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeEmailJS } from "./utils/emailjs-config";
import { useTheme, ThemeProvider } from "./hooks/useTheme.jsx";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Education from "./components/Education";
import ChatBot from "./components/ChatBot";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import EnhancedCursor from "./components/EnhancedCursor";
import FloatingParticles from "./components/FloatingParticles";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Initialize EmailJS
initializeEmailJS();

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <div
          style={{
            backgroundColor: "var(--bg-primary)",
            color: "var(--text-primary)",
          }}
          className="min-h-screen relative overflow-x-hidden transition-colors duration-300"
        >
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
          <GitHubStats />
          <Certifications />
          <Education />
          <ChatBot />
          <Contact />
          <Footer />
          <ScrollToTop />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;

