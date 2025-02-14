const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://bookify:bookify06@cluster1.voser.mongodb.net/bookify_mern?retryWrites=true&w=majority&appName=Cluster1'

const mongoDB = async () => {
  try {
      await mongoose.connect(mongoURI, { 
          useNewUrlParser: true, // These options are still sometimes needed
          useUnifiedTopology: true // Add this for the new Server discovery and monitoring engine
      });
      console.log("Connected");

      const fetched_data = await mongoose.connection.db.collection("books"); // Use await here
      const data = await fetched_data.find({}).toArray(); // Use await here too
      global.books = data;
      
  } catch (err) {
      console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;