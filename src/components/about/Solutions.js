'use client'
import DoubleHeadingSmall from '@components/text/DoubleHeadingSmall'
import Button from '@components/buttons/Button'
import Accordion from '@components/about/Accordion'

export default function Solutions(){
    return <section
        className={'bg-white py-8 px-[20px] md:py-[90px] md:px-[90px] w-full grid grid-cols-12 gap-x-0 md:gap-x-20 relative overflow-hidden'}>
        <h2 className={'col-span-12 text-text text-[48px] font-semibold mb-8'}>We offer multiple solutions</h2>
        <div className={'col-span-12 md:col-span-7 mb-10 md:mb-0'}>
            <Accordion/>
        </div>
        <div className={'col-span-12 md:col-span-5'}>
            <h3 className={'text-text text-[24px] font-semibold mb-8'}>We are a creative design and development studio that specializes in creating Laravel applications with Next.js. We offer a range of solutions on our website to help you bring your ideas to life.</h3>
            <p className={'text-light-text font-light md:mb-20 leading-8'}> Overall, our goal is to create outstanding websites and applications that are tailored to your specific needs. Whether you are looking for a stunning website, a user-friendly application, or a seamless online payment system, our team is here to bring your vision to life.</p>
        </div>
    </section>
}
