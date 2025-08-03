import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import LightningBackground from "../components/LightNight";
import Navbar from "../components/Navbar";
import SwitchBtn from "../components/ui/SwitchBtn";
import { useState } from "react";

const RootLayout = () => {
    const [enabled, setEnabled] = useState(false);
    return (

        <>
            <LightningBackground enabled={enabled}/>
            <header className="text-white p-2 items-center rounded-b-md">
                <Navbar />
                <SwitchBtn enabled={enabled} setEnabled={setEnabled}/> 
            </header>
            <main className="md:m-5">
                <Outlet />
            </main>
            <footer className='bg-indigo-950 w-full md:w-lg mx-auto rounded-md p-5'>
                <Footer />
            </footer>
        </>
    )
}

export default RootLayout;