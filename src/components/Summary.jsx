import { motion } from 'framer-motion';

export default function Summary() {
    return (
        <section className="flex flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-16">
            <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Summary of Work
            </motion.h2>

            <motion.div
                className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 max-w-3xl text-center shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <p className="text-base md:text-lg leading-relaxed text-white/90">
                    Principal Software Engineer with 10+ years of experience building real-time multiplayer mobile games
                    and high-performance distributed backend systems. Delivered 5+ global game launches, including MMORPGs,
                    4X strategy titles, and card-based strategy games supporting 25K+ concurrent players with 99.9% uptime
                    and 40% latency reduction. Expert in Unity3D (C#) for mobile game development and Akka.NET, .NET Core,
                    DDD, and microservices for scalable backend architectures. Skilled in performance optimisation, load testing
                    (JMeter, Locust), and cloud-native deployments (AWS, Terraform, Docker), with a proven track record of improving
                    server reliability by 50%.
                </p>
            </motion.div>
        </section>
    );
}
