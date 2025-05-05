import AboutImg from '../../assets/About.jpg';
import File from "../../assets/Nam_Long_Vu_CV.pdf";
import { Download } from "lucide-react";

const About = () => {
    return (
        <section id='about' className='py-20 bg-gray-900 text-white'>
            <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10'>
                {/* Left avatar */}
                <div className='flex-shrink-0 md:-ml-18'>
                    <img
                        src={AboutImg}
                        alt="Nam Long Vu"
                        className='w-64 h-64 object-cover rounded-full shadow-lg'
                    />
                </div>

                {/* Right content */}
                <div className='flex-1'>
                    <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                    <h3 className='text-2xl font-semibold mb-2'>Who am I?</h3>
                    <p className='text-gray-300 mb-6 leading-7'>
                        I&apos;m a passionate frontend developer with 5 years of experience building modern web
                        applications.
                        I specialize in React, JavaScript, and responsive design principles to create seamless user
                        experiences.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-wrap gap-4'>
                        <a
                            href={File}
                            download="Nam_Long_Vu_CV.pdf"
                            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2'
                        >
                            <Download className='w-4 h-4' /> My Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;