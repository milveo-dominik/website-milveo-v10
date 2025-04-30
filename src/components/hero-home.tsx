import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import MilveoFramework from '@/components/milveo-framework'
const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroHome() {
    return (
        <>
            <div className="overflow-hidden">
                <div
                    aria-hidden
                    className="hidden lg:block z-[2] isolate absolute inset-0 opacity-50 pointer-events-none contain-strict">
                    <div className="top-0 left-0 absolute bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)] rounded-full w-[35rem] h-[80rem] -rotate-45 -translate-y-[350px]" />
                    <div className="top-0 left-0 absolute bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] rounded-full w-56 h-[80rem] -rotate-45 [translate:5%_-50%]" />
                    <div className="top-0 left-0 absolute bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] w-56 h-[80rem] -rotate-45 -translate-y-[350px]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="hidden -z-20 absolute inset-0">
                            <img
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="hidden dark:block top-56 lg:top-32 -z-20 absolute inset-x-0"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="-z-10 absolute inset-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto px-6 max-w-7xl">
                            <div className="sm:mx-auto lg:mt-0 lg:mr-auto text-center">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="https://sandan.ai"
                                        className="group flex items-center gap-4 bg-muted hover:bg-background shadow-black/5 shadow-md dark:shadow-zinc-950 mx-auto p-1 pl-4 border dark:border-t-white/5 dark:hover:border-t-border rounded-full w-fit transition-all duration-300">
                                        <div className="flex items-center gap-2">
                                            <span className="text-foreground text-sm">KI Unterstützung für deine Mitarbeiter</span>
                                            <span className="bg-violet-500 px-2 py-0.5 rounded-full text-white text-xs">Neu</span>
                                        </div>
                                        <span className="block bg-white dark:bg-zinc-700 dark:border-background border-l w-0.5 h-4"></span>

                                        <div className="bg-background group-hover:bg-muted rounded-full size-6 overflow-hidden duration-500">
                                            <div className="flex w-12 -translate-x-1/2 group-hover:translate-x-0 duration-500 ease-in-out">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>

                                    <h1
                                        className="mx-auto mt-8 lg:mt-16 max-w-5xl font-medium xl:text-[5.25rem] text-5xl md:text-7xl uppercase text-balance">
                                        E-Commerce Growth Neu gedacht
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-lg text-balance">
                                        Mit dem MILVEO® Framework schöpfen wir das volle Potenzial Ihres Onlineshops aus – Strategie, Technologie & Marketing aus einer Hand.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="flex md:flex-row flex-col justify-center items-center gap-2 mt-12">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 p-0.5 border rounded-[14px]">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="px-5 rounded-xl text-base">
                                            <Link href="https://calendly.com/d-loessl/kostenlose-erstberatung-15min">
                                                <span className="text-nowrap">Kostenloses Erstgespräch</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 rounded-xl h-10.5">
                                        <Link
                                            href="#framework"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.querySelector('#framework')?.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });
                                            }}
                                        >
                                            <span className="text-nowrap">mehr erfahren</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-8 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="z-10 absolute inset-0"
                                />
                                <div className="relative flex justify-center items-center bg-background mx-auto p-4 max-w-6xl overflow-hidden">
                                    <MilveoFramework />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pt-16 pb-16 md:pb-32">
                    <div className="group relative m-auto px-6 max-w-5xl">
                        <div className="z-10 inset-0 flex justify-center items-center">
                            <Link
                                href="/"
                                className="block hover:opacity-75 font-bold text-lg duration-150">
                                <span>Expertiese die den Unterschied macht</span>
                            </Link>
                        </div>
                        <div className="gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-14 grid grid-cols-4 mx-auto mt-12 max-w-2xl transition-all duration-500">

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}