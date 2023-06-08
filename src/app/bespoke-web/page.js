import ProjectHero from '@components/projects/ProjectHero'
import HeroImg from '@images/bespoke.svg'
import Image from 'next/image'
import Circle from '@images/bespoke-part.png'
import Form from '@images/bespoke-host.png'
import Chat from '@images/bespoke-term.png'
import Timeline from '@images/bespoke-hero.png'

export const metadata = {
    title: 'My Page Title',
};

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectHero title={'Bespokeweb'} label={'website'} image={HeroImg}/>
        <div className={'grid p-20 grid-cols-12 gap-20 bg-lightgray'}>
            <div className={'col-span-7'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4'}>Welcome to Bespokeweb,</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>As a passionate web developer, I take immense pride in introducing you to Bespokeweb, an exceptional web development company based in the vibrant city of Leiden. With a relentless commitment to innovation and an unwavering dedication to crafting unique online experiences, we bring your digital vision to life.</p>
                </div>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} width={1628} height={744} src={Timeline} alt={'circle'}/>
                </figure>
            </div>
            <div className={'col-span-5'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Form} alt={'form'}/>
                </figure>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Aesthetics and functionality</h3>
                    <p className={'relative w-full text-light-text font-light leading-8'}>Our website showcases the seamless blend of aesthetics and functionality, setting the standard for modern web design. With a clean and intuitive user interface, visitors are greeted with a visually stunning experience that effortlessly guides them through our services, portfolio, and company information.</p>
                </div>
                <figure className={'relative w-full mt-10'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Chat} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Circle} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Cutting-edge design</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>In summary, Bespokeweb's website encapsulates the essence of our company: cutting-edge design, intuitive navigation, and a focus on personalized experiences. It reflects our commitment to crafting bespoke digital solutions that empower businesses and drive success.</p>
                </div>
            </div>
            <div className={'col-span-12 text-center'}>
                <a className={'text-text text-[32px] font-semibold underline'} href={'/'}>Visit website</a>
            </div>
        </div>
    </main>
}

