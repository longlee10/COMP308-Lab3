// Production configuration options
// To sign the session identifier, use a secret string
const config = {
  authDb: "mongodb://localhost:27017/lab3-auth-service-db",
  vitalSignDb: "mongodb://localhost:27017/lab3-vital-sign-service-db",
  sessionSecret: "productionSessionSecret",
  secretKey: "productionSecretKey",
};

export default config;
