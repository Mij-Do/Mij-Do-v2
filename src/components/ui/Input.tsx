import { memo } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className: string;
}

const Input = ({className, ...rest}: IProps) => {
    return (
        <input type="text" className= {`${className} md:mx-auto border border-gray-300 rounded-md text-white p-2 focus:bg-auto focus:outline-0`} {...rest}/>
    )
}

export default memo(Input);