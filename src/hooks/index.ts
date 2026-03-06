// Auth hooks
export { useLogin, useRegister, useSearchUsers } from "./use-auth";

// User profile hooks
export {
      useMyProfile,
      useUserById,
      useUpdateUser,
      useUpdateProfilePhotos,
      useUpdateAboutMe,
      useAddCertificate,
      useRemoveCertificate,
      useAddPortfolioProject,
      useUpdatePortfolioProject,
      useRemovePortfolioProject,
      useUpdateAddress,
      useTrialStatus,
      useChangePassword,
} from "./use-user";

// Blog hooks
export {
      useBlogs,
      useBlogById,
      useBlogBySlug,
      useLikeBlog,
      useUnlikeBlog,
      useLikedUsers,
      useMyLikedBlogs,
} from "./use-blogs";

// Comment hooks
export {
      useCommentsByBlog,
      useCommentById,
      useCreateComment,
      useUpdateComment,
      useDeleteComment,
} from "./use-comments";

// Trip hooks
export {
      useTrips,
      useFeaturedTrips,
      useTripsByCategory,
      useTripsByPriceRange,
      useTripBySlug,
      useTripById,
} from "./use-trips";

// Notification hooks
export {
      useNotifications,
      useUnreadCount,
      useMarkAllAsRead,
      useMarkAsRead,
      useDeleteNotification,
} from "./use-notifications";

// Data hooks (categories, banners, testimonials, media, settings, plans)
export {
      useCategories,
      useCategoryById,
      useBanners,
      useBannerById,
      useBannerBySlug,
      useTestimonials,
      useMedia,
      useSettings,
      useCompanyLogos,
      useContactInfo,
      useSocialMediaLinks,
      useActivePlans,
      usePlansByType,
      usePlanById,
} from "./use-data";

// Query & Location hooks
export {
      useCreateQuery,
      useMyLocations,
      useLocationById,
      useCreateLocation,
      useUpdateLocation,
      useDeleteLocation,
} from "./use-queries";
