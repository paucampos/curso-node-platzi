const config = {
    DB_HOST: process.env.DB_HOST || 'user_pau',
    DB_PORT: process.env.DB_PORT || '6OdsxovZCj2a5QEY',
    DB_NAME: process.env.DB_NAME || 'telegrom',
    dbUrl: process.env.DB_URL || 'mongodb://user:user1234@ds255107.mlab.com:55107/telegrom',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;