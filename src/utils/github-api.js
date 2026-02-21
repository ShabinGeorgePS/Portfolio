/**
 * GitHub API utilities for fetching user data and repositories
 * Uses GitHub's public REST API (no authentication required for public data)
 */

const GITHUB_USERNAME = "shabin-george"; // Update this with your GitHub username

/**
 * Fetch GitHub user profile
 */
export const fetchGitHubUser = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};

/**
 * Fetch GitHub user repositories
 * @param {number} limit - Number of repos to fetch (max 100 per page)
 * @param {string} sort - Sort by: 'updated', 'stars', 'forks', 'name'
 */
export const fetchGitHubRepos = async (limit = 6, sort = "updated") => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=${limit}&sort=${sort}&direction=desc`
    );
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};

/**
 * Fetch GitHub user statistics
 * Combines user profile and repository data
 */
export const fetchGitHubStats = async () => {
  try {
    const [user, repos] = await Promise.all([
      fetchGitHubUser(),
      fetchGitHubRepos(100), // Fetch many repos to calculate accurate stats
    ]);

    if (!user) throw new Error("Could not fetch GitHub user data");

    // Calculate statistics
    const stats = {
      username: user.login,
      name: user.name,
      avatar: user.avatar_url,
      bio: user.bio,
      location: user.location,
      company: user.company,
      blog: user.blog,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars: repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0),
      totalForks: repos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0),
      topLanguages: getTopLanguages(repos),
      mostStarredRepo: repos.length > 0 ? repos.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))[0] : null,
    };

    return stats;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
};

/**
 * Get top programming languages from repositories
 * @param {Array} repos - Array of repository objects
 * @returns {Array} Array of languages with counts
 */
const getTopLanguages = (repos) => {
  const languages = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }
  });

  return Object.entries(languages)
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5); // Top 5 languages
};

/**
 * Fetch specific repository details
 */
export const fetchGitHubRepo = async (repoName) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`
    );
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching repository ${repoName}:`, error);
    return null;
  }
};

/**
 * Fetch GitHub user's languages summary
 * Analyzes all repositories to get language distribution
 */
export const fetchLanguageStats = async () => {
  try {
    const repos = await fetchGitHubRepos(100);
    const languages = {};

    repos.forEach((repo) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    return Object.entries(languages)
      .map(([language, count]) => ({
        name: language,
        count,
        percentage: 0, // Will be calculated by component
      }))
      .sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error("Error fetching language stats:", error);
    return [];
  }
};
