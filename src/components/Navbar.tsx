import { NavLink } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const IconStyles = "uppercase font-bold cursor-pointer bg-indigo-800 rounded-md";
const navigation = [
    { name: 'Hero', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

const Navbar = () => {
    return (
        <Disclosure
            as="nav"
            className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div>
                            <h1 className={`p-2 ${IconStyles}`}>mijdo</h1>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={'rounded-md text-sm font-medium'}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={'rounded-md text-sm font-medium'}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}


export default Navbar;