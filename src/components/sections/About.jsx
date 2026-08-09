import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMapPin, FiMail } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle";
import { personal } from "../../data/portfolio";

const statItems = [
  { value: "8+", label: "Projects Built" },
  { value: "400+", label: "LeetCode Solved" },
  { value: "20+", label: "Open Source PRs" },
  { value: "4.9★", label: "Client Rating" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-bg">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main portrait frame */}
            <div className="relative z-10 max-w-sm mx-auto lg:mx-0">
              {/* Decorative background blob */}
              <div
                className="absolute -inset-4 rounded-[40px] opacity-20"
                style={{
                  background: "linear-gradient(135deg, #C66A4E, #7C9A74)",
                  filter: "blur(20px)",
                }}
              />

              {/* Portrait card */}
              <div className="relative bg-white rounded-3xl overflow-hidden border border-border shadow-card">
                {/* Top pattern area */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #FDF0EB 0%, #EEF4ED 100%)",
                  }}
                >
                  {/* Decorative initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-editorial font-bold text-[7rem] leading-none select-none"
                      style={{ color: "#C66A4E", opacity: 0.12 }}
                    >
                      AB
                    </span>
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    {["#C66A4E", "#7C9A74", "#E8E4DD"].map((c, i) => (
                      <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  {/* Pattern lines */}
                  <svg
                    className="absolute bottom-0 left-0 right-0"
                    viewBox="0 0 400 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 40 Q100 20 200 40 Q300 60 400 40 L400 60 L0 60 Z" fill="white" />
                  </svg>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-editorial font-bold text-charcoal text-xl mb-0.5">
                    Abhishek Bhat P
                  </h3>
                  <p className="font-body text-muted text-sm mb-4">Full Stack Developer</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["React", "Node.js", "Python", "AI/ML"].map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Contact info */}
                  <div className="space-y-2.5 text-sm">
                    <div className="flex items-center gap-2 text-muted">
                      <FiMapPin size={13} className="text-terra flex-shrink-0" />
                      <span className="font-body text-xs">India</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted">
                      <FiMail size={13} className="text-terra flex-shrink-0" />
                      <span className="font-body text-xs truncate">{personal.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky note decorations */}
            <motion.div
              initial={{ opacity: 0, rotate: -5, y: 20 }}
              whileInView={{ opacity: 1, rotate: -2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-10 bg-cream border border-border rounded-2xl px-4 py-3 shadow-card z-20 hidden sm:block"
            >
              <p className="font-mono text-[10px] text-terra tracking-wider uppercase mb-0.5">Status</p>
              <p className="font-editorial font-semibold text-charcoal text-sm">Open to Roles</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 3, y: -20 }}
              whileInView={{ opacity: 1, rotate: 2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-6 -right-4 lg:-right-10 bg-white border border-border rounded-2xl px-4 py-3 shadow-card z-20 hidden sm:block"
            >
              <p className="font-mono text-[10px] text-sage tracking-wider uppercase mb-0.5">Based in</p>
              <p className="font-editorial font-semibold text-charcoal text-sm">🇮🇳 India</p>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <div>
            <SectionTitle
              eyebrow="About Me"
              title="The person behind the code."
            />

            {personal.bio.split("\n\n").map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="font-body text-muted text-base leading-relaxed mb-4"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Social buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8 mb-12"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <FiGithub size={15} />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <FiLinkedin size={15} />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border"
            >
              {statItems.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-editorial font-bold text-2xl text-charcoal">{stat.value}</p>
                  <p className="font-body text-xs text-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
