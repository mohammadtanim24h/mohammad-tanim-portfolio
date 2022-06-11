import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/mohammadtanim24h/mohammad-tanim-portfolio/main/public/projects.json"
        )
            .then((res) => res.json())
            .then((data) => {
                const findProject = data.find((project) => project.id === id);
                setProject(findProject);
            });
    }, [id]);
    return (
        <div className="max-w-7xl mx-auto">
            <button
                onClick={() => navigate("/")}
                className="btn btn-primary rounded-none rounded-bl-sm text-white fixed top-0 right-0"
            >
                Back to home
            </button>
            <div className="px-8 py-20">
                <div>
                    <h2 className="text-3xl font-bold text-slate-700 mb-3">
                        {project?.name}
                    </h2>
                    <h2 className="text-2xl font-bold mb-1">
                        Project Overview:{" "}
                    </h2>
                    <p className="text-base font-semibold">
                        {project?.description}
                    </p>
                    <h2 className="text-2xl font-bold mb-1 mt-3">
                        Technologies used:
                    </h2>
                    <p className="text-base font-semibold">
                        {project?.technologies?.join(", ")}.
                    </p>
                    <div>
                        <h2 className="text-2xl font-bold mt-5 mb-4">
                            Screenshots:{" "}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <img
                                    className="w-80 md:w-auto rounded-xl"
                                    src={project?.img1}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="w-80 md:w-auto rounded-xl"
                                    src={project?.img2}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="w-80 md:w-auto rounded-xl"
                                    src={project?.img3}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="w-80 md:w-auto rounded-xl"
                                    src={project?.img4}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;