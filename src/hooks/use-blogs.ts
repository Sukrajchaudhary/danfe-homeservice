"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { blogService } from "@/services/blog.service";

export function useBlogs(page = 1, limit = 10) {
      return useQuery({
            queryKey: ["blogs", page, limit],
            queryFn: () => blogService.getAllBlogs(page, limit),
      });
}

export function useBlogById(blogId: string) {
      return useQuery({
            queryKey: ["blog", blogId],
            queryFn: () => blogService.getBlogById(blogId),
            enabled: !!blogId,
      });
}

export function useBlogBySlug(slug: string) {
      return useQuery({
            queryKey: ["blog", "slug", slug],
            queryFn: () => blogService.getBlogBySlug(slug),
            enabled: !!slug,
      });
}

export function useLikeBlog() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: (blogId: string) => blogService.likeBlog(blogId),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["blogs"] });
                  queryClient.invalidateQueries({ queryKey: ["myLikedBlogs"] });
            },
      });
}

export function useUnlikeBlog() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: (blogId: string) => blogService.unlikeBlog(blogId),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["blogs"] });
                  queryClient.invalidateQueries({ queryKey: ["myLikedBlogs"] });
            },
      });
}

export function useLikedUsers(blogId: string) {
      return useQuery({
            queryKey: ["blogLikedUsers", blogId],
            queryFn: () => blogService.getLikedUsers(blogId),
            enabled: !!blogId,
      });
}

export function useMyLikedBlogs() {
      return useQuery({
            queryKey: ["myLikedBlogs"],
            queryFn: () => blogService.getMyLikedBlogs(),
      });
}
