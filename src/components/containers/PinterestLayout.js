'use client'
import Circle from '@images/circle.png'
import Kids from '@images/kids.svg'
import Bespoke from '@images/bespoke.svg'
import Dash from '@images/dash.png'
import Project from '@components/projects/Project'
import {useState} from 'react'
import Link from 'next/link'
import {AnimatePresence, motion} from 'framer-motion'

export default function     PinterestLayout() {

    const [animate, setAnimate] = useState([
        {
            img: Circle,
            label: 'website, social platform',
            title: 'The Circle',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'the-circle',
        },
        {
            img: Kids,
            label: 'website, artificial intelligence',
            title: 'Storymaker',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'storymaker',
        },
        {
            img: Bespoke,
            label: 'website, digital agency',
            title: 'Bespoke web',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'bespoke-web',
        },
        {
            img: Dash,
            label: 'dashboard, crisis management',
            title: 'Crisis Dashboard',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            link: 'crisis-dashboard',
        },
    ])

    return <div className={'projects'}>
        {animate.map((project, index) => {
            return <div key={index}>
                        <Project
                            img={project.img}
                            label={project.label}
                            title={project.title}
                            text={project.text}
                            link={project.link}
                        />
            </div>
        })}
    </div>
}
