'use client'

import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
const menuItems = [
    { name: 'Framework', href: '#framework' },
    { name: 'Dienstleistungen', href: '#services' },
    { name: 'Marketing AI Agents', href: '#ai-agents' },
]

export function HeaderNav() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group z-20 fixed px-2 w-full">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap justify-between items-center gap-6 lg:gap-0 py-3 lg:py-4">
                        <div className="flex justify-between w-full lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 font-medium text-lg">
                                <Image src="/logo.png" alt="milveo logo" width={100} height={100} className="brightness-0 dark:invert" />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="lg:hidden block z-20 relative -m-2.5 -mr-4 p-2.5 cursor-pointer">
                                <Menu className="group-data-[state=active]:opacity-0 m-auto size-6 in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 duration-200" />
                                <X className="absolute inset-0 opacity-0 group-data-[state=active]:opacity-100 m-auto size-6 -rotate-180 group-data-[state=active]:rotate-0 scale-0 group-data-[state=active]:scale-100 duration-200" />
                            </button>
                        </div>

                        <div className="hidden lg:block absolute inset-0 m-auto size-fit">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="block text-foreground duration-150 hover:text-accent-foreground">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden group-data-[state=active]:block lg:flex lg:group-data-[state=active]:flex flex-wrap md:flex-nowrap justify-end items-center lg:gap-6 space-y-8 lg:space-y-0 bg-background lg:bg-transparent dark:lg:bg-transparent shadow-2xl shadow-zinc-300/20 lg:shadow-none dark:shadow-none lg:m-0 mb-6 p-6 lg:p-0 border lg:border-transparent rounded-3xl w-full lg:w-fit">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="block text-muted-foreground duration-150 hover:text-accent-foreground">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex sm:flex-row flex-col sm:gap-3 space-y-3 sm:space-y-0 w-full md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="https://calendly.com/d-loessl/kostenlose-erstberatung-15min">
                                        <span>Kostenloses Erstgespräch</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="https://calendly.com/d-loessl/kostenlose-erstberatung-15min">
                                        <span>Kostenloses Erstgespräch</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}