'use client'
import React from 'react'
import { Mail, SendHorizonal, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className="text-lg tracking-wider font-mono">
          Sunil.0x<span className="animate-pulse text-primary">|</span>
        </div>
    )
}

export default function Header() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuState(false);
    };

    return (
        <header>
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className="fixed group z-50 w-full px-2">
                <div className={cn('mx-auto mt-2 max-w-6xl px-4 sm:px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/80 backdrop-blur-md max-w-7xl rounded-2xl border border-border/50')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                             <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
                                {menuItems.map(s => (
                                    <button
                                    key={s.name}
                                    onClick={() => scrollTo(s.href.substring(1))}
                                    className="hover:text-primary transition-colors duration-200"
                                    aria-label={`Scroll to ${s.name} section`}
                                    >
                                    {s.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={cn("bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex fixed top-16 left-0 right-0 mx-4 rounded-xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:static lg:mx-0 lg:mb-0 lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none", !menuState && "hidden")}>
                            <div className="lg:hidden w-full">
                                <ul className="space-y-6 text-base text-center">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => scrollTo(item.href.substring(1))}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150 w-full">
                                                <span>{item.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}