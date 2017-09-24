const env = process.env;

const config = {
  port: env.PORT || 8080,
  host: env.HOST || 'localhost'
};

module.exports = config;
