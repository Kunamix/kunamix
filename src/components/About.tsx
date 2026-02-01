import { motion } from "motion/react";
import { Code2, Palette, Zap, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const teamStats = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Agile Development Team",
      description: "Expert developers and designers delivering enterprise-grade solutions",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Expertise",
      description: "Complete tech stack mastery from frontend to backend infrastructure",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Excellence",
      description: "Award-worthy interfaces that drive engagement and conversions",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const coreValues = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description:
        "We deliver measurable outcomes that exceed expectations. Your ROI is our benchmark for success.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Deployment",
      description:
        "Efficient project execution with agile methodology ensures faster time-to-market without sacrificing quality.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Enterprise Quality",
      description:
        "Production-ready code following industry best practices, scalable architecture, and rigorous testing protocols.",
    },
  ];

  const expertise = [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Responsive Design",
    "API Development",
    "Database Design",
    "Performance Optimization",
    "SEO Best Practices",
    "Git & Version Control",
    "Agile Methodology",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 lg:py-40 bg-gradient-to-b from-muted/20 via-background to-muted/20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <p className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
                🚀 About Us
              </p>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Meet Kunamix
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/85 mb-6 font-medium">
            Elite development team specializing in cutting-edge web solutions
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            We are a specialized development studio combining technical excellence 
            with strategic design thinking. Our lean, focused approach allows us to 
            deliver high-impact solutions with the precision and quality that larger 
            agencies struggle to match.
          </p>
        </motion.div>

        {/* Team Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-28"
        >
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group h-full"
            >
              <Card className="h-full bg-card/70 backdrop-blur-xl border border-primary/10 hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 relative hover:bg-card/90">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <CardContent className="p-8 relative">
                  {/* Gradient Background */}
                  <div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${stat.color} opacity-5 rounded-full blur-3xl group-hover:opacity-15 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 shadow-lg relative z-10`}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {stat.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-base">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Competitive Edge
              </span>
            </h3>
            <p className="text-foreground/60 mt-4 text-lg max-w-2xl mx-auto">
              The principles that set us apart in delivering exceptional digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full"
              >
                <Card className="h-full bg-card/70 backdrop-blur-xl border border-primary/10 hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 relative hover:bg-card/90">
                  {/* Left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-white mb-6 shadow-lg"
                    >
                      {value.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed text-base">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-28"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technical Capabilities
              </span>
            </h3>
            <p className="text-foreground/60 mt-4 text-lg">
              Modern tech stack and industry-leading methodologies
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 bg-card/30">
              {expertise.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="px-5 py-2.5 bg-gradient-to-br from-primary/20 to-primary/10 text-foreground text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:from-primary/30 hover:to-primary/20 transition-all duration-300 cursor-default border border-primary/30 hover:border-primary/50 backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-8 pt-16 border-t border-primary/10"
        >
          <div className="bg-gradient-primary p-12 md:p-16 rounded-3xl text-white max-w-4xl mx-auto shadow-2xl shadow-primary/30 relative overflow-hidden group">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Let's Build Something Exceptional
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/95 mb-10 text-lg max-w-3xl mx-auto leading-relaxed"
              >
                Ready to transform your vision into a powerful digital solution? 
                Schedule a consultation to discuss your project requirements and 
                discover how we can deliver results that drive your business forward.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 font-bold shadow-2xl hover:shadow-xl hover:scale-110 px-10 h-14 text-base"
                >
                  Schedule a Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;