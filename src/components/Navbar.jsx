    import React, { useState } from "react";
    import { Link } from "react-router-dom";

    const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <nav className="bg-gradient-to-r from-black via-blue-900 to-blue-800 fixed w-full z-20 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo dan Nama */}
                        <div className="flex items-center space-x-3">
                            <img src="/My-Portofolio/assets/logo.png" alt="logo" className="h-9 w-9" />
                            <span className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">Turibius Heru Setiawan</span>
                        </div>
                        {/* Menu Navigasi */}
                        <div className="hidden md:flex space-x-8">
                            <Link to="/" className="text-white hover:text-blue-300 transition">Home</Link>
                            <Link to="/About" className="text-white hover:text-blue-300 transition">About</Link>
                            <Link to="/Experience" className="text-white hover:text-blue-300 transition">Experience</Link>
                            <Link to="/Projects" className="text-white hover:text-blue-300 transition">Projects</Link>
                        </div>
                        {/* Tombol Menu untuk Mobile */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="tfocus:outline-none text-white text-3xl">
                                {isOpen ? '✖' : '☰'}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Menu Mobile */}
                <div className={`md:hidden bg-gradient-to-r from-black via-blue-900 to-blue-800 shadow-md transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                    <div className="flex flex-col space-y-4 px-6 py-4">
                        <Link to="/" className="text-white hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/About" className="text-white hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>About</Link>
                        <Link to="/Experience" className="text-white hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>Experience</Link>
                        <Link to="/Projects" className="text-white hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>Projects</Link>
                    </div>
                </div>
            </nav>
        )
    }

    export default Navbar