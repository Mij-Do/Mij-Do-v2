import './App.css';
import { useState } from "react";
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Projects from './components/Projects';

function App() {
  // states
  const [page, setPage] = useState('hero');

  const navItems = ['hero', 'about', 'projects', 'contact'];

  return (
    <>
      <header className="bg-indigo-500 text-white p-2 flex justify-between items-center rounded-b-md">
        <Navbar navItems={navItems} setPage={setPage}/>
      </header>
      <main>
        {page === 'hero' && <Hero />}
        {page === 'about' && <About />}
        {page === 'projects' && <Projects />}
      </main>
      <footer className='bg-indigo-800 p-5'>
        <Footer />
      </footer>
    </>
  )
}

export default App


