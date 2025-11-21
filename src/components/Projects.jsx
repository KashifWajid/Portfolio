import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            name: "Skyborne Phoenix Flight",
            category: "MMORPG",
            description: "Casual MMORPG supporting 20K+ concurrent players with Akka.NET backend, optimized latency & performance.",
            link: "https://revolvinggames.com/games/skyborne",
            image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Skyborne" // Placeholder, would ideally use real images
        },
        {
            name: "Chaos Battle League",
            category: "Strategy",
            description: "Implemented guilds, chat, store systems in Unity3D driving engagement & retention.",
            link: "https://www.youtube.com/watch?v=-t4knmgWXws",
            image: "https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=Chaos+Battle"
        },
        {
            name: "Oz Broken Kingdom",
            category: "RPG",
            description: "Core gameplay systems & real-time chat built for seamless player interactions.",
            link: "https://www.youtube.com/watch?v=g9OJk5ghwS8",
            image: "https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Oz+Broken+Kingdom"
        },
        {
            name: "Heroes of Blood",
            category: "RPG",
            description: "Strategy card-based RPG with PvE & PvP modes for 50K+ players in Cocos2d-x/C++.",
            link: "https://www.youtube.com/watch?v=x5yAjvl83Jg",
            image: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Heroes+of+Blood"
        },
        {
            name: "Blades of Battle RPG",
            category: "RPG",
            description: "Featured under Best New Games in 137 countries, boosting engagement by 30%.",
            link: "https://www.amazon.com/Caramel-Tech-Studios-Blades-Battle/dp/B01D9SZKUO",
            image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Blades+of+Battle"
        },
        {
            name: "Brain Teasers & Buddies",
            category: "Puzzle",
            description: "Turn-based cognitive multiplayer game built in Cocos2d-x/C++.",
            link: "https://apkpure.net/brain-teasers-buddies/com.carameltec.btnbAndroid",
            image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Brain+Teasers"
        },
        {
            name: "Astro Boy Flight",
            category: "Arcade",
            description: "Dynamic difficulty & enemy wave spawning for challenging gameplay in Unity3D.",
            link: "https://www.amazon.com/Animoca-Brands-Astro-Boy-Flight/dp/B00UMQ1NLW",
            image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Astro+Boy"
        }
    ];

    const categories = ["All", "MMORPG", "Strategy", "RPG", "Puzzle", "Arcade"];
    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20 px-6 bg-gray-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Projects</h2>
                    <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-8"></div>

                    <div className="flex justify-center gap-3 flex-wrap">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-sky-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    {/* Placeholder gradient if image fails or for style */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 opacity-80 group-hover:scale-110 transition-transform duration-500"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl p-4 text-center">
                                        {project.name}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold px-3 py-1 bg-sky-100 text-sky-600 rounded-full uppercase tracking-wide">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-sky-600 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:underline"
                                    >
                                        View Project <FaExternalLinkAlt size={14} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
