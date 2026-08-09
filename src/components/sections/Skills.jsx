import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="py-24" style={{ background: "#FAF8F5" }}>
      <div className="section-container">
        <SectionTitle
          eyebrow="Skills & Expertise"
          title="My technical toolkit."
          subtitle="Technologies and tools I work with to bring ideas to life — organized like paper labels in a craftsman's workshop."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skillGroup, i) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
