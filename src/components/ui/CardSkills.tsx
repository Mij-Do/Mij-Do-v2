import { memo, ReactNode } from "react";

interface IProps {
    title: string;
    children: ReactNode;
}

const CardSkills = ({children, title}: IProps) => {
    return (
        <div className="flex flex-col items-center justify-between md:hover:scale-105 transition mx-auto w-full md:max-w-80 lg:max-w-60 border border-gray-200 rounded-md text-center my-2 p-2">
            <div className="">
                {children}
            </div>
            <div className="space-y-2 w-full">
                <h3 className="text-white w-fit mx-auto bg-indigo-600 rounded-md p-1">{title}</h3>
            </div>
        </div>
    )
}

export default memo(CardSkills);