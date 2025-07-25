import { SiGithub, SiLinkedin } from "react-icons/si";
import HeroImage from './../assets/HeroImage.png'
import TypingText from "../components/ui/HeaderEffect";

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center text-white my-15 md:space-x-5">
            <div className='text-center md:text-left'>
                <TypingText
                    texts={["HI, I AM A DEVELOPER..", "FRONTEND DEVELOPER", "REACT JS DEVELOPER"]}
                />
                <div>
                    <p className="md:mx-2">
                        Front-end developer passionate about building clean, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, React, and TypeScript.
                    </p>
                    <div className="flex items-center space-x-5 py-2 justify-center">
                        <a href="https://github.com/Mij-Do" target='_blank'> <SiGithub size={36} className='bg-indigo-800 rounded-md p-1 hover:p-0 transition-all' color='white'></SiGithub>  </a>
                        <a href="https://www.linkedin.com/in/ahmed-mijdo-samir/" target='_blank'> <SiLinkedin size={36} className='bg-indigo-800 rounded-md p-1 hover:p-0 transition-all' color='white'></SiLinkedin>  </a>
                    </div>
                </div>
            </div>
            <div>
                <img className='rounded-md mt-5 w-fit md:mt-0' src={HeroImage} alt="HeroImage" />
            </div>
        </section>
)
}

export default Hero;