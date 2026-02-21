import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { resumeData } from "../data/resumeData";
import ResumeViewer from "./ResumeViewer";

export default function ResumeModal({ isOpen, onClose }) {
  const [view, setView] = useState("viewer"); // 'viewer' or 'fullscreen'

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF and download it
    // For now, we'll use the browser's print functionality
    window.print();
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="w-full h-full md:max-w-4xl md:max-h-[90vh] rounded-2xl border shadow-2xl overflow-hidden flex flex-col relative"
            style={{
              backgroundColor: "var(--bg-primary)",
              borderColor: "var(--accent)",
              borderWidth: "2px",
            }}
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex justify-between items-center p-6 border-b"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--accent)",
                borderOpacity: 0.3,
              }}
            >
              <div>
                <h2 className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
                  Resume / CV
                </h2>
                <p style={{ color: "var(--text-secondary)" }} className="text-sm mt-1">
                  {resumeData.name} • {resumeData.title}
                </p>
              </div>

              <div className="flex gap-3">
                <motion.button
                  onClick={handleDownload}
                  className="p-2 rounded-lg flex items-center gap-2 font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--bg-primary)",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Download or print resume"
                >
                  <FaDownload size={16} />
                  <span className="hidden sm:inline">Download</span>
                </motion.button>

                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Close modal"
                >
                  <FaTimes size={20} />
                </motion.button>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <ResumeViewer resumeData={resumeData} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
