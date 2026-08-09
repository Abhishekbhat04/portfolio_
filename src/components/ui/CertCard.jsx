import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

const certRotations = ["-1.5deg", "0.8deg", "-0.6deg", "1.2deg", "-0.4deg"];

const CertCard = ({ cert, index }) => {
  const rotation = certRotations[index % certRotations.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: parseFloat(rotation) - 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: parseFloat(rotation) }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 70 }}
      whileHover={{ rotate: 0, scale: 1.04, zIndex: 20 }}
      className="relative bg-white rounded-2xl overflow-hidden shadow-card border border-border cursor-default"
      style={{ transformOrigin: "center" }}
    >
      {/* Top accent color bar */}
      <div className="h-1.5 w-full" style={{ background: cert.color }} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${cert.color}15`, color: cert.color }}
          >
            <FiAward size={20} />
          </div>
          <span className="font-mono text-[10px] text-muted tracking-wider bg-cream px-2 py-1 rounded-lg">
            {cert.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-editorial font-semibold text-charcoal text-sm mb-1 leading-snug">
          {cert.title}
        </h3>

        {/* Issuer */}
        <p className="font-body text-muted text-xs mb-4">{cert.issuer}</p>

        {/* Credential */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="font-mono text-[10px] text-muted">
            ID: {cert.credentialId}
          </span>
          <a
            href={cert.link || "#"}
            target={cert.link ? "_blank" : undefined}
            rel={cert.link ? "noopener noreferrer" : undefined}
            className="flex items-center gap-1 text-[10px] font-body font-medium transition-colors duration-200 hover:opacity-80"
            style={{ color: cert.color }}
          >
            <FiExternalLink size={10} />
            View
          </a>
        </div>
      </div>

      {/* Decorative stamp watermark */}
      <div
        className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-2 opacity-5 flex items-center justify-center font-editorial font-bold text-xs text-center"
        style={{ borderColor: cert.color, color: cert.color }}
      >
        CERT
      </div>
    </motion.div>
  );
};

export default CertCard;
