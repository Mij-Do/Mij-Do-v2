import { useState } from "react";

interface IProps {
    navItems: string[];
}

const Navbar = ({navItems}: IProps) => {
    const active: string = "bg-indigo-800";
    // states
    const [isActive, setActive] = useState('hero');

    const handleItemClick = (item: string) => {
        setActive(item);
    };

    return (
        <>
            <h1 className="uppercase font-bold cursor-pointer bg-indigo-800 p-2 rounded-md">mijdo</h1>
            <nav>
                <ul className="flex">
                    {navItems.map(item => 
                        <li 
                        key={item}
                        className={`uppercase cursor-pointer p-2 ml-2 rounded-md  ${isActive === item ? active : "hover:bg-indigo-800"}`}
                        onClick={() => handleItemClick(item)}
                        >{item}</li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;