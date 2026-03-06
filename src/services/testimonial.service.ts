import api from "@/lib/api";
import type { Testimonial } from "@/types/api";

export const testimonialService = {
      async getAllTestimonials(
            page = 1,
            limit = 10
      ): Promise<{
            docs: Testimonial[];
            totalDocs: number;
            totalPages: number;
      }> {
            const response = await api.post("/testimonial", { page, limit });
            return (
                  response as unknown as {
                        data: {
                              docs: Testimonial[];
                              totalDocs: number;
                              totalPages: number;
                        };
                  }
            ).data;
      },
};
