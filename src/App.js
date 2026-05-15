import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/variables.css';
import './css/base.css';
import './css/nav.css';
import './css/hero.css';
import './css/sections.css';
import './css/animations.css';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import References from './pages/References';
import Contact from './pages/Contact';

function AppContent() {
  useScrollReveal();

  return (
    <>
      <NavBar />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
