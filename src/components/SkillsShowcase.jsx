import React from "react";
import { skills } from "../data/skills";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SkillsShowcase = () => {
  const containerRef = useScrollAnimation(
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      stagger: 0.05,
    }
  );

  // Get top 8 skills
  const topSkills = skills.slice(0, 8);

  return (
    <div ref={containerRef} className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {topSkills.map((skill) => {
          const Icon = skill.icon;
          const level = skill.level || 85;

          return (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-lg sm:rounded-xl border border-zinc-800 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 cursor-default"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-red-500/20 to-transparent rounded-lg transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative z-10 mb-3 transform group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300">
                <Icon className="text-3xl sm:text-4xl text-red-500 group-hover:text-red-400" />
              </div>

              {/* Skill name */}
              <h3 className="relative z-10 text-center text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors mb-2 line-clamp-2">
                {skill.name}
              </h3>

              {/* Proficiency bar */}
              <div className="relative z-10 w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-500 group-hover:from-red-500 group-hover:to-red-400"
                  style={{ width: `${level}%` }}
                />
              </div>

              {/* Proficiency text */}
              <p className="relative z-10 mt-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                {level}%
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-gray-400 text-sm">
          👇 Scroll to see my work in action 👇
        </p>
      </div>
    </div>
  );
};

export default SkillsShowcase;
