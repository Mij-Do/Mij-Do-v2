import { ReactNode } from "react";

interface IProps {
    title: string;
    precntage: string;
    color: string;
    children: ReactNode;
}

const CardSkills = ({children, title, precntage, color}: IProps) => {
    return (
        <div className="flex flex-col items-center justify-between md:hover:scale-105 transition mx-auto w-full md:max-w-80 lg:max-w-60 border border-gray-200 rounded-md text-center my-2">
            <div className="my-1 p-1">
                {children}
            </div>
            <div className="space-y-2 w-full">
                <h3 className="text-white w-fit mx-auto bg-indigo-600 rounded-md p-1">{title}</h3>
                <div style={{width: `${precntage}`}} className={`h-fit ${color} m-auto rounded-md`}>
                    {precntage}
                </div>
            </div>
        </div>
    )
}

export default CardSkills;