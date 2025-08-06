import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import portfolioData from '@/content/portfolio.json';
import { useState } from 'react';

const Portfolio = () => {
  const { portfolioIntro, projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
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
              {portfolioIntro.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            {portfolioIntro.subtitle}
          </p>
          <p className="text-lg text-muted-foreground">
            {portfolioIntro.description}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`transition-all duration-300 ${
                filter === category 
                  ? 'bg-gradient-primary hover:shadow-primary' 
                  : 'border-primary/30 hover:text-white hover:bg-primary/5'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="h-full bg-card/90 backdrop-blur-sm border-border/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 relative">
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-primary text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 justify-center">
                        <Button
                          size="sm"
                          className="bg-white text-black hover:bg-white/90 shadow-lg"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-md">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-foreground/70">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gradient-to-r from-primary/10 to-accent/10 text-foreground/80 px-2 py-1 rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted/50">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
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
              Impressed by our work?
            </h3>
            <p className="text-muted-foreground mb-6">
              These are just a few examples of what we can create. Let's discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:text-white hover:bg-primary/5 transition-all duration-300"
              >
                View More Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;