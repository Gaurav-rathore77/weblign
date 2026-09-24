'use client';

import { useState, type ComponentType } from 'react';
import PortfolioFilters from './PortfolioFilters';
import PortfolioCard from './PortfolioCard';
import { projects, type Category } from './portfolioData';

type PortfolioModalComponent = ComponentType<{
  projectId: string;
  onClose: () => void;
}>;

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [Modal, setModal] = useState<PortfolioModalComponent | null>(null);

  const openProject = async (projectId: string) => {
    const { default: PortfolioModal } = await import('./PortfolioModalLoader');
    setSelectedProjectId(projectId);
    setModal(() => PortfolioModal);
  };

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
            onOpenModal={(project) => void openProject(project.id)}
          />
        ))}
      </div>

      {selectedProjectId && Modal && (
        <Modal
          projectId={selectedProjectId}
          onClose={() => {
            setSelectedProjectId(null);
            setModal(null);
          }}
        />
      )}
    </>
  );
};

export default PortfolioGrid;
