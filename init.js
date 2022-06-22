import { Appwrite } from 'appwrite';
export const sdk = new Appwrite();

sdk
  .setEndpoint('http://localhost/v1') // Replace this with your endpoint
  .setProject('62b1e74226d5eec538df'); // Replace this with your ProjectID

