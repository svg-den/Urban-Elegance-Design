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
        { id: 2, title: "Managers Room", type: 'video', content: video2 },
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
                <a href="https://wa.me/yourwhatsapplink" className="text-3xl hover:text-green-500" target="_blank" rel="noopener noreferrer">
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


// import React, { useState } from 'react';

// import video1 from '../assets/Modern.mp4';
// import video2 from '../assets/cabin.mp4';
// import image1 from '../assets/image1.jpeg';
// import image2 from '../assets/image2.jpeg';
// import image3 from '../assets/image3.jpeg';
// import image4 from '../assets/image4.jpeg';
// import image5 from '../assets/image5.jpeg';
// import image6 from '../assets/image6.jpeg';

// const Portfolio = () => {
//     const [selectedProject, setSelectedProject] = useState(null);

//     const projects = [
//         { id: 1, title: "Office Boardroom", type: 'video', content: video1 },
//         { id: 2, title: "Managers Room", type: 'video', content: video2 },
//         { id: 3, title: "Project 3", type: 'images', content: [image1, image2, image3, image4, image5, image6] },
//     ];

//     const handleProjectClick = (projectId) => {
//         setSelectedProject(projectId);
//     };

//     return (
//         <div id="portfolio" className=" mt-9 bg-gray-100 text-gray-800 max-w-screen-lg">
//             <h1 className="text-4xl font-bold text-center mb-8">Completed Projects</h1>

//             <div className="absolute top-4 right-4">
//                 <a href="https://wa.me/yourwhatsapplink" className="text-3xl hover:text-green-500" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-whatsapp"></i>
//                 </a>
//             </div>

//             <div className="portfolio-list max-w-lg mx-auto mt-9 mb-8">
//                 <h2 className="text-3xl font-bold text-center mb-6">Portfolio</h2>
//                 <ul className="list-disc list-inside mb-8 space-y-2 text-lg text-gray-700">
//                     {projects.map((project) => (
//                         <li
//                             key={project.id}
//                             className="hover:text-blue-500 transition-colors duration-300 cursor-pointer"
//                             onClick={() => handleProjectClick(project.id)}
//                         >
//                             {project.title}
//                         </li>
//                     ))}
//                 </ul>
//                 <h2 className="text-2xl font-semibold mb-4">Portfolio Page</h2>
//                 <p className="text-gray-600 text-lg mb-8">
//                 Office Interior Design Projects
// <br></br>
// <br></br>
// We’ve transformed traditional offices into modern, collaborative workspaces that enhance productivity and reflect each organization's unique identity. Key projects include:
// <br></br>
// Executive Boardroom: A sleek, high-tech boardroom with custom furniture and state-of-the-art audiovisual systems.

// Managerial Suites: Personalized offices with ergonomic furniture and sophisticated decor to boost focus and leadership.

// Collaborative Workspaces: Open-plan areas designed for creativity and teamwork, featuring flexible seating and vibrant colors.

// Reception Areas: Professional and welcoming reception spaces with modern seating and tasteful decor.

// Breakout Zones: Relaxing spaces for employee rejuvenation, with comfortable seating and natural light.

// Each project demonstrates our commitment to creating functional and innovative office environments.
//                 </p>

//                 {selectedProject && (
//                     <div className="project-content flex justify-center">
//                         {projects
//                             .filter((project) => project.id === selectedProject)
//                             .map((project) => (
//                                 <div key={project.id} className="content-container">
//                                     <h4 className="text-lg font-semibold mb-2 text-center">{project.title}</h4>
//                                     {project.type === 'video' ? (
//                                         <video controls className="w-80 rounded-lg shadow-lg">
//                                             <source src={project.content} type="video/mp4" />
//                                         </video>
//                                     ) : (
//                                         <div className="images-grid grid grid-cols-3 gap-4">
//                                             {project.content.map((image, index) => (
//                                                 <img key={index} src={image} alt={`Project 3 - Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Portfolio;
