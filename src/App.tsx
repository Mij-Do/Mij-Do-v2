import './App.css';
import { useState } from "react";
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import LightningBackground from './components/LightNight';
import Contact from './components/Contact';

function App() {
  // states
  const [page, setPage] = useState('hero');

  const navItems = ['hero', 'about', 'projects', 'contact'];

  return (
    <>
      <LightningBackground />
        <header className="text-white p-2 flex justify-between items-center rounded-b-md">
          <Navbar navItems={navItems} setPage={setPage}/>
        </header>
        <main>
          {page === 'hero' && <Hero />}
          {page === 'about' && <About />}
          {page === 'projects' && <Projects />}
          {page === 'contact' && <Contact />}
        </main>
        <footer className='bg-indigo-950 w-full md:w-lg mx-auto rounded-md p-5'>
          <Footer />
        </footer>
    </>
  )
}

export default App;


