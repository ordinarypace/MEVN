import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    date : Date,
    text : String,
    complete : Boolean
});

export default mongoose.model('Todo', TodoSchema);
