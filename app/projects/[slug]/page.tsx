import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map(slug => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="container-custom py-16">
      <Link href="/#projects" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all projects
      </Link>
      
      <div className="relative w-full h-[50vh] rounded-xl overflow-hidden mb-12">
        <Image 
          src={project.coverImage}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github className="w-5 h-5 mr-2" />
              View Code
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Overview</h2>
          <p>{project.description}</p>
          
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          <h2>Development Process</h2>
          <p>{project.process}</p>
          
          <h2>Challenges & Solutions</h2>
          <p>{project.challenges}</p>
          
          <h2>Outcomes & Lessons</h2>
          <p>{project.outcomes}</p>
        </div>
      </div>
    </div>
  );
}