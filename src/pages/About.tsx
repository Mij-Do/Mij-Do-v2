import aboutImage from "./../assets/aboutImage.png"
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiTailwindcss, SiSass, SiTypescript } from "react-icons/si";
import CardSkills from "../components/ui/CardSkills";

const About = () => {
    return (
        <section className="text-white my-15">

            <h1 className="text-center bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-3xl">About Me</h1>
            <div className="flex flex-col justify-between items-center text-center  p-2 md:flex-row space-x-10">
                <div className="w-fit mx-auto">
                    <img className="w-full" src={aboutImage} alt="About Image" />
                </div>
                <p className="w-fit md:mx-2">
                    Hi, I'm Ahmed — a passionate Front-End Developer who builds modern, responsive, and user-friendly web interfaces. I specialize in turning creative ideas into functional and elegant websites using a solid tech stack that includes:

                    HTML | CSS | JavaScript | React JS | TypeScript | Tailwind CSS | SASS | Bootstrap

                    I'm currently focused on mastering React and TypeScript, and I enjoy working with Tailwind CSS and SASS to create clean, maintainable UI components. I pay strong attention to detail, and I always aim to write scalable code that performs well across all devices.

                    I'm continuously learning, always experimenting with new tools and frameworks, and committed to building projects that make a real difference.

                    Outside of coding, I love improving my English, exploring new technologies, and working on personal projects that challenge my creativity and logic.
                </p>
            </div>

            {/* Skills */}
            <div className="w-full text-white">
                <hr className="w-1/2 m-auto my-20"/>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <CardSkills title="Html5" color="bg-orange-400" precntage="100%"><SiHtml5 size={48} className="bg-orange-400 rounded-md hover:scale-95 transition-all mb-5"/></CardSkills>
                    <CardSkills title="Css3" color="bg-blue-400" precntage="98%"><SiCss3 size={48} className="bg-blue-400 rounded-md hover:scale-95 transition-all mb-5"/></CardSkills>
                    <CardSkills title="Java Script" color="bg-yellow-400" precntage="91%"><SiJavascript size={48} className="bg-yellow-400 rounded-md hover:scale-95 transition-all mb-5"/></CardSkills>
                    <CardSkills title="Type Script" color="bg-indigo-800" precntage="81%"><SiTypescript size={48} className="bg-indigo-800 rounded-md hover:scale-95 transition-all mb-5"/></CardSkills>
                    <CardSkills title="ReactJS" color="bg-indigo-900" precntage="72%"><SiReact size={48} className="bg-indigo-900 rounded-md hover:scale-95 transition-all mb-5"/></CardSkills>
                    <CardSkills title="BootStrap" color="bg-purple-600" precntage="94%"><SiBootstrap size={48} className="bg-purple-600 rounded-md hover:scale-95 transition-all mb-5"/></CardSkills>
                    <CardSkills title="TailWind Css" color="bg-blue-700" precntage="87%"><SiTailwindcss size={48} className="bg-blue-700 rounded-md hover:scale-95 transition-all mb-5"/></CardSkills>
                    <CardSkills title="Sass" color="bg-pink-600" precntage="78%"><SiSass size={48} className="bg-pink-600 rounded-md hover:scale-95 transition-all mb-5"/></CardSkills>
                </div>
            </div>
        </section>
    )
}

export default About;