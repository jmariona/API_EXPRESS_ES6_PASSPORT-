// Import Librarys
import mongoose from 'mongoose';

// Set Promise Options
mongoose.Promise = global.Promise;
const Connection = async () => {
	await mongoose.connect(process.env.MONGO_URL);
};
