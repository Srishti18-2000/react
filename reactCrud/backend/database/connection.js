// app.js (or index.js)

import mongoose from "mongoose";


const MONGO_URI = 'mongodb://localhost:27017/e-com';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/e-com');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

export default mongoose;

