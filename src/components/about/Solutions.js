'use client'
import Accordion from '@components/about/Accordion'
import Iso from '@images/iso.png'
import Image from 'next/image'

export default function Solutions() {
    return <section
        className={'bg-white py-8 px-[20px] md:py-[90px] md:px-[90px] w-full relative overflow-hidden'}
    >
        <div className={'grid grid-cols-12 gap-x-0 md:gap-x-20 z-20 relative flex h-full'}>
            <div className={'col-span-12 md:col-span-6 flex flex-col'}>
                <h2 className={'mb-8 text-[24px] md:text-[60px] text-center md:text-left leading-normal font-semibold text-text'}>Solutions and expertise</h2>
                <p className={'text-light-text font-light leading-8 mb-8 max-w-[500px]'}>I have developed a diverse skill set,
                    combining
                    my
                    expertise in both web development and design. By merging these two disciplines, I strive to create
                    captivating user experiences that seamlessly blend aesthetics with functionality.</p>
            </div>
            <div className={'col-span-12 md:col-span-6 mb-10 md:mb-0 flex flex-col justify-center'}>
                <Accordion/>
            </div>
        </div>
    </section>
}
