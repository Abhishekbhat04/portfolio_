import { motion } from "framer-motion";
import { FiAward, FiStar, FiCode, FiMic, FiBook, FiTarget } from "react-icons/fi";

const iconMap = {
  trophy: FiAward,
  star: FiStar,
  academic: FiBook,
  medal: FiAward,
  mic: FiMic,
  code: FiCode,
};

// Slight random rotations for pinned-card look
const rotations = [-1.5, 0.8, -0.5, 1.2, -0.9, 0.4];
const pinColors = ["#C66A4E", "#7C9A74", "#8B7CC7", "#C89840", "#E87C6A", "#7C9A74"];

const AchievementCard = ({ achievement, index }) => {
  const Icon = iconMap[achievement.icon] || FiStar;
  const rotation = rotations[index % rotations.length];
  const pinColor = pinColors[index % pinColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: rotation - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
      whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
      className="relative bg-white rounded-2xl p-5 shadow-card border border-border cursor-default"
      style={{ transformOrigin: "center" }}
    >
      {/* Pin */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-paper z-10"
        style={{ background: pinColor }}
      />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ background: `${pinColor}15`, color: pinColor }}
      >
        <Icon size={20} />
      </div>

      {/* Year badge */}
      <span className="absolute top-3 right-4 font-mono text-[10px] text-muted tracking-wider">
        {achievement.year}
      </span>

      <h3 className="font-editorial font-semibold text-charcoal text-sm mb-1.5">
        {achievement.title}
      </h3>
      <p className="font-body text-muted text-xs leading-relaxed">
        {achievement.description}
      </p>
    </motion.div>
  );
};

export default AchievementCard;
