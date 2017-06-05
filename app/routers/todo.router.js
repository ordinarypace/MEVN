import * as TodoController from '../controllers/todo.controller';

export default (router) => {
    router.get('/todo/fetch', TodoController.fetch);
    router.post('/todo/add', TodoController.add);
    router.post('/todo/toggle', TodoController.toggle);
    router.get('/todo/remove/:id', TodoController.remove);
}
