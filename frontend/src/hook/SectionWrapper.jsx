import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                initial={false}
                className='relative z-0'
            >
                <span className='hash-span' id={idName}>&nbsp;</span>
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;