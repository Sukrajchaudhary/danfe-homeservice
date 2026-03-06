"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import type {
      UpdateUserPayload,
      UpdateProfilePhotosPayload,
      UpdateAboutMePayload,
      AddCertificatePayload,
      AddPortfolioPayload,
      UpdateAddressPayload,
      ChangePasswordPayload,
} from "@/types/api";

export function useMyProfile() {
      return useQuery({
            queryKey: ["myProfile"],
            queryFn: () => userService.getMyProfile(),
            retry: 1,
      });
}

export function useUserById(userId: string) {
      return useQuery({
            queryKey: ["user", userId],
            queryFn: () => userService.getUserById(userId),
            enabled: !!userId,
      });
}

export function useUpdateUser() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  userId,
                  data,
            }: {
                  userId: string;
                  data: UpdateUserPayload;
            }) => userService.updateUser(userId, data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["myProfile"] });
            },
      });
}

export function useUpdateProfilePhotos() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  userId,
                  data,
            }: {
                  userId: string;
                  data: UpdateProfilePhotosPayload;
            }) => userService.updateProfilePhotos(userId, data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["myProfile"] });
            },
      });
}

export function useUpdateAboutMe() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  userId,
                  data,
            }: {
                  userId: string;
                  data: UpdateAboutMePayload;
            }) => userService.updateAboutMe(userId, data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["myProfile"] });
            },
      });
}

export function useAddCertificate() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  userId,
                  data,
            }: {
                  userId: string;
                  data: AddCertificatePayload;
            }) => userService.addCertificate(userId, data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["myProfile"] });
            },
      });
}

export function useRemoveCertificate() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  userId,
                  certificateId,
            }: {
                  userId: string;
                  certificateId: string;
            }) => userService.removeCertificate(userId, certificateId),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["myProfile"] });
            },
      });
}

export function useAddPortfolioProject() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  userId,
                  data,
            }: {
                  userId: string;
                  data: AddPortfolioPayload;
            }) => userService.addPortfolioProject(userId, data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["myProfile"] });
            },
      });
}

export function useUpdatePortfolioProject() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  userId,
                  projectId,
                  data,
            }: {
                  userId: string;
                  projectId: string;
                  data: Partial<AddPortfolioPayload>;
            }) => userService.updatePortfolioProject(userId, projectId, data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["myProfile"] });
            },
      });
}

export function useRemovePortfolioProject() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  userId,
                  projectId,
            }: {
                  userId: string;
                  projectId: string;
            }) => userService.removePortfolioProject(userId, projectId),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["myProfile"] });
            },
      });
}

export function useUpdateAddress() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  userId,
                  data,
            }: {
                  userId: string;
                  data: UpdateAddressPayload;
            }) => userService.updateAddress(userId, data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["myProfile"] });
            },
      });
}

export function useTrialStatus(userId: string) {
      return useQuery({
            queryKey: ["trialStatus", userId],
            queryFn: () => userService.getTrialStatus(userId),
            enabled: !!userId,
      });
}

export function useChangePassword() {
      return useMutation({
            mutationFn: ({
                  userId,
                  data,
            }: {
                  userId: string;
                  data: ChangePasswordPayload;
            }) => userService.changePassword(userId, data),
      });
}
