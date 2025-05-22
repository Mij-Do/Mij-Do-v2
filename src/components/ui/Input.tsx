interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input = ({...rest}: IProps) => {
    return (
        <input type="text" className="w-full md:mx-auto h-60 border border-gray-300 rounded-md text-white p-2" {...rest}/>
    )
}

export default Input;