import CardSkills from "../components/ui/CardSkills";
import { dataSkills } from "../data";

const About = () => {
    const renderSkills = dataSkills.map(skill => 
        <CardSkills key={skill.id} title={skill.title}> {<skill.children size={48} className={`${skill.color} rounded-md hover:scale-95 transition-all mb-5`}/>} </CardSkills>);
    return (
        <section className="text-white my-15">

            <h1 className="text-center bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-3xl">About Me</h1>
            <div className="flex flex-col justify-between items-center text-center  p-2 md:flex-row space-x-10">
                <p className="w-fit md:mx-2">
                    Hi, I’m Ahmed — a Front-End Developer and Co-Founder at Meem English Community. 
                    I build modern, responsive, and user-friendly web applications using a strong tech stack that includes 
                    HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, SASS, and Bootstrap.<br /><br />

                    I’ve completed my learning journey in React and TypeScript and am currently expanding into Node.js to become a 
                    well-rounded full-stack developer. I work with tools like Axios, React Router DOM, TanStack Query, and 
                    Redux Toolkit to create efficient, scalable, and maintainable applications.<br /><br />

                    I care deeply about clean code, performance, accessibility, and delivering seamless user experiences across all devices. 
                    I’m always learning, experimenting with new technologies, and building projects that solve real problems. 
                    Outside of coding, I focus on improving my English, exploring new frameworks, and working on creative side projects 
                    that strengthen my technical and logical thinking.
                </p>
            </div>

            {/* Skills */}
            <div className="w-full text-white">
                <hr className="w-1/2 m-auto my-20"/>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {renderSkills}
                </div>
            </div>
        </section>
    )
}

export default About;