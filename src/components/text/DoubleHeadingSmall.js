import classNames from 'classnames'

export default function DoubleHeadingSmall({children, className}){
    return <h2>
        <span className={classNames('relative block', className)}>
            <span className={`text-[24px] font-semibold text-green-400 lowercase`}>{children}</span>
            <span className={`text-[24px] font-semibold text-purple text-opacity-25 absolute left-[4px] w-full lowercase`}>{children}</span>
        </span>
    </h2>
}
