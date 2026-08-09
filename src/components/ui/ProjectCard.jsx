import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Project color palettes for polaroid frame variation
const frameColors = ["#C66A4E", "#7C9A74", "#8B7CC7", "#C89840", "#5090C4", "#888888"];

const ProjectCard = ({ project, index, featured = false }) => {
  const frameColor = frameColors[index % frameColors.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`paper-card overflow-hidden hover-lift group ${featured ? "lg:col-span-2" : ""}`}
    >
      {/* Polaroid-style image area */}
      <div className="relative overflow-hidden" style={{ paddingTop: featured ? "40%" : "56%" }}>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${frameColor}18 0%, ${frameColor}08 100%)`,
          }}
        >
          {/* Decorative pattern instead of real image */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`grid-${project.id}`} width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#000" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
            </svg>
          </div>

          {/* Project number & title display */}
          <div className="relative z-10 text-center px-8">
            <span
              className="font-editorial font-bold block"
              style={{ fontSize: "clamp(4rem, 12vw, 7rem)", color: frameColor, opacity: 0.12, lineHeight: 1 }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div
              className="mt-2 font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border inline-block"
              style={{ color: frameColor, borderColor: frameColor, background: `${frameColor}10` }}
            >
              Project
            </div>
          </div>

          {/* Top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: frameColor }}
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag-pill">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-editorial font-bold text-charcoal text-xl mb-3 group-hover:text-terra transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-muted text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-1.5 mb-6">
          {project.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-xs font-body text-charcoal/70">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs px-4 py-2.5"
          >
            <FiGithub size={14} />
            GitHub
          </a>
          <a
            href={project.demo}
            className="btn-primary text-xs px-4 py-2.5"
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
