'use client'
import BG from '@images/profile-pic.png'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {ParallaxProvider} from 'react-scroll-parallax'
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Intro() {


    const sentence = ['Hi!', 'My', 'name', 'is', 'Niels.', 'I\'m ', 'a', 'web\n', 'developer', 'designer', 'and', 'Digital', 'Nerd.']

    return <div className={'relative'}>
        <video autoPlay muted className={'absolute inset-0 w-full h-full object-fill'} src={'https://cdn.pixabay.com/vimeo/361092071/jellyfish-26818.mp4?width=1280&hash=d698fa9612131908c152247464bbc5e998d670eb'}/>
        <div className={'absolute inset-0 bg-green-600 opacity-50'}/>
        <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.8}}
            className={'px-[20px] py-[30px] md:py-[90px] md:px-[90px] w-full grid grid-cols-12 relative overflow-hidden md:h-screen h-auto'}
        >
            <div className={'md:col-span-6 col-span-12 flex items-center order-2 md:order-1'}>
                <div className={'relative'}>
                    <h3 className={'text-white text-[24px] md:text-[60px] text-center md:text-left leading-normal font-semibold mb-8'}>{
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
                            return <motion.div className={classNames('inline-block md:mr-4 mr-2', {
                                'text-green-600 md:text-[100px]': sentence.length === (index + 1),
                            })} key={index} variants={hi}>{part}</motion.div>
                        })
                    }
                    </h3>
                    <Link href={'/about'} className={'text-white font-light flex items-center text-[18px] uppercase tracking-widest'}>More about myself <FontAwesomeIcon className={'ml-4 text-[32px]'} icon={faArrowRightLong}/></Link>
                </div>
            </div>
            <ParallaxProvider>
                <div
                    className={'col-span-12 md:col-span-6 relative flex items-center justify-center order-1 mb-8 md:md-0'}>
                    <figure className={'relative flex items-center justify-center'}>
                        <Image className={'w-2/4 lg:w-[400px]'} src={BG} alt={'bg'}/>
                    </figure>

                </div>
            </ParallaxProvider>
        </motion.section>
    </div>
}
