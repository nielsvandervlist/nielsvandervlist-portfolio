import ProjectHero from '@components/projects/ProjectHero'
import HeroImg from '@images/goeswijn-logo.png'
import Image from 'next/image'
import Circle from '@images/homepage-goeswijn.png'
import Chat from '@images/goeswijn-contact.png'
import Timeline from '@images/wordpress-logo.png'
import Form from '@images/goeswijn-menu.png'
import Link from 'next/link'

export const metadata = {
    title: 'Goeswijn',
}

export default function Page() {
    return <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectHero title={'Bistro Goeswijn'} label={'Website with wordpress CMS'} image={HeroImg}
                     techs={['wordpress', 'next-js', 'graph-ql', 'motion-framer']}
                     designs={['sketch', 'midjourney', 'illustrator']}/>
        <div className={'md:grid p-4 md:p-20 grid-cols-12 gap-20 bg-lightgray'}>
            <div className={'col-span-7 mb-4 md:mb-0'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4'}>Bistro Goeswijn, Leiden</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>Bistro Goeswijn, a
                        charming French restaurant nestled in Leiden, now boasts an inviting online presence through a
                        bespoke website crafted by our team. Designed and built by our skilled developers, the website
                        captures the essence of Bistro Goeswijn's French culinary delights.</p>
                </div>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} width={1628} height={744} src={Circle}
                           alt={'circle'}/>
                </figure>
            </div>
            <div className={'col-span-5 mb-4 md:mb-0'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Form} alt={'form'}/>
                </figure>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Wordpress</h3>
                    <p className={'relative w-full text-light-text font-light leading-8'}>Utilizing the user-friendly
                        CMS system WordPress, the website seamlessly blends aesthetic appeal with functionality.
                        Visitors can explore a visually enticing interface that reflects the restaurant's ambiance while
                        navigating effortlessly through an intuitive layout. The website showcases the diverse French
                        menu, enticing patrons with tantalizing dishes and an immersive visual experience.</p>
                </div>
            </div>
            <div className={'col-span-6 mb-4 md:mb-0'}>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Chat} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-6 mb-4 md:mb-0'}>
                <div className={'max-w-[500px]'}>
                    <h3 className={'text-text text-[24px] font-semibold mb-4 mt-10'}>Key Features</h3>
                    <p className={'relative w-full text-light-text font-light leading-8 mb-10'}>
                        Custom Design: The website features a unique and personalized design that aligns with Bistro
                        Goeswijn's brand identity, creating a cohesive online representation.

                        Responsive Layout: Built with responsiveness in mind, the website ensures a seamless user
                        experience across various devices, from desktops to smartphones.

                        Menu Showcase: The menu section provides a detailed glimpse into the exquisite French dishes
                        offered, enticing visitors with high-quality images and engaging descriptions.

                        CMS Flexibility: Leveraging the power of WordPress, the restaurant staff can effortlessly update
                        menu items, promotions, and other content, ensuring the website remains dynamic and up-to-date.

                        Contact Information and Reservation System: Integrated contact details and a user-friendly
                        reservation system simplify the booking process for customers, enhancing overall accessibility.
                    </p>
                </div>
                <figure className={'relative w-full'}>
                    <Image className={'rounded-xl drop-shadow-lg'} src={Timeline} alt={'chat'}/>
                </figure>
            </div>
            <div className={'col-span-12 text-center my-8 md:my-0 flex justify-evenly'}>
                <a target={'_blank'} className={'text-text md:text-[32px] text-[24px] font-semibold underline'}
                   href={'https://goeswijn.nl'}>Visit website</a>
                <Link className={'underline'} href={'/storymaker'}>Next Project</Link>
            </div>
        </div>
    </main>
}

