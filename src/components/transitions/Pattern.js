import classNames from 'classnames'
import Image from 'next/image'
import BG from '@images/nv-pattern.svg'

export default function Pattern({background, className}){
    return <div className={'relative w-[200vw]'}>
        <div className={`bg-green-200 bg-opacity-50 absolute inset-0`}/>
        <div
        className={classNames('w-full relative min-h-[99px] md:min-h-[163px] bg-fill bg-repeat', className)}
        style={{backgroundImage: `url('images/pattern-nv.svg')`}}
        />
    </div>
}
