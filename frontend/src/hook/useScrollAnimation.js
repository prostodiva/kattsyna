import { useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);

    const scrollVariants = {
        hidden: {
            opacity: 0,
            y: options.y ?? 50,
            scale: options.scale ?? 1,
            rotateX: options.rotateX ?? 0,
            rotateY: options.rotateY ?? 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            transition: {
                duration: options.duration ?? 0.6,
                delay: options.delay ?? 0,
                ease: options.ease ?? "easeOut",
                type: "tween"
            }
        }
    };

    return {
        ref,
        scrollVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: options.once ?? true,
            amount: options.amount ?? 0.3,
            margin: options.margin ?? "-100px"
        }
    };
};
