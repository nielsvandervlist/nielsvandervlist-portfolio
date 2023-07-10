import Link from 'next/link'
import btn from '@images/btn.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFish} from '@fortawesome/free-solid-svg-icons'

export default function Button({href, children}){
    return <Link href={href} className={'btn btn--primary relative px-[40px] pb-4 pt-[20px] bg-green-400 rounded-full h-[62px] inline-block'}>
        <span className={'relative z-20 font-bold uppercase text-white tracking-wider'}>{children}</span>
    </Link>
}
