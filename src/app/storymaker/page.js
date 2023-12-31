import ProjectHero from '@components/projects/ProjectHero'
import Image from 'next/image'
import HeroImg from '@images/ai-hero.png'
import Circle from '@images/ai-question.png'
import Form from '@images/ai-overview.png'
import Chat from '@images/ai-hero.png'
import Link from 'next/link'

export const metadata = {
    title: 'My Page Title',
};

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectHero
            title={'Storymaker'}
            label={'webapp, openai'}
            image={HeroImg}
            techs={['open-ai', 'next-js', 'motion-framer']}
            designs={['sketch', 'midjourney', 'illustrator']}
        />
        <div className={'md:grid p-4 md:p-20 grid-cols-12 gap-20  bg-gray-50'}>
            <div className={'col-span-7 mb-4 md:mb-0'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4'}>Welcome to Storymaker,</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>At Storymaker, we understand the importance of storytelling in a childs development. It sparks creativity, enhances language skills, and nurtures a love for reading. However, we also recognize that not everyone has the time or expertise to craft engaging stories from scratch. Thats where our web application comes in.</p>
                </div>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} width={1628} height={744} src={Circle} alt={'circle'}/>
                </figure>
            </div>
            <div className={'col-span-5 mb-4 md:mb-0'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Form} alt={'form'}/>
                </figure>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>OpenAI</h3>
                    <p className={'relative w-full text-light-text font-light leading-8'}>Using the cutting-edge capabilities of OpenAI, we have developed a user-friendly platform that empowers anyone to become a master storyteller. With just a few clicks, you can generate unique and compelling stories tailored to the interests and preferences of young readers.</p>
                </div>
            </div>
            <div className={'col-span-6 mb-4 md:mb-0'}>
                <figure className={'relative w-full'}>
                    <Image src={Chat} alt={'hero-img'} width={'434'} height={'434'} className={'rounded-[35px] overflow-hidden'}/>
                </figure>
            </div>
            <div className={'col-span-6 mb-4 md:mb-0'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Child safety and content appropriateness</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>As an organization, we are committed to child safety and content appropriateness. We have implemented strict guidelines to ensure that all stories generated through Storymaker are suitable for young readers, free from explicit or harmful content.</p>
                </div>
            </div>
            <div className={'col-span-12 text-center my-8 md:my-0 flex justify-evenly'}>
                <a target={'_blank'} className={'text-text md:text-[32px] text-[24px] font-semibold underline'} href={'https://storyteller-taupe.vercel.app/'}>Visit website</a>
                <Link className={'text-text md:text-[32px] text-[24px] font-semibold underline'} href={'/bespoke-web'}>Next Project</Link>
            </div>
        </div>
    </main>
}

