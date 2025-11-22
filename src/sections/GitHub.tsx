import React from 'react';
import { motion } from 'framer-motion';

const GitHub: React.FC = () => {
  const username = "PlayerUnknows"; // Your GitHub username

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
                <span className="text-accent font-semibold">321</span> contributions in the last year
              </h3>
              <img 
                src={`https://ghchart.rshah.org/39d353/${username}`}
                alt="GitHub Contribution Calendar"
                className="w-full rounded"
                style={{ 
                  filter: 'brightness(1.5) saturate(1.3)',
                  backgroundColor: '#0d1117',
                  imageRendering: 'crisp-edges' as const
                }}
              />
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
              <p className="text-text-secondary font-mono">View on GitHub</p>
            </div>

            <div className="bg-primary p-6 rounded-lg border border-tertiary text-center hover:border-accent transition-colors">
              <div className="text-accent text-4xl mb-2">⭐</div>
              <h3 className="text-text-primary font-bold text-xl mb-2">Total Stars</h3>
              <p className="text-text-secondary font-mono">View on GitHub</p>
            </div>

            <div className="bg-primary p-6 rounded-lg border border-tertiary text-center hover:border-accent transition-colors">
              <div className="text-accent text-4xl mb-2">💻</div>
              <h3 className="text-text-primary font-bold text-xl mb-2">Total Commits</h3>
              <p className="text-text-secondary font-mono">View on GitHub</p>
            </div>
          </div>

          {/* GitHub Stats Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary p-4 rounded-lg border border-tertiary">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0a192f&title_color=64ffda&text_color=ccd6f6&icon_color=64ffda`}
                alt="GitHub Stats"
                className="w-full"
              />
            </div>
            <div className="bg-primary p-4 rounded-lg border border-tertiary">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0a192f&title_color=64ffda&text_color=ccd6f6`}
                alt="Top Languages"
                className="w-full"
              />
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
