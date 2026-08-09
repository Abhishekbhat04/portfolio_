import SectionTitle from "../ui/SectionTitle";
import CertCard from "../ui/CertCard";
import { certifications } from "../../data/portfolio";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24" style={{ background: "#FAF8F5" }}>
      <div className="section-container">
        <SectionTitle
          eyebrow="Certifications"
          title="Credentials & learning."
          subtitle="Formal recognition of my ongoing commitment to learning and mastering new technologies."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
