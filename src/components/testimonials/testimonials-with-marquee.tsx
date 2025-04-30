import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "./testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="flex flex-col items-center gap-4 sm:gap-16 mx-auto max-w-container text-center">
        <div className="flex flex-col items-center gap-4 sm:gap-8 px-4">
          <h2 className="lg:max-w-xl font-regular text-3xl md:text-5xl tracking-tighter">
            {title}
          </h2>
          <p className="max-w-[600px] font-medium text-md text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex flex-col justify-center items-center w-full overflow-hidden">
          <div className="group flex flex-row p-2 overflow-hidden [--gap:1rem] [gap:var(--gap)] [--duration:40s]">
            <div className="flex flex-row justify-around animate-marquee shrink-0 [gap:var(--gap)] group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="hidden sm:block left-0 absolute inset-y-0 bg-gradient-to-r from-background w-1/3 pointer-events-none" />
          <div className="hidden sm:block right-0 absolute inset-y-0 bg-gradient-to-l from-background w-1/3 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}