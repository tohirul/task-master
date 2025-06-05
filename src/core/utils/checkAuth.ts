// utils/auth.ts
export function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Unauthorized");
  return token;
}
