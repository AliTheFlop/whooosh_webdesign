'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Assuming ScrollAnimation is not used directly here based on the original snippet logic
// import { ScrollAnimation } from '@/components/scroll-animation';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // The 'use client' directive indicates this component needs client-side interactivity [[4]].
        // useEffect runs on the client after the component mounts [[7]].
        setVisible(true);
    }, []);

    return (
        <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20" />

            {/* Decorative circles */}
            <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-600/10" />
            <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-600/10" />

            <div className="container relative z-10">
                {/* Use Flexbox for layout: stack on small screens, row on large */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Column: Text Content */}
                    <div
                        className={`lg:w-1/2 space-y-8 text-center lg:text-left transition-all duration-1000 ${
                            visible ? 'opacity-100' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                                Never Miss A{' '}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                    High-Value{' '}
                                </span>
                                Client.
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                                Secure More Leads With A Custom Website
                                That&apos;s Built For Your Brand.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="rounded-full group px-6"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link href="/#portfolio">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-6"
                                >
                                    View Our Work
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Window Image */}
                    <div
                        className={`lg:w-1/2 transition-all duration-1000 delay-300 ${
                            visible ? 'opacity-100' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <div className="relative max-w-2xl mx-auto">
                            {/* Subtle tilt effect */}
                            <div className="absolute inset-0 border border-border rounded-3xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-md transform -rotate-3" />
                            {/* Main window mock */}
                            <div className="relative border border-border rounded-3xl bg-card overflow-hidden shadow-xl">
                                <div className="p-1">
                                    {/* Window chrome */}
                                    <div className="h-6 bg-muted rounded-t-2xl flex items-center px-4 space-x-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    </div>
                                    {/* Window content area */}
                                    <div className="aspect-[16/10] bg-gradient-to-br from-blue-500 to-purple-600 relative">
                                        {/* Placeholder content inside window */}
                                        <div className="absolute inset-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center">
                                            <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full grid place-items-center">
                                                {/* Play icon */}
                                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-slate-700 border-b-[8px] border-b-transparent ml-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
