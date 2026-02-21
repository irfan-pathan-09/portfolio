import { motion } from "framer-motion";

import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaFileExcel,
  FaBrain,
  FaChartPie
} from "react-icons/fa";

import {
  SiPandas,
  SiNumpy,
  SiStreamlit
} from "react-icons/si";

export default function Skills() {

  const skills = [
    { name: "Python", icon: <FaPython size={40}/> },
    { name: "Machine Learning", icon: <FaBrain size={40}/> },
    { name: "Data Analysis", icon: <FaChartBar size={40}/> },
    { name: "Pandas", icon: <SiPandas size={40}/> },
    { name: "NumPy", icon: <SiNumpy size={40}/> },
    { name: "Power BI", icon: <FaChartPie size={40}/> },
    { name: "Streamlit", icon: <SiStreamlit size={40}/> },
    { name: "Excel", icon: <FaFileExcel size={40}/> },
    { name: "SQL", icon: <FaDatabase size={40}/> },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <motion.h2
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="text-4xl font-bold text-center mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{delay:index * 0.1}}
            whileHover={{
              scale:1.1,
              boxShadow:"0px 0px 20px rgba(59,130,246,0.6)"
            }}
            className="
              flex flex-col items-center
              gap-3
              p-6
              rounded-xl
              backdrop-blur-lg
              bg-white/10
              border border-blue-500/20
              shadow-lg
            "
          >

            <div className="text-blue-500">
              {skill.icon}
            </div>

            <p className="font-semibold">
              {skill.name}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}