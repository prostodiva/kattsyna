import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import SectionWrapper from '../hook/SectionWrapper';

const Experience = () => {
    return (
        <div className='text-center md:text-left md:px-20 lg:px-40 text-white pb-20 md:pb-32'>
            <motion.div variants={textVariant()} >
                <h2 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px]">Experience</h2>
            </motion.div>

            <div className='mt-10 md:mt-20 flex flex-col gap-8 relative z-20'>
                <div className='bg-secondary p-8 rounded-3xl shadow-md  hover:shadow-2xl hover:shadow-purple-800  hover:-translate-y-2 transition-all duration-300'>
                    <h3 className='text-white text-2xl font-bold mb-4'>Software Engineer</h3>
                    <p className='text-slate-500'>Full-stack development with focus on React, Node.js, and modern web technologies.</p>
                </div>
                
                <div className="bg-secondary p-8 rounded-3xl shadow-md  hover:shadow-2xl hover:shadow-purple-800  hover:-translate-y-2 transition-all duration-300">
                    <h3 className='text-white text-2xl font-bold mb-4'>Full-Stack Developer</h3>
                    <p className='text-slate-500'>Building scalable web applications and implementing efficient solutions.</p>
                </div>

                <div className='bg-secondary p-8 rounded-3xl shadow-md  hover:shadow-2xl hover:shadow-purple-800  hover:-translate-y-2 transition-all duration-300'>
                    <h3 className='text-white text-2xl font-bold mb-4'>Software Engineer</h3>
                    <p className='text-slate-500'>Developed a CRM management application with Java Spring Boot</p>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, "experience");