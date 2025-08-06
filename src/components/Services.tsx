import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Monitor, Palette, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import servicesData from '@/content/services.json';

const Services = () => {
  const { servicesIntro, services } = servicesData;

  const getServiceIcon = (iconName: string) => {
    const iconMap = {
      Code: Code,
      Globe: Globe,
      Smartphone: Smartphone,
      Monitor: Monitor,
      Palette: Palette,
      Zap: Zap,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Code;
    return <IconComponent className="w-8 h-8" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {servicesIntro.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            {servicesIntro.subtitle}
          </p>
          <p className="text-lg text-muted-foreground">
            {servicesIntro.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:border-primary/30">
                <CardHeader className="text-center pb-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-primary"
                  >
                    {getServiceIcon(service.icon)}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/5 hover:text-white hover:border-primary/50 transition-all duration-300 group"
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need something custom?
            </h3>
            <p className="text-muted-foreground mb-6">
              We love unique challenges and are always ready to discuss custom solutions tailored to your specific needs.
            </p>
            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300"
            >
              Discuss Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;