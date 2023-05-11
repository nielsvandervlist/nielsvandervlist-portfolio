'use client'
import DoubleHeadingSmall from '@components/text/DoubleHeadingSmall'
import BG from '@images/bg.svg'
import Button from '@components/buttons/Button'
import Image from 'next/image'
import {motion} from 'framer-motion'
import SkillSet from '@components/about/SkillSet'

export default function Intro() {
    return <>
        <section
            className={'bg-lightgray p-[20px] md:py-[90px] md:px-[90px] w-full grid grid-cols-12 relative overflow-hidden'}>
            <div className={'col-span-5'}>
                <DoubleHeadingSmall className={'mb-8'}>Personal information</DoubleHeadingSmall>
                <h3 className={'text-text text-[36px] font-semibold mb-8'}>I am a web developer and designer based in
                    Leiden, the Netherlands.</h3>
                <p className={'text-light-text font-light mb-20 leading-8'}> Ever since I was a little kid, I have had a
                    passion for creating things. This passion eventually led me to the world of web development and
                    design, where I have been honing my skills for over 10 years</p>
                <Button href={'/'}>More info</Button>
            </div>
            <div className={'col-span-7 absolute left-1/2 -inset-10'}>
                <figure className={'opacity-60'}>
                    <Image fill src={BG} alt={'bg'}/>
                </figure>
            </div>
        </section>
    </>
}
