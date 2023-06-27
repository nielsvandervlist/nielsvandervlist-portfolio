'use client'
import DoubleHeadingSmall from '@components/text/DoubleHeadingSmall'
import Button from '@components/buttons/Button'
import Accordion from '@components/about/Accordion'
import {Parallax, ParallaxProvider} from 'react-scroll-parallax'
import Pattern from '@components/transitions/Pattern'

export default function Solutions() {
    return <section
        className={'h-screen bg-white py-8 px-[20px] md:py-[90px] md:px-[90px] w-full grid grid-cols-12 gap-x-0 md:gap-x-20 relative overflow-hidden'}
    >
        <div className={'col-span-12 md:col-span-5 flex flex-col justify-center'}>
            <h2 className={'mb-8 text-[24px] md:text-[60px] text-center md:text-left leading-normal font-semibold'}>Throughout
                my career...</h2>
            <p className={'text-light-text font-light leading-8'}>I have developed a diverse skill set, combining my
                expertise in both web development and design. By merging these two disciplines, I strive to create
                captivating user experiences that seamlessly blend aesthetics with functionality.</p>
        </div>
        <div className={'col-span-12 md:col-span-7 mb-10 md:mb-0 flex flex-col justify-center'}>
            <Accordion/>
        </div>
        <div className={'overflow-hidden absolute left-0 right-0 w-full opacity-50'}>
            <ParallaxProvider>
                <Parallax translateX={[-25, 0]} easing={'easeInCubic'}>
                    <Pattern/>
                </Parallax>
            </ParallaxProvider>
        </div>
        <div className={'overflow-hidden absolute left-0 bottom-0 right-0 w-full opacity-50'}>
            <ParallaxProvider>
                <Parallax translateX={[-25, 0]} easing={'easeInCubic'}>
                    <Pattern/>
                </Parallax>
            </ParallaxProvider>
        </div>
    </section>
}
