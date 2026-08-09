import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/portfolio";

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-bg">
      <div className="section-container">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects that tell a story."
          subtitle="Each project is a chapter — a problem found, a solution crafted, and a lesson learned. Presented as magazine features."
        />

        {/* Featured projects — wide layout */}
        <div className="grid lg:grid-cols-2 gap-7 mb-7">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="editorial-divider my-10"
            />
            <div className="grid sm:grid-cols-2 gap-7">
              {rest.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={featured.length + i} />
              ))}
            </div>
          </>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="font-body text-muted text-sm mb-4">More projects on GitHub →</p>
          <a
            href="https://github.com/Abhishekbhat04"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
