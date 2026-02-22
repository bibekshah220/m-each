import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronDown, ExternalLink, MessageCircle, ArrowRight } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Required"),
  lastName: z.string().trim().min(2, "Required"),
  email: z.string().trim().email("Invalid email address"),
  phone: z.string().trim().min(8, "Required"),
  businessName: z.string().trim().min(2, "Required"),
  industry: z.string().min(1, "Please select an industry"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      firstName: form.get("firstName") as string,
      lastName: form.get("lastName") as string,
      email: form.get("email") as string,
      phone: form.get("phone") as string,
      businessName: form.get("businessName") as string,
      industry: form.get("industry") as string,
      service: form.get("service") as string,
      message: form.get("message") as string,
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    toast({ title: "Enquiry Sent!", description: "Our experts will get back to you shortly." });
  };

  return (
    <main className="pt-24 bg-white dark:bg-slate-950">
      {/* Header Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container-narrow">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Consult with Our Strategic <span className="text-blue-600 dark:text-blue-400">Advisory Experts</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Leverage our industry-leading expertise in telecommunications and infrastructure. Submit your enquiry below for a comprehensive consultation with our specialized technical team.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="contact-card-wrapper">
            <div className="grid lg:grid-cols-5 gap-8 items-start">

              {/* Left Column: Contact Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="contact-info-card h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Let's start conversation</h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                      We're always here to help you. Reach out and let's make something amazing together.
                    </p>

                    <div className="space-y-8">
                      {/* Phone */}
                      <div className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-100 dark:border-white/5 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Phone</p>
                          <p className="text-slate-500 dark:text-slate-400 mb-3">9802000382 | 9802000417</p>
                          <a href="tel:9802000382" className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all w-full md:w-auto overflow-hidden text-ellipsis whitespace-nowrap">
                            Call Now <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-100 dark:border-white/5 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Email Address</p>
                          <p className="text-slate-500 dark:text-slate-400 mb-3">info@meachgroup.com</p>
                          <a href="mailto:info@meachgroup.com" className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all w-full md:w-auto overflow-hidden text-ellipsis whitespace-nowrap">
                            Mail Us Now <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                          </a>
                        </div>
                      </div>

                      {/* Office */}
                      <div className="flex gap-5 group">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-100 dark:border-white/5 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Visit Our Office</p>
                          <p className="text-slate-500 dark:text-slate-400 mb-3">Shankhamul-34, Kathmandu, Nepal</p>
                          <a
                            href="https://maps.google.com/maps?q=M-EACH+Group+of+Technology+Pvt.+Ltd.+Shankhamul-34,Kathmandu,Nepal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all w-full md:w-auto overflow-hidden text-ellipsis whitespace-nowrap"
                          >
                            Visit Us <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Enquiry Form */}
              <div className="lg:col-span-3">
                <div className="contact-form-card">
                  {submitted ? (
                    <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                      <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Form Submitted!</h4>
                      <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                        Thank you for your interest. One of our experts will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-blue-600 dark:text-blue-400 font-bold hover:underline"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send Us a Message</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                          Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">First Name <span className="text-red-500">*</span></label>
                          <input name="firstName" type="text" placeholder="Enter your first name" className="contact-input-field" required />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Last Name <span className="text-red-500">*</span></label>
                          <input name="lastName" type="text" placeholder="Enter your last name" className="contact-input-field" required />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Email Address <span className="text-red-500">*</span></label>
                          <input name="email" type="email" placeholder="yourmail@gmail.com" className="contact-input-field" required />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Phone Number <span className="text-red-500">*</span></label>
                          <input name="phone" type="tel" placeholder="Enter contact number" className="contact-input-field" required />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Business Name <span className="text-red-500">*</span></label>
                        <input name="businessName" type="text" placeholder="Enter your business name" className="contact-input-field" required />
                        {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative">
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Industry <span className="text-red-500">*</span></label>
                          <select name="industry" className="contact-select-field" required>
                            <option value="">Select your Industry</option>
                            <option value="telecom">Telecommunications</option>
                            <option value="infrastructure">Infrastructure</option>
                            <option value="power">Power & Distribution</option>
                            <option value="other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-4 bottom-4 w-5 h-5 text-slate-400 pointer-events-none" />
                        </div>
                        <div className="relative">
                          <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Service Interested In <span className="text-red-500">*</span></label>
                          <select name="service" className="contact-select-field" required>
                            <option value="">Select a service</option>
                            <option value="network">Network Deployment</option>
                            <option value="site">Site Management</option>
                            <option value="tower">Tower Installation</option>
                            <option value="fiber">Optical Fiber</option>
                          </select>
                          <ChevronDown className="absolute right-4 bottom-4 w-5 h-5 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Message</label>
                        <textarea name="message" rows={4} placeholder="Enter message" className="contact-input-field resize-none" required />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" required />
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          I agree to the privacy policy and terms of service.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                      >
                        {submitting ? "Processing..." : "Send Enquiry"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <div className="container-narrow">
          <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 h-[450px] bg-slate-100 dark:bg-slate-900 relative shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=M-EACH%20Group%20of%20Technology%20Pvt.%20Ltd.%20Shankhamul-34,Kathmandu,Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full transition-all duration-700"
              title="M-EACH Group Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
