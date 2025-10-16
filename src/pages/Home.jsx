import React from 'react'
import { FaInstagram, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <section className='bg-gradient-to-t from-black via-blue-900 to-blue-800 min-h-screen flex flex-col justify-center items-center text-white fixed w-full'>
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                        Hi, I'm <span className="text-blue-400">Turibius Heru Setiawan</span> 
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200">
                        Front-End Developer <span className="text-blue-400">|</span> Web Designer
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a href="/public/assets/CV2.png" target='_blank' rel='noopener noreferrer' className="px-6 py-3 bg-blue-500 hover:bg-blue-300 rounded-xl shadow-lg font-semibold transition text-white">Get CV</a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-5 text-white text-2xl">
                        <span className="text-gray-300 text-base">Follow Me:</span>
                        <a href="https://www.instagram.com/turibius_heru.s/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaInstagram/></a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaGithub/></a>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <img src="/public/assets/1.png" alt="profil" className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-xl shadow-lg border-4 border-blue-400 object-cover" />
                </div>
            </div>
        </section>
    )
}

export default Home