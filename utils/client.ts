import { createClient, type RedisClientType } from "redis";

let client: RedisClientType | null = null;

export const initiatliseRedisClient = async () => {
  if (!client) {
    client = createClient();
    client.on("error", (error) => {
      console.error(error);
    });
    client.on("connect", () => {
      console.log("Redis connected");
    });
    try {
      await client.connect();
    } catch (error) {
      console.error(`failed to create connection : ${error}`);
    }
  }
  return client;
};
