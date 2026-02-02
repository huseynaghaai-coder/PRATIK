const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Xəta baş verdi");
  return res.json();
};
