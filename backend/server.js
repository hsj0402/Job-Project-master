// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// // Initialize express app
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// const connectToUserDB = (email) => {
//     const dbName = email.replace(/[@.]/g, '_'); 
//     const url = `mongodb+srv://jainhsj2004:harsh123@cluster0.zbhbebo.mongodb.net/${dbName}`;
//     return mongoose.createConnection(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// };


// const getProjectModel = (connection) => {
//     const projectSchema = new mongoose.Schema({
//         name: {
//             type: String,
//             required: true,
//         },
//         user: {
//             type: String,
//             required: true,
//         },
//     });
//     return connection.model('Project', projectSchema);
// };

// const getUploadModel = (connection) => {
//     const uploadSchema = new mongoose.Schema({
//         name: String,
//         link: String,
//         transcript: String,
//         date: { type: Date, default: Date.now },
//         email: String,
//         projectId: String,
//         type: String,
//     });
//     return connection.model('Upload', uploadSchema);
// };

// // Define routes
// app.get('/api/projects/:email', async (req, res) => {
//     const { email } = req.params;
//     const connection = connectToUserDB(email);
//     const Project = getProjectModel(connection);

//     try {
//         const projects = await Project.find({ user: email });
//         res.json(projects);
//     } catch (error) {
//         console.error('Error fetching projects:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// app.post('/api/users', async (req, res) => {
//     const { email } = req.body;
//     const connection = connectToUserDB(email);

//     try {
//         const Project = getProjectModel(connection);
//         const placeholderProject = new Project({ name: 'placeholder', user: email });
//         await placeholderProject.save();
//         await Project.deleteOne({ _id: placeholderProject._id });
//         res.status(201).send('User database created');
//     } catch (error) {
//         console.error('Failed to create user database:', error);
//         res.status(500).send('Failed to create user database. Please try again.');
//     } finally {
//         connection.close();
//     }
// });

// app.get('/api/users/:email/:id', async (req, res) => {
//     const { email } = req.params;
//     const connection = connectToUserDB(email);
//     const Project = getProjectModel(connection);

//     try {
//         const uploads = await Project.findById(req.params.id);
//         console.log("uploads:", uploads)
//         res.json(uploads);
//     } catch (error) {
//         console.error('Error fetching uploads:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// app.put('/api/users', async (req, res) => {
//     const { email } = req.body;
//     const connection = connectToUserDB(email);
//     const Project = getProjectModel(connection);

//     try {
//         const placeholderProject = await Project.find({ email });
//         placeholderProject.name = req.body.userName;
//         await placeholderProject.save();
//         res.status(201).send('User database updated');
//     } catch (error) {
//         console.error('Error updating upload:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// app.post('/api/projects', async (req, res) => {
//     const { email, projectName } = req.body;
//     if (!email || !projectName) {
//         return res.status(400).send('Email and Project Name are required');
//     }
//     const connection = connectToUserDB(email);
//     const Project = getProjectModel(connection);

//     try {
//         const project = new Project({ name: projectName, user: email });
//         await project.save();
//         res.status(201).json(project);
//     } catch (error) {
//         console.error('Failed to create project:', error);
//         res.status(500).send('Failed to create project. Please try again.');
//     } finally {
//         connection.close();
//     }
// });

// // Upload routes
// app.get('/api/uploads/:email', async (req, res) => {
//     const { email } = req.params;
//     const connection = connectToUserDB(email);
//     const Upload = getUploadModel(connection);
//     console.log("email:", email)

//     try {
//         const uploads = await Upload.find({ email });
//         res.json(uploads);
//     } catch (error) {
//         console.error('Error fetching uploads:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// app.post('/api/upload-video', async (req, res) => {
//     const { email } = req.body;
//     const connection = connectToUserDB(email);
//     const Upload = getUploadModel(connection);

//     try {
//         const upload = new Upload({ ...req.body, type: 'youtube' });
//         await upload.save();
//         res.json(upload);
//     } catch (error) {
//         console.error('Error uploading video:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// app.post('/api/upload-spotify', async (req, res) => {
//     const { email } = req.body;
//     const connection = connectToUserDB(email);
//     const Upload = getUploadModel(connection);

//     try {
//         const upload = new Upload({ ...req.body, type: 'spotify' });
//         await upload.save();
//         res.json(upload);
//     } catch (error) {
//         console.error('Error uploading Spotify:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// app.post('/api/upload-rss', async (req, res) => {
//     const { email } = req.body;
//     const connection = connectToUserDB(email);
//     const Upload = getUploadModel(connection);

//     try {
//         const upload = new Upload({ ...req.body, type: 'rss' });
//         await upload.save();
//         res.json(upload);
//     } catch (error) {
//         console.error('Error uploading RSS:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// app.put('/api/uploads/:id', async (req, res) => {
//     const { email } = req.body;
//     const connection = connectToUserDB(email);
//     const Upload = getUploadModel(connection);
//     console.log("body:", req.body)

//     try {
//         const upload = await Upload.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(upload);
//     } catch (error) {
//         console.error('Error updating upload:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// app.delete('/api/uploads/:id', async (req, res) => {
//     const { email } = req.body;
//     const connection = connectToUserDB(email);
//     const Upload = getUploadModel(connection);

//     try {
//         await Upload.findByIdAndDelete(req.params.id);
//         res.json({ message: 'Upload deleted successfully' });
//     } catch (error) {
//         console.error('Error deleting upload:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// app.get('/api/uploads/:email/:id', async (req, res) => {
//     const { email } = req.params;
//     const connection = connectToUserDB(email);
//     const Upload = getUploadModel(connection);

//     try {
//         const uploads = await Upload.findById(req.params.id);
//         res.json(uploads);
//     } catch (error) {
//         console.error('Error fetching uploads:', error);
//         res.status(500).send('Server error');
//     } finally {
//         connection.close();
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const connectToUserDB = (email) => {
    const dbName = email.replace(/[@.]/g, '_'); 
    const url = `mongodb+srv://jainhsj2004:harsh123@cluster0.zbhbebo.mongodb.net/${dbName}`;
    return mongoose.createConnection(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

const getProjectModel = (connection) => {
    const projectSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
        projectId: {
            type: String,
            required: true, 
        },
    });
    return connection.model('Project', projectSchema);
};

const getUploadModel = (connection) => {
    const uploadSchema = new mongoose.Schema({
        name: String,
        link: String,
        transcript: String,
        date: { type: Date, default: Date.now },
        email: String,
        projectId: String,
        type: String,
    });
    return connection.model('Upload', uploadSchema);
};

// Define routes
app.get('/api/projects/:email', async (req, res) => {
    const { email } = req.params;
    const connection = connectToUserDB(email);
    const Project = getProjectModel(connection);

    try {
        const projects = await Project.find({ user: email });
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).send('Server error');
    } finally {
        connection.close();
    }
});

app.post('/api/users', async (req, res) => {
    const { email } = req.body;
    const connection = connectToUserDB(email);

    try {
        const Project = getProjectModel(connection);
        const placeholderProject = new Project({ name: 'placeholder', user: email, projectId: 'placeholder' });
        await placeholderProject.save();
        await Project.deleteOne({ _id: placeholderProject._id });
        res.status(201).send('User database created');
    } catch (error) {
        console.error('Failed to create user database:', error);
        res.status(500).send('Failed to create user database. Please try again.');
    } finally {
        connection.close();
    }
});

app.get('/api/users/:email/:id', async (req, res) => {
    const { email } = req.params;
    const connection = connectToUserDB(email);
    const Project = getProjectModel(connection);

    try {
        const uploads = await Project.findById(req.params.id);
        res.json(uploads);
    } catch (error) {
        console.error('Error fetching uploads:', error);
        res.status(500).send('Server error');
    } finally {
        connection.close();
    }
});

app.put('/api/users', async (req, res) => {
    const { email } = req.body;
    const connection = connectToUserDB(email);
    const Project = getProjectModel(connection);

    try {
        const placeholderProject = await Project.find({ email });
        placeholderProject.name = req.body.userName;
        await placeholderProject.save();
        res.status(201).send('User database updated');
    } catch (error) {
        console.error('Error updating upload:', error);
        res.status(500).send('Server error');
    } finally {
        connection.close();
    }
});

app.post('/api/projects', async (req, res) => {
    const { email, projectName, projectId } = req.body;
    if (!email || !projectName || !projectId) {
        return res.status(400).send('Email, Project Name, and Project ID are required');
    }
    const connection = connectToUserDB(email);
    const Project = getProjectModel(connection);

    try {
        const project = new Project({ name: projectName, user: email, projectId });
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        console.error('Failed to create project:', error);
        res.status(500).send('Failed to create project. Please try again.');
    } finally {
        connection.close();
    }
});

app.post('/api/upload', async (req, res) => {
    const { email, name, link, transcript, projectId, type } = req.body;

    const connection = connectToUserDB(email);
    const Upload = getUploadModel(connection);

    try {
        const upload = new Upload({
            name,
            link,
            transcript,
            email,
            projectId,
            type,
        });
        await upload.save();
        res.status(201).json(upload);
    } catch (error) {
        console.error('Failed to upload file:', error);
        res.status(500).send('Failed to upload file. Please try again.');
    } finally {
        connection.close();
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
