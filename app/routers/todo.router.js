import * as TodoController from '../controllers/todo.controller';

export default (router) => {
    router.get('/todo', TodoController.fetch);
    router.post('/todo', TodoController.add);
    router.put('/todo', TodoController.toggle);
    router.delete('/todo', TodoController.remove);
}
