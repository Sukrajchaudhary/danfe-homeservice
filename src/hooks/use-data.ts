"use client";

import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/services/category.service";
import { bannerService } from "@/services/banner.service";
import { testimonialService } from "@/services/testimonial.service";
import { mediaService } from "@/services/media.service";
import { settingsService } from "@/services/settings.service";
import { planService } from "@/services/plan.service";

// Categories
export function useCategories(page = 1, limit = 10) {
      return useQuery({
            queryKey: ["categories", page, limit],
            queryFn: () => categoryService.getAllCategories(page, limit),
      });
}

export function useCategoryById(categoryId: string) {
      return useQuery({
            queryKey: ["category", categoryId],
            queryFn: () => categoryService.getCategoryById(categoryId),
            enabled: !!categoryId,
      });
}

// Banners
export function useBanners(page = 1, limit = 10) {
      return useQuery({
            queryKey: ["banners", page, limit],
            queryFn: () => bannerService.getAllBanners(page, limit),
      });
}

export function useBannerById(bannerId: string) {
      return useQuery({
            queryKey: ["banner", bannerId],
            queryFn: () => bannerService.getBannerById(bannerId),
            enabled: !!bannerId,
      });
}

export function useBannerBySlug(slug: string) {
      return useQuery({
            queryKey: ["banner", "slug", slug],
            queryFn: () => bannerService.getBannerBySlug(slug),
            enabled: !!slug,
      });
}

// Testimonials
export function useTestimonials(page = 1, limit = 10) {
      return useQuery({
            queryKey: ["testimonials", page, limit],
            queryFn: () => testimonialService.getAllTestimonials(page, limit),
      });
}

// Media
export function useMedia() {
      return useQuery({
            queryKey: ["media"],
            queryFn: () => mediaService.getAllMedia(),
      });
}

// Settings
export function useSettings() {
      return useQuery({
            queryKey: ["settings"],
            queryFn: () => settingsService.getAllSettings(),
            staleTime: 5 * 60 * 1000,
      });
}

export function useCompanyLogos() {
      return useQuery({
            queryKey: ["settings", "logos"],
            queryFn: () => settingsService.getCompanyLogos(),
            staleTime: 5 * 60 * 1000,
      });
}

export function useContactInfo() {
      return useQuery({
            queryKey: ["settings", "contact"],
            queryFn: () => settingsService.getContactInfo(),
            staleTime: 5 * 60 * 1000,
      });
}

export function useSocialMediaLinks() {
      return useQuery({
            queryKey: ["settings", "socialMedia"],
            queryFn: () => settingsService.getSocialMediaLinks(),
            staleTime: 5 * 60 * 1000,
      });
}

// Plans
export function useActivePlans() {
      return useQuery({
            queryKey: ["plans", "active"],
            queryFn: () => planService.getActivePlans(),
      });
}

export function usePlansByType(type: string) {
      return useQuery({
            queryKey: ["plans", "type", type],
            queryFn: () => planService.getPlansByType(type),
            enabled: !!type,
      });
}

export function usePlanById(planId: string) {
      return useQuery({
            queryKey: ["plan", planId],
            queryFn: () => planService.getPlanById(planId),
            enabled: !!planId,
      });
}
