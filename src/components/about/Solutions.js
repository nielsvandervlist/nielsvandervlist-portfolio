'use client'
import Accordion from '@components/about/Accordion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Solutions() {
    return <section
        className={'h-screen bg-white py-8 px-[20px] md:py-[90px] md:px-[90px] w-full relative overflow-hidden'}
    >
        <div className={'grid grid-cols-12 gap-x-0 md:gap-x-20 z-20 relative flex justify-center h-full'}>
            <div className={'col-span-12 md:col-span-5 flex flex-col justify-center'}>
                <h2 className={'mb-8 text-[24px] md:text-[60px] text-center md:text-left leading-normal font-semibold text-text'}>Throughout
                    my career...</h2>
                <p className={'text-light-text font-light leading-8 mb-8'}>I have developed a diverse skill set,
                    combining
                    my
                    expertise in both web development and design. By merging these two disciplines, I strive to create
                    captivating user experiences that seamlessly blend aesthetics with functionality.</p>
                <Link href={'/nerd'}
                      className={'text-text font-light tracking-widest flex items-center text-[18px] uppercase'}>Go full
                    nerd <FontAwesomeIcon className={'ml-4 text-[32px]'} icon={faArrowRightLong}/></Link>
            </div>
            <div className={'col-span-12 md:col-span-7 mb-10 md:mb-0 flex flex-col justify-center'}>
                <Accordion/>
            </div>
        </div>
    </section>
}
