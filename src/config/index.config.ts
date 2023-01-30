export default () => ({
  db: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts, .js}'],
    logging: true,
    synchronize: false,
  },
  base: {},
});
