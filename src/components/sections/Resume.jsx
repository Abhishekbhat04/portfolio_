import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiCode, FiBook, FiAward } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle";
import { personal } from "../../data/portfolio";

const highlights = [
  { icon: FiCode, label: "Programming", value: "Python + Java" },
  { icon: FiBook, label: "Education", value: "B.E. CS (8.8 CGPA)" },
  { icon: FiAward, label: "Certifications", value: "1 Earned" },
  { icon: FiFileText, label: "Projects", value: "2 Delivered" },
];

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-bg">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            eyebrow="Resume"
            title="My professional story in one page."
            subtitle="A curated summary of my skills, experience, and achievements — ready for your perusal."
            align="center"
          />

          {/* Resume preview card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="paper-card overflow-hidden"
          >
            {/* Mock resume header */}
            <div
              className="p-10 md:p-14 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #2E2E2E 0%, #1A1A1A 100%)" }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#C66A4E"
                    d="M45.2,-62.4C59.1,-53.2,71.3,-41.6,75.7,-27.5C80.1,-13.4,76.7,3.1,70.8,17.9C64.9,32.7,56.5,45.8,44.7,54.5C32.9,63.2,17.7,67.5,1.9,65.1C-13.9,62.7,-30.5,53.6,-44.4,42C-58.3,30.4,-69.5,16.3,-72.3,0.4C-75.1,-15.5,-69.5,-33.2,-59,-47.4C-48.5,-61.6,-33.1,-72.3,-16.5,-73.8C0.1,-75.3,31.3,-71.6,45.2,-62.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="font-mono text-xs tracking-widest uppercase text-white/40 mb-3">
                  Curriculum Vitae
                </p>
                <h3 className="font-editorial font-bold text-white text-3xl md:text-4xl mb-2">
                  Abhishek Bhat P
                </h3>
                <p className="font-body text-white/60 text-sm mb-6">
                  Full Stack Developer & AI Enthusiast • {personal.email}
                </p>

                {/* Highlights row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="bg-white/5 rounded-xl p-3 border border-white/10"
                    >
                      <item.icon size={14} className="text-terra mb-2" />
                      <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body font-medium text-white text-xs">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download area */}
            <div className="p-8 text-center border-t border-border">
              <p className="font-body text-muted text-sm mb-6">
                Download a full PDF version of my resume to read offline or share with your team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/Resume.pdf"
                  download
                  className="btn-primary"
                >
                  <FiDownload size={16} />
                  Download Resume PDF
                </a>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <FiFileText size={16} />
                  View Online
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
