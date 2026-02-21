import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode, FaAward, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ResumeViewer({ resumeData }) {
  return (
    <motion.div
      className="p-8 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="mb-8 pb-8 border-b" style={{ borderColor: "var(--accent)", borderOpacity: 0.3 }} variants={itemVariants}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          {resumeData.name}
        </h1>
        <p className="text-xl mb-4" style={{ color: "var(--accent)" }}>
          {resumeData.title}
        </p>
        <p className="mb-4 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
          {resumeData.summary}
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <a
            href={`tel:${resumeData.phone}`}
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
            style={{ color: "var(--accent)" }}
          >
            <FaPhone size={14} />
            {resumeData.phone}
          </a>
          <a
            href={`mailto:${resumeData.email}`}
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
            style={{ color: "var(--accent)" }}
          >
            <FaEnvelope size={14} />
            {resumeData.email}
          </a>
          <div className="flex items-center gap-2" style={{ color: "var(--accent)" }}>
            <FaMapMarkerAlt size={14} />
            {resumeData.location}
          </div>
        </div>
      </motion.div>

      {/* Experience Section */}
      {resumeData.experience && resumeData.experience.length > 0 && (
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: "var(--accent)" }}>
            <FaBriefcase />
            Experience
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((exp) => (
              <motion.div
                key={exp.id}
                className="border-l-2 pl-6 relative"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--text-secondary)",
                }}
                variants={itemVariants}
              >
                <div className="absolute -left-3 top-0 w-4 h-4 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {exp.role}
                </h3>
                <p className="font-medium" style={{ color: "var(--accent)" }}>
                  {exp.company}
                </p>
                <p className="text-sm mb-3" style={{ color: "var(--text-tertiary)" }}>
                  {exp.period}
                </p>
                <p className="mb-3">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Education Section */}
      {resumeData.education && resumeData.education.length > 0 && (
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: "var(--accent)" }}>
            <FaGraduationCap />
            Education
          </h2>
          <div className="space-y-6">
            {resumeData.education.map((edu) => (
              <motion.div
                key={edu.id}
                className="border-l-2 pl-6 relative"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--text-secondary)",
                }}
                variants={itemVariants}
              >
                <div className="absolute -left-3 top-0 w-4 h-4 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {edu.degree}
                </h3>
                <p className="font-medium" style={{ color: "var(--accent)" }}>
                  {edu.school}
                </p>
                <p className="text-sm mb-2" style={{ color: "var(--text-tertiary)" }}>
                  {edu.period} • GPA: {edu.gpa}
                </p>
                <p className="mb-3">{edu.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Skills Section */}
      {resumeData.skills && resumeData.skills.length > 0 && (
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: "var(--accent)" }}>
            <FaCode />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.skills.map((skillGroup, idx) => (
              <motion.div key={idx} className="p-4 rounded-lg" style={{ backgroundColor: "var(--bg-secondary)" }} variants={itemVariants}>
                <h3 className="font-semibold mb-3" style={{ color: "var(--accent)" }}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "var(--bg-primary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Certifications Section */}
      {resumeData.certifications && resumeData.certifications.length > 0 && (
        <motion.section className="mb-8" variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: "var(--accent)" }}>
            <FaAward />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--accent)",
                  borderOpacity: 0.3,
                }}
                variants={itemVariants}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {cert.name}
                </h3>
                <p style={{ color: "var(--accent)" }} className="text-sm mb-2">
                  {cert.issuer}
                </p>
                <p style={{ color: "var(--text-tertiary)" }} className="text-sm">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Projects Section */}
      {resumeData.projects && resumeData.projects.length > 0 && (
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: "var(--accent)" }}>
            Key Projects
          </h2>
          <div className="space-y-4">
            {resumeData.projects.map((proj) => (
              <motion.div
                key={proj.id}
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--accent)",
                  borderOpacity: 0.3,
                }}
                variants={itemVariants}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {proj.name}
                </h3>
                <p style={{ color: "var(--text-secondary)" }} className="mb-3">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{
                        backgroundColor: "var(--accent)",
                        color: "var(--bg-primary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  );
}
