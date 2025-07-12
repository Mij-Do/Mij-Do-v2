import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import LightningBackground from "../components/LightNight";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (

        <>
            <LightningBackground />
            <header className="text-white p-2 flex justify-between items-center rounded-b-md">
                <Navbar />
            </header>
            <main className='md:m-5'>
                <Outlet />
            </main>
            <footer className='bg-indigo-950 w-full md:w-lg mx-auto rounded-md p-5'>
                <Footer />
            </footer>
        </>
    )
}

export default RootLayout;