import React from "react";

const Project = ({ project }) => {
    const { name, img1, live_site, id } = project;
    return (
        <div className="flex justify-center mb-6 md:mb-0">
            <div className="card card-compact w-80 md:w-96 shadow-xl">
                <figure>
                    <img src={img1} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center mb-4">
                        {name}
                    </h2>
                    <div className="card-actions justify-center">
                        <button className="btn bg-primary text-white border-none">
                            Details
                        </button>
                        <a
                            href={live_site}
                            rel="noreferrer"
                            target="_blank"
                            className="btn bg-primary text-white border-none"
                        >
                            Live Site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
