'use client'

import Pattern from '@components/transitions/Pattern'
import {Parallax, ParallaxProvider} from 'react-scroll-parallax'

export default function PatternLayout(){
    return <ParallaxProvider>
        <Parallax translateX={[-25, 0]} easing={'easeInCubic'}>
            <Pattern />
        </Parallax>
        <Parallax translateX={[-25, 0]} easing={'easeInCubic'}>
            <Pattern />
        </Parallax>
        <Parallax translateX={[-25, 0]} easing={'easeInCubic'}>
            <Pattern />
        </Parallax>
        <Parallax translateX={[-25, 0]} easing={'easeInCubic'}>
            <Pattern />
        </Parallax>
        <Parallax translateX={[-25, 0]} easing={'easeInCubic'}>
            <Pattern />
        </Parallax>
        <Parallax translateX={[-25, 0]} easing={'easeInCubic'}>
            <Pattern />
        </Parallax>
    </ParallaxProvider>
}
