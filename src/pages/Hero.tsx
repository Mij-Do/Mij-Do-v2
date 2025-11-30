import { SiGithub, SiLinkedin } from "react-icons/si";
import TypingText from "../components/ui/HeaderEffect";

const Hero = () => {
    return (
        <section className="text-white my-15">
            <div className='flex flex-col items-center text-center md:w-180 mx-auto'>
                <div>
                    <TypingText
                        texts={["HI, I AM A DEVELOPER..", "FRONTEND DEVELOPER", "Co-Founder@Meem English Community"]}
                    />
                </div>
                <div>
                    <p>
                        Front-End Developer specializing in React and TypeScript, focused on building fast, responsive user interfaces. Currently expanding into backend development with Node.js to move toward full-stack capabilities.
                    </p>
                    <div className="flex items-center space-x-5 py-2 justify-center">
                        <a href="https://github.com/Mij-Do" target='_blank'> <SiGithub size={36} className='bg-indigo-800 rounded-md p-1 hover:p-0 transition-all' color='white'></SiGithub>  </a>
                        <a href="https://www.linkedin.com/in/ahmed-mijdo-samir/" target='_blank'> <SiLinkedin size={36} className='bg-indigo-800 rounded-md p-1 hover:p-0 transition-all' color='white'></SiLinkedin>  </a>
                    </div>
                </div>
            </div>
        </section>
)
}

export default Hero;