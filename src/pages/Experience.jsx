import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Experience extends Component {
    static propTypes = { second: PropTypes.string}
    state = {
    selectedImage: null, // untuk menampung gambar yang diklik
    }
    render() {
        const experiences = [
            {
                title: "Work Practice",
                place: "Assisted Lecturer – Practical Internship",
                description: "Worked with a lecturer on a project, gaining experience in research collaboration and technical implementation.",
                year: "2023",
                certificateImage: "/public/assets/Turibius Heru Setiawan 205314031-1.png",
                certificateFile: "/public/assets/Turibius Heru Setiawan 205314031.pdf"
            },
            {
                title: "Committee Experience",
                place: "Pekan Olahraga – CO (Coordinator)",
                description: "Organized and coordinated sports week activities, developed leadership and event management skills.",
                year: "2022",
                certificateImage: "/public/assets/Sertif-Panitia_018.png",
                certificateFile: "/public/assets/Sertif-Panitia_018.pdf"
            }
            
        ]
        return (
            <div className="bg-gradient-to-t from-black via-blue-900 to-blue-800 min-h-screen p-6">
                <section className="max-w-5xl mx-auto mb-12 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 mt-20">Experience</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        A summary of my practial, organization and academic project experiences that
                        halped me grow my techinical and teamwork skills.
                    </p>
                </section>
                
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 text-left hover:scale-105 transition-transform flex flex-col justify-between  w-full sm:w-80"
                        >
                            <div>
                                <img
                                    src={exp.certificateImage}
                                    alt={`${exp.title} certificate`}
                                    className="rounded-lg mb-4 w-full object-cover h-40"
                                />
                                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                                <h4 className="text-md font-semibold text-indigo-200 mb-2">{exp.place}</h4>
                                <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                                <span className="block text-indigo-400 text-sm font-medium">{exp.year}</span>
                            </div>
                            <a
                                href={exp.certificateFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
                            >
                                View
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default Experience
