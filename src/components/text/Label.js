import classNames from 'classnames'

export default function Label({children, className}){
    return <span className={classNames('rounded-full inline-block bg-light-text text-white py-[5px] px-4 text-small uppercase tracking-widest', className)}>{children}</span>
}
