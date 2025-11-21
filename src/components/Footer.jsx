import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Kashif Wajid. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="mailto:kashif.wajid@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <FaEnvelope size={20} />
                    </a>
                    <a href="https://github.com/KashifWajid" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/kashif-wajid-qureshi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
