'use client'
import Button from '@components/buttons/Button'
import Image from 'next/image'
import HeroImg from '@images/hero-img.svg'
import {useScroll, motion, useTransform} from 'framer-motion'
import React, {useRef} from 'react'
import Bubble from '@components/transitions/Bubble'
import {ParallaxProvider} from 'react-scroll-parallax'
import MotionTracker from '@components/containers/MotionTracker'
import PatternLayout from '@components/containers/PatternLayout'
import {faFishFins} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Hero({children}) {

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

    return <ParallaxProvider className={'snap-center'}>
        <div>
            <div className={'overflow-hidden absolute left-0 right-0 w-full opacity-50'}>
                <PatternLayout/>
            </div>
            <motion.section
                className={'hero relative flex justify-center items-center md:pb-0 h-screen pt-20'}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.8}}
            >
                <div className={'flex flex-col flex-wrap justify-center'}>
                    <div className={'relative "flex-[0_0_100%] md:-top-[70px]'}>
                        <motion.div variants={heroImg} className={'relative z-20 text-center'}>
                            <Image src={HeroImg} alt={'hero'}/>
                            <p className={'uppercase text-text font-light tracking-widest mt-20 flex md:block flex-col gap-8'}><span>Niels van der
                                Vlist</span> <FontAwesomeIcon className={'text-xl mx-4'} icon={faFishFins}/> <span>developer &
                                designer</span></p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    </ParallaxProvider>
}
