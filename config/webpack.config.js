var env = process.env.NODE_ENV || 'development';

var build = function(){
    return require('./' + env)();
};

module.exports = build();
