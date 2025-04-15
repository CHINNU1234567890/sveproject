import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Calendar, ArrowUpRight } from 'lucide-react';
import { Project } from '../lib/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="modern-card border-none overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      <div className="relative">
        {/* Image with overlay */}
        <div className="overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-60 object-cover transition-all duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-black/30 text-white backdrop-blur-sm text-xs font-medium rounded-full border border-white/20">
            {project.category}
          </span>
        </div>
        
        {/* View button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-110">
            <Eye className="h-5 w-5" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1 text-gray-400" />
            <span>Completed {project.completedYear}</span>
          </div>
          <div className="cursor-pointer text-primary font-medium hover:text-accent text-sm flex items-center">
            View Details
            <ArrowUpRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
