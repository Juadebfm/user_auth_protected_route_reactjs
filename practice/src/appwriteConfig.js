import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64bb11ab25b346f5a339");

export const account = new Account(client);

export default client;
