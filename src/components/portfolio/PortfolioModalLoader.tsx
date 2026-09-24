'use client';

import { projects } from './portfolioData';
import PortfolioModal from './PortfolioModal';

interface PortfolioModalLoaderProps {
  projectId: string;
  onClose: () => void;
}

const PortfolioModalLoader = ({ projectId, onClose }: PortfolioModalLoaderProps) => {
  const project = projects.find((item) => item.id === projectId);

  if (!project) return null;

  return <PortfolioModal project={project} onClose={onClose} />;
};

export default PortfolioModalLoader;
