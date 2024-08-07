// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const ProjectContext = createContext();

// export const ProjectProvider = ({ children }) => {
//     const [projectName, setProjectName] = useState('');

//     useEffect(() => {
//         const fetchProjectName = async () => {
//             const email = localStorage.getItem('userEmail');
//             if (email) {
//                 try {
//                     const response = await axios.get(`http://localhost:5000/api/projects/${email}`);
//                     if (response.data.length > 0) {
//                         setProjectName(response.data[0].name); // Assuming you want the first project
//                     }
//                 } catch (error) {
//                     console.error('Failed to fetch project name:', error);
//                 }
//             }
//         };

//         fetchProjectName();
//     }, []);

//     return (
//         <ProjectContext.Provider value={{ projectName, setProjectName }}>
//             {children}
//         </ProjectContext.Provider>
//     );
// };



// ProjectContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const ProjectContext = createContext();

// export const ProjectProvider = ({ children }) => {
//     const [projectName, setProjectName] = useState('');

//     useEffect(() => {
//         const fetchProjectName = async () => {
//             const email = localStorage.getItem('userEmail');
//             if (email) {
//                 try {
//                     const response = await axios.get(`http://localhost:5000/api/projects/${email}`);
//                     if (response.data.length > 0) {
//                         setProjectName(response.data[0].name); // Assuming you want the first project
//                     }
//                 } catch (error) {
//                     console.error('Failed to fetch project name:', error);
//                 }
//             }
//         };

//         fetchProjectName();
//     }, []);

//     return (
//         <ProjectContext.Provider value={{ projectName, setProjectName }}>
//             {children}
//         </ProjectContext.Provider>
//     );
// };



// ProjectContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const ProjectContext = createContext();

// export const ProjectProvider = ({ children }) => {
//     const [projectName, setProjectName] = useState('');

//     return (
//         <ProjectContext.Provider value={{ projectName, setProjectName }}>
//             {children}
//         </ProjectContext.Provider>
//     );
// };




// ProjectContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projectName, setProjectName] = useState(() => {
        return localStorage.getItem('projectName') || '';
    });

    useEffect(() => {
        localStorage.setItem('projectName', projectName);
    }, [projectName]);

    return (
        <ProjectContext.Provider value={{ projectName, setProjectName }}>
            {children}
        </ProjectContext.Provider>
    );
};

