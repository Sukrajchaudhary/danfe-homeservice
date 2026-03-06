export interface ApiResponse<T = unknown> {
      success: boolean;
      message: string;
      data: T;
}

export interface PaginatedResponse<T = unknown> {
      success: boolean;
      message: string;
      data: {
            docs: T[];
            totalDocs: number;
            totalPages: number;
            page: number;
            limit: number;
            hasNextPage: boolean;
            hasPrevPage: boolean;
      };
}

export interface User {
      _id: string;
      email: string;
      username?: string;
      fullName: string;
      mobileNumber?: string;
      accountType?: string;
      role: string;
      profilePicture?: string;
      coverPhoto?: string;
      professionalTitle?: string;
      bio?: string;
      skills?: string[];
      certificates?: Certificate[];
      portfolio?: PortfolioProject[];
      address?: Address;
      isActive?: boolean;
      isBlocked?: boolean;
      isPaid?: boolean;
      trialEndDate?: string;
      createdAt: string;
      updatedAt: string;
}

export interface Certificate {
      _id: string;
      name: string;
      issuingOrganization: string;
      issueDate: string;
      credentialUrl?: string;
}

export interface PortfolioProject {
      _id: string;
      title: string;
      description: string;
      skills: string[];
      deliverables: string[];
      coverPhoto?: string;
      projectUrl?: string;
      startDate: string;
      endDate?: string;
}

export interface Address {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
}

export interface Blog {
      _id: string;
      title: string;
      slug: string;
      content: string;
      excerpt?: string;
      coverImage?: string;
      author: string | User;
      category?: string | Category;
      tags?: string[];
      isPublished: boolean;
      likes?: string[];
      likesCount?: number;
      commentsCount?: number;
      createdAt: string;
      updatedAt: string;
}

export interface Category {
      _id: string;
      name: string;
      slug?: string;
      description?: string;
      image?: string;
      isActive?: boolean;
      createdAt: string;
      updatedAt: string;
}

export interface Comment {
      _id: string;
      blog: string;
      user: string | User;
      content: string;
      parentComment?: string | null;
      replies?: Comment[];
      createdAt: string;
      updatedAt: string;
}

export interface Trip {
      _id: string;
      title: string;
      slug: string;
      description: string;
      shortDescription?: string;
      coverImage?: string;
      images?: string[];
      price: number;
      discountPrice?: number;
      duration: string;
      category?: string | Category;
      location?: string;
      highlights?: string[];
      itinerary?: Itinerary[];
      inclusions?: string[];
      exclusions?: string[];
      isFeatured?: boolean;
      isPublished?: boolean;
      rating?: number;
      reviewsCount?: number;
      maxGroupSize?: number;
      difficulty?: string;
      startDates?: string[];
      createdAt: string;
      updatedAt: string;
}

export interface Itinerary {
      day: number;
      title: string;
      description: string;
      activities?: string[];
}

export interface Banner {
      _id: string;
      title: string;
      slug: string;
      subtitle?: string;
      image: string;
      link?: string;
      isActive?: boolean;
      order?: number;
      createdAt: string;
      updatedAt: string;
}

export interface Notification {
      _id: string;
      user: string;
      title: string;
      message: string;
      type?: string;
      isRead: boolean;
      createdAt: string;
      updatedAt: string;
}

export interface ContactQuery {
      _id: string;
      name: string;
      email: string;
      phone?: string;
      subject: string;
      message: string;
      status?: string;
      createdAt: string;
      updatedAt: string;
}

export interface Testimonial {
      _id: string;
      name: string;
      title?: string;
      content: string;
      rating?: number;
      avatar?: string;
      isActive?: boolean;
      createdAt: string;
      updatedAt: string;
}

export interface Media {
      _id: string;
      url: string;
      type: string;
      title?: string;
      description?: string;
      size?: number;
      createdAt: string;
      updatedAt: string;
}

export interface Settings {
      _id: string;
      siteName?: string;
      siteDescription?: string;
      logos?: Logo[];
      contact?: ContactInfo;
      socialMedia?: SocialMedia[];
}

export interface Logo {
      _id: string;
      name: string;
      url: string;
      type?: string;
}

export interface ContactInfo {
      email?: string;
      phone?: string;
      address?: string;
      mapUrl?: string;
}

export interface SocialMedia {
      _id: string;
      platform: string;
      url: string;
      icon?: string;
}

export interface Plan {
      _id: string;
      name: string;
      type: string;
      price: number;
      duration: string;
      features: string[];
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
}

export interface Location {
      _id: string;
      user?: string;
      latitude: number;
      longitude: number;
      address: string;
      createdAt: string;
      updatedAt: string;
}

export interface AuthResponse {
      token: string;
      user: User;
}

export interface LoginPayload {
      email: string;
      password: string;
}

export interface RegisterPayload {
      email: string;
      username?: string;
      password: string;
      fullName: string;
      mobileNumber?: string;
      accountType?: string;
      role?: string;
}

export interface UpdateUserPayload {
      fullName?: string;
      mobileNumber?: string;
}

export interface UpdateProfilePhotosPayload {
      profilePicture?: string;
      coverPhoto?: string;
}

export interface UpdateAboutMePayload {
      professionalTitle?: string;
      bio?: string;
      skills?: string[];
}

export interface AddCertificatePayload {
      name: string;
      issuingOrganization: string;
      issueDate: string;
      credentialUrl?: string;
}

export interface AddPortfolioPayload {
      title: string;
      description: string;
      skills: string[];
      deliverables: string[];
      coverPhoto?: string;
      projectUrl?: string;
      startDate: string;
      endDate?: string;
}

export interface UpdateAddressPayload {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
}

export interface ChangePasswordPayload {
      oldPassword: string;
      newPassword: string;
      confirmPassword: string;
}

export interface CreateCommentPayload {
      blog: string;
      content: string;
      parentComment?: string | null;
}

export interface CreateQueryPayload {
      name: string;
      email: string;
      phone?: string;
      subject: string;
      message: string;
}

export interface CreateLocationPayload {
      latitude: number;
      longitude: number;
      address: string;
}

export interface UpdateLocationPayload {
      latitude?: number;
      longitude?: number;
      address?: string;
}
