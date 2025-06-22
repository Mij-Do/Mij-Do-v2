import { dataInputs } from "../data";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { useState } from "react";


const Contact = () => {

    // state
    const [value, setValue] = useState();

    // render
    const renderInputs = dataInputs.map(input => 
        <div className="flex flex-col space-y-5">
            <label className="text-white text-center w-full bg-indigo-900 rounded-md p-2 mx-auto" htmlFor={input.id}>{input.label}</label>
            <Input className="w-full mb-5" id={input.id} value={value} onChange={() => setValue}/>
        </div>
    )

    // handeller
    const onSubmitHandeller = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const onSubmitChange = () => {
        
    }

    return (
        <section className="my-15">
            <h1 className="text-white text-center bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-3xl">Contact Me</h1>
            <div className="flex w-full justify-evenly items-center">
                <form className="w-full md:w-lg" onSubmit={onSubmitHandeller}>
                    {renderInputs}
                    <Button onClick={onSubmitChange} className="text-white text-center hover:bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-lg transition">SEND MAIL</Button>
                </form>
            </div>
        </section>
    )
}

export default Contact;