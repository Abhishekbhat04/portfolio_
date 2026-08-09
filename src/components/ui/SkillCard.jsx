import { motion } from "framer-motion";

const skillCategoryColors = {
  Programming: { bg: "#FDF0EB", border: "#E8C4B8", text: "#C66A4E", dot: "#C66A4E" },
  "Core CS": { bg: "#EEF4ED", border: "#C2D6BE", text: "#4A7A42", dot: "#7C9A74" },
  "Tools & Platforms": { bg: "#F0EEF8", border: "#C8C2E0", text: "#5B4D8A", dot: "#8B7CC7" },
  Databases: { bg: "#FDF4E7", border: "#E8D4A8", text: "#8A6220", dot: "#C89840" },
  "AI / ML": { bg: "#F0F6FD", border: "#B8D4E8", text: "#2A6090", dot: "#5090C4" },
  "Tools & DevOps": { bg: "#F5F5F5", border: "#D8D8D8", text: "#444444", dot: "#888888" },
};

const SkillCard = ({ category, items, index }) => {
  const colors = skillCategoryColors[category] || skillCategoryColors["Tools & DevOps"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="paper-card p-6 hover-lift"
      style={{ borderTop: `3px solid ${colors.dot}` }}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: colors.dot }}
        />
        <h3 className="font-editorial font-semibold text-charcoal text-base">{category}</h3>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 rounded-full text-xs font-body font-medium border transition-all duration-200"
            style={{
              background: colors.bg,
              borderColor: colors.border,
              color: colors.text,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
