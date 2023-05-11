import Link from 'next/link'

export default function Button({href, children}){
    return <Link href={href} className={'btn btn--primary relative px-[40px]'}>
        <span className={'relative z-20 font-bold uppercase text-green-400'}>{children}</span>
        <span className={'bg-green-400 h-[50px] w-full absolute -top-[7px] -left-[5px] rounded-full'}/>
        <span className={'bg-purple bg-opacity-25 h-[50px] w-full absolute -bottom-[7px] -right-[5px] rounded-full'}/>
    </Link>
}
