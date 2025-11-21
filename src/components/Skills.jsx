import { motion } from 'framer-motion';
import { FaGamepad, FaServer, FaTachometerAlt, FaCloud, FaTools, FaProjectDiagram } from 'react-icons/fa';

export default function Skills() {
    const coreSkills = [
        {
            category: 'Mobile Game Development',
            icon: <FaProjectDiagram className="text-4xl mb-4 text-sky-500" />,
            skills: 'Unity3D (C#), Cocos2d-x (C++), iOS & Android, Gameplay Architecture, Asset Optimisation'
        },
        {
            category: 'Backend Engineering',
            icon: <FaServer className="text-4xl mb-4 text-indigo-500" />,
            skills: 'Akka.NET, .NET Core, Microservices, Event-Driven Systems, DDD, TDD, Redis Caching'
        },
        {
            category: 'Performance Optimisation',
            icon: <FaTachometerAlt className="text-4xl mb-4 text-indigo-500" />,
            skills: 'Load Testing (JMeter, Locust), Profiling, Latency Reduction, Query Optimisation'
        },
        {
            category: 'DevOps & Cloud',
            icon: <FaCloud className="text-4xl mb-4 text-indigo-500" />,
            skills: 'AWS (EC2, S3, RDS, Lambda), Terraform, Docker, CI/CD (Jenkins, Git hooks)'
        },
        {
            category: 'Monitoring & Reliability',
            icon: <FaTools className="text-4xl mb-4 text-indigo-500" />,
            skills: 'Prometheus, Grafana, CloudWatch, Stats-D'
        },
        {
            category: 'Project Tools',
            icon: <FaProjectDiagram className="text-4xl mb-4 text-indigo-500" />,
            skills: 'Jira, Confluence, Git, Agile/Scrum, Code Review, Automated Testing'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 px-6 bg-gray-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Core Skills</h2>
                    <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {coreSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="p-4 bg-sky-50 rounded-full mb-6">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{skill.category}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {skill.skills}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
