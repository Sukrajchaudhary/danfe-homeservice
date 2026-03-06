import api from "@/lib/api";
import type { Plan } from "@/types/api";

export const planService = {
      async getActivePlans(): Promise<Plan[]> {
            const response = await api.get("/plans/active");
            return (response as unknown as { data: Plan[] }).data;
      },

      async getPlansByType(type: string): Promise<Plan[]> {
            const response = await api.get(`/plans/type/${type}`);
            return (response as unknown as { data: Plan[] }).data;
      },

      async getPlanById(planId: string): Promise<Plan> {
            const response = await api.get(`/plans/${planId}`);
            return (response as unknown as { data: Plan }).data;
      },
};
