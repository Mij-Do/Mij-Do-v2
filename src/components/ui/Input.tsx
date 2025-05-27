interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className: string;
}

const Input = ({className, ...rest}: IProps) => {
    return (
        <input type="text" className= {`${className} md:mx-auto border border-gray-300 rounded-md text-white p-2`} {...rest}/>
    )
}

export default Input;