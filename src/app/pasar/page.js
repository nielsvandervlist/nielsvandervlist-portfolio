import ProjectHero from '@components/projects/ProjectHero'
import HeroImg from '@images/pasar-logo.png'
import Image from 'next/image'
import Circle from '@images/pasar-homepage.png'
import Chat from '@images/pasar-cards.png'
import Link from 'next/link'

export const metadata = {
    title: 'My Page Title',
}

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectHero title={'Pasar Leiden'} label={'Wordpress Headless CMS'} image={HeroImg}
                     techs={['wordpress', 'next-js', 'graph-ql']}
                     designs={['sketch', 'midjourney', 'illustrator']}/>
        <div className={'md:grid p-4 md:p-20 grid-cols-12 gap-20 bg-lightgray'}>
            <div className={'col-span-7 mb-4 md:mb-0'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4'}>Welcome to Pasar Leiden,</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>The Pasar Leiden website
                        serves as a digital platform to promote the festival, provide essential information, and engage
                        with attendees and vendors. The design of the website is visually appealing and reflects the
                        vibrant and cultural aspects of the Indonesian food festival.</p>
                </div>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} width={1628} height={744} src={Circle}
                           alt={'circle'}/>
                </figure>
            </div>
            <div className={'col-span-5 mb-4 md:mb-0'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Chat} alt={'form'}/>
                </figure>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Wordpress CMS</h3>
                    <p className={'relative w-full text-light-text font-light leading-8'}>The integration of WordPress
                        as the CMS enables festival organizers to efficiently manage and update content across the
                        website. This includes adding new vendors, updating event schedules, publishing blog posts, and
                        uploading visual media such as photos and videos. The WordPress backend offers a user-friendly
                        interface for content editors, ensuring ease of use and efficient content management.</p>
                </div>
            </div>
            <div className={'col-span-12 text-center my-8 md:my-0 flex justify-evenly'}>
                <a target={'_blank'} className={'text-text md:text-[32px] text-[24px] font-semibold underline'}
                   href={'https://pasar-leiden.nl'}>Visit website</a>
                <Link className={'text-text md:text-[32px] text-[24px] font-semibold underline'} href={'/the-circle'}>Next Project</Link>
            </div>
        </div>
    </main>
}

