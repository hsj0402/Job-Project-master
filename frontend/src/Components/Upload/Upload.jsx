
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Upload.css';
import ProjectNav from '../ProjectNav/ProjectNav';
import youtube from '../Assets/youtube.webp';
import spotify from '../Assets/spotify.png';
import RSS from '../Assets/RSS.png';
import { ProjectContext } from '../../Context/ProjectContext';

const Upload = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [formData, setFormData] = useState({ name: '', link: '' });
    const [uploads, setUploads] = useState([]);
    const [editId, setEditId] = useState(null);
    const email = localStorage.getItem('userEmail');
    const { projectName } = useContext(ProjectContext);

    const fetchUploads = async () => {
        const email = localStorage.getItem('userEmail'); // Replace with actual email


        const response = await fetch(`http://localhost:5000/api/uploads/${email}`);
        const data = await response.json();
        setUploads(data);
    };

    useEffect(() => {
        fetchUploads();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let endpoint = '';
        const method = editId ? 'PUT' : 'POST';

        switch (modalType) {
            case 'youtube':
                endpoint = editId ? `http://localhost:5000/api/uploads/${editId}` : 'http://localhost:5000/api/upload-video';
                break;
            case 'spotify':
                endpoint = editId ? `http://localhost:5000/api/uploads/${editId}` : 'http://localhost:5000/api/upload-spotify';
                break;
            case 'rss':
                endpoint = editId ? `http://localhost:5000/api/uploads/${editId}` : 'http://localhost:5000/api/upload-rss';
                break;
            default:
                return;
        }

        try {
            const response = await fetch(endpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, email: email, projectId }), // Replace with actual email
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response from server:', errorText);
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            if (editId) {
                setUploads(uploads.map(upload => (upload._id === editId ? result : upload)));
            } else {
                setUploads([...uploads, result]);
            }
            setShowModal(false);
            setFormData({ name: '', link: '' });
            setEditId(null);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const handleDelete = async (id) => {
        const email = localStorage.getItem('userEmail'); // Replace with actual email
        try {
            await fetch(`http://localhost:5000/api/uploads/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            setUploads(uploads.filter(upload => upload._id !== id));
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const handleEdit = (upload) => {
        navigate(`/edit-transcript/${upload._id}`);
    };

    return (
        <div className="nav">
            <ProjectNav />
            <div className="upload-container">
                <div className="breadcrumb">
                    Home / {projectName}/ <span>Upload</span>
                </div>
                <h1>{projectName}</h1>
                <div className="upload-options">
                    <button className="upload-button" onClick={() => { setModalType('youtube'); setShowModal(true); }}>
                        <img src={youtube} alt="" /> Upload Youtube Video
                    </button>
                    <button className="upload-button" onClick={() => { setModalType('spotify'); setShowModal(true); }}>
                        <img src={spotify} alt="" /> Upload Spotify Podcast
                    </button>
                    <button className="upload-button" onClick={() => { setModalType('rss'); setShowModal(true); }}>
                        <img src={RSS} alt="" /> Upload from RSS Feed
                    </button>
                </div>
                <div className="file-upload-section">
                    <div className="file-upload-box">
                        <p>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                        <p className="file-types">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
                        <input type="file" className="file-input" />
                        <button className="select-file-button">Select File</button>
                    </div>
                </div>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    Name:
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </label>
                                <label>
                                    Link:
                                    <input type="text" name="link" value={formData.link} onChange={handleChange} required />
                                </label>
                                <button type="submit">{editId ? 'Update' : 'Upload'}</button>
                            </form>
                        </div>
                    </div>
                )}
                <div className="upload-list">
                    <h2>All files are processed! Your widget is ready to go!</h2>
                    <button className="try-button">Try it out!</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Upload Date & Time</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {uploads.map(upload => (
                                <tr key={upload._id}>
                                    <td>{upload.name}</td>
                                    <td>{new Date(upload.date).toLocaleString()}</td>
                                    <td>Done</td>
                                    <td>
                                        <button onClick={() => handleEdit(upload)}>Edit</button>
                                        <button onClick={() => handleDelete(upload._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Upload;
