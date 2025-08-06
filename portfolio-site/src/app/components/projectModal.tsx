import type {Project} from "../types";
import Link  from "next/link";
import Image from "next/image";

const ProjectModal = ({ project, onClose, }: { project: Project | null; onClose: () => void; }) => {
    if (!project) return null;

    return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
        >
            ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.project_title}</h2>
        <div className="w-full max-w-lg max-h-[300px] mb-4 rounded overflow-hidden">
            <Image
            src={project.image_link}
            alt={project.project_title}
            width={800}
            height={300}
            className="object-cover w-full h-full"
            />
        </div>
        <p>{project.project_description}</p>
            <div className="flex flex-row gap-4 mt-4">
                <Link
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 flex items-center justify-center"
                >
                    View on GitHub
                </Link>
                {project.demo_link && (
                    <Link
                        href={project.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[var(--color-brand)] text-white px-4 py-2 rounded hover:bg-[var(--color-brand-dark)] flex items-center justify-center"
                    >
                        View Live
                    </Link>
                )}
            </div>
        </div>
    </div>
)};

export default ProjectModal;
