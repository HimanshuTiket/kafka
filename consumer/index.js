import Kafka from "node-rdkafka";
import eventType from "../eventType.js";

var consumer = new Kafka.KafkaConsumer(
  {
    "group.id": "kafka",
    "metadata.broker.list": "localhost:9092",
  },
  {}
);

const TOPICS = ["test"];

consumer.connect({}, (err, data) => {
  if (err) {
    console.log("Error connnecting to kafka : ", err);
    return;
  }

  console.log("Connection to kafka successful");
});

consumer
  .on("ready", () => {
    console.log("Consumer Ready !");
    consumer.subscribe(TOPICS);
    consumer.consume();
  })
  .on("data", function (rawData) {
    const data = rawData.value.toString();

    console.log(`received message: ${data}`);
  });
