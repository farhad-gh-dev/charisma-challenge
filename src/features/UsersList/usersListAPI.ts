import type { User } from "./types";

const usersData = [
  { id: 1, name: "johnd", email: "johnd@gmail.com" },
  { id: 2, name: "mor_2314", email: "mor_2314@gmail.com" },
  { id: 3, name: "kevinryan", email: "kevinryan@gmail.com" },
  { id: 4, name: "donero", email: "donero@gmail.com" },
  { id: 5, name: "derek", email: "derek@gmail.com" },
  { id: 6, name: "david_r", email: "david_r@gmail.com" },
  { id: 7, name: "snyder", email: "snyder@gmail.com" },
  { id: 8, name: "hopkins", email: "hopkins@gmail.com" },
  { id: 9, name: "kate_h", email: "kate_h@gmail.com" },
  { id: 10, name: "jimmie_k", email: "jimmie_k@gmail.com" },
];

export function fetchUsers() {
  return new Promise<{ data: User[] }>((resolve) =>
    resolve({ data: usersData })
  );
}
