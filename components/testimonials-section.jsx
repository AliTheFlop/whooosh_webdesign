import { ScrollAnimation } from '@/components/scroll-animation'
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Working with PixelPerfect transformed our website into a powerful revenue stream. The design is stunning, and the ad placements feel perfectly integrated.",
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "TechVision",
      avatar: "SJ"
    },
    {
      quote: "Our website redesign paid for itself within 3 months. The team understood exactly how to balance aesthetics with monetization opportunities.",
      name: "Mark Wilson",
      title: "CEO",
      company: "Culinary Delight",
      avatar: "MW"
    },
    {
      quote: "Not only did we get a beautiful website, but our conversion rates increased by 78%. The strategic ad placements have been a game-changer for our revenue.",
      name: "Emily Chen",
      title: "Founder",
      company: "FitLife",
      avatar: "EC"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what businesses like yours have experienced after working with us.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card className="bg-background/50 backdrop-blur-sm h-full flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <Quote className="h-10 w-10 text-blue-500/20 mb-4" />
                  <p className="italic text-foreground/90">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback className="bg-blue-100 text-blue-800">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}