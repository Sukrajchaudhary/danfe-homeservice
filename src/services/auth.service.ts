import api, { setAuthToken } from "@/lib/api";
import type {
      AuthResponse,
      LoginPayload,
      RegisterPayload,
      User,
} from "@/types/api";

export const authService = {
      async register(data: RegisterPayload): Promise<{ user: User }> {
            const response = await api.post("/api/auth/register", data, {
                  baseURL: "",
            });
            return response as unknown as { user: User };
      },

      async login(data: LoginPayload): Promise<AuthResponse> {
            const response = await api.post("/api/auth/login", data, {
                  baseURL: "",
            });
            const result = response as unknown as { data: AuthResponse };
            // We still store token in localStorage for client-side usage (hybrid approach)
            // The server-side route sets the httpOnly cookie for middleware/SSR
            if (result.data?.token) {
                  setAuthToken(result.data.token);
                  localStorage.setItem("userId", result.data.user._id);
            }
            return result.data;
      },

      async searchUsers(
            search: string,
            page = 1,
            limit = 10
      ): Promise<{ users: User[] }> {
            const response = await api.post("/users/getUsers", {
                  search,
                  page,
                  limit,
            });
            return response as unknown as { users: User[] };
      },
};
