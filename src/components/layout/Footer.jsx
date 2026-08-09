import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personal } from "../../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80 py-14">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-editorial font-bold text-2xl text-white mb-1">
              Abhishek Bhat<span className="text-terra">.</span>
            </p>
            <p className="font-body text-xs text-white/40 tracking-wide">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-terra flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-terra flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-terra flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-white/30 text-center md:text-right">
            © {currentYear} Abhishek Bhat P<br />
            <span className="inline-flex items-center gap-1 mt-0.5">
              Crafted with <FiHeart size={10} className="text-terra" /> &amp; care
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="font-body text-xs text-white/30 hover:text-white/70 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
