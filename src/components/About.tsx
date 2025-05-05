import aboutImage from "./../assets/aboutImage.png"
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiTailwindcss, SiSass, SiTypescript } from "react-icons/si";

const About = () => {
    return (
        <section className="bg-indigo-300 rounded-md my-15">
            <h1 className="text-white text-center bg-indigo-800 rounded-md p-2 mb-5 text-3xl">About Me</h1>
            <div className="flex flex-col justify-between items-center text-center  p-2 md:flex-row space-x-10">
                <div className="w-fit mx-auto">
                    <img className="w-full" src={aboutImage} alt="About Image" />
                </div>
                <p className="w-fit">
                    Hi, I'm Ahmed — a passionate Front-End Developer who builds modern, responsive, and user-friendly web interfaces. I specialize in turning creative ideas into functional and elegant websites using a solid tech stack that includes:

                    HTML | CSS | JavaScript | React JS | TypeScript | Tailwind CSS | SASS | Bootstrap

                    I'm currently focused on mastering React and TypeScript, and I enjoy working with Tailwind CSS and SASS to create clean, maintainable UI components. I pay strong attention to detail, and I always aim to write scalable code that performs well across all devices.

                    I'm continuously learning, always experimenting with new tools and frameworks, and committed to building projects that make a real difference.

                    Outside of coding, I love improving my English, exploring new technologies, and working on personal projects that challenge my creativity and logic.
                </p>
            </div>
            <div className="bg-indigo-500 rounded-md m-5 text-white">
                <h2 className="text-center bg-indigo-600 rounded-md p-2 mb-5 text-lg">Skills</h2>
                <div className="flex flex-col items-center space-y-2 justify-evenly md:space-y-0 md:flex-row">
                    <SiHtml5 size={48} className="bg-orange-400 rounded-md hover:scale-95 transition mb-5"/>
                    <SiCss3 size={48} className="bg-blue-400 rounded-md hover:scale-95 transition mb-5"/>
                    <SiJavascript size={48} className="bg-yellow-400 rounded-md hover:scale-95 transition mb-5"/>
                    <SiTypescript size={48} className="bg-indigo-800 rounded-md hover:scale-95 transition mb-5"/>
                    <SiReact size={48} className="bg-indigo-900 rounded-md hover:scale-95 transition mb-5"/>
                    <SiSass size={48} className="bg-pink-600 rounded-md hover:scale-95 transition mb-5"/>
                    <SiBootstrap size={48} className="bg-purple-600 rounded-md hover:scale-95 transition mb-5"/>
                    <SiTailwindcss size={48} className="bg-blue-700 rounded-md hover:scale-95 transition mb-5"/>
                </div>
            </div>
        </section>
    )
}

export default About;