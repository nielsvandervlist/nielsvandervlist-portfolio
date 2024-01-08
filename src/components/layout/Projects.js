'use client'
import PinterestLayout from '@components/containers/PinterestLayout'
import {ParallaxProvider} from 'react-scroll-parallax'

export default function Projects() {

    return <div className={'w-full overflow-hidden'}>
        <h2 className={'pt-8 md:pt-20 px-[20px] md:px-[90px] mb-8 font-semibold text-text text-[24px] md:text-[60px] text-center'}>Take a look at my recent projects</h2>
        <ParallaxProvider>
            <div className={'relative'}>
                <div className={'p-[20px] md:py-[90px] md:px-[90px] container mx-auto'}>
                    <PinterestLayout/>
                </div>
            </div>
        </ParallaxProvider>
    </div>
}
