import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-sky-600 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 opacity-90"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Let's Work Together
                </motion.h2>
                <motion.p
                    className="text-lg text-sky-100 mb-10 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </motion.p>

                <motion.div
                    className="flex justify-center gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <a
                        href="mailto:kashif.wajid@gmail.com"
                        className="flex flex-col items-center group"
                    >
                        <div className="bg-white/10 p-4 rounded-full mb-3 group-hover:bg-white group-hover:text-sky-600 transition-all duration-300">
                            <FaEnvelope size={24} />
                        </div>
                        <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Email</span>
                    </a>

                    <a
                        href="https://github.com/KashifWajid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                    >
                        <div className="bg-white/10 p-4 rounded-full mb-3 group-hover:bg-white group-hover:text-sky-600 transition-all duration-300">
                            <FaGithub size={24} />
                        </div>
                        <span className="text-sm font-medium opacity-80 group-hover:opacity-100">GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kashif-wajid-qureshi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                    >
                        <div className="bg-white/10 p-4 rounded-full mb-3 group-hover:bg-white group-hover:text-sky-600 transition-all duration-300">
                            <FaLinkedin size={24} />
                        </div>
                        <span className="text-sm font-medium opacity-80 group-hover:opacity-100">LinkedIn</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
