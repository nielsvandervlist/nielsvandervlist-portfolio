import ProjectHero from '@components/projects/ProjectHero'
import HeroImg from '@images/circle-no-bg.png'
import Image from 'next/image'
import Circle from '@images/circle-hero.png'

export const metadata = {
    title: 'My Page Title',
};

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectHero title={'The Circle'} label={'website, social platform'} image={HeroImg}/>
        <figure className={'rounded-md px-20 relative w-full  py-20 bg-lightgray'}>
            <Image className={'object-scale-down rounded-xl drop-shadow-lg'} width={1628} height={744} src={Circle} alt={'circle'}/>
        </figure>
    </main>
}

