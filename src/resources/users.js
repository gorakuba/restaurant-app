import { v4 as uuidv4 } from "uuid";

export const users = [
  { id: uuidv4(), name: "Kuba", password: "123", loginStatus: false },
  { id: uuidv4(), name: "Stefan", password: "456", loginStatus: false },
];
