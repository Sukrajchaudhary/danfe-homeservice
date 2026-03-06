import api from "@/lib/api";
import type { CreateQueryPayload, ContactQuery } from "@/types/api";

export const queryService = {
      async createQuery(data: CreateQueryPayload): Promise<ContactQuery> {
            const response = await api.post("/queries", data);
            return (response as unknown as { data: ContactQuery }).data;
      },
};
