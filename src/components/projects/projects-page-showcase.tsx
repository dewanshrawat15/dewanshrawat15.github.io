import React, { useMemo } from "react";
import { useFirebaseData } from "../../utils/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";

interface FeatureCardProps {
  title: string;
  description: string;
  url?: string;
  logoUrl?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  url,
  logoUrl,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 32,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: 0.2,
      }}
      whileHover={{
        scale: 1.05,
      }}
      onClick={() => (url ? window.open(url) : undefined)}
      className="flex flex-col cursor-pointer items-center justify-start p-6 bg-white rounded-lg shadow-[1px_0_4px_4px_#f7f7f7] duration-300"
    >
      {logoUrl ? (
        <img
          className="w-16 h-16 rounded-lg"
          src={logoUrl}
          alt={`Project logo ${title}`}
        />
      ) : (
        <FontAwesomeIcon icon={faGithubSquare} className="w-16 h-16" />
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4 text-center font-poppins">
        {title}
      </h3>
      <p className="text-gray-600 text-sm text-center font-poppins font-light">
        {description}
      </p>
    </motion.div>
  );
};

export const ProjectShowcase: React.FC = () => {
  const { projects } = useFirebaseData();

  const projectsData = useMemo(
    () => projects.sort((a, b) => a.id - b.id),
    [projects]
  );

  return (
    <div className="flex px-12 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projectsData.map((project, index) => {
          return (
            <FeatureCard
              key={`project-card-${index}`}
              title={project.projectTitle}
              description={project.projectTagline}
              url={project.github}
              logoUrl={project.logoUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
