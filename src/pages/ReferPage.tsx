import { motion } from "motion/react";
import {
  X,
  Gift,
  Users,
  CheckCircle2,
  ArrowRight,
  User,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { benefits, howItWorks, services } from "@/constants/refer";
import { useReferForm } from "@/hooks/useContactFrom";

const ReferralProgram = () => {
  const navigate = useNavigate();
  const { sendReferForm, loading, error } = useReferForm();
  
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientCompany: "",
    projectDetails: "",
    estimatedBudget: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await sendReferForm(formData);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          yourName: "",
          yourEmail: "",
          yourPhone: "",
          clientName: "",
          clientEmail: "",
          clientPhone: "",
          clientCompany: "",
          projectDetails: "",
          estimatedBudget: "",
        });
      }, 3000);
    } catch (err) {
      console.error("Error submitting referral:", err);
      // Error is already handled by the hook
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Referral Program
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Refer & Earn
              </span>
              <br />
              Up to 20% Commission
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Know someone who needs exceptional digital solutions? Refer them
              to us and earn generous rewards for every successful project!
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-10">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4 shadow-primary">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-primary/30 mx-auto -ml-3" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Services We Offer
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Referral Form */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Submit a Referral</h2>
                  <p className="text-muted-foreground">
                    Fill in the details below and we'll take care of the rest
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-center"
                  >
                    {error}
                  </motion.div>
                )}

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your referral has been submitted successfully. We'll reach
                      out to them soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Your Information */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />
                        Your Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Your Name *
                          </label>
                          <Input
                            name="yourName"
                            value={formData.yourName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            disabled={loading}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Your Email *
                          </label>
                          <Input
                            type="email"
                            name="yourEmail"
                            value={formData.yourEmail}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            disabled={loading}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Your Phone *
                          </label>
                          <Input
                            type="tel"
                            name="yourPhone"
                            value={formData.yourPhone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Client Information */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Client Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Client Name *
                          </label>
                          <Input
                            name="clientName"
                            value={formData.clientName}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            required
                            disabled={loading}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Client Email *
                          </label>
                          <Input
                            type="email"
                            name="clientEmail"
                            value={formData.clientEmail}
                            onChange={handleChange}
                            placeholder="jane@company.com"
                            required
                            disabled={loading}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Client Phone *
                          </label>
                          <Input
                            type="tel"
                            name="clientPhone"
                            value={formData.clientPhone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            required
                            disabled={loading}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Company Name
                          </label>
                          <Input
                            name="clientCompany"
                            value={formData.clientCompany}
                            onChange={handleChange}
                            placeholder="Acme Corp"
                            disabled={loading}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        Project Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Project Description *
                          </label>
                          <Textarea
                            name="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleChange}
                            placeholder="Describe the project requirements, timeline, and any specific needs..."
                            rows={4}
                            required
                            disabled={loading}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Estimated Budget *
                          </label>
                          <select
                            name="estimatedBudget"
                            value={formData.estimatedBudget}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground disabled:opacity-50"
                            required
                            disabled={loading}
                          >
                            <option value="">Select budget range</option>
                            <option value="under-50k">
                              Under ₹50,000 (15% commission)
                            </option>
                            <option value="50k-1l">
                              ₹50,000 - ₹1,00,000 (15% commission)
                            </option>
                            <option value="1l-3l">
                              ₹1,00,000 - ₹3,00,000 (20% commission)
                            </option>
                            <option value="3l-5l">
                              ₹3,00,000 - ₹5,00,000 (20% commission)
                            </option>
                            <option value="5l-plus">
                              ₹5,00,000+ (20% commission)
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="
                          bg-gradient-primary 
                          text-primary-foreground
                          hover:opacity-90
                          hover:shadow-primary 
                          hover:scale-105
                          disabled:opacity-50
                          disabled:cursor-not-allowed
                          transition-all 
                          duration-300
                          px-8 
                          py-6 
                          text-lg
                          cursor-pointer
                        "
                      >
                        <Gift className="w-5 h-5 mr-2" />
                        {loading ? "Submitting..." : "Submit Referral"}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Terms & Conditions */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            <p className="mb-2">
              * Commission rates: 20% for projects ₹1L and above, 15% for
              projects under ₹1L
            </p>
            <p>
              ** Payouts are processed within 7 business days after receiving
              the project payment from the client
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReferralProgram;