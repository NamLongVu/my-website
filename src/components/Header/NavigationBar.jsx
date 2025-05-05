import { useState } from 'react';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from '../Body/ResponsiveMenu.jsx';

const NavigationBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    // Custom scroll handler to center the section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    return (
        <header className='bg-gray-950 fixed top-0 left-0 z-50 w-full py-4 shadow-lg'>
            <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8'>
                {/* Logo */}
                <span onClick={() => window.location.reload()} className='cursor-pointer'>
                    <span  className='text-3xl md:text-xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text transition-transform duration-300 hover:scale-105 inline-block'>
                        Rabbit
                    </span>
                </span>

                {/* Desktop Menu */}
                <nav className='hidden md:block'>
                    <ul className='flex gap-6 text-lg items-center font-medium text-white'>
                        <li><span onClick={() => scrollToSection('home')}
                                  className='cursor-pointer hover:text-blue-400'>Home</span></li>
                        <li><span onClick={() => scrollToSection('about')} className='cursor-pointer hover:text-blue-400'>About</span></li>
                        <li><span onClick={() => scrollToSection('education')} className='cursor-pointer hover:text-blue-400'>Education & Experience</span></li>
                        <li><span onClick={() => scrollToSection('project')} className='cursor-pointer hover:text-blue-400'>Projects</span></li>
                        <li><span onClick={() => scrollToSection('contact')} className='cursor-pointer hover:text-blue-400'>Contact</span></li>
                    </ul>
                </nav>

                {/* Mobile Menu Icon */}
                <div className='md:hidden text-white text-3xl'>
                    {showMenu ? <HiMenuAlt3 onClick={toggleMenu} /> : <HiMenuAlt1 onClick={toggleMenu} />}
                </div>
            </div>

            {/* Mobile Responsive Menu */}
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </header>
    );
};

export default NavigationBar;