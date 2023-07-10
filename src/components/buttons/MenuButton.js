'use client'
import {useState} from 'react'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function MenuButton() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="md:relative absolute right-4">
            <button
                className="font-semibold text-text z-10"
                onClick={handleClick}
            >
                menu
            </button>

            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isOpen ? '0%' : '100%' }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-green-100 text-text flex flex-col items-center justify-center z-20"
            >
                <button
                    className="absolute top-4 right-4 font-semibold text-text z-30"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon size="2x" icon={faXmark}/>
                </button>

                <div className="flex flex-col items-center justify-center h-full">
                    <ul className={'text-center'}>
                        <li onClick={() => setIsOpen(false)} className="text-5xl font-medium tracking-widest mb-16"><Link href={'/'}>Home</Link></li>
                        <li onClick={() => setIsOpen(false)} className="text-5xl font-medium tracking-widest mb-16"><Link href={'/about'}>About</Link></li>
                        <li onClick={() => setIsOpen(false)} className="text-5xl font-medium tracking-widest mb-16"><Link href={'/projects'}>Projects</Link></li>
                        <li onClick={() => setIsOpen(false)} className="text-5xl font-medium tracking-widest"><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
};

