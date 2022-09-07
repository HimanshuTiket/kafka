# Kafka Project

Welcome to the kafka dummy project. This project shows how to connect to kafka using the package `node-rdkafka`.

### Dependencies

```
node-rdkafka : npm i node-rdkafka
```

### Run Instructions

The project has two parts `producer` and `consumer`. The code for producer is in the `producer/index.js` and for consumer is in `consumer/index.js`
If you want to test the working of the project then follow below instructions.

1. Start kafka and zookeeper by the following command : `docker-compose up`
2. Start the producer : `npm run start:producer`
3. Start the consumer : `npm run start: consumer`

Hope this helps. Thanks
