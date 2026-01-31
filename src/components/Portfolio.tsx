import { motion } from "motion/react";
import { ExternalLink, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/constants/portfolio";

const Portfolio = () => {
  const { portfolioIntro, projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-40 bg-gradient-to-b from-muted/20 via-background to-muted/20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <p className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
                ✨ Featured Work
              </p>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {portfolioIntro.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed font-medium">
            {portfolioIntro.subtitle}
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {portfolioIntro.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group h-full"
            >
              <Card className="h-full bg-card/70 backdrop-blur-xl border border-primary/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/30 relative hover:bg-card/90 group">
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted/20">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115"
                  />
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="absolute top-4 right-4 z-10"
                    >
                      <span className="bg-gradient-primary text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg inline-flex items-center gap-1.5">
                        ⭐ Featured
                      </span>
                    </motion.div>
                  )}
                  {/* Confidential Badge */}
                  {project.confidential && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="absolute top-4 left-4 z-10"
                    >
                      <span className="bg-amber-500/90 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg inline-flex items-center gap-1.5">
                        <Lock className="w-3 h-3" />
                        Confidential
                      </span>
                    </motion.div>
                  )}
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {project.link ? (
                        <Button
                          size="lg"
                          className="bg-white text-black hover:bg-white/90 shadow-2xl font-semibold px-8 transition-all duration-300 hover:scale-105"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          View Project
                        </Button>
                      ) : (
                        <div className="text-center px-6">
                          <Lock className="w-10 h-10 text-white/80 mx-auto mb-3" />
                          <p className="text-white text-sm font-medium">
                            Confidential Project
                          </p>
                          <p className="text-white/70 text-xs mt-1">
                            Details protected by NDA
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-7 flex flex-col h-full">
                  {/* Project Header */}
                  <div className="mb-5 flex-shrink-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="inline-block">
                      <span className="text-xs text-primary font-bold bg-primary/15 px-3 py-1.5 rounded-full border border-primary/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-4"></div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ y: -2 }}
                          className="text-xs bg-gradient-to-br from-primary/5 to-primary/10 text-foreground/80 px-3 py-1.5 rounded-full border border-primary/25 font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-muted-foreground px-3 py-1.5 rounded-full bg-muted/60 font-medium">
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
          className="text-center mt-24 pt-16 border-t border-primary/10"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            >
              Ready to bring your vision to life?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              These are just a few examples of what we can create. Let's discuss
              how we can help turn your ideas into remarkable digital
              experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-semibold px-8 h-12 rounded-lg text-base"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 font-semibold px-8 h-12 rounded-lg text-base backdrop-blur-sm bg-transparent"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
