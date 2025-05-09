'use client';

import { Suspense } from 'react';
import { Briefcase, Mail, MapPin, Phone } from 'lucide-react';
import { ScrollAnimation } from '@/components/scroll-animation';
import { ContactForm } from '@/components/contact-form';
import { Skeleton } from '@/components/ui/skeleton';

export default function Contact() {
    return (
        <div className="pt-32 pb-20">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-900/20" />
            <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-purple-500/10 to-transparent dark:from-purple-900/20" />

            <div className="container relative z-10">
                <ScrollAnimation>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Let&apos;s Get You Ready
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Our team of design experts is ready to transform
                            your website into a masterpiece.
                        </p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <ScrollAnimation direction="left">
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl font-semibold mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Whether you need a complete website
                                    redesign, optimizations, hosting, or just
                                    want to learn more about our services,
                                    we&apos;re here to help.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                                            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">
                                                Email Us
                                            </h3>
                                            <p className="text-muted-foreground">
                                                ali@whooosh.net
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                                            <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">
                                                Call Us
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Not Available.. (Yet)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full mr-4">
                                            <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">
                                                Visit Us
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Not Available.. (Yet)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
                                            <Briefcase className="h-5 w-5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">
                                                Business Hours
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Monday - Friday: 9AM - 6PM AEST
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden h-80 bg-muted relative">
                                <Suspense
                                    fallback={<Skeleton className="h-full" />}
                                >
                                    <iframe
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=sydney,%20nsw+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        className="w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </Suspense>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation direction="right">
                        <div className="bg-background/70 backdrop-blur-lg border rounded-xl p-8">
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-2">
                                    Send Us a Message
                                </h2>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we&apos;ll get
                                    back to you within 24 hours.
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}
