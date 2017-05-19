import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const HomeSchema = new Schema({
    // schema
});

export default mongoose.model('Home', HomeSchema);