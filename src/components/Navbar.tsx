interface IProps {
    navItems: string[];
}

const Navbar = ({navItems}: IProps) => {
    return (
        <header className="bg-indigo-500 text-white p-2 flex justify-between items-center rounded-b-md">
            <h1 className="uppercase font-bold cursor-pointer bg-indigo-800 p-2 rounded-md">mijdo</h1>
            <nav>
                <ul className="flex">
                    {navItems.map(item => 
                        <li 
                        key={item}
                        className="p-2 hover:bg-indigo-600 transition cursor-pointer rounded-md uppercase"
                        >{item}</li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;