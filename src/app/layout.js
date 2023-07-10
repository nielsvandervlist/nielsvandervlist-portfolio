import './globals.css'
import '../styles/styles.scss'
import {Poppins} from 'next/font/google'
import Header from '@components/layout/Header'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from '@components/layout/Footer'

config.autoAddCss = false

export const metadata = {
    title: 'Niels van der Vlist PortFolio',
    description: 'Webdevelopment and webdesign',

}

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

export default function RootLayout({children}) {
    return (
        <>
            <html lang="en">
            <head>
                <title>Niels van der Vlist PortFolio</title>
                <link rel="icon" href="favicon.ico" sizes="any" />
            </head>
                <body className={poppins.className}>
                <Header/>
                {children}
                <Footer/>
                </body>
            </html>
        </>
    )
}
