import PocketBase from "pocketbase";
const url = import.meta.env.VITE_POCKETBASE_URL;

const client = new PocketBase(url);
client.autoCancellation(false);

export default client;
