'use client';

import { useState, type ComponentType } from 'react';
import PortfolioFilters from './PortfolioFilters';
import PortfolioCard from './PortfolioCard';
import { projects as fallbackProjects, type Category, type Project } from './portfolioData';

type PortfolioModalComponent = ComponentType<{
  project: Project;
  onClose: () => void;
}>;

const PortfolioGrid = ({ projects = fallbackProjects }: { projects?: Project[] }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [Modal, setModal] = useState<PortfolioModalComponent | null>(null);

  const openProject = async (project: Project) => {
    const { default: PortfolioModal } = await import('./PortfolioModalLoader');
    setSelectedProject(project);
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
            onOpenModal={(item) => void openProject(item)}
          />
        ))}
      </div>

      {selectedProject && Modal && (
        <Modal
          project={selectedProject}
          onClose={() => {
            setSelectedProject(null);
            setModal(null);
          }}
        />
      )}
    </>
  );
};

export default PortfolioGrid;
