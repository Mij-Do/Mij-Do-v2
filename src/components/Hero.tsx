import HeroImage from './../assets/HeroImage.png'

const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center bg-indigo-300 rounded-md my-15 md:space-x-40">
                <div className='text-center md:text-left'>
                    <h1 className="text-white bg-indigo-800 rounded-md p-2 mb-5 text-3xl">HI, I AM A DEVELOPER..</h1>
                    <p>
                        Front-end developer passionate about building clean, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, React, and TypeScript.
                    </p>
                </div>
                <img className='rounded-md mt-5 w-sm md:mt-0' src={HeroImage} alt="HeroImage" />
            </div>
        </>
    )
}

export default Hero;