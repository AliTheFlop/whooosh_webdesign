import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function PortfolioSection() {
    const projects = [
        {
            title: 'TechVision Rebrand',
            category: 'Technology',
            description:
                'A complete overhaul with 200% increase in ad revenue.',
            image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            title: 'Culinary Delight',
            category: 'Food & Beverage',
            description:
                'Strategic ad placement with enhanced user experience.',
            image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            title: 'FitLife Platform',
            category: 'Fitness',
            description: 'Conversion-focused design with premium ad spaces.',
            image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
    ];

    return (
        <section id="portfolio" className="py-24">
            <div className="container">
                <ScrollAnimation>
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Featured Projects
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Explore how we&apos;ve helped businesses transform
                            their digital presence while maximizing ad revenue
                            potential.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                    {projects.map((project, index) => (
                        <ScrollAnimation
                            key={index}
                            direction={index % 2 === 0 ? 'up' : 'down'}
                            delay={index * 100}
                        >
                            <div className="group relative overflow-hidden rounded-xl">
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="text-sm font-medium text-white/80 mb-2">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/90 mb-4">
                                        {project.description}
                                    </p>
                                    <Link href="/contact">
                                        <Button
                                            variant="outline"
                                            className="text-white border-white/30 hover:bg-white/10 hover:border-white"
                                        >
                                            View Project
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                <ScrollAnimation>
                    <div className="text-center">
                        <Link href="/contact">
                            <Button className="rounded-full px-8">
                                Let&apos;s Discuss Your Project
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
