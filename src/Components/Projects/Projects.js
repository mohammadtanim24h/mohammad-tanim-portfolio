import React, { useEffect, useState } from "react";
import Project from "../Project/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div id="projects" className="max-w-7xl mx-auto mb-16">
            <h2 className="text-slate-600 font-bold text-4xl text-center mb-8">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {projects.map((project) => (
                    <Project key={project.id} project={project}></Project>
                ))}
            </div>
        </div>
    );
};

export default Projects;
