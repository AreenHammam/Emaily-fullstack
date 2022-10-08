if (process.env.NODE_ENV === 'production') {
    console.log('i am in prod')
    module.exports = require('./prod');

} else {
    console.log('i am in dev')
    module.exports = require('./dev');
}
