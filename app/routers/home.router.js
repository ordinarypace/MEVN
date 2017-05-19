import * as HomeController from '../controllers/home.controller';

export default (router) => {
    router.get('/', HomeController.home);
}