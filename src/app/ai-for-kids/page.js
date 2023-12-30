import ProjectHero from '@components/projects/ProjectHero'
import HeroImg from '@images/kids-logo.png'
import Image from 'next/image'
import Circle from '@images/kids-home.png'
import Form from '@images/kids-puzzle.png'
import Chat from '@images/kids-games.png'
import Timeline from '@images/kids-overview.png'
import Points from '@images/kids-points.png'
import Profile from '@images/kids-profile.png'
import Badges from '@images/kids-badges.png'
import Link from 'next/link'

export const metadata = {
    title: 'My Page Title',
}

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectHero title={'Ai for kids'} label={'website'} image={HeroImg}
                     techs={['next-js', 'motion-framer']}
                     designs={['sketch', 'midjourney', 'illustrator']}/>
        <div className={'md:grid p-4 md:p-20 grid-cols-12 gap-20 bg-lightgray'}>
            <div className={'col-span-12'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4'}>Welcome to Ai for Kids,</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>As a passionate web
                        developer, I take immense pride in introducing you to Bespokeweb, an exceptional web development
                        company based in the vibrant city of Leiden. With a relentless commitment to innovation and an
                        unwavering dedication to crafting unique online experiences, we bring your digital vision to
                        life.</p>
                </div>
            </div>
            <div className={'col-span-6 mb-4 md:mb-0'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} width={1628} height={744} src={Timeline}
                           alt={'circle'}/>
                </figure>
            </div>
            <div className={'col-span-6 mb-4 md:mb-0'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Chat} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6 mb-4 md:mb-0'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Circle} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Form} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6 mb-4 md:mb-0'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Profile} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Points} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Badges} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-12 text-center my-8 md:my-0 flex justify-evenly'}>
                <a className={'text-text md:text-[32px] text-[24px] font-semibold underline'} href={'/'}>Visit
                    website</a>
                <Link className={'underline'} href={'/pasar'}>Next Project</Link>
            </div>
        </div>
    </main>
}

