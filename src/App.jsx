import profile from "./assets/profile.jpg";
import Background from "./components/Background";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className=" overflow-x-hidden min-h-screen bg-gradient-to-br from-white to-gray-200 dark:from-black dark:to-gray-900 text-black dark:text-white transition duration-500">

      {/* Navbar */}

      <Navbar />

      {/* Hero */}
<>
<Background />
<section className="max-w-6xl mx-auto px-6 py-20 pt-24" id="hero">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT */}
    <motion.div
      initial={{opacity:0, x:-50}}
      animate={{opacity:1, x:0}}
      transition={{duration:1}}
    >

      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Irfan Pathan
      </h1>

      {/* Typing animation */}
      <TypeAnimation
        sequence={[
          "AI/ML Developer",
          2000,
          "Front-End Developer",
          2000,
          "Data Analyst",
          2000,
        ]}
        speed={50}
        repeat={Infinity}
        className="text-3xl text-blue-500 font-semibold"
      />

      <p className="mt-4 text-gray-600 dark:text-gray-400">
        I build AI/ML solutions and modern web experiences. I have hands-on experience with Python, Machine Learning, WordPress, and front-end development for real client deployments.
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-3 mt-6">

        {[
          "Python",
          "Machine Learning",
          "WordPress",
          "Front-End Development",
          "Data Analysis",
        ].map(skill => (

          <span
            key={skill}
            className="
              px-4 py-2
              rounded-full
              border border-blue-500
              text-blue-500
              shadow-lg shadow-blue-500/20
            "
          >
            {skill}
          </span>

        ))}

      </div>

      {/* Contact buttons */}
 <div className="flex flex-wrap gap-4 mt-6">

  {/* Resume Button */}
  <a
    href="/resume.pdf"
    download
    className="
      px-6 py-3
      rounded-lg
      bg-gradient-to-r
      from-blue-500 to-purple-500
      text-white
      font-semibold
      shadow-lg shadow-blue-500/40
      hover:scale-105 hover:shadow-blue-500/70
      transition duration-300
    "
  >
    Download Resume
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/irfan-pathan-09"
    target="_blank"
    className="
      px-6 py-3
      rounded-lg
      border border-blue-500
      hover:bg-blue-500 hover:text-white
      transition
    "
  >
    GitHub
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/irfan-khan-b042b7305/"
    target="_blank"
    className="
      px-6 py-3
      rounded-lg
      border border-blue-500
      hover:bg-blue-500 hover:text-white
      transition
    "
  >
    LinkedIn
  </a>
  
  <a
  href="/resume.pdf"
  target="_blank"
  className="
    px-6 py-3
    rounded-lg
    border border-purple-500
    text-purple-500
    hover:bg-purple-500 hover:text-white
    transition
  "
>
  View Resume
</a>
</div>

    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{opacity:0, x:50}}
      animate={{opacity:1, x:0}}
      transition={{duration:1}}
      className="flex justify-center"
    >

      <img
        src={profile}
        className="
          w-80 rounded-xl
          shadow-2xl
          shadow-blue-500/40
          hover:scale-105
          transition
        "
      />

    </motion.div>

  </div>

</section>
</>
        
      <About />
      {/* Projects */}
      <section id="projects"></section>
      <Projects />

      {/* Skills */}
      <section id="skills"></section>
      <Skills />
      
      {/* Contact */}
      <section id="contact"></section>
      <Contact />

        {/* Footer */}
        <Footer />
    </div>
  );
}
