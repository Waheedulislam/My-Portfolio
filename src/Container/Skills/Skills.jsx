import { FaArrowCircleRight, FaBiohazard } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { MdWebhook } from "react-icons/md";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    return (
        <div id="skill" className=" pt-40">
            <div className="text-center">
                <h1 className="text-5xl text-white font-semibold text-center " >My Skills</h1>
                <progress className="progress  w-64 mb-10 mt-4 progress-warning   "></progress>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center align-middle">
                {/* card-01  */}
                <Tilt className="background-stripes parallax-effect" perspective={500}>
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="card   glass lg:card-side  items-center  shadow-xl">
                        <figure>
                            <GrUserExpert className="lg:ml-3 w-52 rounded-2xl  h-52 mt-10 text-pink-700" />

                        </figure>
                        <div className="card-body text-white">
                            <h2 className="text-4xl  text-center text-white mb-4">Expert !</h2>
                            <div className="flex items-center">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">React js</span>
                                </p>
                                <p className="flex items-center ml-3  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Next js</span>
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Javascript</span>
                                </p>
                                <p className="flex items-center ml-3  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">TypeScript</span>
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Html5</span>
                                </p>
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Css3</span>
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Redux</span>
                                </p>
                                <p className="flex items-center mr-9  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Redux Toolkit</span>
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Material Ui</span>
                                </p>
                                <p className="flex items-center mr-9  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">ShadCn</span>
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Bootstrap</span>
                                </p>
                                <p className="flex items-center ml-7  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Tailwind Css</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </Tilt>
                {/* card-2  */}
                <Tilt className="background-stripes parallax-effect" perspective={500}>
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="card glass  lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <FaBookOpenReader className="lg:ml-6 w-48 rounded-2xl  h-52 mt-10 text-pink-700" />

                        </figure>
                        <div className="card-body text-center  text-white mr-10">
                            <h2 className="text-4xl  text-center text-white mb-4 ml-12">Familiar !</h2>
                            <div className="flex items-center mb-4">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">RTK Query</span>
                                </p>
                                <p className="flex items-center ml-8 text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Ant Design</span>
                                </p>
                            </div>
                            <div className="flex items-center mb-4">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Strip</span>
                                </p>
                                <p className="flex items-center ml-8  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">SSL Commerce</span>
                                </p>
                            </div>

                            <div className="flex items-center mb-4">
                                <p className="flex items-center mr-3 text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Tanstack Query</span>
                                </p>
                                <p className="flex items-center lg:ml-1 ml-8 text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Axios</span>
                                </p>
                            </div>
                            <div className="flex items-center mb-4">
                                <p className="flex items-center mr-3 text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">JWT</span>
                                </p>
                                <p className="flex items-center lg:ml-1 ml-8 text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Firebase</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </Tilt>

                {/* card-3  */}
                <Tilt className="background-stripes parallax-effect" perspective={500}> <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="card glass lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <FaBiohazard className="ml-6 w-52 rounded-2xl  h-52 mt-10 text-pink-700" />


                    </figure>
                    <div className="card-body mr-10 text-white">
                        <h2 className="text-4xl ml-12 lg:ml-2  text-center text-white mb-4">Comfortable !</h2>
                        <div className="flex items-center mb-4">
                            <p className="flex items-center  text-xl">
                                <FaArrowCircleRight className="text-pink-600" />
                                <span className="ml-2">MongoDB</span>
                            </p>
                            <p className="flex items-center ml-2 text-xl">
                                <FaArrowCircleRight className="text-pink-600" />
                                <span className="ml-2">Mongoose</span>
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <p className="flex items-center  text-xl">
                                <FaArrowCircleRight className="text-pink-600" />
                                <span className="ml-2">Node Js</span>
                            </p>
                            <p className="flex items-center ml-3  text-xl">
                                <FaArrowCircleRight className="text-pink-600" />
                                <span className="ml-2">Rest api</span>
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <p className="flex items-center  text-xl">
                                <FaArrowCircleRight className="text-pink-600" />
                                <span className="ml-2">Express js</span>
                            </p>
                            <p className="flex items-center ml-3 text-xl">
                                <FaArrowCircleRight className="text-pink-600" />
                                <span className="ml-2">DotEnv</span>
                            </p>
                        </div>
                    </div>
                </motion.div></Tilt>


                {/* card-4  */}

                <Tilt className="background-stripes parallax-effect" perspective={500}>
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="card  glass lg:card-side  items-center  shadow-xl">
                        <figure>
                            <MdWebhook className="lg:ml-3 w-52 rounded-2xl  h-52 mt-10 text-pink-700" />

                        </figure>
                        <div className="card-body text-white">
                            <h2 className="text-4xl  text-center text-white mb-4">Tools !</h2>
                            <div className="flex items-center ">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Git</span>
                                </p>
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Git Hub</span>
                                </p>
                            </div>
                            <div className="flex items-center ">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Chrome DevTools</span>
                                </p>
                                <p className="flex items-center ml-3  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Heroku</span>
                                </p>
                            </div>
                            <div className="flex items-center ">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Netlify</span>
                                </p>
                                <p className="flex items-center ml-3 text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Firebase</span>
                                </p>
                            </div>
                            <div className="flex items-center ">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Vercel</span>
                                </p>
                                <p className="flex items-center ml-3 text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Render</span>
                                </p>
                            </div>
                            <div className="flex items-center ">
                                <p className="flex items-center  text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Postman</span>
                                </p>
                                <p className="flex items-center ml-3 text-xl">
                                    <FaArrowCircleRight className="text-pink-600" />
                                    <span className="ml-2">Figma</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </Tilt>
            </div>
        </div>
    );
};

export default Skills;