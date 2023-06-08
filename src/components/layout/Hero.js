'use client'
import Button from '@components/buttons/Button'
import Image from 'next/image'
import HeroImg from '@images/hero-img.svg'
import {useScroll, motion, useTransform} from 'framer-motion'
import React, {useRef} from 'react'
import Bubble from '@components/transitions/Bubble'
import {ParallaxProvider} from 'react-scroll-parallax'
import MotionTracker from '@components/containers/MotionTracker'

export default function Hero({children}) {

    const cardVariants = {
        offscreen: {
            y: 300,
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
    }

    const heroImg = {
        offscreen: {
            y: 300,
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
    }

    return <ParallaxProvider>
        <div className={'relative'}>
            <Bubble className={'right-1/4 bottom-40 z-20 hidden md:inline-block'} width={200} height={200} speed={15}/>
            <Bubble className={'right-1/4 bottom-40 z-20 hidden md:inline-block'} width={100} height={100} speed={20}/>
            <Bubble className={'right-1/4 bottom-40 z-20 hidden md:inline-block'} width={50} height={50} speed={30}/>
            <motion.section
                className={'hero relative md:pt-40 pt-24 pb-24 md:pb-0 md:h-screen'}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.8}}
            >
                <div className={'flex flex-col flex-wrap justify-center'}>
                    <div className={'relative z-20 flex-wrap flex justify-center'}>
                        <motion.h2
                            variants={cardVariants}
                        >
                        <span className={'relative'}>
                            <span className={`text-[40px] md:text-[160px] font-semibold text-green-400 lowercase`}>Web</span>
                            <span
                                className={`text-[40px] md:text-[160px] font-semibold text-purple text-opacity-25 absolute left-[4px] md:left-[17px] lowercase`}>Web</span>
                        </span>
                        </motion.h2>
                        <motion.div variants={cardVariants} className={'wrapper relative ml-8'}>
                            <h3 className={'font-semibold md:text-[53px] lowercase text-green-400 relative md:top-[70px]'}>Design</h3>
                            <h3 className={'font-semibold md:text-[53px] lowercase text-purple text-opacity-25 relative md:-bottom-[37px]'}>Development</h3>
                        </motion.div>
                    </div>
                    <div className={'relative "flex-[0_0_100%] md:-top-[70px]'}>
                        <motion.div variants={heroImg} className={'relative z-20'}>
                            <Image src={HeroImg} alt={'hero'}/>
                        </motion.div>
                        <div
                            className={'bg-lightgray w-[80%] h-[60%] h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}/>
                    </div>
                </div>
                <div className={'flex justify-center mt-10 md:mt-0'}>
                    <Button href={'/'}>My projects</Button>
                </div>
            </motion.section>
        </div>
    </ParallaxProvider>
}
