'use client'
import PinterestLayout from '@components/containers/PinterestLayout'
import PatternLayout from '@components/containers/PatternLayout'
import Bubble from '@components/transitions/Bubble'
import {ParallaxProvider} from 'react-scroll-parallax'
import {AnimatePresence} from 'framer-motion'

export default function Projects() {

    return <div className={'w-full overflow-hidden'}>
        <ParallaxProvider>
            <div className={'relative'}>
                <Bubble className={'left-1/4 top-20 z-20 hidden md:inline-block'} width={200} height={200} speed={50}/>
                <Bubble className={'left-1/4 top-20 z-20 hidden md:inline-block'} width={100} height={100} speed={20}/>
                <Bubble className={'left-1/4 top-20 z-20 hidden md:inline-block'} width={50} height={50} speed={30}/>
                <div className={'p-[20px] md:py-[90px] md:px-[90px] container mx-auto'}>
                    <PinterestLayout/>
                </div>
            </div>
        </ParallaxProvider>
    </div>
}
