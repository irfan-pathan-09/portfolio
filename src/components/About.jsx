import { motion } from "framer-motion";

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

      <div className="gap-12 items-center">

        {/* Text */}
        <motion.div
          initial={{opacity:0, x:50}}
          whileInView={{opacity:1, x:0}}
        >

          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">

            I am an AI/ML and web developer focused on building practical, user-focused digital solutions. I work across Python-based machine learning workflows and modern front-end development with WordPress and responsive UI implementation.

          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">

            Alongside multiple deployed machine learning projects, I also delivered and deployed a live client website during my internship at RightShift Solutions: LN Enterprises (lnenterprisesind.in). I enjoy translating business needs into clean interfaces and reliable functionality.

          </p>

          <p className="text-gray-600 dark:text-gray-400 text-lg">

            My goal is to grow as a full-spectrum developer who can combine AI capabilities with strong front-end engineering to build scalable, impactful products.

          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="p-4 rounded-lg bg-blue-500/10">
              <h3 className="text-xl font-bold text-blue-500">3+</h3>
              <p>Deployed ML Projects</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10">
              <h3 className="text-xl font-bold text-blue-500">1</h3>
              <p>Live Client Website</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10">
              <h3 className="text-xl font-bold text-blue-500">WordPress</h3>
              <p>Client Delivery</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10">
              <h3 className="text-xl font-bold text-blue-500">Frontend</h3>
              <p>Responsive UI Development</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
