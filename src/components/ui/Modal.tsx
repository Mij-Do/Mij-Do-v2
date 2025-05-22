import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Button from './Button';
import { ReactNode } from 'react';

interface IProps {
    isOpen: boolean;
    close: () => void;
    title: string;
    children: ReactNode;
}

const Modal = ({isOpen, close, title, children}: IProps) => {



return (
    <>

        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center backdrop-blur-sm p-4">
                <DialogPanel
                    transition
                    className="w-full max-w-md rounded-xl bg-white p-6 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                >
                    {children}
                    <DialogTitle as="h3" className="text-base/7 font-medium text-indigo-600">
                        {title}
                    </DialogTitle>
                    <div className="mt-4">
                        <Button
                            className="text-white bg-red-600 hover:bg-red-400"
                            onClick={close}
                        >
                            Close
                        </Button>
                    </div>
                </DialogPanel>
                </div>
            </div>
        </Dialog>
    </>
)
}

export default Modal;