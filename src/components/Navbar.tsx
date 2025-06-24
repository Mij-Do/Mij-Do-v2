import { useState } from "react";
import { HiOutlineViewList } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';


interface IProps {
    navItems: string[];
    setPage: (value: string) => void;
}

const Navbar = ({navItems, setPage}: IProps) => {
    const active: string = "bg-indigo-800";
    // states
    const [isActive, setActive] = useState('hero');
    const [isOpen, setIsOpen] = useState(false);



    // handellers
    const handleItemClick = (item: string) => {
        setActive(item);
        setPage(item)
    };

    const handelOpen = () => {
        setIsOpen(!isOpen);
    }


    // render
    const renderNavItems = navItems.map(item => 
        <li 
            key={item}
            className={`uppercase cursor-pointer p-2 md:ml-2 mb-2 rounded-md  ${isActive === item ? active : "hover:bg-indigo-800"}`}
            onClick={() => handleItemClick(item)}
        >{item}</li>
    );
    const renderIconsBtn = isOpen === false ? 
                            <HiOutlineViewList onClick={handelOpen} 
                                                size={42} 
                                                className={`bg-indigo-800 rounded-md cursor-pointer md:hidden m-auto mb-5`}/> : 
                            <HiX onClick={handelOpen} 
                                    size={42} 
                                    className={`bg-indigo-800 rounded-md cursor-pointer md:hidden m-auto mb-5`}/>;

    return (
        <div className="flex flex-col w-full text-center md:flex-row md:justify-between">
            <h1 className="uppercase font-bold cursor-pointer bg-indigo-800 p-2 mb-2 rounded-md">mijdo</h1>
            <nav> 
                {renderIconsBtn}
                <ul className={`${isOpen === true ? 'flex' : 'hidden'} flex-col md:flex md:flex-row`}>
                    {renderNavItems}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;