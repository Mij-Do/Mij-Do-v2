import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Hero from '../pages/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import RootLayout from '../pages/RootLayout';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route index element={<Hero />}/>
        <Route path='about' element={<About />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='contact' element={<Contact />}/>
    </Route>
))

export default router;