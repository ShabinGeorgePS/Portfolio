import { useEffect, useState, useRef } from "react";
import { FaGitAlt, FaStar, FaCodeBranch, FaUsers, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { fetchGitHubStats } from "../utils/github-api";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true);
      const data = await fetchGitHubStats();
      setStats(data);
      setLoading(false);
    };

    loadStats();
  }, []);

  useEffect(() => {
    if (!stats || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [stats]);

  if (loading) {
    return (
      <section
        id="github"
        className="min-h-screen flex items-center justify-center px-10 py-20 transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <div className="text-center">
          <FaGitAlt className="text-6xl animate-spin mx-auto mb-4" style={{ color: "var(--accent)" }} />
          <p style={{ color: "var(--text-secondary)" }}>Loading GitHub stats...</p>
        </div>
      </section>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <section
      id="github"
      ref={sectionRef}
      className="min-h-screen px-10 py-20 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Section Title */}
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold mb-16 text-center transition-colors duration-300"
        style={{ color: "var(--accent)" }}
      >
        Open Source & GitHub
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <motion.div
          ref={(el) => cardsRef.current.push(el)}
          className="mb-16 p-8 rounded-2xl transition-colors duration-300 shadow-lg border"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--accent)",
            borderOpacity: 0.3,
            borderWidth: "1px",
          }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={stats.avatar}
                alt={stats.name}
                className="w-32 h-32 rounded-full border-4 object-cover"
                style={{ borderColor: "var(--accent)" }}
              />
            </div>

            {/* Info */}
            <div className="flex-grow">
              <h3 className="text-3xl font-bold mb-2">{stats.name || stats.username}</h3>
              <p style={{ color: "var(--text-secondary)" }} className="mb-3">
                @{stats.username}
              </p>
              {stats.bio && (
                <p style={{ color: "var(--text-secondary)" }} className="mb-4 max-w-2xl">
                  {stats.bio}
                </p>
              )}
              {stats.blog && (
                <a
                  href={stats.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--bg-primary)",
                  }}
                >
                  <FaLink size={16} />
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Followers Card */}
          <motion.div
            ref={(el) => cardsRef.current.push(el)}
            className="p-6 rounded-xl transition-all duration-300 shadow-md border hover:shadow-lg"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--accent)",
              borderOpacity: 0.3,
              borderWidth: "1px",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaUsers size={24} style={{ color: "var(--accent)" }} />
              <h4 style={{ color: "var(--text-secondary)" }}>Followers</h4>
            </div>
            <p className="text-4xl font-bold mb-2">{stats.followers}</p>
            <p style={{ color: "var(--text-tertiary)" }}>
              Following {stats.following}
            </p>
          </motion.div>

          {/* Repositories Card */}
          <motion.div
            ref={(el) => cardsRef.current.push(el)}
            className="p-6 rounded-xl transition-all duration-300 shadow-md border hover:shadow-lg"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--accent)",
              borderOpacity: 0.3,
              borderWidth: "1px",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaGitAlt size={24} style={{ color: "var(--accent)" }} />
              <h4 style={{ color: "var(--text-secondary)" }}>Repositories</h4>
            </div>
            <p className="text-4xl font-bold mb-2">{stats.publicRepos}</p>
            <p style={{ color: "var(--text-tertiary)" }}>Public repositories</p>
          </motion.div>

          {/* Stars Card */}
          <motion.div
            ref={(el) => cardsRef.current.push(el)}
            className="p-6 rounded-xl transition-all duration-300 shadow-md border hover:shadow-lg"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--accent)",
              borderOpacity: 0.3,
              borderWidth: "1px",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaStar size={24} style={{ color: "var(--accent)" }} />
              <h4 style={{ color: "var(--text-secondary)" }}>Total Stars</h4>
            </div>
            <p className="text-4xl font-bold mb-2">{stats.totalStars}</p>
            <p style={{ color: "var(--text-tertiary)" }}>
              {stats.totalForks} forks
            </p>
          </motion.div>
        </div>

        {/* Top Languages */}
        {stats.topLanguages.length > 0 && (
          <motion.div
            ref={(el) => cardsRef.current.push(el)}
            className="mb-16 p-8 rounded-2xl transition-colors duration-300 shadow-lg border"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--accent)",
              borderOpacity: 0.3,
              borderWidth: "1px",
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-6 transition-colors duration-300" style={{ color: "var(--accent)" }}>
              Top Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.topLanguages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span style={{ color: "var(--text-secondary)" }} className="font-semibold">
                      {lang.language}
                    </span>
                    <span style={{ color: "var(--accent)" }} className="font-bold">
                      {lang.count} repos
                    </span>
                  </div>
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: "var(--bg-tertiary)" }}
                  >
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: "var(--accent)" }}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(lang.count / stats.topLanguages[0].count) * 100}%`,
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Most Starred Repository */}
        {stats.mostStarredRepo && (
          <motion.div
            ref={(el) => cardsRef.current.push(el)}
            className="p-8 rounded-2xl transition-colors duration-300 shadow-lg border group hover:shadow-xl"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--accent)",
              borderOpacity: 0.3,
              borderWidth: "1px",
            }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: "var(--accent)" }}>
              ⭐ Most Starred Repository
            </h3>
            <h4 className="text-xl font-semibold mb-2">{stats.mostStarredRepo.name}</h4>
            {stats.mostStarredRepo.description && (
              <p style={{ color: "var(--text-secondary)" }} className="mb-4">
                {stats.mostStarredRepo.description}
              </p>
            )}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <FaStar size={16} style={{ color: "var(--accent)" }} />
                <span>{stats.mostStarredRepo.stargazers_count} stars</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCodeBranch size={16} style={{ color: "var(--accent)" }} />
                <span>{stats.mostStarredRepo.forks_count} forks</span>
              </div>
              {stats.mostStarredRepo.language && (
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--bg-primary)",
                  }}
                >
                  {stats.mostStarredRepo.language}
                </span>
              )}
              <a
                href={stats.mostStarredRepo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 rounded-lg transition-all font-semibold hover:scale-105 flex items-center gap-2"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--bg-primary)",
                }}
              >
                <FaLink size={14} />
                View on GitHub
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
