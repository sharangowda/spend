import PocketBase from "pocketbase";

const client = new PocketBase("http://127.0.0.1:8090");
client.autoCancellation(false);

export default client;
