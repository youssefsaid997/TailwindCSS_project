function Home() {
  return (
    <div id="home" className="">
      <div className="container flex flex-col-reverse mx-auto p-6  lg:flex-row lg:mb-0">
        <div className="flex flex-col space-y-5 lg:mt-16 w-1/2">
          <h1 className="text-3xl font-bold lg:text-6xl lg:text-left mb-20">
            <span className="font-bold text-gray-600 text-xl flex">
              Hello I am{" "}
            </span>
            Lorem ipsum dolor sit.
            <span className=" text-gray-600 text-xl flex mt-4">Hello I am</span>
          </h1>
          <div className="mt-15 flex">
            <div className="container ">
              <div className="container space-x-5 space-y-5 mt-15">
                <a
                  href="#cv"
                  className="text-bold px-7 py-4 bg-black text-white rounded-full shadow-md border-2 border-black hover:text-black hover:bg-white"
                >
                  Download CV
                </a>
                <a
                  href="#hire"
                  className="text-bold px-7 py-4 bg-red-400 text-white rounded-full shadow-md border-2 border-red-400 hover:text-red-400 hover:bg-white"
                >
                  Hire Me
                </a>
              </div>
              <div className="container">
                <div className="flex flex-row">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative mx-auto lg:mx-0 w-96 justify-normal items-center">
            <img src="../src/assets/man.svg" alt="" className="object-fit: fill w-96" />
        </div>
      </div>
    </div>
  );
}
export default Home;
