import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function About() {

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20"
    >

      <motion.h2
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <motion.div
          initial={{opacity:0, x:50}}
          whileInView={{opacity:1, x:0}}
        >

          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">

            I am an aspiring AI/ML developer passionate about building real-world intelligent systems.
            I specialize in Python, Machine Learning, and Data Analysis, with hands-on experience in
            developing and deploying production-level ML applications.

          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">

            I have built and deployed multiple machine learning projects including a Spam Classifier,
            Movie Recommendation System, and WhatsApp Chat Analyzer. I enjoy solving complex problems
            and turning data into meaningful insights.

          </p>

          <p className="text-gray-600 dark:text-gray-400 text-lg">

            My goal is to become a professional AI/ML Engineer and contribute to building intelligent,
            scalable, and impactful AI solutions.

          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="p-4 rounded-lg bg-blue-500/10">
              <h3 className="text-xl font-bold text-blue-500">
                3+
              </h3>
              <p>Deployed ML Projects</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10">
              <h3 className="text-xl font-bold text-blue-500">
                Python
              </h3>
              <p>Primary Language</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10">
              <h3 className="text-xl font-bold text-blue-500">
                ML
              </h3>
              <p>Machine Learning</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10">
              <h3 className="text-xl font-bold text-blue-500">
                Data
              </h3>
              <p>Data Analysis</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}