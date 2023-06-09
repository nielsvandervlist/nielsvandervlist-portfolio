'use client'
import {useState} from 'react'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'

export default function MenuButton() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="md:relative absolute right-4 top-2">
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
                className="fixed inset-0 bg-gray-50 text-text flex flex-col items-center justify-center z-20"
            >
                <button
                    className="absolute top-4 right-4 font-semibold text-text z-30"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon size="2x" icon={faRectangleXmark}/>
                </button>

                <div className="flex flex-col items-center justify-center h-full">
                    <ul className={'text-center'}>
                        <li className="text-3xl uppercase mb-8">Home</li>
                        <li className="text-3xl uppercase mb-8">About</li>
                        <li className="text-3xl uppercase mb-8">Projects</li>
                        <li className="text-3xl uppercase mb-8">Contact</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
};

