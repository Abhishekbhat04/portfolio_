import SectionTitle from "../ui/SectionTitle";
import AchievementCard from "../ui/AchievementCard";
import { achievements } from "../../data/portfolio";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-bg">
      <div className="section-container">
        <SectionTitle
          eyebrow="Recognition"
          title="Milestones & moments."
          subtitle="Highlights from my journey — pinned like notes on a corkboard, each representing a proud moment."
          align="center"
        />

        {/* Corkboard-like background */}
        <div
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #F5EFE6 0%, #EDE4D8 100%)",
            border: "1px solid #E8E0D0",
            boxShadow: "inset 0 2px 12px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.06)",
          }}
        >
          {/* Cork texture dots */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #8B6914 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, i) => (
              <AchievementCard key={i} achievement={achievement} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
