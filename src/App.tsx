import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import GitHub from './sections/GitHub';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
