/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Tilt from 'react-parallax-tilt';

const ProjectsCard = ({ web }) => {
    return (
        <div>
            <Tilt className="background-stripes parallax-effect" perspective={500}>
                <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="card glass md:w-80 lg:w-96 w-96 inner-element ">

                    <div className='card'>

                        <figure>
                            <img
                                src={web?.image}
                                alt="car!"
                                className='h-60 '
                            />
                        </figure>

                        {/* shadow  */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-90 transition duration-500 flex justify-center items-center'>
                            <div className='text-center '>
                                <a href={web?.liveLink}><button className=" btn animate-bounce bg-gray-600 text-xl hover:bg-gray-800  mr-5  text-white">Live Site</button></a>

                                <a href={web?.gitHubClient}>
                                    <button className="btn animate-bounce bg-gray-600 text-xl hover:bg-gray-800  mr-5  text-white">GitHub</button>
                                </a>

                            </div>
                        </div>
                        {/* shadow End */}

                    </div>

                    <div className="card-body ">
                        <h2 className="text-xl text-center  rounded-xl font-semibold">{web.name}</h2>
                        <p className='text-xl font-semibold divide-y  '>Project Type :    {web.type}
                        </p>

                    </div>

                </motion.div>
            </Tilt>
        </div>

    );
};

export default ProjectsCard;