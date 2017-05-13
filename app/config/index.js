import path from 'path';

export const config = {
    root : path.normalize(__dirname + '/'),
    rootPath : process.env.ROOT_PATH,
    port : process.env.NODE_ENV === 'development' ? 3001 : 3000,
    env : process.env.NODE_ENV || 'development'
};