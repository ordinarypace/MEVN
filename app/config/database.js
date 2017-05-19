import mongoose from 'mongoose';

export default () => {
    const db = mongoose.connection;

    db.on('error', console.error);
    db.once('open', () => console.log("Connection to mongod server"));

    mongoose.connect('mongodb://localhost/');
}