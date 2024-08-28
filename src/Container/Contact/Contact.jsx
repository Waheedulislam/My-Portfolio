import { IoMdMailUnread } from "react-icons/io";
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { TypeAnimation } from "react-type-animation";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xfld47h',
                'template_2j3tc51',
                form.current, {
                publicKey: 'l75wKBOaHj19amUX5',
            })
            .then(
                () => {
                    toast.success("You Successfully send a message .")
                    form.current.reset();

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div id="contact-me" className="mt-28">
            <div className="text-center">
                <h1 className="text-4xl  text-white font-bold mt-10">Contact Me</h1>
                <progress className="progress  w-64 mb-10 mt-4 progress-warning   "></progress>
            </div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-center  lg:w-1/2 lg:ml-10  lg:text-left">

                        <div className="">
                            <h1 className="text-5xl my-2 text-white  font-bold">Get in Touch

                            </h1>
                            <h1 className="text-2xl text-white  ">
                                Contact with me any query.
                            </h1>
                            <progress className="progress  w-80 mb-8 mt-2 progress-warning   "></progress>
                        </div>
                        <p className="pt-6 pb-2 My-heading2 text-xl text-white ">
                            If you have any query, want to ask me, or want to give me any important message, you can send me a message at any time, and yes, I will try to reply to your message in your email.
                        </p>
                        {/* Name  */}
                        <p className="text-white ">
                            <span className="text-2xl items-center My-heading2 font-bold ">Name:</span>
                            <TypeAnimation sequence={[
                                'Waheedul Islam.',
                                2000,

                            ]}
                                speed={50}
                                className='ml-2 text-white My-heading2rounded-sm  font-bold  bg-pink-700'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </p>

                        {/* call/whatsapp  */}
                        <p className="text-white">
                            <span className="text-xl My-heading2 font-bold">Cell/WhatsApp: </span>
                            <TypeAnimation sequence={[
                                '+8801 63352 1872.',
                                2000,

                            ]}
                                speed={50}
                                className=' text-white My-heading2 rounded-sm px-2 font-bold ml-2  bg-pink-700'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </p>

                        {/* email  */}
                        <p className="text-white">
                            <span className="text-xl My-heading2 font-bold ">Email:</span>
                            <TypeAnimation sequence={[
                                'baoppyhossen1234@gmail.com',
                                2000,

                            ]}
                                speed={50}
                                className=' text-white My-heading2 rounded-sm px-2 font-bold ml-2  bg-pink-700'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </p>

                        {/* address  */}
                        <p className="text-white">
                            <span className="text-xl My-heading2 font-bold ">Address:</span>
                            <TypeAnimation sequence={[
                                'Ashulia,Savar,Dhaka 1341',
                                2000,

                            ]}
                                speed={50}
                                className=' text-white My-heading2 rounded-sm px-2 font-bold ml-2  bg-pink-700'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </p>

                    </motion.div>

                    {/* form  */}
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="card  bg-base-100 lg:w-1/2 shrink-0 shadow-2xl">
                        <form onSubmit={sendEmail} ref={form} className="card-body w-full ">
                            <h1 className="text-5xl mb-6 text-center font-bold">Contact now !</h1>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text ">Your Name</span>
                                </label>
                                <input type="name" name="user_name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Your Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Message</span>
                                </label>
                                <input
                                    type="text"
                                    name="message"
                                    placeholder="Write your message..."
                                    className="h-28  rounded-2xl input w-full input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control mt-12">
                                <button
                                    className="btn animate-bounce bg-pink-600 text-xl hover:bg-pink-700  text-white "
                                >
                                    Send Message <IoMdMailUnread className="w-8 mt-1 h-8" />

                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;