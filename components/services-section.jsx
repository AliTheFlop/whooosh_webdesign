import { ScrollAnimation } from '@/components/scroll-animation';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    PaintBucket,
    Layout,
    Lightbulb,
    DollarSign,
    Sparkles,
    BarChart,
} from 'lucide-react';

export function ServicesSection() {
    const services = [
        {
            icon: <PaintBucket className="h-8 w-8 text-blue-500" />,
            title: 'Beautiful Design',
            description:
                'Stunning, on-brand visuals that elevate your presence and create memorable experiences.',
        },
        {
            icon: <Layout className="h-8 w-8 text-purple-500" />,
            title: 'Ad-Ready Structure',
            description:
                'Strategic layouts optimized for advertisement placement without compromising user experience.',
        },
        {
            icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
            title: 'Conversion-Focused',
            description:
                'Psychology-driven design patterns that guide visitors toward your business goals.',
        },
        {
            icon: <DollarSign className="h-8 w-8 text-green-500" />,
            title: 'Revenue Optimization',
            description:
                'Maximize your ad revenue with placements that perform while preserving user experience.',
        },
        {
            icon: <Sparkles className="h-8 w-8 text-yellow-500" />,
            title: 'Brand Elevation',
            description:
                'Transform your digital identity with a coherent aesthetic that builds lasting recognition.',
        },
        {
            icon: <BarChart className="h-8 w-8 text-red-500" />,
            title: 'Fast Performance',
            description:
                'All our websites are optimized for blazing-fast speeds and maximum efficiency.',
        },
    ];

    return (
        <section id="services" className="py-24 bg-muted/30">
            <div className="container">
                <ScrollAnimation>
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What We Do For You
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We combine modern design techniques with strategic
                            ad placement to create websites that are both
                            beautiful <em>and</em> profitable.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <ScrollAnimation key={index} delay={index * 100}>
                            <Card className="border-0 bg-background/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 h-full">
                                <CardHeader>
                                    <div className="mb-4">{service.icon}</div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
