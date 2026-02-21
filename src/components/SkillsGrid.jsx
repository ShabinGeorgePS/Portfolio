import React, { useState } from "react";
import { getSkillsByCategory, skillCategories } from "../data/skills";
import { useStaggerAnimation } from "../hooks/useScrollAnimation";

const SkillsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const containerRef = useStaggerAnimation(".skill-card", 0.05);

  const skillsByCategory = getSkillsByCategory();

  const getDisplayedSkills = () => {
    if (selectedCategory === "all") {
      return Object.values(skillsByCategory).flat();
    }
    return skillsByCategory[selectedCategory] || [];
  };

  const displayedSkills = getDisplayedSkills();

  return (
    <div ref={containerRef} className="flex flex-col gap-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            selectedCategory === "all"
              ? "bg-red-600 text-white"
              : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
          }`}
        >
          All Skills
        </button>
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === category.id
                ? `bg-gradient-to-r ${category.color} text-white`
                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {displayedSkills.map((skill) => {
          const Icon = skill.icon;
          const category = skillCategories.find((c) => c.id === skill.category);

          return (
            <div
              key={skill.name}
              className="skill-card group flex flex-col items-center justify-center gap-3 p-4 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-lg border border-zinc-800 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/30 hover:scale-105"
            >
              <Icon className="text-3xl text-red-500 group-hover:scale-125 group-hover:text-red-400 transition-all" />
              <p className="text-xs font-semibold text-center text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </p>

              {/* Proficiency Level (optional) */}
              {skill.level && (
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all group-hover:from-red-500 group-hover:to-red-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {displayedSkills.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          No skills found in this category.
        </div>
      )}
    </div>
  );
};

export default SkillsGrid;
