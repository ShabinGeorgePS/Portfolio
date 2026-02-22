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
        className="min-h-screen flex items-center justify-center px-10 py-20 bg-black"
      >
        <div className="text-center">
          <FaGitAlt className="text-6xl animate-spin mx-auto mb-4 text-red-500" />
          <p className="text-white text-lg">Loading GitHub stats...</p>
        </div>
      </section>
    );
  }

  if (!stats) {
    return (
      <section
        id="github"
        className="min-h-screen flex items-center justify-center px-10 py-20 bg-black"
      >
        <div className="text-center">
          <p className="text-white text-lg">Unable to load GitHub stats. Please try refreshing the page.</p>
          <a
            href="https://github.com/ShabinGeorgePS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          >
            Visit GitHub Profile
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      id="github"
      ref={sectionRef}
      className="min-h-screen px-10 py-20 relative overflow-hidden bg-black"
    >
      {/* Section Title */}
      <h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-red-400"
      >
        Open Source & GitHub
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <motion.div
          ref={(el) => cardsRef.current.push(el)}
          className="mb-16 p-8 rounded-2xl shadow-lg border bg-zinc-900 border-red-500/30"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={stats.avatar}
                alt={stats.name}
                className="w-32 h-32 rounded-full border-4 border-red-500 object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
            </div>

            {/* Info */}
            <div className="flex-grow">
              <h3 className="text-3xl font-bold mb-2 text-white">{stats.name || stats.username}</h3>
              <p className="text-gray-300 mb-3">
                @{stats.username}
              </p>
              {stats.bio && (
                <p className="text-gray-300 mb-4 max-w-2xl">
                  {stats.bio}
                </p>
              )}
              {stats.blog && (
                <a
                  href={stats.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
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
            className="p-6 rounded-xl shadow-md border bg-zinc-900 border-red-500/30 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaUsers size={24} className="text-red-500" />
              <h4 className="text-gray-300">Followers</h4>
            </div>
            <p className="text-4xl font-bold mb-2 text-white">{stats.followers}</p>
            <p className="text-gray-400">
              Following {stats.following}
            </p>
          </motion.div>

          {/* Repositories Card */}
          <motion.div
            ref={(el) => cardsRef.current.push(el)}
            className="p-6 rounded-xl shadow-md border bg-zinc-900 border-red-500/30 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaGitAlt size={24} className="text-red-500" />
              <h4 className="text-gray-300">Repositories</h4>
            </div>
            <p className="text-4xl font-bold mb-2 text-white">{stats.publicRepos}</p>
            <p className="text-gray-400">Public repositories</p>
          </motion.div>

          {/* Stars Card */}
          <motion.div
            ref={(el) => cardsRef.current.push(el)}
            className="p-6 rounded-xl shadow-md border bg-zinc-900 border-red-500/30 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaStar size={24} className="text-red-500" />
              <h4 className="text-gray-300">Total Stars</h4>
            </div>
            <p className="text-4xl font-bold mb-2 text-white">{stats.totalStars}</p>
            <p className="text-gray-400">
              {stats.totalForks} forks
            </p>
          </motion.div>
        </div>

        {/* Contributions Section */}
        <motion.div
          ref={(el) => cardsRef.current.push(el)}
          className="mb-16 p-8 rounded-2xl shadow-lg border bg-zinc-900 border-red-500/30"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-red-400">
            GitHub Contributions
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Public Repos */}
              <div className="p-6 bg-gray-950 rounded-lg border border-red-500/30">
                <h4 className="text-lg font-semibold text-red-400 mb-2">Public Repositories</h4>
                <p className="text-3xl font-bold text-white">{stats.publicRepos}</p>
                <p className="text-gray-400 text-sm mt-2">Active projects on GitHub</p>
              </div>

              {/* Total Stars */}
              <div className="p-6 bg-gray-950 rounded-lg border border-red-500/30">
                <h4 className="text-lg font-semibold text-red-400 mb-2">Total Stars</h4>
                <p className="text-3xl font-bold text-white">{stats.totalStars}</p>
                <p className="text-gray-400 text-sm mt-2">Across all repositories</p>
              </div>

              {/* Followers */}
              <div className="p-6 bg-gray-950 rounded-lg border border-red-500/30">
                <h4 className="text-lg font-semibold text-red-400 mb-2">Followers</h4>
                <p className="text-3xl font-bold text-white">{stats.followers}</p>
                <p className="text-gray-400 text-sm mt-2">Community support</p>
              </div>

              {/* Total Forks */}
              <div className="p-6 bg-gray-950 rounded-lg border border-red-500/30">
                <h4 className="text-lg font-semibold text-red-400 mb-2">Total Forks</h4>
                <p className="text-3xl font-bold text-white">{stats.totalForks}</p>
                <p className="text-gray-400 text-sm mt-2">Project contributions</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-6">
              <p className="text-gray-300 mb-4">
                View detailed contribution activity and patterns on GitHub
              </p>
              <a
                href={`https://github.com/${stats.username}?tab=contributions`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-semibold"
              >
                View All Contributions
              </a>
            </div>
          </div>
        </motion.div>

        {/* Most Starred Repository */}
        {stats.mostStarredRepo && (
          <motion.div
            ref={(el) => cardsRef.current.push(el)}
            className="p-8 rounded-2xl shadow-lg border bg-zinc-900 border-red-500/30 group hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-red-400">
              ⭐ Most Starred Repository
            </h3>
            <h4 className="text-xl font-semibold mb-2 text-white">{stats.mostStarredRepo.name}</h4>
            {stats.mostStarredRepo.description && (
              <p className="text-gray-300 mb-4">
                {stats.mostStarredRepo.description}
              </p>
            )}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-gray-300">
                <FaStar size={16} className="text-red-500" />
                <span>{stats.mostStarredRepo.stargazers_count} stars</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FaCodeBranch size={16} className="text-red-500" />
                <span>{stats.mostStarredRepo.forks_count} forks</span>
              </div>
              {stats.mostStarredRepo.language && (
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-500 text-white">
                  {stats.mostStarredRepo.language}
                </span>
              )}
              <a
                href={stats.mostStarredRepo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-semibold flex items-center gap-2"
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
