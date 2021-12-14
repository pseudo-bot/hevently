const mongoose = require('mongoose');

const connectDB=async ()=>{
	try {
		const connect=await mongoose.connect('mongodb://localhost:27017/hevently',{
			useNewUrlParser:true,
			useUnifiedTopology:true,
		})
		console.log("connection successful");
	} catch (error) {
		console.log(error);
	}
}

connectDB();