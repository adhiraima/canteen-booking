module.exports = {
    development: {

        migrations: { tableName: 'migrations' },
        seeds: { tableName: './seeds' },

        client: 'mysql',
        connection: {

            host: 'localhost',

            user: 'root',
            password: 'root',

            database: 'canteen',
            charset: 'utf8',

        }

    }

};
