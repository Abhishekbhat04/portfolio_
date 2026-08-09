import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { experience, education } from "../../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="py-24" style={{ background: "#FAF8F5" }}>
      <div className="section-container">
        <SectionTitle
          eyebrow="Work & Education"
          title="My professional & academic journey."
          subtitle="A timeline of my experiences and learning — building better software and growing as a craftsman."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-7 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {/* Experience */}
            {experience.map((exp, i) => (
              <motion.div
                key={`exp-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-1.5 md:left-4 top-2 timeline-dot" />

                {/* Year label on the line */}
                <div className="paper-card p-6 md:p-8 hover-lift border-t-[3px] border-t-terra">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-editorial font-bold text-charcoal text-xl mb-1">
                        {exp.role}
                      </h3>
                      <p className="font-body font-medium text-terra text-sm">{exp.company}</p>
                    </div>
                    <span className="flex-shrink-0 font-mono text-xs text-muted bg-cream px-3 py-1.5 rounded-full border border-border whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body text-muted text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 + j * 0.07 }}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terra flex-shrink-0" />
                        <span className="font-body text-charcoal/80 text-xs">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            {education.map((edu, i) => (
              <motion.div
                key={`edu-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (experience.length + i) * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-1.5 md:left-4 top-2 timeline-dot" style={{ backgroundColor: '#7C9A74', boxShadow: '0 0 0 4px rgba(124, 154, 116, 0.15)' }} />

                {/* Card */}
                <div className="paper-card p-6 md:p-8 hover-lift border-t-[3px] border-t-sage">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-editorial font-bold text-charcoal text-xl mb-1">
                        {edu.degree}
                      </h3>
                      <p className="font-body font-medium text-sage text-sm">{edu.institution} — {edu.location}</p>
                    </div>
                    <span className="flex-shrink-0 font-mono text-xs text-muted bg-cream px-3 py-1.5 rounded-full border border-border whitespace-nowrap self-start">
                      {edu.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                      <span className="font-body text-charcoal/80 text-xs">{edu.score}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
