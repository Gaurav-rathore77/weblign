'use client';

import PortfolioModal from './PortfolioModal';
import type { Project } from './portfolioData';

interface PortfolioModalLoaderProps {
  project: Project;
  onClose: () => void;
}

const PortfolioModalLoader = ({ project, onClose }: PortfolioModalLoaderProps) => {
  return <PortfolioModal project={project} onClose={onClose} />;
};

export default PortfolioModalLoader;
