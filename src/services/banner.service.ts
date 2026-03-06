import api from "@/lib/api";
import type { Banner } from "@/types/api";

export const bannerService = {
      async getAllBanners(
            page = 1,
            limit = 10
      ): Promise<{ docs: Banner[]; totalDocs: number; totalPages: number }> {
            const response = await api.get(`/banners?page=${page}&limit=${limit}`);
            return (
                  response as unknown as {
                        data: { docs: Banner[]; totalDocs: number; totalPages: number };
                  }
            ).data;
      },

      async getBannerById(bannerId: string): Promise<Banner> {
            const response = await api.get(`/banners/${bannerId}`);
            return (response as unknown as { data: Banner }).data;
      },

      async getBannerBySlug(slug: string): Promise<Banner> {
            const response = await api.get(`/banners/slug/${slug}`);
            return (response as unknown as { data: Banner }).data;
      },
};
