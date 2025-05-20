import { useState } from "react";

interface IProps {
    navItems: string[];
    setPage: (value: string) => void;
}

const Navbar = ({navItems, setPage}: IProps) => {
    const active: string = "bg-indigo-800";
    // states
    const [isActive, setActive] = useState('hero');

    const handleItemClick = (item: string) => {
        setActive(item);
        setPage(item)
    };

    return (
        <div className="flex flex-col w-full text-center md:flex-row md:justify-between">
            <h1 className="uppercase font-bold cursor-pointer bg-indigo-800 p-2 mb-2 rounded-md">mijdo</h1>
            <nav>
                <ul className="flex flex-col md:flex-row">
                    {navItems.map(item => 
                        <li 
                        key={item}
                        className={`uppercase cursor-pointer p-2 md:ml-2 rounded-md  ${isActive === item ? active : "hover:bg-indigo-800"}`}
                        onClick={() => handleItemClick(item)}
                        >{item}</li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;