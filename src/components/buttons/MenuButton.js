'use client'
import {useState} from 'react'
import {motion} from 'framer-motion'

export default function MenuButton() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
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
                className="fixed inset-0 bg-gray-800 text-white flex flex-col items-center justify-center z-20"
            >
                <button
                    className="absolute top-0 right-0 font-semibold text-text z-30"
                    onClick={handleClick}
                >
                    Close
                </button>

                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="text-4xl mb-8">Menu Items</h2>
                    <ul>
                        <li className="text-3xl">Item 1</li>
                        <li className="text-3xl">Item 2</li>
                        <li className="text-3xl">Item 3</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
};

