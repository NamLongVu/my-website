import AboutImg from '../../assets/About.jpg'
import File from "../../assets/Nam_Long_Vu_CV.pdf";
import {Download} from "lucide-react";
import {motion} from "framer-motion";

const About = () => {
    return (
        <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</h2>
                <div className='flex flex-col md:flex-row gap-20 items-center'>
                    {/* img section */}
                    <div className='relative border hidden md:block border-blue-950 p-1 rounded-full bg-blue-950'>
                        <img
                            src={AboutImg}
                            alt=""
                            className='w-[300px] md:w-[1500px] rounded-full border-blue-950 border'
                        />
                    </div>
                    {/* paragraph section */}
                    <div className='p-5 md:p-10 bg-gray-950 rounded-md'>
                        <p className='text-lg leading-7 mb-6'>
                            Hi! I'm Nam Long Vu. As a detail-oriented Software Developer with 1 year of experience in
                            .NET, C#, and Azure cloud development, I specialize in creating scalable and efficient
                            software solutions that address complex challenges.
                        </p>
                        <p className='text-lg leading-7 mb-6'>
                            My expertise lies in designing and implementing REST APIs, adhering to Agile methodologies,
                            and delivering innovative projects with measurable impact. I have successfully contributed
                            to VAT compliance automation solutions tailored for the e-commerce sector, ensuring
                            operational accuracy and efficiency.
                        </p>
                        <p className='text-lg leading-7'>
                            With a strong commitment to continuous learning and a drive for excellence, I am eager to
                            bring my technical expertise and collaborative approach to a dynamic software engineering
                            role, where I can make meaningful contributions to impactful projects. Let’s connect and
                            build something amazing together!
                        </p>
                        <div className='mt-5'>
                            <h1 className='font-bold text-2xl mb-5 text-blue-400'>My Skills</h1>
                            <div className='flex flex-wrap gap-4 mb-5 text-sm'>
                                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>.NET</p>
                                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Java</p>
                                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>RESTful
                                    APIs</p>
                                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>SQL
                                    Server</p>
                                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Microsoft
                                    Azure</p>
                                <p className='bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full'>Jira</p>
                            </div>
                        </div>
                        <motion.button
                            className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'
                        >
                            <a
                                href={File} // Use the imported file object as the href
                                download="Nam_Long_Vu_CV.pdf" // Specify the download file name
                                className='flex items-center gap-2 text-white'
                            >
                                <Download className='w-5 h-5'/> My Resume
                            </a>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About