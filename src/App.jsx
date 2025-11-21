import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Skills />
      <Summary />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
