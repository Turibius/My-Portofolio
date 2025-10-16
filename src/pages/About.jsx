import React, { PureComponent } from 'react'

export class About extends PureComponent {
    render() {
    return (
        <div className="bg-gradient-to-t from-black via-blue-900 to-blue-800 min-h-screen  items-center  p-6 text-white overflow-y-auto">
            <section className="max-w-3xl mb-12 mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 mt-25"> About Me</h2>
                <p className="text-lg leading-relaxed text-justify">
                    Hello, I'm <span className="font-semibold">Turibius Heru Setiawan</span>, 
                    a fresh graduate in Informatics 🎓 with a strong passion for web development, 
                    especially in front-end 💻🎨. I love creating modern, responsive, and 
                    user-friendly websites 📱💻 by using the latest technologies 🚀.
                </p>

                <p className="text-lg leading-relaxed mt-4 text-justify">
                    As a beginner Front-End Developer 🛠️, I turn design concepts into real 
                    interfaces using HTML, CSS, JavaScript, and Tailwind CSS ⚡. I also care 
                    about UI/UX 🎨✨ to ensure the websites I build are not only visually appealing 
                    but also easy to use.
                </p>

                <p className="text-lg leading-relaxed mt-4 text-justify">
                    I am dedicated 💡, adaptable 🔄, and eager to grow 📈 by learning new technologies 🔍 
                    and sharpening my technical skills 🧑‍💻. For me, building websites is about 
                    creating functional ⚙️, valuable 💎, and meaningful 🌟 digital solutions that 
                    truly help users 🤝.
                </p>
            </section>
            <section className="max-w-4xl w-full mx-auto mb-12 text-center">
                <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
                <div className="flex justify-center">
                    <p className="text-lg leading-relaxed mt-4 ">
                    Sanata Dharma University (2020 – 2024) Bachelor's Degree in Informatics 📈 GPA: 3.21
                    </p>
                </div>
            </section>
            <section className="max-w-4xl w-full mx-auto mb-12 text-center">
                <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                    {["HTML", "CSS", "JavaScript", "React JS", 
                        "PHP", "Git", 
                        "GitHub", "Python", "Tailwind CSS", ].map((skill, index) => (
                        <span key={index} className="bg-white/20 px-4 py-2 rounded-xl font-medium shadow-md hover:bg-white/30 transition">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>
        </div>
        )
    }
}

export default About