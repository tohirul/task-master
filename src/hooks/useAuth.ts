import { useSelector } from "@/store/store";

export const useAuth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  return { isAuthenticated, token };
};
