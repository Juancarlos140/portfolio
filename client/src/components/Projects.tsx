import { useEffect, useState } from 'react';

interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  demoLink: string;
  sourceCode: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8">Projects</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project._id} className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-400 mb-2">{project.description}</p>
              <p className="text-sm text-teal-400 mb-2">Tech: {project.techStack.join(', ')}</p>
              <div className="flex gap-4 mt-4">
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                  Demo
                </a>
                <a href={project.sourceCode} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
