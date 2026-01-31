import { motion } from "motion/react";
import { X, AlertCircle, CheckCircle2, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { sections } from "@/constants/termsAndConditions";

const TermsAndConditions = () => {
  const navigate = useNavigate();

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
          className="fixed top-6 right-6 z-50 p-2 rounded-full bg-card hover:bg-muted border border-border shadow-lg transition-all duration-300 hover:scale-110 group"
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
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Legal Document
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms & Conditions
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Please read these terms and conditions carefully before using our
              services
            </p>

            <p className="text-sm text-muted-foreground">
              Last Updated: January 30, 2026
            </p>
          </motion.div>

          {/* Introduction Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Important Notice</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms and Conditions constitute a legally binding
                      agreement between you and Kunamix regarding your use of
                      our services. By engaging our services, you acknowledge
                      that you have read, understood, and agree to be bound by
                      these terms. If you are entering into this agreement on
                      behalf of a company or other legal entity, you represent
                      that you have the authority to bind such entity to these
                      terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${section.gradient} flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <section.icon className="w-6 h-6 text-white" />
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
            ))}
          </div>

          {/* Acceptance Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-primary">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Acceptance of Terms
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    By using Kunamix's services, you acknowledge that you have
                    read and understood these Terms and Conditions and agree to
                    be bound by them. If you do not agree to these terms, please
                    do not use our services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            <p className="mb-2">
              For questions or concerns about these Terms and Conditions, please
              contact our legal team.
            </p>
            <p>© {new Date().getFullYear()} Kunamix. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
