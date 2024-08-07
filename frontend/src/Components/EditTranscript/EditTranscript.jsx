import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditTranscript.css';

const EditTranscript = () => {
    const { uploadId } = useParams();
    const navigate = useNavigate();
    const [transcript, setTranscript] = useState('');

    useEffect(() => {
        const fetchTranscript = async () => {
            const email = localStorage.getItem('userEmail'); // Replace with actual email
            const response = await fetch(`http://localhost:5000/api/uploads/${email}/${uploadId}`);
            const data = await response.json();
            setTranscript(data.transcript);
        };

        fetchTranscript();
    }, [uploadId]);

    const handleSave = async () => {
        const email = localStorage.getItem('userEmail'); // Replace with actual email
        try {
            await fetch(`http://localhost:5000/api/uploads/${uploadId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ transcript, email }),
            });
            navigate(`/upload/${uploadId}`);
        } catch (error) {
            console.error('Error saving transcript:', error);
        }
    };

    const handleDiscard = () => {
        navigate(`/uploads/`);
    };

    return (
        <div className="edit-transcript-container">
            <div className="edit-header">
                <h1>Edit Transcript</h1>
                <button className="discard-button" onClick={handleDiscard}>Discard</button>
                <button className="save-button" onClick={handleSave}>Save & exit</button>
            </div>
            <div className="transcript-editor">
                <textarea
                    value={transcript}
                    onChange={(e) => setTranscript(e.target.value)}
                    rows="20"
                    cols="100"
                />
            </div>
        </div>
    );
};

export default EditTranscript;
