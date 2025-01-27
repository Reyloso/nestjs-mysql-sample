module.exports = {
    type: 'postgres',
    host:  process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: [/*...*/],
    synchronize: true, // Solo para entornos de desarrollo. No usar en producción.
};