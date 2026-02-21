import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {

  const contacts = [
    {
      name: "Email",
      value: "khanirfanpathan389@gmail.com",
      link: "mailto:khanirfanpathan389@gmail.com",
      icon: <FaEnvelope size={24}/>,
      color: "hover:border-red-500 hover:text-red-500"
    },
    {
      name: "WhatsApp",
      value: "+91 7737110849",
      link: "https://wa.me/917737110849",
      icon: <FaWhatsapp size={24}/>,
      color: "hover:border-green-500 hover:text-green-500"
    },
    {
      name: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/irfan-khan-b042b7305/",
      icon: <FaLinkedin size={24}/>,
      color: "hover:border-blue-500 hover:text-blue-500"
    },
    {
      name: "GitHub",
      value: "View my projects",
      link: "https://github.com/irfan-pathan-09",
      icon: <FaGithub size={24}/>,
      color: "hover:border-purple-500 hover:text-purple-500"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <motion.h2
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="text-4xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">

        {contacts.map((contact, index) => (

          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{delay:index * 0.2}}
            whileHover={{scale:1.05}}
            className={`
              flex items-center gap-4
              p-6
              rounded-xl
              backdrop-blur-lg
              bg-white/10
              border border-gray-500/20
              shadow-lg
              transition
              ${contact.color}
            `}
          >

            <div>
              {contact.icon}
            </div>

            <div>
              <h3 className="text-xl font-bold">
                {contact.name}
              </h3>

              <p className="text-gray-500">
                {contact.value}
              </p>
            </div>

          </motion.a>

        ))}

      </div>

    </section>
  );
}