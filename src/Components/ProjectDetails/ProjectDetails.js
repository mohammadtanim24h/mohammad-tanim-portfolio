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
                className="btn btn-primary rounded-none rounded-br-sm text-white fixed top-0 left-0"
            >
                Back to home
            </button>
            <div className="px-4 py-20">
                <div>
                    <div
                        style={{
                            boxShadow:
                                "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        }}
                        className="p-8 rounded-xl mb-5"
                    >
                        <h2 className="text-3xl font-bold text-slate-700 mb-3">
                            {project?.name}
                        </h2>
                        <div>
                            <h2 className="text-2xl font-bold mb-1">
                                Project Overview:{" "}
                            </h2>
                            <p className="text-base font-semibold">
                                {project?.description}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-1 mt-3">
                                Technologies used:
                            </h2>
                            <p className="text-base font-semibold">
                                {project?.technologies?.join(", ")}.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 mt-5">
                            <a
                                href={project?.live_site}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary text-white rounded-full px-8 py-4 w-full md:w-auto"
                            >
                                Live Site
                            </a>
                            <a
                                href={project?.github_client}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary text-white rounded-full px-8 py-4 w-full md:w-auto"
                            >
                                Github Client
                            </a>
                            {project?.github_server && (
                                <a
                                    href={project?.github_server}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary text-white rounded-full px-8 py-4 w-full md:w-auto"
                                >
                                    Github Server
                                </a>
                            )}
                        </div>
                    </div>
                    <div
                        style={{
                            boxShadow:
                                "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        }}
                        className="p-8 rounded-xl"
                    >
                        <h2 className="text-2xl font-bold mb-4">
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
