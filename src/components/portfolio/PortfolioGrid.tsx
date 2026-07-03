'use client';

import { useState } from 'react';
import PortfolioFilters from './PortfolioFilters';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from './PortfolioModal';
import { projects, type Category } from './portfolioData';

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PortfolioFilters active={activeCategory} onSelect={setActiveCategory} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <PortfolioCard
            key={project.id}
            project={project}
            index={i}
            onOpenModal={setSelectedProject}
          />
        ))}
      </div>

      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default PortfolioGrid;
