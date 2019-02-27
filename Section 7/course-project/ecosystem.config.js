const AMQP_CONNECTION_STRING = "amqp://rbqdrglr:nNIvKiB3Bs5kUs2jpBeFOHgaWr-_UKKl@raven.rmq.cloudamqp.com/rbqdrglr";
const AMQP_CHANNEL_NAME = "PAYMENTS_GATEWAY";
const AMQP_QUEUE_NAME = "PAYMENTS_QUEUE";

const TOKEN_ISSUER = "saas";
const AUTH_SECRET = "sgf89a7sdtf96astdfasdify87uldf";

module.exports = {
    apps: [{
        name: "plans-service",
        script: "./plans-service/index.js",
        watch: true,
        env: {
            NODE_ENV: "development",
            MYSQL_USER: "root",
            MYSQL_PASS: "123456789",
            MYSQL_HOST: "localhost",
            MYSQL_PORT: 3307,
            MYSQL_DB: "PlansDb",
            PORT: 3001,
            TOKEN_ISSUER,
            AUTH_SECRET
        },
        env_production: {
            NODE_ENV: "production"
        }
    }, {
        name: "subscriptions-service",
        script: "./subscriptions-service/index.js",
        watch: true,
        env: {
            NODE_ENV: "development",
            MYSQL_USER: "root",
            MYSQL_PASS: "123456789",
            MYSQL_HOST: "localhost",
            MYSQL_PORT: 3308,
            MYSQL_DB: "SubscriptionsDb",
            PORT: 3002,
            AMQP_CONNECTION_STRING,
            AMQP_CHANNEL_NAME,
            AMQP_QUEUE_NAME,
            TOKEN_ISSUER,
            AUTH_SECRET
        },
        env_production: {
            NODE_ENV: "production"
        }
    }, {
        name: "payments-service",
        script: "./payments-service/index.js",
        watch: true,
        env: {
            AMQP_CONNECTION_STRING,
            AMQP_CHANNEL_NAME,
            AMQP_QUEUE_NAME
        },
        env_production: {

        }
    }, {
        name: "auth-service",
        script: "./auth-service/index.js",
        watch: true,
        env: {
            NODE_ENV: "development",
            MYSQL_USER: "root",
            MYSQL_PASS: "123456789",
            MYSQL_HOST: "localhost",
            MYSQL_PORT: 3309,
            MYSQL_DB: "Users",
            PORT: 3003,
            TOKEN_ISSUER,
            AUTH_SECRET
        },
        env_production: {
            NODE_ENV: "production"
        }
    }]
}