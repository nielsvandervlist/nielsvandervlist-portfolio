'use client'
import Hero from '@components/layout/Hero'
import Intro from '@components/layout/Intro'
import Projects from '@components/layout/Projects'
import Solutions from '@components/about/Solutions'
import {ParallaxProvider} from 'react-scroll-parallax'
import PatternLayout from '@components/containers/PatternLayout'
import MotionTracker from '@components/containers/MotionTracker'
import Contact from '@components/contact/Contact'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero/>
            <Intro/>
            <Solutions/>
            <Projects/>
            <Contact/>
        </main>
    )
}
