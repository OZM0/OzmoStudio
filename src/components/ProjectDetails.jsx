import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { projects, models } from '../constants';

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({});
  const [zoomVideoStyle, setZoomVideoStyle] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <p>No project details available.</p>;
  }

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setZoomStyle({
      backgroundImage: project.image ? `url(${project.image[currentImageIndex]})` : '',
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '200%',
    });
  };

  const handleVideoMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setZoomVideoStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.5)',
      transition: 'transform 0.2s ease-in-out',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
    setZoomVideoStyle({});
  };

  const isModel = !!project.video;

  const relatedItems = isModel ? models : projects;

  const relatedProjects = relatedItems.filter((p) => {
    const isRelated = p.tags.some((tag) =>
      project.tags.some((projectTag) => tag.name === projectTag.name)
    );
    return isRelated && p.name !== project.name;
  });

  return (
    <div className="project-details bg-primary text-white min-h-screen">
      <div className="container mx-auto py-10 px-5 md:px-20">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left section */}
          <div className="left-section w-full md:w-1/2 pr-0 md:pr-5 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
            <p className="mt-4 text-md md:text-lg">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag px-1 py-0.5 bg-black-100  rounded">
                  #{tag.name}
                </span>
              ))}
            </div>
            <a
              href={`mailto:oussema-93@live.fr?subject=Order : ${project.name} " #" ${project.id}`}
              className="mt-8 inline-block bg-black-200 text-white px-6 py-3 rounded-lg hover:bg-black-100 transition duration-300 ease-in-out"
            >
              Order
            </a>
          </div>

          
          <div className="right-section flex w-full md:w-1/2 flex-col md:flex-row">
            {project.video ? (
              <div className="video-container w-full h-auto max-h-[600px] rounded-lg overflow-hidden relative">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  src={project.video[0]}
                  muted
                  loop
                  autoPlay
                  controls={false}
                  style={zoomVideoStyle}
                  onMouseMove={handleVideoMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row w-full">
                <div
                  className="main-image w-full md:w-[80%] overflow-hidden relative mb-4 md:mb-0"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={zoomStyle.backgroundImage ? zoomStyle : null}
                >
                  <img
                    src={project.image[currentImageIndex]}
                    alt={project.name}
                    className={`w-full h-auto max-h-[600px] object-cover rounded-lg ${zoomStyle.backgroundImage ? 'opacity-0' : 'opacity-100'}`}
                  />
                </div>

                {/* Thumbnails */}
                <div className="thumbnails flex flex-row md:flex-col justify-start md:justify-center items-start md:ml-5 space-x-4 md:space-y-4 w-full md:w-[20%]">
                  {project.image.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => handleImageClick(index)}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : ''}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Projects or Models */}
        {relatedProjects.length > 0 && (
          <div className="related-projects mt-16">
            <h2 className="text-2xl md:text-3xl font-bold">{isModel ? 'Related Models' : 'Related Projects'}</h2>
            <div className="flex flex-wrap gap-7 mt-4">
              {relatedProjects.slice(0, 4).map((relatedProject, index) => (
                <div
                  key={index}
                  className="w-full md:w-[360px] bg-tertiary p-4 rounded-lg cursor-pointer"
                  onClick={() => navigate('/project-details', { state: { project: relatedProject } })}
                >
                  {relatedProject.video ? (
                    <video
                      src={relatedProject.video[0]}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                      controls={false}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={relatedProject.image[0]}
                      alt={relatedProject.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl md:text-2xl font-semibold">{relatedProject.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {relatedProject.tags.map((tag, index) => (
                      <span key={index} className="tag px-0.5 py-0.5 bg-black-200 rounded">
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
