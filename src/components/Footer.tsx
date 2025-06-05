
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rezaul Karim
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Full-Stack Developer specializing in Python automation, web development, and creating digital solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Python Automation</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Django Development</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Laravel Applications</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">React Development</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">WordPress Solutions</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Technical Consulting</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Contact</h4>
            <div className="space-y-2 text-gray-300 dark:text-gray-400">
              <p className="hover:text-white transition-colors duration-300">
                <strong>WhatsApp:</strong> 01777889900
              </p>
              <p className="hover:text-white transition-colors duration-300">
                <strong>Email:</strong> contact@nexxenit.com
              </p>
              <p className="hover:text-white transition-colors duration-300">
                <strong>Status:</strong> Available for new projects
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-400 flex items-center justify-center">
            © 2024 Rezaul Karim. Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and passion for code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
