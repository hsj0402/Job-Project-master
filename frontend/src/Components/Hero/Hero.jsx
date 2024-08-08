// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import axios from 'axios';
// import landingpic from '../Assets/landingpic.png';
// import './Hero.css';

// const Hero = () => {
//     const [showEmailPopup, setShowEmailPopup] = useState(false);
//     const [showProjectPopup, setShowProjectPopup] = useState(false);
//     const [email, setEmail] = useState('');
//     const [projectName, setProjectName] = useState('');
//     const [projectId, setProjectId] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [projectError, setProjectError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const emailPopupShown = localStorage.getItem('emailPopupShown');
//         if (!emailPopupShown) {
//             setShowEmailPopup(true);
//         } else {
//             const storedEmail = localStorage.getItem('userEmail');
//             setEmail(storedEmail);
//         }
//     }, []);

//     const handleEmailSubmit = async () => {
//         if (!email) {
//             setEmailError("Email can't be empty");
//             return;
//         }

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             setEmailError("Incorrect email format");
//             return;
//         }

//         try {
//             await axios.post('http://localhost:5000/api/users', { email });
//             setEmailError('');
//             setSuccessMessage('Email submitted successfully!');
//             localStorage.setItem('emailPopupShown', 'true');
//             localStorage.setItem('userEmail', email);
//             setTimeout(() => setShowEmailPopup(false), 2000);
//         } catch (error) {
//             console.error('Failed to submit email:', error);
//             setEmailError('Failed to submit email. Please try again.');
//         }
//     };

//     const handleCreateClick = async () => {
//         if (projectName.trim() === '') {
//             setProjectError("Project Name Can't be empty");
//         } else {
//             try {
//                 const storedEmail = localStorage.getItem('userEmail');
//                 if (!storedEmail) {
//                     setProjectError('Email not found. Please submit your email first.');
//                     setShowEmailPopup(true);
//                     return;
//                 }
//                 await axios.post('http://localhost:5000/api/projects', { email: storedEmail, projectName });
//                 setProjectError('');
//                 setSuccessMessage('Project created successfully!');
//                 setShowProjectPopup(false);
//                 navigate('/projects');
//             } catch (error) {
//                 console.error('Failed to create project:', error);
//                 setProjectError('Failed to create project. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className='hero-section'>
//             <div className="hero">
//                 <h1>Create a New Project</h1>
//                 <img src={landingpic} alt="" />
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad illo, dolorum fugiat dolorem aut magnam molestiae voluptatum est. Maxime dolor blanditiis illo eius earum.</p>
//             </div>

//             <div className="btn2">
//                 <button onClick={() => setShowProjectPopup(true)}>
//                     <i className="fa-solid fa-circle-plus"></i>
//                     Create New Project
//                 </button>
//             </div>

//             {showEmailPopup && (
//                 <div className="popup">
//                     <div className="popup-content">
//                         <h2>Welcome!</h2>
//                         <label>Enter your Email:</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="Type here"
//                             required
//                         />
//                         {emailError && <p className="error">{emailError}</p>}
//                         {successMessage && <p className="success">{successMessage}</p>}
//                         <div className="popup-buttons">
//                             <button className="submit" onClick={handleEmailSubmit}>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             )}

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
//                         <label>Enter Project ID:</label>
//                         <input
//                             type="Number"
//                             value={projectId}
//                             onChange={(e) => setProjectId(e.target.value)}
//                             placeholder="Type here"
//                         />

//                         {projectError && <p className="error">{projectError}</p>}
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

// export default Hero;







import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import landingpic from '../Assets/landingpic.png';
import './Hero.css';

const Hero = () => {
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [showProjectPopup, setShowProjectPopup] = useState(false);
    const [email, setEmail] = useState('');
    const [projectName, setProjectName] = useState('');
    const [projectId, setProjectId] = useState('');
    const [emailError, setEmailError] = useState('');
    const [projectError, setProjectError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const emailPopupShown = localStorage.getItem('emailPopupShown');
        if (!emailPopupShown) {
            setShowEmailPopup(true);
        } else {
            const storedEmail = localStorage.getItem('userEmail');
            setEmail(storedEmail);
        }
    }, []);

    const handleEmailSubmit = async () => {
        if (!email) {
            setEmailError("Email can't be empty");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Incorrect email format");
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/users', { email });
            setEmailError('');
            setSuccessMessage('Email submitted successfully!');
            localStorage.setItem('emailPopupShown', 'true');
            localStorage.setItem('userEmail', email);
            setTimeout(() => setShowEmailPopup(false), 2000);
        } catch (error) {
            console.error('Failed to submit email:', error);
            setEmailError('Failed to submit email. Please try again.');
        }
    };

    const handleCreateClick = async () => {
        if (projectName.trim() === '') {
            setProjectError("Project Name Can't be empty");
            return;
        }
        if (!projectId.trim()) {
            setProjectError("Project ID Can't be empty");
            return;
        }

        try {
            const storedEmail = localStorage.getItem('userEmail');
            if (!storedEmail) {
                setProjectError('Email not found. Please submit your email first.');
                setShowEmailPopup(true);
                return;
            }
            await axios.post('http://localhost:5000/api/projects', { email: storedEmail, projectName, projectId });
            setProjectError('');
            setSuccessMessage('Project created successfully!');
            setShowProjectPopup(false);
            navigate('/projects');
        } catch (error) {
            console.error('Failed to create project:', error);
            setProjectError('Failed to create project. Please try again.');
        }
    };

    return (
        <div className='hero-section'>
            <div className="hero">
                <h1>Create a New Project</h1>
                <img src={landingpic} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad illo, dolorum fugiat dolorem aut magnam molestiae voluptatum est. Maxime dolor blanditiis illo eius earum.</p>
            </div>

            <div className="btn2">
                <button onClick={() => setShowProjectPopup(true)}>
                    <i className="fa-solid fa-circle-plus"></i>
                    Create New Project
                </button>
            </div>

            {showEmailPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Welcome!</h2>
                        <label>Enter your Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Type here"
                            required
                        />
                        {emailError && <p className="error">{emailError}</p>}
                        {successMessage && <p className="success">{successMessage}</p>}
                        <div className="popup-buttons">
                            <button className="submit" onClick={handleEmailSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            )}

            {showProjectPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Create Project</h2>
                        <label>Enter Project Name:</label>
                        <input
                            type="text"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            placeholder="Type here"
                        />
                        <label>Enter Project ID:</label>
                        <input
                            type="Number"
                            value={projectId}
                            onChange={(e) => setProjectId(e.target.value)}
                            placeholder="Type here"
                        />

                        {projectError && <p className="error">{projectError}</p>}
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

export default Hero;
