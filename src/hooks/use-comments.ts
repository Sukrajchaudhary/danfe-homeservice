"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { commentService } from "@/services/comment.service";
import type { CreateCommentPayload } from "@/types/api";

export function useCommentsByBlog(blogId: string, page = 1, limit = 10) {
      return useQuery({
            queryKey: ["comments", blogId, page, limit],
            queryFn: () => commentService.getCommentsByBlog(blogId, page, limit),
            enabled: !!blogId,
      });
}

export function useCommentById(commentId: string) {
      return useQuery({
            queryKey: ["comment", commentId],
            queryFn: () => commentService.getCommentById(commentId),
            enabled: !!commentId,
      });
}

export function useCreateComment() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: (data: CreateCommentPayload) =>
                  commentService.createComment(data),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["comments"] });
            },
      });
}

export function useUpdateComment() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: ({
                  commentId,
                  content,
            }: {
                  commentId: string;
                  content: string;
            }) => commentService.updateComment(commentId, content),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["comments"] });
            },
      });
}

export function useDeleteComment() {
      const queryClient = useQueryClient();
      return useMutation({
            mutationFn: (commentId: string) =>
                  commentService.deleteComment(commentId),
            onSuccess: () => {
                  queryClient.invalidateQueries({ queryKey: ["comments"] });
            },
      });
}
