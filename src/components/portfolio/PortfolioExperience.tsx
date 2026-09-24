'use client';

import { useState, type ComponentType } from 'react';
import type { PortfolioPreview, Project } from './portfolioData';
import PortfolioCarousel from './PortfolioCarousel';

type PortfolioModalComponent = ComponentType<{
  project: Project;
  onClose: () => void;
}>;

interface PortfolioExperienceProps {
  projects: PortfolioPreview[];
}

const PortfolioExperience = ({ projects }: PortfolioExperienceProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [Modal, setModal] = useState<PortfolioModalComponent | null>(null);
  const [loading, setLoading] = useState(false);

  const openProject = async (projectId: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/portfolio/${encodeURIComponent(projectId)}`);
      if (!response.ok) return;
      const project = (await response.json()) as Project;
      const { default: PortfolioModal } = await import('./PortfolioModalLoader');
      setSelectedProject(project);
      setModal(() => PortfolioModal);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PortfolioCarousel
        projects={projects}
        onSelect={(project) => void openProject(project.id)}
      />
      {loading && (
        <p className="sr-only" role="status">Loading project details…</p>
      )}
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

export default PortfolioExperience;
