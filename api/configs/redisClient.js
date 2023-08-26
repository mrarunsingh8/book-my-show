const redis = require('redis');

const redisClient = redis.createClient(6379);

redisClient.on("error", (error) => console.error(`Error : ${error}`));

module.exports = redisClient;