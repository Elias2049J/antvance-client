export async function getUsers() {
  const res = await fetch("http://localhost:8080/admin/users");
  return await res.json();
}