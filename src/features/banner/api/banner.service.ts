import api from "@/lib/api";
import type { Banner, ApiResponse, PaginatedResponse } from "@/types/api";

export const bannerService = {
      async getAllBanners(
            page = 1,
            limit = 10
      ): Promise<{ docs: Banner[]; totalDocs: number; totalPages: number }> {
            const response = await api.get<PaginatedResponse<Banner>>(`/banners?page=${page}&limit=${limit}`);
            return response.data;
      },

      async getBannerById(bannerId: string): Promise<Banner> {
            const response = await api.get<ApiResponse<Banner>>(`/banners/${bannerId}`);
            return response.data;
      },

      async getBannerBySlug(slug: string): Promise<Banner> {
            const response = await api.get<ApiResponse<Banner>>(`/banners/slug/${slug}`);
            return response.data;
      },
};
