import {Parallax, ParallaxProvider} from 'react-scroll-parallax'
import Image from 'next/image'
import BubbleImg from '@images/bubble.svg'
import classNames from 'classnames'

export default function Bubble({width, height, className, speed}){
    return <div className={classNames('absolute', className)}>
        <Parallax speed={speed} easing={'easeInCubic'}>
            <Image src={BubbleImg} wdith={width} height={height} alt={'bubble'}/>
        </Parallax>
    </div>
}
