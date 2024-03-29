import ProjectHero from '@components/projects/ProjectHero'
import HeroImg from '@images/circle-no-bg.png'
import Image from 'next/image'
import Circle from '@images/circle-hero.png'
import Form from '@images/circle-pic.png'
import Chat from '@images/circle-dashboard.png'
import Timeline from '@images/circle.png'
import Homepage from '@images/circle-homepage.png'
import Link from 'next/link'

export const metadata = {
    title: 'My Page Title',
}

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectHero title={'The Circle'} label={'dashboard, social site'} image={HeroImg}
                     techs={['next-js', 'motion-framer']}
                     designs={['sketch', 'midjourney', 'illustrator']}/>
        <div className={'md:grid p-4 md:p-20 grid-cols-12 gap-20  border-t border-gray-200'}>
            <div className={'col-span-6 col-start-4 text-center'}>
                <h3 className={'text-text text-[24px] font-semibold mb-4'}>Welcome to The Circle,</h3>
                <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>As a web developer, I am
                    thrilled to present The Circle, a dynamic and engaging social media website designed to foster
                    international dialogue and promote meaningful conversations on a global scale. This platform was
                    carefully crafted with the intention of breaking down barriers and connecting individuals from
                    diverse cultures and backgrounds. Through its intuitive interface and innovative features, The
                    Circle aims to create a virtual space where ideas, perspectives, and experiences intertwine.</p>
            </div>
            <div className={'col-span-7 mb-4 md:mb-0 flex flex-col'}>
                <figure className={'relative w-full mb-8 md:mb-20'}>
                    <Image className={'rounded-xl drop-shadow-lg'} width={1628} height={744} src={Circle}
                           alt={'circle'}/>
                </figure>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Timeline} alt={'chat'}/>
                </figure>
                <div className={'md:flex gap-20 mt-8 md:mt-20'}>
                    <figure className={'relative w-full flex'}>
                        <Image className={'rounded-xl drop-shadow-lg ml-auto'} src={Chat} alt={'chat'}/>
                    </figure>
                    <div className={'max-w-[500px]'}>
                        <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Multilingual Support</h3>
                        <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>Recognizing the
                            importance of inclusivity, The Circle supports multiple languages, enabling users from
                            different parts of the world to interact in their preferred language. By breaking language
                            barriers, we aim to foster a truly global community where everyone can express themselves
                            and engage in meaningful dialogue.</p>
                    </div>
                </div>
            </div>
            <div className={'col-span-5 mb-4 md:mb-0'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Global Discussions</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-8 md:mb-20'}>The heart of The
                        Circle
                        lies in its comprehensive discussion forums. Users can participate in lively conversations about
                        a wide range of international subjects, including culture, politics, travel, food, and more.
                        These discussions are organized into topic-specific categories, making it easy for users to find
                        and contribute to conversations that pique their interest.</p>
                </div>
                <figure className={'relative w-full mb-8 md:mb-20'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Form} alt={'form'}/>
                </figure>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Homepage} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6 mb-4 md:mb-0'}>
            </div>
            <div className={'col-span-12 text-center my-8 md:my-0 flex justify-evenly'}>
                <a className={'text-text md:text-[32px] text-[24px] font-semibold underline'} href={'/'}>Visit
                    website</a>
                <Link className={'text-text md:text-[32px] text-[24px] font-semibold underline'} href={'/storymaker'}>Next Project</Link>
            </div>
        </div>
    </main>
}

