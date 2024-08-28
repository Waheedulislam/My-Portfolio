/* eslint-disable react/no-unknown-property */
import linkedinLogo from '../../assets/linkedin.png'
import gmailLogo from '../../assets/gmail.png'
import githubLogo from '../../assets/github.png'
import instragram from '../../assets/instgram.png'
import fbLogo from '../../assets/fb-logo.png'
import rightArrow from '../../assets/rightArrow.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import PopupModal from '../../Components/PopUpModal/PopupModal'
import { Link } from 'react-scroll'

const Banner = () => {

    return (
        <div id="home">

            <div className=' flex lg:grid lg:grid-cols-2 translate-y-1/2  '>
                <div className='flex flex-col gap-y-6 pt-3'>
                    <div className='flex-1 text-center
                     font-secondary lg:text-left'>
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='My-heading text-6xl text-white font-bold '
                        >
                            Waheedul <span>Islam</span>
                        </motion.h1>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}

                        className='text-2xl lg:text-4xl  text-center lg:text-left'>
                        <span className='text-white My-heading2'>I am a </span>
                        <TypeAnimation sequence={[
                            'Front End Developer.',
                            2000,
                            'JavaScript Developer.',
                            2000,
                            'Mern Stack Developer.',
                            2000,

                        ]}
                            speed={50}
                            className='My-heading text-white px-2 font-bold bg-pink-700
                             rounded-lg'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </motion.div>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className='mb-auto mx-w-lg my-2 mx-8 
                           font-semibold text-white  text-
                          lg:text-left lg:mx-0'>
                        As a front-end developer, I specialize in creating visually appealing, responsive, and user-centric web interfaces. My expertise lies in translating design concepts into interactive and functional websites using HTML, CSS,JavaScript and ReactJs. Strong background in management and leadership.

                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}

                        className='flex max-w-max gap-x-6 mt-5 items-center  mb-12 mx-auto lg:mx-0'>

                        {/* PopUpModal Button  */}
                        <PopupModal></PopupModal>

                        {/* TypeAnimation code  */}
                        <TypeAnimation sequence={[
                            'My Portfolio.',
                            2000,

                        ]}
                            speed={50}
                            className=' text-white px-2 font-bold ml-7  bg-pink-700
                             rounded-lg'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </motion.div>




                </div>


                {/* social  */}

                <motion.ul
                    variants={fadeIn('down', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='ml-auto mr-2 mt-6 space-y-6'>
                    <li className='w-8 h-8'>
                        <a href="https://www.linkedin.com/in/waheedul-islam">
                            <img src={linkedinLogo} alt="" />
                        </a>
                    </li>
                    <li className='w-8 h-8'>
                        <a href="https://github.com/Waheedulislam">
                            <img src={githubLogo} alt="" />
                        </a>
                    </li>
                    <li className='w-8 h-8'>
                        <a href="baoppyhossen1234@gmail.com">
                            <img src={gmailLogo} alt="" />
                        </a>
                    </li>
                    <li className='w-8 h-8'>
                        <a href="https://www.instagram.com/waheedul_islam775/">
                            <img src={instragram} alt="" />
                        </a>
                    </li>
                    <li className='w-8 h-8'>
                        <a href="https://www.facebook.com/bappy.hosen.568">
                            <img src={fbLogo} alt="" />
                        </a>
                    </li>
                </motion.ul>
            </div>
            <div className='text-center'>
                <motion.div variants={fadeIn('down', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <Link to='service'>
                        <button className="btn animate-bounce mt-64 bg-pink-700 text-xl hover:bg-pink-700  text-white relative group hover:scale-110 ease-in-out duration-100  "

                        >

                            Scroll Down
                            <img className='rotate-90 h-8 w-10 absolute left-1/2 -translate-x-1/2 top-14 group-hover:top-16' src={rightArrow} alt="" />
                        </button></Link>
                </motion.div>
            </div>
        </div >

    );
};

export default Banner;