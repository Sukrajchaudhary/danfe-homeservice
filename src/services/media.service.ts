import api from "@/lib/api";
import type { Media } from "@/types/api";

export const mediaService = {
      async getAllMedia(): Promise<Media[]> {
            const response = await api.get("/media");
            return (response as unknown as { data: Media[] }).data;
      },
};
