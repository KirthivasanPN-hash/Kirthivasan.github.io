import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-secondary font-bold text-xl">Portfolio</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link cursor-pointer"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
