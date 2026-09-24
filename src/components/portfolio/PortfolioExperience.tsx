'use client';

import { useState, type ComponentType } from 'react';
import type { PortfolioPreview } from './portfolioData';
import PortfolioCarousel from './PortfolioCarousel';

type PortfolioModalComponent = ComponentType<{
  projectId: string;
  onClose: () => void;
}>;

interface PortfolioExperienceProps {
  projects: PortfolioPreview[];
}

const PortfolioExperience = ({ projects }: PortfolioExperienceProps) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [Modal, setModal] = useState<PortfolioModalComponent | null>(null);

  const openProject = async (projectId: string) => {
    const { default: PortfolioModal } = await import('./PortfolioModalLoader');
    setSelectedProjectId(projectId);
    setModal(() => PortfolioModal);
  };

  return (
    <>
      <PortfolioCarousel
        projects={projects}
        onSelect={(project) => void openProject(project.id)}
      />
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

export default PortfolioExperience;
