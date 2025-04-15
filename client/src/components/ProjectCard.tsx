import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';
import { Project } from '../lib/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative group">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-56 object-cover transition duration-300 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
          <Eye className="text-white opacity-0 group-hover:opacity-100 transition duration-300 transform scale-0 group-hover:scale-100" />
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-heading text-xl font-bold">{project.title}</h3>
          <span className="bg-secondary-light bg-opacity-10 text-secondary px-2 py-1 rounded text-xs">
            {project.category}
          </span>
        </div>
        <p className="text-neutral-600 mb-4">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-500">
            Completed in {project.completedYear}
          </span>
          <a href="#" className="text-primary font-medium hover:text-primary-dark text-sm">
            View Details
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
