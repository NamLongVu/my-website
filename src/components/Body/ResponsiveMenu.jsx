import { FaChevronRight, FaUserCircle } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    const handleClick = () => setShowMenu(false);

    return (
        <aside
            className={`${
                showMenu ? 'left-0' : '-left-[100%]'
            } fixed top-0 bottom-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-950 px-8 pb-6 pt-16 text-white md:hidden rounded-r-xl shadow-lg transition-all duration-300 ease-in-out`}
        >
            <div>
                {/* User Info */}
                <div className="flex items-center gap-3 mb-10">
                    <FaUserCircle size={50} className="text-white" />
                    <div>
                        <h1 className="text-white text-lg font-medium">Hello User</h1>
                        <h2 className="text-sm text-slate-400">Premium User</h2>
                    </div>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex flex-col gap-6 text-lg font-semibold">
                        <li className="cursor-pointer hover:text-blue-400" onClick={handleClick}>
                            <a href="#home">Home</a>
                        </li>
                        <li className="cursor-pointer hover:text-blue-400" onClick={handleClick}>
                            <a href="#about">About</a>
                        </li>
                        <li className="cursor-pointer hover:text-blue-400" onClick={handleClick}>
                            <a href="#education">Education & Experience</a>
                        </li>
                        <li className="cursor-pointer hover:text-blue-400" onClick={handleClick}>
                            <a href="#project">Projects</a>
                        </li>
                        <li onClick={handleClick}>
                            <a href="#contact">
                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 border-2 border-blue-400 text-white rounded-md shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] transition hover:scale-105">
                                    Contact <FaChevronRight />
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default ResponsiveMenu;