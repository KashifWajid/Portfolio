import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGamepad, FaServer, FaTachometerAlt, FaCloud, FaTools, FaProjectDiagram } from 'react-icons/fa';

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const coreSkills = [
    {
      category: 'Mobile Game Development',
      icon: <FaGamepad className="text-indigo-600 text-3xl" />,
      skills: 'Unity3D (C#), Cocos2d-x (C++), iOS & Android, Gameplay Architecture, Asset Optimisation, Performance Profiling'
    },
    {
      category: 'Backend Engineering',
      icon: <FaServer className="text-indigo-600 text-3xl" />,
      skills: 'Akka.NET, .NET Core, Microservices, Event-Driven Systems, DDD, TDD, OLTP & OLAP, Redis Caching'
    },
    {
      category: 'Performance Optimisation',
      icon: <FaTachometerAlt className="text-indigo-600 text-3xl" />,
      skills: 'Load Testing (JMeter, Locust), Profiling, Latency Reduction, Query Optimisation, Scaling, Async Programming'
    },
    {
      category: 'DevOps & Cloud',
      icon: <FaCloud className="text-indigo-600 text-3xl" />,
      skills: 'AWS (EC2, S3, RDS, Lambda), Terraform, Docker, CI/CD (Jenkins, Git hooks)'
    },
    {
      category: 'Monitoring & Reliability',
      icon: <FaTools className="text-indigo-600 text-3xl" />,
      skills: 'Prometheus, Grafana, CloudWatch, Stats-D'
    },
    {
      category: 'Project Tools & Collaboration',
      icon: <FaProjectDiagram className="text-indigo-600 text-3xl" />,
      skills: 'Jira, Confluence, Git, Agile/Scrum, Code Review, Automated Testing'
    }
  ];
  const [projects] = useState([
    {
      name: "Skyborne Phoenix Flight",
      category: "MMORPG",
      description: "Casual MMORPG supporting 20K+ concurrent players with Akka.NET backend, optimized latency & performance.",
      link: "https://revolvinggames.com/games/skyborne"
    },
    {
      name: "Chaos Battle League",
      category: "Strategy",
      description: "Implemented guilds, chat, store systems in Unity3D driving engagement & retention.",
      link: "https://www.youtube.com/watch?v=-t4knmgWXws"
    },
    {
      name: "Oz Broken Kingdom",
      category: "RPG",
      description: "Core gameplay systems & real-time chat built for seamless player interactions.",
      link: "https://www.youtube.com/watch?v=g9OJk5ghwS8"
    },
    {
      name: "Heroes of Blood",
      category: "RPG",
      description: "Strategy card-based RPG with PvE & PvP modes for 50K+ players in Cocos2d-x/C++.",
      link: "https://www.youtube.com/watch?v=x5yAjvl83Jg"
    },
    {
      name: "Blades of Battle RPG",
      category: "RPG",
      description: "Featured under Best New Games in 137 countries, boosting engagement by 30%.",
      link: "https://www.amazon.com/Caramel-Tech-Studios-Blades-Battle/dp/B01D9SZKUO"
    },
    {
      name: "Brain Teasers & Buddies",
      category: "Puzzle",
      description: "Turn-based cognitive multiplayer game built in Cocos2d-x/C++.",
      link: "https://apkpure.net/brain-teasers-buddies/com.carameltec.btnbAndroid"
    },
    {
      name: "Astro Boy Flight",
      category: "Arcade",
      description: "Dynamic difficulty & enemy wave spawning for challenging gameplay in Unity3D.",
      link: "https://www.amazon.com/Animoca-Brands-Astro-Boy-Flight/dp/B00UMQ1NLW"
    }
  ]);

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

  const categories = ["All", "MMORPG", "Strategy", "RPG", "Puzzle", "Arcade"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <motion.img
          src="/profile.png"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Kashif Wajid
        </motion.h1>
        <motion.p
          className="text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Full-Stack Game Dev | Aspiring Cook
        </motion.p>
        <motion.a
          href="#projects"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </section>

{/* Core Skills Section */}
<section className="py-20 px-6 text-center">
  <h2 className="text-3xl font-bold mb-6">Core Skills</h2>
  <div className="max-w-4xl mx-auto space-y-6 text-left">
    {coreSkills.map((skill, index) => (
      <motion.div
        key={index}
        className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -45, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          className="flex-shrink-0"
        >
          {skill.icon}
        </motion.div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
          <p className="text-gray-700">{skill.skills}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
      {/* Experience Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold">{exp.role} - {exp.company}</h3>
              <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {exp.highlights.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section with Filters */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${filter === cat ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} shadow hover:shadow-md transition`}
              whileHover={{ scale: 1.05 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-600 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">Feel free to reach out via email or connect on GitHub/LinkedIn.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:kashif.wajid@gmail.com" className="hover:underline">Email</a>
          <a href="https://github.com/KashifWajid" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/kashif-wajid-qureshi/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
