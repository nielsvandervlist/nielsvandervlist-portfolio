import Image from 'next/image'
import Label from '@components/text/Label'

export default function ProjectHero({title, label, image}){
    return <section className={'bg-white p-[20px] md:pt-[120px] md:pb-[40px] md:px-[90px] w-full grid grid-cols-12 relative overflow-hidden items-center'}>
        <figure className={'col-span-12 md:col-span-6 flex justify-center py-8'}>
            <Image src={image} alt={'hero-img'}/>
        </figure>
        <div className={'col-span-12 md:col-span-6 flex flex-wrap flex-col'}>
            <h2 className="text-text text-[28px] md:text-[48px] font-semibold">{title}</h2>
            <span className="text-xs uppercase font-light text-text tracking-widest mb-4">{label}</span>
            <span className="border-b border-text w-[30px] block mb-8"/>
            <div className={'mb-8'}>
                <h3 className={'mb-2 uppercase text-text font-light tracking-widest text-xs'}>Technology used</h3>
                <Label className={'mr-2'}>Next.js</Label>
                <Label className={'mr-2'}>Laravel</Label>
                <Label>Motion framer</Label>
            </div>
            <div>
                <h3 className={'mb-2 uppercase text-text font-light tracking-widest text-xs'}>Design tools used</h3>
                <Label className={'mr-2'}>Sketch</Label>
                <Label className={'mr-2'}>Illustrator</Label>
                <Label>Midjourney</Label>
            </div>
        </div>
    </section>
}
