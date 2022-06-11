import React, { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);
    
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-slate-600 font-bold text-4xl text-center">Projects</h2>
            <div> 
                {
                    projects.map(project => console.log(project))
                }
            </div>
        </div>
    );
};

export default Projects;
