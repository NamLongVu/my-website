
import {FaFacebook, FaGithubSquare, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {motion} from "framer-motion";

const Contact = () => {
    return (
        <section id='contact' className='bg-gray-950 py-16 px-6'>
            <div className='max-w-7xl mx-auto'>
                <h3 className="text-4xl font-bold text-center text-gray-300 mb-4">Contact Me❕</h3>
                <h4 className="text-lg font-medium text-center text-gray-400 mb-8">
                    Any question or remarks❓Just write me a message
                </h4>
                <div className='grid lg:grid-cols-2 gap-10'>
                    {/* Contact Info */}
                    <div className='flex flex-col justify-center space-y-8'>
                        <div>
                            <h1 className='text-4xl lg:text-6xl font-bold text-gray-300 mb-4'>Let&#39;s Talk</h1>
                            <motion.p className='text-sm text-gray-400 italic mb-6'>&#34;Success is stumbling from failure to failure with no loss of enthusiasm.&#34;
                                <br />
                                <span className='text-gray-300'>- Winston Churchill</span>
                            </motion.p>
                            <h3 className='text-2xl font-semibold text-gray-300'>Email</h3>
                            <p className='text-gray-600 mt-2'>
                                <a href="#" className='text-blue-500 hover:underline'>namlongvu99@gmail.com</a>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-gray-300'>Phone</h3>
                            <p className='text-gray-600 mt-2'>
                                <a href="#" className='text-blue-500 hover:underline'>+48 787 006 187</a>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
                            <div className='flex gap-3 text-2xl transition-all mt-5'>
                                <a href="https://www.facebook.com/" target="_blank"
                                   rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebook
                                    className='text-blue-400' />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank"
                                   rel="noopener noreferrer" className="hover:text-pink-600"><FaInstagram
                                    className='text-pink-600' />
                                </a>
                                <a href="https://www.linkedin.com/in/nam-long-vu-920a2a174/" target="_blank"
                                   rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin
                                    className='text-blue-400' />
                                </a>
                                <a href="https://github.com/" target="_blank"
                                   rel="noopener noreferrer" className="hover:text-black"><FaGithubSquare
                                    className='text-white' />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="bg-gray-900 rounded-lg border border-gray-700 p-8">
                        <h3 className="text-3xl font-semibold text-gray-300 mb-6">Write me a message 👇</h3>
                        <form action="" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 w-full p-3 border border-gray-600 bg-gray-950 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 w-full p-3 border border-gray-600 bg-gray-950 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="mt-1 w-full p-3 border border-gray-600 bg-gray-950 text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;
