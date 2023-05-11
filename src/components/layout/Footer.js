import Logo from '@components/layout/Logo'
import FooterSocials from '@components/socials/FooterSocials'

export default function Footer(){
    return <footer className={'relative bg-white p-[20px] md:py-[50px] md:px-[90px] border-t flex justify-between items-center w-full z-40'}>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
            <Logo/>
        </div>
        <FooterSocials className={'ml-auto'}/>
    </footer>
}
