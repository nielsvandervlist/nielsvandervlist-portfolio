import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import HeroImg from '@images/hero-img.svg'
import Image from 'next/image'

export default function MotionTracker(){
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
        const updateMousePosition = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const offsetX = mouseX - centerX;
            const offsetY = mouseY - centerY;

            x.set(offsetX);
            y.set(offsetY);
        };

        document.addEventListener('mousemove', updateMousePosition);

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
        };
    }, [x, y]);

    const rotateX = useTransform(y, [-200, 200], [8, -8])
    const rotateY = useTransform(x, [-200, 200], [-8, 8])

    return (
        <div
            className="flex justify-center items-center"
            style={{ perspective: '1000px' }}
            ref={containerRef}
        >
            <motion.div
                className="w-full relative"
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                }}
            >
                <motion.div
                    src="path_to_your_image.jpg"
                    alt="3D Image"
                    className="w-full h-full rounded-lg"
                />
                <Image src={HeroImg} alt={'hero'}/>
            </motion.div>
        </div>
    );
};
