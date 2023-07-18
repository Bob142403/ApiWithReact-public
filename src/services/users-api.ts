const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const usersApi = {
  getUsers: async () => {
    return await fetch(baseUrl).then((response) => response.json());
  },
  getUser: async (id: number) => {
    return await fetch(`${baseUrl}/${id}`).then((response) => response.json());
  },
};
