import { dataInputs } from "../data";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { SiGmail } from "react-icons/si";



const Contact = () => {
    // render
    const renderInputs = dataInputs.map(input => 
        <div className="flex flex-col space-y-5">
            <label className="text-white text-center w-full bg-indigo-900 rounded-md p-2 mx-auto" htmlFor={input.id}>{input.label}</label>
            <Input className="w-full mb-5" id={input.id}/>
        </div>
    )

    return (
        <section className="my-15">
            <h1 className="text-white text-center bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-3xl">Contact Me</h1>
            <div className="flex flex-col md:flex-row w-full justify-evenly items-center md:space-x-5 md:space-y-0 space-y-5 space-x-0">
                <div>
                    <SiGmail size={200} className="bg-indigo-800 rounded-md p-2" color="white"/>
                </div>
                <form className="w-full md:w-sm">
                    {renderInputs}
                    <Button className="text-white text-center hover:bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-lg transition">SEND MAIL</Button>
                </form>
            </div>
        </section>
    )
}

export default Contact;