import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      title: "SMS Spam Classifier",
      desc: "Machine Learning model that classifies SMS messages as spam or not spam using NLP.",
      live: "https://sms-classifier-irfan09.onrender.com",
      github: "https://github.com/irfan-pathan-09/sms-classifier",
      tech: ["Python", "ML", "Streamlit"]
    },
    {
      title: "Movie Recommendation System",
      desc: "Content-based movie recommender using cosine similarity.",
      live: "https://movie-recommendation-system.onrender.com",
      github: "https://github.com/irfan-pathan-09/movie-recommendation-system",
      tech: ["Python", "ML", "Recommendation"]
    },
    {
      title: "WhatsApp Chat Analyzer",
      desc: "Analyzes WhatsApp chats and generates insights and visualizations.",
      live: "https://whatsapp-chat-analyzer-irfan09.onrender.com",
      github: "https://github.com/irfan-pathan-09/whatsApp-chat-Analyzer",
      tech: ["Python", "Data Analysis", "Visualization"]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <motion.h2
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="text-4xl font-bold text-center mb-12"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{delay:index * 0.2}}
            whileHover={{scale:1.05}}
            className="
              p-6
              rounded-xl
              backdrop-blur-lg
              bg-white/10
              border border-blue-500/20
              shadow-lg shadow-blue-500/10
              hover:shadow-blue-500/40
              transition duration-300
            "
          >

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.desc}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">

              {project.tech.map((tech, i) => (

                <span
                  key={i}
                  className="
                    px-3 py-1
                    text-sm
                    border border-blue-500
                    text-blue-500
                    rounded-full
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Buttons */}
            <div className="flex gap-4">

              <a
                href={project.live}
                target="_blank"
                className="
                  flex items-center gap-2
                  text-blue-500
                  hover:text-blue-400
                "
              >
                Live <FaExternalLinkAlt/>
              </a>

              <a
                href={project.github}
                target="_blank"
                className="
                  flex items-center gap-2
                  text-green-500
                  hover:text-green-400
                "
              >
                Code <FaGithub/>
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}