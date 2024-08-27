import { FaAlignJustify, FaBattleNet } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Tilt from 'react-parallax-tilt';
import { MdOutlinePhonelink } from "react-icons/md";

const Service = () => {
    return (
        <div id="service" className="my-10">
            <div className="text-center">
                <h1 className="text-4xl  text-white font-bold mt-10">My Services</h1>
                <progress className="progress  w-64 mb-10 mt-4 progress-warning "></progress>
            </div>

            <div className="grid grid-cols-3">
                {/* card-1  */}

                <Tilt className="background-stripes parallax-effect" perspective={500}>
                    <motion.div className="card glass w-96 "
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}>
                        <figure>
                            <FaBattleNet className="w-20  h-20 mt-10 text-pink-600" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-4xl text-white font-bold">Web Design</h2>
                            <p className="mt-2 ">I provide excellent web design services with an emphasis on aesthetically pleasing websites, with a focus on user-friendly, responsive websites.</p>
                            <div className="card-actions justify-center">
                                <button className="btn animate-bounce mt-10  bg-pink-700 text-xl hover:bg-pink-700  text-white relative group hover:scale-110 ">Learn More !</button>
                            </div>
                        </div>
                    </motion.div>
                </Tilt>

                {/* card-2  */}
                <Tilt className="background-stripes parallax-effect" perspective={500}>
                    <motion.div className="card bg-base-100 w-96 shadow-xl"
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}>
                        <figure>
                            <FaAlignJustify className="w-20  h-20 mt-10 text-pink-600" />


                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-3xl text-white font-bold">Web Development</h2>
                            <p className="mt-2">I provide professional web development services, specializing in creating user-friendly websites. My expertise includes front-end and back-end development, e-commerce solutions.</p>
                            <div className="card-actions justify-center">
                                <button className="btn animate-bounce mt-10  bg-pink-700 text-xl hover:bg-pink-700  text-white relative group hover:scale-110 ">Learn More !</button>
                            </div>
                        </div>
                    </motion.div>
                </Tilt>

                {/* card-3 */}
                <Tilt className="background-stripes parallax-effect" perspective={500}>
                    <motion.div className="card glass w-96"
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <figure>
                            <MdOutlinePhonelink className="w-20  h-20 mt-10 text-pink-600" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-3xl text-white font-bold">Responsive Design</h2>
                            <p className="mt-2">Every website I build with two primary goals Firstly, it needs to work across all devices. Secondly, creating responsive all devise and user-friendly websites.</p>
                            <div className="card-actions justify-center">
                                <button className="btn animate-bounce mt-10  bg-pink-700 text-xl hover:bg-pink-700  text-white relative group hover:scale-110 ">Learn More !</button>
                            </div>
                        </div>
                    </motion.div>
                </Tilt>





            </div>

        </div>
    );
};

export default Service;