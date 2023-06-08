import ProjectHero from '@components/projects/ProjectHero'
import HeroImg from '@images/icon-hero.png'
import Image from 'next/image'
import Circle from '@images/dash.png'
import Chat from '@images/chat-dashboard.png'
import Timeline from '@images/timeline-dashboard.png'
import Form from '@images/dashboard-form.png'

export const metadata = {
    title: 'My Page Title',
}

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectHero title={'Crisis dashboard'} label={'dashboard'} image={HeroImg}/>
        <div className={'grid p-20 grid-cols-12 gap-20 bg-lightgray'}>
            <div className={'col-span-7'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4'}>Welcome to CrisisCom,</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>a groundbreaking web application, dedicated to transforming the way organizations handle communication crises. As an accomplished web developer, I am thrilled to present this innovative platform designed to empower businesses to effectively manage and navigate through challenging situations.</p>
                </div>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} width={1628} height={744} src={Circle} alt={'circle'}/>
                </figure>
            </div>
            <div className={'col-span-5'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Form} alt={'form'}/>
                </figure>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Collaboration</h3>
                    <p className={'relative w-full text-light-text font-light leading-8'}>and teamwork are at the core of CrisisCom's philosophy. The platform fosters seamless communication and coordination among team members, enabling organizations to respond to crises in a unified and effective manner. CrisisCom becomes an invaluable tool in fostering a culture of preparedness and equipping teams to mitigate reputational damage during critical moments.</p>
                </div>
            </div>
            <div className={'col-span-6'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Chat} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Latest technologies</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>As the developer behind CrisisCom, I have leveraged the latest technologies and best coding practices to create a robust and scalable platform. From front-end design to back-end functionality, every aspect of CrisisCom has been meticulously crafted to deliver a seamless and engaging user experience.</p>
                </div>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Timeline} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-12 text-center'}>
                <a className={'text-text text-[32px] font-semibold underline'} href={'/'}>Visit website</a>
            </div>
        </div>
    </main>
}

