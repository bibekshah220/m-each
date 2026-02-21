import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Linkedin, Instagram, Twitter, Music2 } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/5">
      <div className="container-narrow pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo size="sm" variant="default" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Meach Group is a leading service provider delivering comprehensive, end-to-end solutions in network deployment, site management, and power distribution across Nepal.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, color: "hover:bg-blue-600" },
                { Icon: Instagram, color: "hover:bg-pink-600" },
                { Icon: Music2, color: "hover:bg-black" }, // TikTok placeholder
                { Icon: Linkedin, color: "hover:bg-blue-700" }
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400 dark:text-white/50 hover:text-white transition-all duration-300 ${color} shadow-sm`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-slate-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "FAQs", "Services", "Contact Us"].map((link) => {
                const path = link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`;
                return (
                  <li key={link}>
                    <Link
                      to={path}
                      className="text-slate-500 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-slate-900 dark:text-white">Service Links</h4>
            <ul className="space-y-3">
              {[
                "Network Deployment",
                "Site Management",
                "Tower Installation",
                "Optical Fiber",
                "Power Distribution",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-slate-500 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-slate-900 dark:text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500 dark:text-white/60">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>Shop 25/429 Montague Road, West End QLD 4101</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-white/60">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>9802000382 | 9802000417</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-white/60">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="break-all">info@meachgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} M-EACH Group of Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
