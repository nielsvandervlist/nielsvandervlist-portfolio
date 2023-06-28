'use client'
import Projects from '@components/layout/Projects'
import Contact from '@components/contact/Contact'

export default function ProjectsPage() {
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between pt-20">
            <Projects/>
            <Contact/>
        </main>
    </>
}
