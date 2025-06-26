interface IProps {
    msg: string;
}

const ErrorMsg = ({msg}: IProps) => {
    return msg ? <span className="font-semibold text-sm text-indigo-300 block mb-5"> {msg} </span> : null;
}

export default ErrorMsg;