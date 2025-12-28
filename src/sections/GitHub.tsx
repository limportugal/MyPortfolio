import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface Repository {
  stargazers_count: number;
}

const GitHub: React.FC = () => {
  const username = "limportugal"; // Your GitHub username
  // const [langsError, setLangsError] = useState(true);
  
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [totalStars, setTotalStars] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData: GitHubStats = await userResponse.json();
        setGithubStats(userData);

        // Fetch repositories to calculate total stars
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const reposData: Repository[] = await reposResponse.json();
        const stars = reposData.reduce((total, repo) => total + repo.stargazers_count, 0);
        setTotalStars(stars);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return (
    <section id="github" className="py-24 px-6 md:px-24 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mr-4">
            <span className="text-accent font-mono text-xl mr-2">03.</span>
            GitHub Activities
          </h2>
          <div className="h-px bg-tertiary flex-grow max-w-xs"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* GitHub Contribution Calendar */}
          <div className="bg-primary p-6 rounded-lg border border-tertiary overflow-hidden">
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-mono text-sm mb-4 block"
            >
              @{username}
            </a>
            <div className="bg-[#0d1117] p-4 rounded-lg border border-[#30363d]">
              <h3 className="text-text-primary text-sm mb-3">
                <span className="text-accent font-semibold">362</span> contributions in the last year
              </h3>
              <div className="w-full bg-[#0d1117] p-4 rounded border border-[#21262d] overflow-x-auto">
                {/* GitHub contribution calendar image */}
                <img 
                  src="/images/githubpic.png"
                  alt="GitHub Contribution Calendar"
                  className="w-full rounded"
                  style={{ 
                    backgroundColor: '#0d1117',
                    imageRendering: 'crisp-edges' as const
                  }}
                />
                
                {/* Click to see more link */}
                <div className="text-center mt-4">
                  <a 
                    href="https://github.com/limportugal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-mono text-sm transition-colors"
                  >
                    Click to see more updated contribution →
                  </a>
                </div>
              </div>
              <p className="text-text-secondary text-xs mt-2 text-right font-mono">
                Live data from GitHub
              </p>
            </div>
          </div>

          {/* GitHub Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary p-6 rounded-lg border border-tertiary text-center hover:border-accent transition-colors">
              <div className="text-accent text-4xl mb-2">📊</div>
              <h3 className="text-text-primary font-bold text-xl mb-2">Total Repositories</h3>
              <p className="text-accent font-mono text-2xl font-bold">
                {loading ? '...' : githubStats?.public_repos || '0'}
              </p>
            </div>

            <div className="bg-primary p-6 rounded-lg border border-tertiary text-center hover:border-accent transition-colors">
              <div className="text-accent text-4xl mb-2">⭐</div>
              <h3 className="text-text-primary font-bold text-xl mb-2">Total Stars</h3>
              <p className="text-accent font-mono text-2xl font-bold">
                {loading ? '...' : totalStars}
              </p>
            </div>

            <div className="bg-primary p-6 rounded-lg border border-tertiary text-center hover:border-accent transition-colors">
              <div className="text-accent text-4xl mb-2">👥</div>
              <h3 className="text-text-primary font-bold text-xl mb-2">Followers</h3>
              <p className="text-accent font-mono text-2xl font-bold">
                {loading ? '...' : githubStats?.followers || '0'}
              </p>
            </div>
          </div>



          {/* GitHub Streak */}
          {/* <div className="bg-primary p-4 rounded-lg border border-tertiary">
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0a192f&ring=64ffda&fire=64ffda&currStreakLabel=ccd6f6`}
              alt="GitHub Streak"
              className="w-full"
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
