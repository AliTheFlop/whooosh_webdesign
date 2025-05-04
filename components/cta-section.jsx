import Link from 'next/link'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="container">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to transform your digital presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's create a website that's not just beautiful, but strategically designed to maximize your ad revenue potential.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 group">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}