import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {

  const [dark, setDark] = useState(true);

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <nav className="
      fixed top-0 w-full z-50
      backdrop-blur-lg
      bg-white/10 dark:bg-black/20
      border-b border-white/10
    ">

      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo with image */}
        <div className="flex items-center gap-3 cursor-pointer"
             onClick={() => scrollTo("hero")}>

          <img
            src={profile}
            className="
              w-10 h-10 rounded-full
              border border-blue-500
              shadow-lg shadow-blue-500/30
            "
          />

          <span className="font-bold text-lg">
            Irfan Pathan
          </span>

        </div>

        {/* Navigation links */}
        <div className="flex items-center gap-6">

          <button onClick={() => scrollTo("hero")}
                  className="hover:text-blue-500">
            Home
          </button>

          <button onClick={() => scrollTo("projects")}
                  className="hover:text-blue-500">
            Projects
          </button>

          <button onClick={() => scrollTo("skills")}
                  className="hover:text-blue-500">
            Skills
          </button>

          <button onClick={() => scrollTo("contact")}
                  className="hover:text-blue-500">
            Contact
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="
              p-2 rounded-full
              bg-blue-500/20
              hover:bg-blue-500/40
            "
          >
            {dark ? <FaSun/> : <FaMoon/>}
          </button>

        </div>

      </div>

    </nav>
  );
}