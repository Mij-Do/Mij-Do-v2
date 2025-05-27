import Button from "./ui/Button";
import Input from "./ui/Input";
import { SiGmail } from "react-icons/si";

interface IProps {

}

const Contact = ({}: IProps) => {
    return (
        <section className="my-15">
            <h1 className="text-white text-center bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-3xl">Contact Me</h1>
            <div className="flex flex-col md:flex-row justify-evenly items-center md:space-x-5 md:space-y-0 space-y-5 space-x-0">
                <div>
                    <SiGmail size={200} className="bg-indigo-950 rounded-md p-2" color="white"/>
                </div>
                <form className="space-y-5">
                    <label className="block text-white text-center bg-indigo-950 rounded-md p-2 mx-auto" htmlFor="user">USER NAME</label>
                    <Input className="block w-full" id="user"/>

                    <label className="block text-white text-center bg-indigo-950 rounded-md p-2 mx-auto" htmlFor="mail">EMAIL</label>
                    <Input className="block w-full" id="mail"/>

                    <label className="block text-white text-center bg-indigo-950 rounded-md p-2 mx-auto" htmlFor="msg">YOUR MESSEGE</label>
                    <Input className="w-full h-60" id="msg"/>
                    <Button className="p-2 hover:bg-indigo-950 transition"> SEND MAIL </Button>
                </form>
            </div>
        </section>
    )
}

export default Contact;