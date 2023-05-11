import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@images/logo.png'

export default function Logo(){
    return <Link href={'/'}>
        <Image src={LogoImg} alt={'logo'}/>
    </Link>
}
