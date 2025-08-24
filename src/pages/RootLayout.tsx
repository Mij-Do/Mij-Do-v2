import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import LightningBackground from "../components/LightNight";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (

        <>
            <LightningBackground />
            <header className="text-white items-center rounded-b-md">
                <Navbar />
            </header>
            <div className="flex flex-col justify-between h-[92vh]">
                <main className="md:mx-5">
                    <Outlet />
                </main>
                <footer className='bg-indigo-950 w-full md:w-lg mx-auto rounded-md p-5'>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default RootLayout;