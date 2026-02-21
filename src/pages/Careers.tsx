import { Link, useParams } from "react-router-dom";
import { MapPin, Clock, ArrowRight, CheckCircle, Upload } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { jobs } from "@/data/siteData";
import { useToast } from "@/hooks/use-toast";

const CareersIndex = () => (
  <>
    <PageHero title="Careers" description="Join our team and help build Nepal's telecom infrastructure. Explore opportunities at Meach Group." />
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-4xl">
        <SectionHeader subtitle="Open Positions" title="Current Opportunities" />
        <div className="space-y-6">
          {jobs.map((job, i) => (
            <Link
              key={job.slug}
              to={`/careers/${job.slug}`}
              className="group block bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                  <MapPin className="w-3 h-3" /> {job.location}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                  <Clock className="w-3 h-3" /> {job.type}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{job.description}</p>
              <span className="inline-flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
                View & Apply <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(7, "Invalid phone number").max(20),
  coverLetter: z.string().trim().max(2000, "Cover letter must be under 2000 characters").optional(),
});

const CareerDetail = () => {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resume, setResume] = useState<File | null>(null);

  if (!job) {
    return (
      <div className="pt-32 pb-20 text-center container-narrow">
        <h1 className="text-2xl font-bold text-foreground mb-4">Position Not Found</h1>
        <Link to="/careers" className="text-secondary hover:underline">Back to Careers</Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      fullName: form.get("fullName") as string,
      email: form.get("email") as string,
      phone: form.get("phone") as string,
      coverLetter: form.get("coverLetter") as string,
    };

    const result = applicationSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (!resume) {
      setErrors({ resume: "Please upload your resume" });
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    toast({ title: "Application Submitted!", description: "We'll review your application and get back to you soon." });
  };

  return (
    <>
      <PageHero title={job.title} description={`${job.location} · ${job.type}`} />
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-4xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow mb-12">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Responsibilities</h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {job.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {job.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-8">Apply for this Position</h3>
            {submitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Application Submitted!</h4>
                <p className="text-muted-foreground">We'll review your application and contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input name="fullName" type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    {errors.fullName && <p className="text-destructive text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <input name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all" placeholder="+977 98XXXXXXXX" />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Resume *</label>
                  <label className="flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-dashed border-border hover:border-secondary cursor-pointer transition-colors">
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{resume ? resume.name : "Upload your resume (PDF, DOC)"}</span>
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => { setResume(e.target.files?.[0] || null); setErrors((prev) => ({ ...prev, resume: "" })); }} />
                  </label>
                  {errors.resume && <p className="text-destructive text-xs mt-1">{errors.resume}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Cover Letter</label>
                  <textarea name="coverLetter" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us why you'd be a great fit..." />
                  {errors.coverLetter && <p className="text-destructive text-xs mt-1">{errors.coverLetter}</p>}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-lg hero-gradient text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 transition-all"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export { CareersIndex, CareerDetail };
