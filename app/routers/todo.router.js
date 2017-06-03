import * as TodoController from '../controllers/todo.controller';

export default (router) => {
    router.get('/todo', TodoController.todo);
    router.post('/todo/add', TodoController.add);
    router.post('/todo/remove/:id', TodoController.remove);
}
