import Todo from '../models/todo.model';

export const todo = (req, res) => {
    let data = Todo.find({}, (err, data) => {
        if(data.length > 0){
            return res.json(data);
        }

        return res.json(null);
    });
};

export const add = (req, res) => {
    let data = {
        date : new Date(),
        text : req.body.text,
        complete : false
    };
    let todo = new Todo(data);

    todo.save((err, item) => {
        if(err){
            throw new Error(err);
        }

        return res.json({success : true, _id : item.id});
    });
};

export const remove = (req, res) => {
    Todo.findByIdAndUpdate(req.body.id, {$set: {complete : true}}, (err, user) => {
        if(err){
            throw new Error(err);
        }

        res.json({success : true});
    })
};
