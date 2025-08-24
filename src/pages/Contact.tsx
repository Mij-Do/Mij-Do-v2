import { dataInputs } from "../data";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { ChangeEvent, useCallback, useState } from "react";
import { IValue } from "../interfaces";
import toast, { Toaster } from 'react-hot-toast';
import { InputValidation } from "../components/validation";
import ErrorMsg from "../components/ui/ErrorMsg";


const Contact = () => {
    const defaultInput = {
        user: '',
        email: '',
        msg: '',
    }

    // state
    const [value, setValue] = useState <IValue> (defaultInput);
    const [errors, setErrors] = useState(defaultInput); 

    
    // handeller
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const errors = InputValidation({user: value.user, email: value.email, msg: value.msg});
        
        const hasError = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '');
        
        if (!hasError) {
            toast('Please, Entery the Fields!');
            setErrors(errors);
            return;
        }

        setValue (defaultInput);
        toast('Email was Send Succssefully!');
    }
    
    const onChangeHandler = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
        const name = evt.target.name as keyof IValue;
        setValue((prev) => ({
            ...prev,
            [name]: evt.target.value,
        }));
        setErrors(prev => ({...prev, [name]: ''}))
    }, [])

    const onClickHandler = () => {

    }


    // render
    const renderInputs = dataInputs.map(input => 
        <div className="flex flex-col space-y-5">
            <label className="text-white text-center w-full bg-indigo-900 rounded-md p-2 mx-auto" htmlFor={input.id}>{input.label}</label>
            <Input className="w-full mb-2" id={input.id} name={input.name} type={input.type} value={value[input.name]} onChange={onChangeHandler}/>
            <ErrorMsg msg={errors[input.name]} />
        </div>
    )

    return (
        <section className="my-15">
            <h1 className="text-white text-center bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-3xl">Contact Me</h1>
            <div className="flex w-full justify-evenly items-center">
                <form className="w-full md:w-lg" onSubmit={onSubmitHandler}>
                    {renderInputs}
                    <Button onClick={onClickHandler} className="text-white text-center hover:bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-lg transition">SEND MAIL</Button>
                </form>
            </div>
            <Toaster  toastOptions={{style: {
                backgroundColor: 'indigo',
                color: 'white',
            }}}/>
        </section>
    )
}

export default Contact;