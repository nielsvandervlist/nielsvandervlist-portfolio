export default function DoubleHeader({children, size, left}) {
    return <h2>
        <span className={'relative'}>
            <span className={`text-[${size}] font-semibold text-green-400 lowercase`}>{children}</span>
            <span className={`text-[${size}] font-semibold text-purple text-opacity-25 absolute left-[${left}] lowercase`}>{children}</span>
        </span>
    </h2>
}
