function Header() {
  return (
    <div>
        <nav className="container relative mx-auto p-5 shadow">
            <div className="flex items-center justify-between space-x-20 my-6">
                <div className="z-30">
                    <img src="../src/assets/logo.svg" alt="" id="logo" className="h-12" />
                </div>
                <div className="hidden items-center space-x-10 uppercase text-red-600 md:flex">
                    <a href="#home" className="tracking-widest hover:text-red-200">
                        Home
                    </a>
                    <a href="#about" className="tracking-widest hover:text-red-200">
                        about
                    </a>
                    <a href="#service" className="tracking-widest hover:text-red-200">
                        services
                    </a>
                    <a href="#portfolio" className="tracking-widest hover:text-red-200">
                        portfolio
                    </a>
                    <a href="#yestmonials" className="tracking-widest hover:text-red-200">
                        testmonials
                    </a>
                    <a href="#blog" className="tracking-widest hover:text-red-200">
                        blog
                    </a>
                    <a href="#contact" className="tracking-widest hover:text-red-200">
                    Contact
                    </a>
                    
                    <a href="components" className="text-bold px-7 py-3 bg-red-600 text-white rounded-full shadow-md border-2 border-red-600 hover:text-red-600 hover:bg-white">components</a>
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Header