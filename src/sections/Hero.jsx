

const Hero = () => {
  return (
    <div>
      <video 
          src="spinning-globe-bgInv.mp4" autoPlay loop muted 
          className="h-screen w-full absolute -z-10 top-0 left-0 object-cover">
        </video>

        <div className="h-[90vh] mx-auto w-full sm:w-2/3 flex flex-col justify-center items-center relative bottom-12 text-white text-center"> 
            <h1 className="font-4xl md:font-5xl lg:font-7xl text-4xl md:text-5xl lg:text-7xl font-bold leading-10">
              IEEE <span className="hidden md:inline">POWER ENERGY SOCIETY </span>
              <span className="md:hidden">PES</span>
              <br />
              <span >SSN STUDENT CHAPTER</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center content-center my-4 md:my-6 w-2/3 md:w-5/6  md:mx-auto ">
              <a href="/contact" className="button border-4 basis-1/2  md:w-72 lg:w-96 p-2 md:p-4"><p >Join PES SSN Chapter</p></a>
              <a href="https://www.ieee.org/membership/join/index.html" target="_blank" className="button border-4 basis-1/2  md:w-72 lg:w-96 p-2 md:p-4"><p>Join PES</p></a>
            </div>
      </div>
    </div>
    
  )
}

export default Hero