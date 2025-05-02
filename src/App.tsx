import './App.css'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'

function App() {
  const navItems = ['hero', 'about', 'projects', 'contact'];

  return (
    <>
      <header className="bg-indigo-500 text-white p-2 flex justify-between items-center rounded-b-md">
        <Navbar navItems={navItems}/>
      </header>
      <main>
        <Hero />
      </main>
      <footer className='bg-indigo-800 p-5'>
        <Footer />
      </footer>
    </>
  )
}

export default App


