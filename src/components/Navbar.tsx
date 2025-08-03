import { useState } from "react";
import { HiOutlineViewList } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const IconStyles = "uppercase font-bold cursor-pointer bg-indigo-800 rounded-md";

    const handelOpen = () => {
        setIsOpen(!isOpen);
    }

    const renderIconsBtn = isOpen === false ? 
                            <HiOutlineViewList onClick={handelOpen} 
                                                size={42} 
                                                className={`bg-indigo-800 rounded-md cursor-pointer md:hidden m-auto mb-2`}/> : 
                            <HiX onClick={handelOpen} 
                                    size={42} 
                                    className={`bg-indigo-800 rounded-md cursor-pointer md:hidden m-auto mb-2`}/>;

    return (
        <div className="flex flex-col w-full text-center md:flex-row md:justify-between">
            <h1 className={`p-2 mb-2 ${IconStyles}`}>mijdo</h1>
            <nav> 
                {renderIconsBtn}
                <ul className={`${isOpen === true ? 'flex' : 'hidden'} flex-col md:flex md:flex-row`}>
                    <li> </li>
                    <li className="p-2"> <NavLink to={'/'}> hero </NavLink> </li>
                    <li className="p-2"> <NavLink to={'/about'}> about </NavLink> </li>
                    <li className="p-2"> <NavLink to={'/projects'}> projects </NavLink> </li>
                    <li className="p-2"> <NavLink to={'/contact'}> contact </NavLink> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;