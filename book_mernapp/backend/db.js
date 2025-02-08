const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://bookify:bookify06@cluster1.voser.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected successfully"); // More descriptive message
    } catch (error) {
        console.error("Error connecting:", error); // Handle and log error
    }
};


module.exports = mongoDB;