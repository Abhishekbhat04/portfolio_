import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, subtitle, align = "left", light = false }) => {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-widest uppercase text-terra mb-3 inline-flex items-center gap-2"
        >
          <span className="w-6 h-px bg-terra inline-block" />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-editorial font-bold leading-tight ${light ? "text-white" : "text-charcoal"}`}
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 font-body text-base leading-relaxed max-w-xl ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
