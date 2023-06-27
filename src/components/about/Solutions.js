'use client'
import DoubleHeadingSmall from '@components/text/DoubleHeadingSmall'
import Button from '@components/buttons/Button'
import Accordion from '@components/about/Accordion'

export default function Solutions(){
    return <section
        className={'bg-white py-8 px-[20px] md:py-[90px] md:px-[90px] w-full grid grid-cols-12 gap-x-0 md:gap-x-20 relative overflow-hidden'}>
        <h2 className={'col-span-12 text-light-text font-light mb-8 md:mb-20 leading-8'}>Throughout my career, I have developed a diverse skill set, combining my expertise in both web development and design. By merging these two disciplines, I strive to create captivating user experiences that seamlessly blend aesthetics with functionality.</h2>
        <div className={'col-span-12 md:col-span-7 mb-10 md:mb-0'}>
            <Accordion/>
        </div>
    </section>
}
