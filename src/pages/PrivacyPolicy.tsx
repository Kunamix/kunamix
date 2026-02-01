import { motion } from "motion/react";
import {
  X,
  Shield,
  Lock,
  Eye,
  UserCheck,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { sections } from "@/constants/privacyPolicy";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const dataProtectionPrinciples = [
    {
      icon: Lock,
      title: "Security",
      description:
        "We protect your data with industry-standard encryption and security measures",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We are open about how we collect, use, and share your information",
    },
    {
      icon: UserCheck,
      title: "Control",
      description:
        "You have control over your personal data and privacy preferences",
    },
    {
      icon: Shield,
      title: "Compliance",
      description:
        "We comply with all applicable data protection laws and regulations",
    },
  ];
  
  const onClose = () => {
    navigate("/");
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        {/* Close Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onClose}
          className="fixed top-6 right-6 z-50 p-2 rounded-full bg-card hover:bg-muted border border-border shadow-lg transition-all duration-300 hover:scale-110 group cursor-pointer"
        >
          <X className="w-6 h-6 text-foreground group-hover:rotate-90 transition-transform duration-300" />
        </motion.button>

        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Your Privacy Matters
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              We are committed to protecting your privacy and handling your data
              with care and transparency
            </p>

            <p className="text-sm text-muted-foreground">
              Last Updated: January 30, 2026
            </p>
          </motion.div>

          {/* Data Protection Principles */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Our Commitment to Your Privacy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataProtectionPrinciples.map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {principle.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Privacy Policy Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const SectionIcon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${section.gradient} flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <SectionIcon className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground pt-2">
                          {section.title}
                        </h2>
                      </div>

                      <div className="space-y-4 ml-0 md:ml-16">
                        {section.content.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-muted-foreground leading-relaxed text-[15px]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Data Rights Summary */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-primary">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Your Data, Your Rights
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                    You have the right to access, correct, delete, or export
                    your personal data at any time. You can also withdraw
                    consent for data processing or opt-out of marketing
                    communications.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-primary/20">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm">Access Your Data</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-primary/20">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm">Request Deletion</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-primary/20">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm">Opt-Out Anytime</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12"
          >
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">
                    Questions About Your Privacy?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our Data Protection team is here to help. Contact us for any
                    privacy-related inquiries.
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-medium">
                    <Mail className="w-4 h-4" />
                    <a
                      href="mailto:contact@kunamix.com"
                      className="hover:underline"
                    >
                      contact@kunamix.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            <p className="mb-2">
              We are committed to transparency and will update this policy as
              needed to reflect changes in our practices.
            </p>
            <p>© {new Date().getFullYear()} Kunamix. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;