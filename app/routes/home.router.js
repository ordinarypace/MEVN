import * as TodoController from '../controllers/todo.controller';

export default (router) => {
    router.get('/', TodoController.fetch);
}
