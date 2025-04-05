import './App.css'
import Navbar from './components/Navbar'

function App() {
  const navItems = ['hero', 'about', 'projects', 'contact'];
  return (
    <>
      <Navbar navItems={navItems}/>
    </>
  )
}

export default App
