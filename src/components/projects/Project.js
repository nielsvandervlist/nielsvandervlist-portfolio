import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Button from '@components/buttons/Button'
import Image from 'next/image'

const ProjectSection = ({img, title, label, text, link}) => {
    const {ref, inView} = useInView({
        threshold: 0.5, // When 50% of the component is in view
        triggerOnce: true, // Only trigger once
    })

    return <div><motion.div
        ref={ref}
        className="grid grid-cols-12 gap-20 project mb-20 justify-center items-center"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                },
            },
            hidden: {
                opacity: 0,
                y: 50,
            },
        }}
    >
        <motion.div
            className={'col-span-6 project__img flex items-center justify-center'}
            style={{perspective: '1000px'}}
        >
            <motion.figure
                className={'bg-green-200 h-[600px] w-[600px] relative'}
                style={{
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    perspective: '1000px',
                }}
                whileHover={{
                    rotateX: 5,
                    rotateY: -5,
                    rotateZ: 0,
                    transition: {
                        duration: 0.5,
                        ease: 'easeInOut',
                    },
                }}
            >
                <Image
                    fill
                    className="grayscale transition-all opacity-50 hover:opacity-100 hover:grayscale-0"
                    src={img}
                    alt="circle"
                />
            </motion.figure>
        </motion.div>
        <motion.div
            className="col-span-6 project__text"
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        ease: 'easeOut',
                    },
                },
                hidden: {
                    opacity: 0,
                    y: 50,
                },
            }}
        >
            <h2 className="text-text text-[48px] font-semibold">{title}</h2>
            <span className="text-xs uppercase font-light text-text tracking-widest">{label}</span>
            <span className="border-b border-text w-[30px] block mt-4"/>
            <p className="font-light text-sm text-text mt-8 tracking-wide leading-8 mb-12">{text}</p>
            <Button href={link}>More info</Button>
        </motion.div>
    </motion.div></div>
}

export default ProjectSection
