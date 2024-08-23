import React, { useState } from 'react';

import video1 from '../assets/Modern.mp4';
import video2 from '../assets/cabin.mp4';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { id: 1, title: "Office Boardroom", type: 'video', content: video1 },
        { id: 2, title: "Manager's Room", type: 'video', content: video2 },
        { id: 3, title: "Project 3", type: 'images', content: [image1, image2, image3, image4, image5, image6] },
    ];

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
    };

    return (
        <div id="portfolio" className="relative mt-9 bg-gray-100 text-gray-800 py-8 px-4 min-h-screen max-w-screen-lg mx-auto">
            <h3 className="text-4xl text-center font-bold mb-4 underline">Completed Projects</h3>

            {/* WhatsApp Icon Positioned at the Top Right */}
            <div className="absolute top-4 right-4">
                <a href="https://chat.whatsapp.com/KHwagQxWaVUB6U0KPCJu8v" className="text-3xl hover:text-green-500" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
            
            {/* Grid structure similar to Service page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center">
                {projects.map((project) => (
                    <div key={project.id} className="px-16">
                        <div
                            className="text-2xl font-bold text-blue-500 hover:underline cursor-pointer"
                            onClick={() => handleProjectClick(project.id)}
                        >
                            {project.title}
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="project-content flex justify-center">
                    {projects
                        .filter((project) => project.id === selectedProject)
                        .map((project) => (
                            <div key={project.id} className="content-container">
                                <h4 className="text-lg font-semibold mb-2 text-center">{project.title}</h4>
                                {project.type === 'video' ? (
                                    <video controls className="w-80 rounded-lg shadow-lg">
                                        <source src={project.content} type="video/mp4" />
                                    </video>
                                ) : (
                                    <div className="images-grid grid grid-cols-3 gap-4">
                                        {project.content.map((image, index) => (
                                            <img key={index} src={image} alt={`Project 3 - Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Portfolio;


