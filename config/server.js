module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1330),
  url: 'http://localhost:1330/',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
