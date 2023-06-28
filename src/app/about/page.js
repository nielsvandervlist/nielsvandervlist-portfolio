'use client'
import Intro from '@components/layout/Intro'
import Solutions from '@components/about/Solutions'

export default function ProjectsPage() {
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between pt-20">
            <Intro/>
            <Solutions/>
        </main>
    </>
}
