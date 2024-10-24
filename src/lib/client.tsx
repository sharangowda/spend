import PocketBase from "pocketbase";

const client = new PocketBase("https://fair-differ.pockethost.io");
client.autoCancellation(false);

export default client;
