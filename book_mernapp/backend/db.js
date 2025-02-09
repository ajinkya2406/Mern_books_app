const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://bookify:bookify06@cluster1.voser.mongodb.net/bookify_mern?retryWrites=true&w=majority&appName=Cluster1'

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true // Important for newer MongoDB drivers
      });
      console.log("connected");
  
      const fetch_data = mongoose.connection.db.collection("books"); // Get the collection AFTER connecting
  
      const data = await fetch_data.find({}).toArray(); // Use await inside the async function
      console.log(data);
  
    } catch (err) {
      console.error("---", err); // Use console.error for errors
    }
  };


module.exports = mongoDB;