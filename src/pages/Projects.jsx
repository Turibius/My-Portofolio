import React, { useState } from "react";

export default function Projects() {
    const [projects] = useState([
        {
            title: "Article Management",
            description: "Article management is a system for searching, reading, and managing articles with admin capabilities.",
            image: `${import.meta.env.BASE_URL}assets/Logo3.jpg`,
            tech: ["Next.js", "TailwindCSS", "RestApi", "TypeScript", "Vercel"],
            links: { web: "", github: "https://github.com/Turibius/Project-kerjapraktek.git" },
        }
    ]);

    return (
        <section className="bg-gradient-to-t from-black via-blue-950 to-blue-900 text-white py-12 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-8 mt-15">
                    My Project
                </h2>

                {/* Center card */}
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-blue-950 border border-gray-700 rounded-2xl shadow-lg overflow-hidden flex flex-col w-full sm:w-80"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mt-2 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded-full"
                                        >
                                            #{tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 mt-4">
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition"
                                        >
                                            View GitHub
                                        </a>
                                    )}
                                    {project.links.web && (
                                        <a
                                            href={project.links.web}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition"
                                        >
                                            Visit Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
