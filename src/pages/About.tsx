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
                    Hi, I’m Ahmed — a passionate Front-End Developer who builds modern, responsive, and user-friendly web applications. I specialize in turning creative ideas into functional and elegant digital experiences using a solid tech stack that includes: HTML | CSS | JavaScript | React JS | TypeScript | Tailwind CSS | SASS | Bootstrap.<br />

                    I’ve completed my learning journey in React and TypeScript, and I’m currently expanding my skills into Node.js as I explore the back-end side of development.<br />

                    In my projects, I work with modern libraries and tools such as Axios, React Router DOM, TanStack Query, and Redux Toolkit to create efficient, scalable, and maintainable applications. I care deeply about clean code, performance optimization, and delivering seamless user experiences across all devices. <br />

                    I’m always learning, experimenting with new technologies, and building projects that solve real problems. Outside of coding, I love improving my English, exploring new frameworks, and challenging myself with creative side projects that push my technical and logical thinking further.
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