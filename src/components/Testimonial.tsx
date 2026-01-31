import { motion } from "motion/react";
import { Star, Quote, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "CEO, TechIndia Solutions",
      rating: 5,
      text: "Outstanding work! The team delivered beyond our expectations. The attention to detail and innovative solutions were remarkable.",
      project: "E-commerce Platform",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Founder, DesignHub India",
      rating: 5,
      text: "Professional, creative, and incredibly responsive. They transformed our vision into a stunning reality that our users love.",
      project: "SaaS Dashboard",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Marketing Director, GrowthCo",
      rating: 5,
      text: "The best development team we've worked with. Fast turnaround, excellent communication, and top-notch quality.",
      project: "Marketing Website",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "CTO, InnovateLabs Bangalore",
      rating: 5,
      text: "Incredible expertise in modern web technologies. They built a scalable solution that handles our growing user base perfectly.",
      project: "Web Application",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Product Manager, AppFlow Tech",
      rating: 5,
      text: "Working with this team was seamless. They understood our requirements immediately and delivered a pixel-perfect product.",
      project: "Mobile-First Platform",
    },
    {
      id: 6,
      name: "Ananya Iyer",
      role: "Entrepreneur, Chennai",
      rating: 5,
      text: "From concept to launch, they guided us every step of the way. The end result exceeded all our expectations!",
      project: "Startup MVP",
    },
  ];

  // Double the testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={headerVariants}>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Client Testimonials
            </h2>
          </motion.div>

          <motion.p
            variants={headerVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear what our clients have to say
            about working with us
          </motion.p>
        </motion.div>

        {/* Auto-Scrolling Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Left Fade Edge */}
          <div className="absolute left-0 top-0 bottom-4 w-20 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Right Fade Edge */}
          <div className="absolute right-0 top-0 bottom-4 w-20 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto scrollbar-none px-8 md:px-16 py-2"
            style={{
              scrollBehavior: "auto",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className="min-w-[320px] md:min-w-[380px] bg-card/80 backdrop-blur-md border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header with Quote and Rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/80 mb-6 leading-relaxed flex-1 text-[15px]">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    {/* User Icon instead of image */}
                    <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-primary">
                      <User className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonial.role}
                      </p>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-primary/70 font-medium bg-primary/5 px-2 py-1 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pause Indicator */}
          {isPaused && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-xs font-medium border border-border shadow-lg z-20 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Paused
            </motion.div>
          )}
        </motion.div>

        {/* Bottom Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-10"
        >
          <div className="flex items-center gap-1.5 text-muted-foreground/60 text-xs">
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>Hover to pause</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span>Scroll to explore</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;