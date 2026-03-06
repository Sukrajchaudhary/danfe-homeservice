import api, { setAuthToken } from "@/lib/api";
import type {
      AuthResponse,
      LoginPayload,
      RegisterPayload,
      User,
      ApiResponse,
} from "@/types/api";

export const authService = {
      async register(data: RegisterPayload): Promise<User> {
            const response = await api.post<ApiResponse<User>>("/api/auth/register", data, {
                  baseURL: "",
            });
            return response.data;
      },

      async login(data: LoginPayload): Promise<AuthResponse> {
            const response = await api.post<ApiResponse<AuthResponse>>("/api/auth/login", data, {
                  baseURL: "",
            });
            const result = response.data;

            if (result.token) {
                  setAuthToken(result.token);
                  localStorage.setItem("userId", result.user._id);
            }
            return result;
      },

      async searchUsers(
            search: string,
            page = 1,
            limit = 10
      ): Promise<{ docs: User[]; totalDocs: number; totalPages: number }> {
            const response = await api.post<ApiResponse<{ docs: User[]; totalDocs: number; totalPages: number }>>("/users/getUsers", {
                  search,
                  page,
                  limit,
            });
            return response.data;
      },
};
