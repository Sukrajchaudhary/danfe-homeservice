"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "../api/auth.service";
import type { LoginPayload, RegisterPayload } from "@/types/api";

export function useLogin() {
      return useMutation({
            mutationFn: (data: LoginPayload) => authService.login(data),
      });
}

export function useRegister() {
      return useMutation({
            mutationFn: (data: RegisterPayload) => authService.register(data),
      });
}

export function useSearchUsers() {
      return useMutation({
            mutationFn: ({
                  search,
                  page,
                  limit,
            }: {
                  search: string;
                  page?: number;
                  limit?: number;
            }) => authService.searchUsers(search, page, limit),
      });
}
