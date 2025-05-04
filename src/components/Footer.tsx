import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    const iconStyles = 'hover:bg-indigo-400 hover:p-1 hover:rounded-md cursor-pointer transition';
    return (
        <>
            <div className="text-center text-white">
                <div className='flex justify-center items-center mb-2 space-x-4'>
                    <a href="https://github.com/Mij-Do" target='_blank'> <Github className={iconStyles} size={36}/> </a>
                    <a href="https://www.linkedin.com/in/ahmed-mijdo-samir/" target='_blank'> <Linkedin className={iconStyles} size={36}/> </a>
                </div>
                <p>Created By &copy; Ahmed Samir </p>
            </div>
        </>
    )
}

export default Footer;