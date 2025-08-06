import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Dribbble, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamData from "@/content/team.json";
import { CardCarousel } from "@/components/ui/card-carousel";
import { one,two,three,four } from "@/assets";
import { json } from "stream/consumers";
const About = () => {
  const { teamIntro,images } = teamData;
  // images = JSON.parse(images);
  // const imgs = JSON.stringify(images);
  console.log(images)
  // console.log(imgs);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "dribbble":
        return <Dribbble className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

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

  const image = [
    { src: one, alt: "Image 1" },
    { src: two, alt: "Image 2" },
    { src: three, alt: "Image 3" },
    { src: four, alt: "Image 4" },
  ]
console.log(image)
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
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
              {teamIntro.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            {teamIntro.subtitle}
          </p>
          <p className="text-lg text-muted-foreground">
            {teamIntro.description}
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="">
          <CardCarousel
            images={images}
            autoplayDelay={2000}
            showPagination={true}
            showNavigation={true}
          />
        </div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary p-8 rounded-2xl text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to work with us?</h3>
            <p className="text-white/90 mb-6">
              Let's discuss your project and see how we can bring your vision to
              life.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-primary hover:bg-white/90 transition-colors"
            >
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// <div className="relative">
//           <div className="overflow-x-auto scrollbar-hide pb-4">
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="flex gap-6 min-w-max px-4"
//             >
//             {members.map((member, index) => (
//             <motion.div
//               key={member.id}
//               variants={cardVariants}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 }
//               }}
//               className="flex-shrink-0 w-80"
//             >
//               <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 group">
//                 <CardContent className="p-6">
//                   {/* Avatar */}
//                   <div className="relative mb-6">
//                     <div className="w-24 h-24 mx-auto mb-4 relative">
//                       <div className="w-full h-full rounded-full bg-gradient-primary p-0.5">
//                         <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-2xl font-bold text-primary">
//                           {member.name.split(' ').map(n => n[0]).join('')}
//                         </div>
//                       </div>
//                       {/* Floating icon */}
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//                         className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white shadow-accent"
//                       >
//                         <Code2 className="w-4 h-4" />
//                       </motion.div>
//                     </div>
//                   </div>

//                   {/* Name & Role */}
//                   <div className="text-center mb-4">
//                     <h3 className="text-xl font-bold text-foreground mb-1">
//                       {member.name}
//                     </h3>
//                     <p className="text-primary font-medium">
//                       {member.role}
//                     </p>
//                   </div>

//                   {/* Description */}
//                   <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
//                     {member.description}
//                   </p>

//                   {/* Skills */}
//                   <div className="mb-6">
//                     <div className="flex flex-wrap gap-2">
//                       {member.skills.slice(0, 4).map((skill) => (
//                         <span
//                           key={skill}
//                           className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                       {member.skills.length > 4 && (
//                         <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
//                           +{member.skills.length - 4} more
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Social Links */}
//                   <div className="flex justify-center gap-3">
//                     {Object.entries(member.social).map(([platform, url]) => (
//                       <Button
//                         key={platform}
//                         variant="ghost"
//                         size="sm"
//                         className="h-9 w-9 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
//                         onClick={() => window.open(url, '_blank')}
//                       >
//                         {getSocialIcon(platform)}
//                       </Button>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//            ))}
//             </motion.div>
//           </div>
//         </div>
