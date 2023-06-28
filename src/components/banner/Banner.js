import {ParallaxBanner, ParallaxProvider} from 'react-scroll-parallax'
import bg from '@images/hero-img.png'
import BG from '@images/profile-pic.png'

export default function Banner() {
    return (
        <ParallaxProvider className={'w-full'}>
            <ParallaxBanner
                layers={[{image: 'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg', speed: -50}]}
                className="md:aspect-[2/1] aspect-[1/2] flex items-center justify-center relative"
            >
                <div className={'bg-green-600 opacity-75 absolute inset-0'}/>
                <div className={'bg-text opacity-50 absolute inset-0'}/>
                <div className={'grid grid-cols-12 relative z-20 text-center'}>
                    <div className={'col-span-12'}><h3
                        className={'mb-8 font-semibold text-white text-[24px] md:text-[60px]'}>Contact</h3></div>
                    <div className={'col-span-12 md:col-span-12'}>
                        <p className={'text-white text-[18px] md:text-[24px] font-light mb-8 tracking-widest leading-loose'}>Just e-mail
                            me. We can grab a coffee.</p>
                        <a className={'underline font-bold text-white tracking-widest text-lg uppercase'}
                           href={'mailto:niels.vder.vlist@gmail.com'}>nielsvandervlist@mail.com</a>
                    </div>
                </div>
            </ParallaxBanner>
        </ParallaxProvider>
    )
}
