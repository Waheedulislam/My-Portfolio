/* eslint-disable react/no-unknown-property */
import linkedinLogo from '../../assets/linkedin.png'
import gmailLogo from '../../assets/gmail.png'
import githubLogo from '../../assets/github.png'
import instragram from '../../assets/instgram.png'
import rightArrow from '../../assets/rightArrow.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Banner = () => {

    return (
        <div id="home">

            <div className=' flex lg:grid lg:grid-cols-2 translate-y-1/2 mt-2 '>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Animi debitis fugiat incidunt nemo, corporis quis reprehenderit,

                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}

                        className='flex max-w-max gap-x-6 mt-5 items-center  mb-12 mx-auto lg:mx-0'>
                        <button className='btn  bg-pink-700 text-xl hover:bg-pink-700  text-white relative hover:scale-110 ease-in-out duration-100 group'>

                            About Me
                            <img className='h-10 w-10 absolute top-1/2 -translate-y-1/2 -right-8 group-hover:-right-10' src={rightArrow} alt="" />
                        </button>

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
                        {/* <a href="" className='ml-7 font-semibold text-white'>My Portfolio</a> */}
                    </motion.div>
                </div>


                {/* social  */}

                <motion.ul
                    variants={fadeIn('down', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className='ml-auto mr-2 mt-10 space-y-6'>
                    <li className='w-10 h-10'><img src={linkedinLogo} alt="" />
                    </li>
                    <li className='w-10 h-10'><img src={githubLogo} alt="" /> </li>
                    <li className='w-10 h-10'><img src={gmailLogo} alt="" /> </li>
                    <li className='w-10 h-10'><img src={instragram} alt="" /> </li>
                </motion.ul>
            </div>

        </div>

    );
};

export default Banner;