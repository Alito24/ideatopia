const express = require('express');
const cors = require('cors');
const app = express();
const ObjectModel = require('./models/ObjectModel'); // Adjust the path as needed
const PORT = process.env.PORT || 5500;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (Replace with a database later)
let galleryItems = [];

// API Endpoints
// Get all objects
app.get('/api/objects', (req, res) => {
    res.json(galleryItems);
});

// Add a new object
app.post('/api/objects', (req, res) => {
    const newItem = req.body;
    if (!newItem.name || !newItem.imageUrl || !newItem.description) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    galleryItems.push(newItem);
    res.status(201).json({ message: 'Object added' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.delete('/api/objects', async (req, res) => {
    try {
        await ObjectModel.deleteMany({}); // Clears all objects from the database
        res.status(200).send('All objects deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting objects');
    }
});
