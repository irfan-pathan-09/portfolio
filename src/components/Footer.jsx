import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="
      border-t border-white/10
      mt-20
      py-8
      backdrop-blur-lg
      bg-white/5 dark:bg-black/20
    ">

      <div className="max-w-6xl mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Name */}
          <div>
            <h3 className="text-xl font-bold">
              Irfan Pathan
            </h3>
            <p className="text-gray-500">
              AI / ML Developer
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-5 text-xl">

            <a
              href="https://github.com/irfan-pathan-09"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaGithub/>
            </a>

            <a
              href="https://www.linkedin.com/in/irfan-khan-b042b7305/"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin/>
            </a>

            <a
              href="https://wa.me/917737110849"
              target="_blank"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp/>
            </a>

            <a
              href="mailto:khanirfanpathan389@gmail.com"
              className="hover:text-red-500 transition"
            >
              <FaEnvelope/>
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="text-center mt-6 text-gray-500">

          c 2026 Irfan Pathan. Built with React & Tailwind CSS

        </div>

      </div>

    </footer>
  );
}