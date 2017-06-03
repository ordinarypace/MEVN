export const config = {
    root : process.env.PWD,
    port : process.env.NODE_ENV === 'development' ? 3001 : 3000,
    env : process.env.NODE_ENV || 'development'
};