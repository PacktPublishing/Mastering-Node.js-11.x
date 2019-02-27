const PaymentsService = require("./PaymentsService");

const CONNECTION_STRING = process.env.AMQP_CONNECTION_STRING;
const CHANNEL_NAME = process.env.AMQP_CHANNEL_NAME;
const QUEUE_NAME = process.env.AMQP_QUEUE_NAME;

let service = new PaymentsService(CONNECTION_STRING, CHANNEL_NAME, QUEUE_NAME);
service.init();