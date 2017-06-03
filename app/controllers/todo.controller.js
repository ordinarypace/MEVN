import Todo from '../models/todo.model';

export const todo = (req, res) => {
    let data = Todo.find({}, (err, data) => {
        if(data.length > 0){
            return res.json(data);

        } else {
            return res.json(null);
        }
    });
};

export const add = (req, res) => {
    let data = {
        date : new Date(),
        text : req.body.text,
        complete : false
    };
    let todo = new Todo(data);

    todo.save((err) => {
        if(err){
            throw new Error(err);
        }

        return res.json({success : true});
    });
};

export const remove = (req, res) => {
    Todo.findById(req.param.id, (err, user) => {

    })
};