'use client'
import DoubleHeadingSmall from '@components/text/DoubleHeadingSmall'
import BG from '@images/profile.png'
import lion from '@images/lion.png'
import Button from '@components/buttons/Button'
import Image from 'next/image'
import {motion} from 'framer-motion'
import SkillSet from '@components/about/SkillSet'
import {Parallax, ParallaxProvider} from 'react-scroll-parallax'
import classNames from 'classnames'

export default function Intro() {


    const sentence = ['Hi!', 'My', 'name', 'is', 'Niels.', 'I\'m ', 'a', 'web\n', 'developer', 'designer', 'and', 'Digital', 'Nerd.']

    return <>
        <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.8}}
            className={'bg-lightgray px-[20px] py-[30px] md:py-[90px] md:px-[90px] w-full grid grid-cols-12 relative overflow-hidden'}>
            <div className={'md:col-span-6 col-span-12 flex items-center order-2 md:order-1'}>
                <div className={'relative'}>
                    <h3 className={'text-text text-[24px] md:text-[60px] text-center md:text-left leading-normal font-semibold'}>{
                        sentence.map((part, index) => {
                            const hi = {
                                offscreen: {
                                    opacity: 0,
                                },
                                onscreen: {
                                    opacity: 1,
                                    transition: {
                                        delay: 0,
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration: 0.3,
                                    },
                                },
                            }

                            hi.onscreen.transition.delay = hi.onscreen.transition.delay + index / 7
                            return <motion.div className={classNames('inline-block md:ml-4 ml-2', {
                                'text-green-600': sentence.length === (index + 1),
                            })} key={index} variants={hi}>{part}</motion.div>
                        })
                    }
                    </h3>
                </div>
            </div>
            <ParallaxProvider>
                <div
                    className={'col-span-12 md:col-span-6 relative flex items-center justify-center order-1 mb-8 md:md-0'}>
                    <figure className={'relative flex items-center justify-center'}>
                        <Image src={BG} alt={'bg'}/>
                    </figure>

                </div>
            </ParallaxProvider>
        </motion.section>
    </>
}
