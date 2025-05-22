import Button from "./ui/Button";
import Input from "./ui/Input";

interface IProps {

}

const Contact = ({}: IProps) => {
    return (
        <section className="my-15">
            <h1 className="text-white text-center bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-3xl">Contact Me</h1>
            <div className="space-y-2">
                <Input />
                <Button className="p-2 hover:bg-indigo-950 transition"> SEND MAIL </Button>
            </div>
        </section>
    )
}

export default Contact;