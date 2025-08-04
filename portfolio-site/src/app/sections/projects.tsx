'use client'

import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import type { Project } from '../types';
import ProjectModal from '../components/projectModal';
import { useQuery } from '@tanstack/react-query';
import { techIconMap } from '../components/techIcons';


const supabaseUrl = process.env.NEXT_PUBLIC_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/* if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase URL or Anon Key in environment variables');
} */

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to fetch projects from Supabase
async function fetchProjects(): Promise<Project[]> {
    const { data, error } = await supabase.from('Projects').select('*');
    if (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
    return data as Project[];
}



export default function Projects() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    
    const { data: projects, isLoading, isError, error } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <section id="projects" className="py-16 px-4">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <p className="text-lg mb-8">Here are some of the projects I've worked on, showcasing my skills and creativity. Click on a project to view more!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <button className="w-full h-full hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
                        onClick={() => {
                            setActiveProject(project);
                            setIsOpen(true);
                        }}
                    >
                        <div key={project.project_id} className="bg-white min-h-[420px] p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{project.project_title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech_stack.map((tech, index) => (
                                    techIconMap[tech] && <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-full text-sm">
                                        {techIconMap[tech]}
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.image_link && (
                                <img src={project.image_link} alt={project.project_title} className="w-full sm:w-[350px] h-[200px] mx-auto mb-4 rounded" />
                            )}
                            <p className="text-gray-700 mb-4">{project.project_blurb}</p>
                        </div>
                    </button>
                ))}
            </div>
            {isOpen && <ProjectModal project={activeProject} onClose={() => setIsOpen(false)} />}
        </section>
    );
}