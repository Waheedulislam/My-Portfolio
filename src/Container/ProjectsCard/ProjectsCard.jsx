/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import Tilt from 'react-parallax-tilt';

const ProjectsCard = ({ web }) => {
    console.log(web.image)
    return (
        <div>
            <Tilt className="background-stripes parallax-effect" perspective={500}>
                <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="card glass md:w-80 lg:w-96 w-96 inner-element">
                    <figure>
                        <img
                            src={web?.image}
                            alt="car!"
                            className='h-60 '
                        />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-2xl text-center font-semibold">{web.name}</h2>
                        <p className='text-xl font-semibold divide-y  '>Project Type : {web.type}</p>
                    </div>

                </motion.div>
            </Tilt>
        </div>

    );
};

export default ProjectsCard;