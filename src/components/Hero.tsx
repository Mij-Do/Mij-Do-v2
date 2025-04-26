import logo from './../assets/logo.png'

const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center bg-indigo-300 rounded-md mt-10 md:space-x-40">
                <div className='text-center md:text-left'>
                    <h1 className="text-white bg-indigo-800 rounded-md p-2 mb-5 text-3xl">HI, I AM A DEVELOPER..</h1>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Voluptates iure esse libero est repudiandae, 
                        aspernatur numquam ipsa corrupti accusantium suscipit asperiores vitae, 
                        eaque reiciendis debitis voluptatibus. Consectetur facilis eveniet nesciunt!
                    </p>
                </div>
                <img className='rounded-full mt-5 w-sm md:mt-0' src={logo} alt="Logo" />
            </div>
        </>
    )
}

export default Hero;