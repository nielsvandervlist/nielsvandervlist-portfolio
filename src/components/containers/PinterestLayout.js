'use client'
import Circle from '@images/circle.png'
import Kids from '@images/kids.svg'
import AiKids from '@images/kids-overview-card.png'
import Bespoke from '@images/bespoke.svg'
import Dash from '@images/dash.png'
import Pasar from '@images/pasar-homepage-cards.png'
import Goeswijn from '@images/goeswijn-menu.png'
import Project from '@components/projects/Project'
import {useState} from 'react'

export default function     PinterestLayout() {

    const [animate, setAnimate] = useState([
        {
            img: Kids,
            label: 'website, artificial intelligence',
            title: 'Storymaker',
            text: 'At Storymaker, we understand the importance of storytelling in a childs development. It sparks creativity, enhances language skills, and nurtures a love for reading. However, we also recognize that not everyone has the time or expertise to craft engaging stories from scratch. Thats where our web application comes in.',
            link: 'storymaker',
        },
        {
            img: Bespoke,
            label: 'website, digital agency',
            title: 'Bespoke web',
            text: 'an exceptional web development company based in the vibrant city of Leiden. With a relentless commitment to innovation and an unwavering dedication to crafting unique online experiences',
            link: 'bespoke-web',
        },
        {
            img: Dash,
            label: 'dashboard, crisis management',
            title: 'Crisis Dashboard',
            text: 'A groundbreaking web application, dedicated to transforming the way organizations handle communication crises.',
            link: 'crisis-dashboard',
        },
        {
            img: Goeswijn,
            label: 'Headless CMS, Wordpress Site',
            title: 'Bistro Goeswijn',
            text: 'Bistro Goeswijn, a charming French restaurant nestled in Leiden, now boasts an inviting online presence through a bespoke website crafted by our team. Designed and built by our skilled developers, the website captures the essence of Bistro Goeswijns French culinary delights.',
            link: 'goeswijn',
        },
        {
            img: Pasar,
            label: 'Headless CMS, Wordpress Site',
            title: 'Pasar Leiden',
            text: 'The Pasar Leiden website serves as a digital platform to promote the festival, provide essential information, and engage with attendees and vendors. The design of the website is visually appealing and reflects the vibrant and cultural aspects of the Indonesian food festival.',
            link: 'pasar',
        },
        {
            img: AiKids,
            label: 'Saas',
            title: 'Ai for Kids',
            text: 'The Pasar Leiden website serves as a digital platform to promote the festival, provide essential information, and engage with attendees and vendors. The design of the website is visually appealing and reflects the vibrant and cultural aspects of the Indonesian food festival.',
            link: 'ai-for-kids',
        },
        {
            img: Circle,
            label: 'website, social platform',
            title: 'The Circle',
            text: 'This platform was carefully crafted with the intention of breaking down barriers and connecting individuals from diverse cultures and backgrounds.',
            link: 'the-circle',
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
