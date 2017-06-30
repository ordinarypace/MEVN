import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const NavigateSchema = new Schema({
    path : String,
    component : String
});

export default mongoose.model('Navigate', NavigateSchema);
