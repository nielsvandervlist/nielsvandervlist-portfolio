import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faLaravel, faJs, faReact, faNpm, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

export default function SkillSet(){

    const [isRotating, setIsRotating] = useState(false);

    const handleIconHover = () => {
        setIsRotating(!isRotating);
    }

    return (
        <div className="max-w-md mx-auto">
            <ul className="divide-y divide-gray-200">
                <li className="py-4 flex">
                    <div className="flex-shrink-0">
                        <FontAwesomeIcon
                            icon={faPhp}
                            className={`${isRotating ? 'animate-spin' : ''} h-8 w-8 text-purple-500`}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconHover}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">PHP</p>
                    </div>
                </li>
                <li className="py-4 flex">
                    <div className="flex-shrink-0">
                        <FontAwesomeIcon
                            icon={faLaravel}
                            className={`${isRotating ? 'animate-spin' : ''} h-8 w-8 text-red-500`}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconHover}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Laravel</p>
                    </div>
                </li>
                <li className="py-4 flex">
                    <div className="flex-shrink-0">
                        <FontAwesomeIcon
                            icon={faJs}
                            className={`${isRotating ? 'animate-spin' : ''} h-8 w-8 text-yellow-500`}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconHover}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">JavaScript/NodeJS</p>
                    </div>
                </li>
                <li className="py-4 flex">
                    <div className="flex-shrink-0">
                        <FontAwesomeIcon
                            icon={faReact}
                            className={`${isRotating ? 'animate-spin' : ''} h-8 w-8 text-blue-500`}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconHover}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">ReactJS</p>
                    </div>
                </li>
                <li className="py-4 flex">
                    <div className="flex-shrink-0">
                        <FontAwesomeIcon
                            icon={faCss3Alt}
                            className={`${isRotating ? 'animate-spin' : ''} h-8 w-8 text-blue-500`}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconHover}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">CSS/Tailwindcss</p>
                    </div>
                </li>
                <li className="py-4 flex">
                    <div className="flex-shrink-0">
                        <FontAwesomeIcon
                            icon={faTerminal}
                            className={`${isRotating ? 'animate-spin' : ''} h-8 w-8 text-purple-500`}
                            onMouseEnter={handleIconHover}
                            onMouseLeave={handleIconHover}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Command Line Usage</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
