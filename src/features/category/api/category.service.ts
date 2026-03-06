import api from "@/lib/api";
import type { Category, ApiResponse, PaginatedResponse } from "@/types/api";

export const categoryService = {
      async getAllCategories(
            page = 1,
            limit = 10
      ): Promise<{ docs: Category[]; totalDocs: number; totalPages: number }> {
            const response = await api.post<PaginatedResponse<Category>>("/categories", { page, limit });
            return response.data;
      },

      async getCategoryById(categoryId: string): Promise<Category> {
            const response = await api.get<ApiResponse<Category>>(`/categories/${categoryId}`);
            return response.data;
      },
};
