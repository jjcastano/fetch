var redis = require('redis');
var url   = require('url');

var redisConfig = url.parse(process.env.REDISTOGO_URL);
var redisClient = redis.createClient(redisConfig.port, redisConfig.hostname);
var redisAuth   = redisConfig.auth.split(':');

redisClient.auth(redisAuth[1]);

module.exports = redisClient;