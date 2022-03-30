module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fec42662a7c7810c6c6c62144abe7afe'),
  },
});
