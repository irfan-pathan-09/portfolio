import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 dark:bg-black/20 border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          <img
            src={profile}
            className="w-9 h-9 rounded-full border border-blue-500"
          />
          <span className="font-bold text-lg">
            Irfan
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <button onClick={() => scrollTo("hero")} className="hover:text-blue-500">Home</button>
          <button onClick={() => scrollTo("about")} className="hover:text-blue-500">About</button>
          <button onClick={() => scrollTo("projects")} className="hover:text-blue-500">Projects</button>
          <button onClick={() => scrollTo("skills")} className="hover:text-blue-500">Skills</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-blue-500">Contact</button>

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-blue-500/20"
          >
            {dark ? <FaSun/> : <FaMoon/>}
          </button>

        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">

          <button onClick={() => setDark(!dark)}>
            {dark ? <FaSun/> : <FaMoon/>}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes/> : <FaBars/>}
          </button>

        </div>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
  <div className="
    md:hidden
    absolute top-full left-0 w-full
    backdrop-blur-xl
    bg-white/90 dark:bg-black/90
    border-b border-gray-300 dark:border-gray-700
    flex flex-col items-center
    gap-6 py-6
    shadow-lg
    animate-slideDown
  ">  
          <button onClick={() => scrollTo("hero")} className="text-lg font-medium hover:text-blue-500 transition">Home</button>
          <button onClick={() => scrollTo("about")} className="text-lg font-medium hover:text-blue-500 transition">About</button>
          <button onClick={() => scrollTo("projects")} className="text-lg font-medium hover:text-blue-500 transition">Projects</button>
          <button onClick={() => scrollTo("skills")} className="text-lg font-medium hover:text-blue-500 transition">Skills</button>
          <button onClick={() => scrollTo("contact")} className="text-lg font-medium hover:text-blue-500 transition">Contact</button>

        </div>
      )}

    </nav>
  );
}