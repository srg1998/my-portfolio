import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-6">Let's Connect</h2>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-6 text-gray-700 mb-6 text-md">
          <div className="flex items-center gap-2 justify-center">
            <HiOutlineMail className="text-xl" />
            <a
              href="mailto:sreeragsubhash9@gmail.com"
              className="hover:underline"
            >
              sreeragsubhash9@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2 justify-center">
            <FaPhoneAlt className="text-sm" />
            <a href="tel:+917356109264" className="hover:underline">
              +91 73561 049264
            </a>
          </div>

          <div className="flex items-center gap-2 justify-center">
            📍<span>Calicut, Kerala, India</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a
            href="https://github.com/srg1998"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sreerag-subhash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-black"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.kaggle.com/sreerags"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-black text-[28px]"
          >
            <SiKaggle />
          </a>
        </div>

        {/* <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sreerag Subhash. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
}
