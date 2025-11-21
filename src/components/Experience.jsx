import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
    const experiences = [
        {
            role: "Principal Software Engineer",
            company: "Revolving Games",
            period: "2022–Present",
            highlights: [
                "Scaled MMORPG backend using Akka.NET for 20K+ concurrent players, reducing downtime by 30%",
                "Applied DDD to restructure backend systems, improving maintainability by 25%",
                "Built Unity3D network codecs cutting latency by 40%",
                "Developed internal Unity3D tools reducing manual workflows by 50%",
                "Led load testing of 25K+ users increasing performance by 20%"
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Revolving Games",
            period: "2019–2022",
            highlights: [
                "Engineered backend services for a cross-platform 4X strategy game with 99.9% uptime",
                "Streamlined CI/CD pipelines with Jenkins reducing deployment times by 40%",
                "Designed load testing frameworks improving server stability by 50%"
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Fizz.io",
            period: "2019",
            highlights: [
                "Implemented guilds, chat, store systems for Chaos Battle League driving player engagement",
                "Built core gameplay systems and real-time chat for Oz Broken Kingdom"
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Cloudcade Inc.",
            period: "2018–2019",
            highlights: [
                "Developed Heroes of Blood RPG in Cocos2d-x/C++ with PvE/PvP modes for 50K+ players",
                "Optimised game performance achieving 60 FPS & 35% faster load times"
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Caramel Tech Studios",
            period: "2017–2018",
            highlights: [
                "Built Blades of Battle RPG boosting engagement by 30%, featured under Best New Games",
                "Developed Brain Teasers & Buddies, a cognitive multiplayer puzzle game"
            ]
        },
        {
            role: "Software Developer",
            company: "Pixomondo, Germany",
            period: "2015",
            highlights: [
                "Built VR applications using Unity3D & Oculus SDK for immersive 3D storytelling",
                "Integrated motion tracking for enhanced interactivity"
            ]
        },
        {
            role: "Software Engineer",
            company: "Caramel Tech Studios",
            period: "2012–2014",
            highlights: [
                "Developed Astro Boy Flight & Order of Elements with multiplayer support for 10K+ players",
                "Implemented leaderboards, combat mechanics, and social features boosting engagement"
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-6 bg-white transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Experience</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l-4 border-indigo-200 ml-4 md:ml-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[14px] top-0 bg-indigo-600 rounded-full p-2 text-white shadow-lg">
                                <FaBriefcase size={16} />
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                                    <span className="text-indigo-600 font-semibold bg-indigo-50 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 w-fit">
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-xl text-gray-700 mb-4 font-medium">{exp.company}</h4>
                                <ul className="list-disc ml-5 space-y-2 text-gray-600">
                                    {exp.highlights.map((point, i) => (
                                        <li key={i} className="leading-relaxed">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
