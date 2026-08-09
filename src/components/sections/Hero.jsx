import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown, FiMail } from "react-icons/fi";
import { personal } from "../../data/portfolio";

// Organic blob SVG
const BlobShape = ({ color, size, className, style }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    style={style}
  >
    <path
      fill={color}
      d="M45.2,-62.4C59.1,-53.2,71.3,-41.6,75.7,-27.5C80.1,-13.4,76.7,3.1,70.8,17.9C64.9,32.7,56.5,45.8,44.7,54.5C32.9,63.2,17.7,67.5,1.9,65.1C-13.9,62.7,-30.5,53.6,-44.4,42C-58.3,30.4,-69.5,16.3,-72.3,0.4C-75.1,-15.5,-69.5,-33.2,-59,-47.4C-48.5,-61.6,-33.1,-72.3,-16.5,-73.8C0.1,-75.3,31.3,-71.6,45.2,-62.4Z"
      transform="translate(100 100)"
    />
  </svg>
);

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
      style={{ background: "#F7F5F2" }}
    >
      {/* Background decorative blobs */}
      <BlobShape
        color="#C66A4E"
        size={500}
        className="absolute -top-32 -right-40 opacity-[0.07] animate-[float_8s_ease-in-out_infinite]"
      />
      <BlobShape
        color="#7C9A74"
        size={400}
        className="absolute -bottom-20 -left-32 opacity-[0.06] animate-[float_10s_ease-in-out_infinite_2s]"
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#2E2E2E 1px, transparent 1px), linear-gradient(90deg, #2E2E2E 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="section-container relative z-10 w-full pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-terra" />
            <span className="font-mono text-xs tracking-widest uppercase text-terra">
              Full Stack Developer & AI Enthusiast
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-editorial font-bold text-charcoal leading-[1.05] mb-6"
            style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
          >
            Abhishek
            <br />
            <span className="relative">
              Bhat
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M5 12 Q75 4 150 12 Q225 20 295 10"
                  stroke="#C66A4E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.svg>
            </span>
            <span className="text-terra">.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body text-muted text-lg leading-relaxed max-w-xl mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
              View My Work
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-xs text-muted tracking-wider">Find me on</span>
            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-terra hover:border-terra shadow-paper transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-terra hover:border-terra shadow-paper transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-terra hover:border-terra shadow-paper transition-all duration-200"
                aria-label="Email"
              >
                <FiMail size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Rotating editorial badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="absolute bottom-32 right-8 lg:right-16 hidden lg:flex items-center justify-center w-32 h-32"
        >
          {/* Rotating Text */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="transparent"
              />
              <text className="font-mono text-[9px] tracking-[0.2em] uppercase" fill="#777777">
                <textPath href="#circlePath" startOffset="0%">
                  LEARN • CREATE • INNOVATE • 
                </textPath>
              </text>
            </svg>
          </motion.div>
          {/* Center Icon */}
          <div className="text-terra text-xl">✦</div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-terra transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
