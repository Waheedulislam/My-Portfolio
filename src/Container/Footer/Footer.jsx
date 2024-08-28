import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <motion.footer
                variants={fadeIn('down', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="footer footer-center mt-20 text-white rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        {/* instragram  */}
                        <a href="https://www.instagram.com/waheedul_islam775/">
                            <FaInstagram className='w-8 h-8' />

                        </a>
                        {/* github  */}
                        <a href="https://github.com/Waheedulislam">
                            <FaGithub className='w-8 h-8' />
                        </a>

                        {/* linkedin */}
                        <a href="https://www.linkedin.com/in/waheedul-islam">
                            <FaLinkedin className='w-8 h-8' />
                        </a>

                        {/* facebook  */}
                        <a href="https://www.facebook.com/bappy.hosen.568">
                            <FaFacebook className='w-8 h-8' />

                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Waheedul Islam</p>
                </aside>
            </motion.footer>
        </div>
    );
};

export default Footer;