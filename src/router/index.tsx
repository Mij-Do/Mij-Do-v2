import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Hero from '../pages/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import RootLayout from '../pages/RootLayout';
import PageNotFound from '../errors/PageNotFound';


const router = createBrowserRouter(createRoutesFromElements(
    <>
        {/* Root layout */}
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Hero />}/>
            <Route path='about' element={<About />}/>
            <Route path='projects' element={<Projects />}/>
            <Route path='contact' element={<Contact />}/>
        </Route>
        {/* page not found error */}
        <Route path='*' element={<PageNotFound />} />
    </>
))

export default router;