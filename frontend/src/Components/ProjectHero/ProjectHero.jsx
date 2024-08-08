
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './ProjectHero.css';

// const ProjectHero = () => {
//     const [projects, setProjects] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [showProjectPopup, setShowProjectPopup] = useState(false);
//     const [projectName, setProjectName] = useState('');
//     const [projectError, setProjectError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const email = localStorage.getItem('userEmail');
//                 const response = await axios.get(`http://localhost:5000/api/projects/${email}`);
//                 setProjects(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Failed to fetch projects:', error);
//                 setError('Failed to fetch projects. Please try again.');
//                 setLoading(false);
//             }
//         };

//         fetchProjects();
//     }, []);

//     const handleCreateClick = async () => {
//         if (projectName.trim() === '') {
//             setProjectError("Project Name Can't be empty");
//         } else {
//             try {
//                 const storedEmail = localStorage.getItem('userEmail');
//                 if (!storedEmail) {
//                     setProjectError('Email not found. Please submit your email first.');
//                     return;
//                 }
//                 await axios.post('http://localhost:5000/api/projects', { email: storedEmail, projectName });
//                 setProjectError('');
//                 setSuccessMessage('Project created successfully!');
//                 setShowProjectPopup(false);
//                 // Refetch projects to update the list
//                 const response = await axios.get(`http://localhost:5000/api/projects/${storedEmail}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Failed to create project:', error);
//                 setProjectError('Failed to create project. Please try again.');
//             }
//         }
//     };

//     const handleProjectClick = (projectId) => {
//         navigate(`/upload/${projectId}`);
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div className="error">{error}</div>;
//     }

//     return (
//         <div className="project-hero">
//             <div className="btnbox">
//                 <h1>Projects</h1>
//                 <button onClick={() => setShowProjectPopup(true)} className='create-project-btn'>
//                     <i className="fa-solid fa-circle-plus"></i>
//                     Create New Project
//                 </button>
//             </div>
//             <div className="projects-grid">
//                 {projects.map((project) => (
//                     <div key={project._id} className="project-card" onClick={() => handleProjectClick(project._id)}>
//                         <div className="project-icon">SP</div>
//                         <div className="project-details">
//                             <h2>{project.name}</h2>
//                             <p>4 Episodes</p>
//                             <p>Last edited a week ago</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {showProjectPopup && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <h2>Create Project</h2>
//                         <label>Enter Project Name:</label>
//                         <input
//                             type="text"
//                             value={projectName}
//                             onChange={(e) => setProjectName(e.target.value)}
//                             placeholder="Type here"
//                         />
//                         {projectError && <p className="error">{projectError}</p>}
//                         {successMessage && <p className="success">{successMessage}</p>}
//                         <div className="popup-buttons">
//                             <button className="cancel" onClick={() => setShowProjectPopup(false)}>Cancel</button>
//                             <button className="create" onClick={handleCreateClick}>Create</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProjectHero;




// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ProjectContext } from '../../Context/ProjectContext';
// import './ProjectHero.css';

// const ProjectHero = () => {
//     const [projects, setProjects] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [showProjectPopup, setShowProjectPopup] = useState(false);
//     const [localProjectName, setLocalProjectName] = useState('');
//     const [projectError, setProjectError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const navigate = useNavigate();
//     const { setProjectName } = useContext(ProjectContext);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const email = localStorage.getItem('userEmail');
//                 const response = await axios.get(`http://localhost:5000/api/projects/${email}`);
//                 setProjects(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Failed to fetch projects:', error);
//                 setError('Failed to fetch projects. Please try again.');
//                 setLoading(false);
//             }
//         };

//         fetchProjects();
//     }, []);

//     const handleCreateClick = async () => {
//         if (localProjectName.trim() === '') {
//             setProjectError("Project Name Can't be empty");
//         } else {
//             try {
//                 const storedEmail = localStorage.getItem('userEmail');
//                 if (!storedEmail) {
//                     setProjectError('Email not found. Please submit your email first.');
//                     return;
//                 }
//                 await axios.post('http://localhost:5000/api/projects', { email: storedEmail, projectName: localProjectName });
//                 setProjectError('');
//                 setSuccessMessage('Project created successfully!');
//                 setShowProjectPopup(false);
//                 setProjectName(localProjectName); // Update the context
//                 // Refetch projects to update the list
//                 const response = await axios.get(`http://localhost:5000/api/projects/${storedEmail}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Failed to create project:', error);
//                 setProjectError('Failed to create project. Please try again.');
//             }
//         }
//     };

//     const handleProjectClick = (projectId) => {
//         navigate(`/upload/${projectId}`);
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div className="error">{error}</div>;
//     }

//     return (
//         <div className="project-hero">
//             <div className="btnbox">
//                 <h1>Projects</h1>
//                 <button onClick={() => setShowProjectPopup(true)} className='create-project-btn'>
//                     <i className="fa-solid fa-circle-plus"></i>
//                     Create New Project
//                 </button>
//             </div>
//             <div className="projects-grid">
//                 {projects.map((project) => (
//                     <div key={project._id} className="project-card" onClick={() => handleProjectClick(project._id)}>
//                         <div className="project-icon">SP</div>
//                         <div className="project-details">
//                             <h2>{project.name}</h2>
//                             <p>4 Episodes</p>
//                             <p>Last edited a week ago</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {showProjectPopup && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <h2>Create Project</h2>
//                         <label>Enter Project Name:</label>
//                         <input
//                             type="text"
//                             value={localProjectName}
//                             onChange={(e) => setLocalProjectName(e.target.value)}
//                             placeholder="Type here"
//                         />
//                         {projectError && <p className="error">{projectError}</p>}
//                         {successMessage && <p className="success">{successMessage}</p>}
//                         <div className="popup-buttons">
//                             <button className="cancel" onClick={() => setShowProjectPopup(false)}>Cancel</button>
//                             <button className="create" onClick={handleCreateClick}>Create</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProjectHero;


// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ProjectContext } from '../../Context/ProjectContext';
// import './ProjectHero.css';

// const ProjectHero = () => {
//     const [projects, setProjects] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [showProjectPopup, setShowProjectPopup] = useState(false);
//     const [localProjectName, setLocalProjectName] = useState('');
//     const [projectError, setProjectError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const navigate = useNavigate();
//     const { setProjectName } = useContext(ProjectContext);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const email = localStorage.getItem('userEmail');
//                 const response = await axios.get(`http://localhost:5000/api/projects/${email}`);
//                 setProjects(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Failed to fetch projects:', error);
//                 setError('Failed to fetch projects. Please try again.');
//                 setLoading(false);
//             }
//         };

//         fetchProjects();
//     }, []);

//     const handleCreateClick = async () => {
//         if (localProjectName.trim() === '') {
//             setProjectError("Project Name Can't be empty");
//         } else {
//             try {
//                 const storedEmail = localStorage.getItem('userEmail');
//                 if (!storedEmail) {
//                     setProjectError('Email not found. Please submit your email first.');
//                     return;
//                 }
//                 await axios.post('http://localhost:5000/api/projects', { email: storedEmail, projectName: localProjectName });
//                 setProjectError('');
//                 setSuccessMessage('Project created successfully!');
//                 setShowProjectPopup(false);
//                 setProjectName(localProjectName); 
//                 const response = await axios.get(`http://localhost:5000/api/projects/${storedEmail}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Failed to create project:', error);
//                 setProjectError('Failed to create project. Please try again.');
//             }
//         }
//     };

//     const handleProjectClick = (projectId) => {
//         const clickedProject = projects.find(project => project._id === projectId);
//         if (clickedProject) {
//             setProjectName(clickedProject.name); 
//             navigate(`/upload/${projectId}`);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div className="error">{error}</div>;
//     }

//     return (
//         <div className="project-hero">
//             <div className="btnbox">
//                 <h1>Projects</h1>
//                 <button onClick={() => setShowProjectPopup(true)} className='create-project-btn'>
//                     <i className="fa-solid fa-circle-plus"></i>
//                     Create New Project
//                 </button>
//             </div>
//             <div className="projects-grid">
//                 {projects.map((project) => (
//                     <div key={project._id} className="project-card" onClick={() => handleProjectClick(project._id)}>
//                         <div className="project-icon">SP</div>
//                         <div className="project-details">
//                             <h2>{project.name}</h2>
//                             <p>4 Episodes</p>
//                             <p>Last edited a week ago</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {showProjectPopup && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <h2>Create Project</h2>
//                         <label>Enter Project Name:</label>
//                         <input
//                             type="text"
//                             value={localProjectName}
//                             onChange={(e) => setLocalProjectName(e.target.value)}
//                             placeholder="Type here"
//                         />
//                         {projectError && <p className="error">{projectError}</p>}
//                         {successMessage && <p className="success">{successMessage}</p>}
//                         <div className="popup-buttons">
//                             <button className="cancel" onClick={() => setShowProjectPopup(false)}>Cancel</button>
//                             <button className="create" onClick={handleCreateClick}>Create</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProjectHero;




import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../Context/ProjectContext';
import './ProjectHero.css';

const ProjectHero = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showProjectPopup, setShowProjectPopup] = useState(false);
    const [localProjectName, setLocalProjectName] = useState('');
    const [localProjectId, setLocalProjectId] = useState(''); // New local state for projectId
    const [projectError, setProjectError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const { setProjectName, setProjectId } = useContext(ProjectContext); // Destructure setProjectId

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const email = localStorage.getItem('userEmail');
                const response = await axios.get(`http://localhost:5000/api/projects/${email}`);
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
                setError('Failed to fetch projects. Please try again.');
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleCreateClick = async () => {
        if (localProjectName.trim() === '') {
            setProjectError("Project Name can't be empty");
        } else {
            try {
                const storedEmail = localStorage.getItem('userEmail');
                if (!storedEmail) {
                    setProjectError('Email not found. Please submit your email first.');
                    return;
                }
                const response = await axios.post('http://localhost:5000/api/projects', { email: storedEmail, projectName: localProjectName, projectId: localProjectId });
                setProjectError('');
                setSuccessMessage('Project created successfully!');
                setShowProjectPopup(false);
                setProjectName(localProjectName);
                setProjectId(response.data._id); // Set projectId from the response
                const updatedProjects = await axios.get(`http://localhost:5000/api/projects/${storedEmail}`);
                setProjects(updatedProjects.data);
            } catch (error) {
                console.error('Failed to create project:', error);
                setProjectError('Failed to create project. Please try again.');
            }
        }
    };

    const handleProjectClick = (projectId) => {
        const clickedProject = projects.find(project => project._id === projectId);
        if (clickedProject) {
            setProjectName(clickedProject.name);
            setProjectId(clickedProject._id); // Set projectId when clicking on a project
            navigate(`/upload/${projectId}`);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="project-hero">
            <div className="btnbox">
                <h1>Projects</h1>
                <button onClick={() => setShowProjectPopup(true)} className='create-project-btn'>
                    <i className="fa-solid fa-circle-plus"></i>
                    Create New Project
                </button>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project._id} className="project-card" onClick={() => handleProjectClick(project._id)}>
                        <div className="project-icon">SP</div>
                        <div className="project-details">
                            <h2>{project.name}</h2>
                            <p>4 Episodes</p>
                            <p>Last edited a week ago</p>
                        </div>
                    </div>
                ))}
            </div>

            {showProjectPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Create Project</h2>
                        <label>Enter Project Name:</label>
                        <input
                            type="text"
                            value={localProjectName}
                            onChange={(e) => setLocalProjectName(e.target.value)}
                            placeholder="Type here"
                        />
                        <label>Enter Project ID:</label>
                        <input
                            type="text"
                            value={localProjectId}
                            onChange={(e) => setLocalProjectId(e.target.value)}
                            placeholder="Type here"
                        />
                        {projectError && <p className="error">{projectError}</p>}
                        {successMessage && <p className="success">{successMessage}</p>}
                        <div className="popup-buttons">
                            <button className="cancel" onClick={() => setShowProjectPopup(false)}>Cancel</button>
                            <button className="create" onClick={handleCreateClick}>Create</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectHero;
