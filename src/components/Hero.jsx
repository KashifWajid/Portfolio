import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-sky-500 via-blue-600 to-sky-800 text-white px-6 pt-16">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative"
            >
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl transform scale-110"></div>
                <img
                    src="/profile.png"
                    alt="Kashif Wajid"
                    className="relative w-48 h-48 rounded-full border-4 border-white/50 shadow-2xl object-cover mb-8"
                />
            </motion.div>

            <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Kashif Wajid</span>
            </motion.h1>

            <motion.div
                className="text-lg md:text-2xl leading-relaxed text-center max-w-3xl mb-10 px-4 h-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <ReactTyped
                    strings={[
                        "10+ Years of Experience",
                        "Building Real-time Multiplayer Games",
                        "Architecting Distributed Systems"
                    ]}
                    typeSpeed={40}
                    backSpeed={30}
                    loop
                    className="font-mono text-sky-100"
                />
            </motion.div>

            <motion.a
                href="#experience"
                className="bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-sky-50 hover:shadow-xl transition-all transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                View My Work
            </motion.a>

            <motion.div
                className="absolute bottom-10 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
}
