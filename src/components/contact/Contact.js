import DoubleHeadingSmall from '@components/text/DoubleHeadingSmall'

export default function Contact() {
    return <section
        className={'bg-lightgray py-8 px-[20px] md:py-[90px] md:px-[90px] w-full grid grid-cols-12 gap-x-0 md:gap-x-20 relative overflow-hidden'}>
        <div className={'col-span-12'}><DoubleHeadingSmall className={'mb-8'}>Contact</DoubleHeadingSmall></div>
        <div className={'col-span-12 md:col-span-12'}>
            <h3 className={'text-text text-[24px] font-semibold mb-8'}>Connect with us today to bring your web
                development projects to life with our expertise and innovative solutions.</h3>
            <form>
                <fieldset className={'mb-4'}>
                    <label className={'text-light-text font-light leading-8 mb-2 block uppercase'}>Email</label>
                    <input className={'block w-full px-6 py-4'} type={'text'}/>
                </fieldset>
                <fieldset>
                    <label className={'text-light-text font-light leading-8 mb-2 block uppercase'}>Message</label>
                    <textarea className={'block w-full px-6 py-4'}></textarea>
                </fieldset>
                <button className={'btn btn--primary relative px-[40px] mt-12 mb-4'} type={'submit'}>
                    <span className={'relative z-20 font-bold uppercase text-green-400'}>verzenden</span>
                    <span className={'bg-green-400 h-[50px] w-full absolute -top-[7px] -left-[5px] rounded-full'}/>
                    <span className={'bg-purple bg-opacity-25 h-[50px] w-full absolute -bottom-[7px] -right-[5px] rounded-full'}/></button>
            </form>
        </div>
    </section>
}
