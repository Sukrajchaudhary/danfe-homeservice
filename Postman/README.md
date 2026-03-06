# Japan Project - Postman Collection

## Overview
Complete API collection for the Japan Project, organized by **Admin** and **User** route prefixes.

## Route Structure
```
/api/v1/admin/*  → Admin routes (requires admin authentication)
/api/v1/user/*   → User routes (public + authenticated user routes)
```

## Files

| File | Description |
|------|-------------|
| `Complete_API_Collection.postman_collection.json` | All API endpoints organized by Admin/User |
| `User_API_Collection.postman_collection.json` | **Standalone User API** — all user routes with base URL pre-configured |
| `Environment_Localhost.postman_environment.json` | Local development environment |
| `Environment_UAT.postman_environment.json` | UAT/staging environment |
| `Environment_User_API.postman_environment.json` | User API environment (Render deployment) |

## Setup

### Option A: Complete Collection (Admin + User)
1. **Import Collection**: Import `Complete_API_Collection.postman_collection.json` into Postman
2. **Import Environment**: Import `Environment_Localhost.postman_environment.json` or `Environment_UAT.postman_environment.json`
3. **Auto-Login**: The collection has a pre-request script that auto-authenticates using admin credentials

### Option B: User API Only (Recommended for Frontend Testing)
1. **Import Collection**: Import `User_API_Collection.postman_collection.json` into Postman
2. **Import Environment**: Import `Environment_User_API.postman_environment.json`
3. **Base URL**: Pre-configured to `https://organization-71j0.onrender.com/api/v1/user`
4. **Auto-Login**: The collection auto-authenticates using user credentials and stores `userToken`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `apiUrl` | Base API URL (e.g., `http://localhost:8080/api`) |
| `adminBaseUrl` | Admin route base (e.g., `http://localhost:8080/api/v1/admin`) |
| `userBaseUrl` | User route base (e.g., `http://localhost:8080/api/v1/user`) |
| `adminToken` | JWT token for admin (auto-set on login) |
| `userToken` | JWT token for user (auto-set on login) |
| `adminEmail` | Admin login email |
| `adminPassword` | Admin login password |

### Resource IDs (auto-populated via test scripts)
`adminUserId`, `userId`, `blogId`, `categoryId`, `tripId`, `bannerId`, `commentId`, `queryId`, `testimonialId`, `notificationId`, `mediaId`, `settingsId`, `planId`, `locationId`, `logoId`, `socialMediaId`, `projectId`, `certificateId`

## Folder Structure

### Admin Routes (`/api/v1/admin`)
- **Auth (Admin)** - Admin login
- **Users (Admin)** - User management (get all, by role, upgrade, block/unblock, activate/deactivate, make/revoke paid, delete, device logs)
- **Blogs (Admin)** - Blog CRUD + publish/unpublish
- **Categories (Admin)** - Category CRUD + delete
- **Media (Admin)** - Media upload + delete
- **Testimonials (Admin)** - Testimonial CRUD + delete
- **Banners (Admin)** - Banner CRUD + delete
- **Notifications (Admin)** - Get all + delete
- **Queries (Admin)** - Query management (get all, by ID, update, delete)
- **Dashboard (Admin)** - Stats, monthly/yearly/range registrations
- **Trips (Admin)** - Trip CRUD + publish/unpublish
- **Settings (Admin)** - Logos, contact info, social media CRUD
- **Plans (Admin)** - Plan CRUD + toggle status
- **Locations (Admin)** - Get/delete user locations

### User Routes (`/api/v1/user`)
- **Auth (User)** - Registration, login, search users
- **Users (User)** - Profile, update, photos, about me, certificates, portfolio, address, trial status, change password
- **Blogs (User)** - Get blogs (all, by ID, by slug), like/unlike, liked users
- **Blog Likes (User)** - Like/unlike via blog-likes route
- **Comments (User)** - Comment CRUD on blogs
- **Categories (User)** - Get categories (public)
- **Media (User)** - Get media (public)
- **Testimonials (User)** - Get testimonials (public)
- **Banners (User)** - Get banners (public)
- **Notifications (User)** - My notifications, unread count, mark read
- **Queries (User)** - Submit contact queries (public)
- **Trips (User)** - Get trips (all, featured, by category, price range, slug, ID)
- **Settings (User)** - Get settings, logos, contact, social media (public)
- **Plans (User)** - Get active plans, by type, by ID (public)
- **Locations (User)** - Location CRUD (authenticated)
