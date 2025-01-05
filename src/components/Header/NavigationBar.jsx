import { useState } from 'react';
import Logo from '../../assets/Logo2.jpg';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from '../Body/ResponsiveMenu.jsx';

const NavigationBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='bg-gray-950 fixed top-0 left-0 z-50 w-full py-4 shadow-lg'>
            <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8'>
                {/* Logo Section */}
                <div>
                    <a href="/public">
                        <img
                            src={Logo}
                            alt="Logo"
                            className='w-40 md:w-20 h-auto object-contain transition-transform duration-300 hover:scale-105'
                        />
                    </a>
                </div>

                {/* Menu Section */}
                <nav className='hidden md:block'>
                    <ul className='flex gap-6 text-lg items-center font-medium text-white'>
                        <a href="/public"><li className='cursor-pointer hover:text-blue-400'>Home</li></a>
                        <a href="#about"><li className='cursor-pointer hover:text-blue-400'>About</li></a>
                        <a href="#education"><li className='cursor-pointer hover:text-blue-400'>Education & Experience</li></a>
                        <a href="#project"><li className='cursor-pointer hover:text-blue-400'>Projects</li></a>

                    </ul>
                </nav>

                {/* Mobile Menu Icon */}
                <div className='md:hidden text-white text-3xl'>
                    {showMenu ? <HiMenuAlt3 onClick={toggleMenu} /> : <HiMenuAlt1 onClick={toggleMenu} />}
                </div>
            </div>

            {/* Responsive Menu */}
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
    );
};

export default NavigationBar;