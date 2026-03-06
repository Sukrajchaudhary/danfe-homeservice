import api from "@/lib/api";
import type { Category } from "@/types/api";

export const categoryService = {
      async getAllCategories(
            page = 1,
            limit = 10
      ): Promise<{ docs: Category[]; totalDocs: number; totalPages: number }> {
            const response = await api.post("/categories", { page, limit });
            return (
                  response as unknown as {
                        data: { docs: Category[]; totalDocs: number; totalPages: number };
                  }
            ).data;
      },

      async getCategoryById(categoryId: string): Promise<Category> {
            const response = await api.get(`/categories/${categoryId}`);
            return (response as unknown as { data: Category }).data;
      },
};
