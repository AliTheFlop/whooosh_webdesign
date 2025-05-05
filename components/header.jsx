'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-background/80 backdrop-blur-md py-4 shadow-sm'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container flex items-center justify-between">
                <Link
                    href="/"
                    className="font-semibold text-xl flex items-center"
                >
                    <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                        Whooosh.net
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/#services"
                        className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="/#portfolio"
                        className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/#testimonials"
                        className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                        Testimonials
                    </Link>
                    <Link href="/contact">
                        <Button variant="default" className="rounded-full">
                            Contact Us
                        </Button>
                    </Link>
                    <ThemeToggle />
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center md:hidden">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="ml-2"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed inset-0 top-[64px] bg-background z-40 transform transition-transform duration-300 ease-in-out md:hidden',
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <nav className="flex flex-col items-center justify-center space-y-8 pt-10">
                    <Link
                        href="/"
                        className="text-foreground text-xl"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/#services"
                        className="text-foreground text-xl"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/#portfolio"
                        className="text-foreground text-xl"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/#testimonials"
                        className="text-foreground text-xl"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Button size="lg" className="rounded-full w-40">
                            Contact Us
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
