import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Exploring from "@/components/Exploring";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

function App() {
  return (
    <div className="App bg-ivory text-charcoal min-h-screen" data-testid="app-root">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Exploring />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
