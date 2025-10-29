import rightArrow from '../../assets/rightArrow.png'
import me from '../../assets/me.jpg'
import Button from '../Button/Button';
import Tooltips from '../Tooltip/Tooltip';
import Resume from '../../assets/Resume/Wahidul Islam Full Stack.pdf'

import { FaArrowDown } from 'react-icons/fa';
const PopupModal = () => {
    return (
        <div>
            <button className='btn  bg-pink-700 text-xl hover:bg-pink-700 text-white  relative hover:scale-110 ease-in-out duration-100 group'
                onClick={() => document.getElementById('my_modal_5').showModal()}
            >
                About Me

                <img className='h-10 w-10 absolute top-1/2 -translate-y-1/2 -right-8 group-hover:-right-10' src={rightArrow} alt="" />
            </button>

            <dialog id="my_modal_5" className="modal p-2">
                <div className="modal-box w-full max-w-6xl ">
                    {/* <div className="modal-box w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 lg:mx-12"> */}

                    <div className="hero  max-h-screen ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img
                                src={me}
                                className="max-w-sm  h-96 rounded-lg shadow-2xl"
                            />
                            <div >
                                <h3 className="font-bold text-2xl text-white">ABOUT ME</h3>
                                <p className="pt-4 pb-2 text-white mb-5">
                                    Aspiring Full-Stack Developer with a strong foundation in HTML, CSS, JavaScript, Node.js, React.js, Next.js, TypeScript, Express.js, MongoDB, Prisma, and PostgreSQL. I aim to join a progressive company where I can leverage my technical expertise and creative problem-solving skills to build scalable, high-performance web applications, contribute to innovative projects, and tackle real-world challenges.
                                </p>
                                {/* all button  */}
                                <Button />

                                <div className='mt-6   flex gap-8 lg:gap-96'>
                                    <h3 className="font-bold  text-white lg:text-2xl text-lg mt-10 text-nowrap">MERN STACK</h3>
                                    <a href={Resume} download>
                                        <button className="btn btn-outline my-10 rounded-full w-42 h-9 btn-success text-white hover:text-white ">Download My Resume
                                            <FaArrowDown />

                                        </button>
                                    </a>


                                </div>
                                <Tooltips />
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default PopupModal;