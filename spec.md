# Tru Best Bond Cleaning Gold Coast

## Current State
A single-page React app with sections: Home, Services, About, Testimonials, FAQ, Contact. No routing exists. The app uses Tailwind CSS, shadcn/ui, and has branded imagery throughout.

## Requested Changes (Diff)

### Add
- React Router (react-router-dom) for client-side routing
- 12 Gold Coast suburb pages, each with:
  - Unique route: /bond-cleaning-[suburb-slug]
  - SEO-optimised title tag, meta description, canonical, OG tags per page
  - ~400 words of suburb-specific bond cleaning content in simple language (10-year-old level)
  - A relevant image with descriptive alt text for SEO
  - CTA buttons linking to contact / WhatsApp
  - Breadcrumb navigation back to home
- SuburbsSection component on the home page listing all 12 suburb links (cards or grid) to pass link equity
- A shared SuburbPage component template reused for all 12 suburbs
- react-helmet-async for per-page meta tag injection

Suburbs covered:
1. Surfers Paradise
2. Broadbeach
3. Southport
4. Robina
5. Burleigh Heads
6. Palm Beach
7. Bundall
8. Labrador
9. Nerang
10. Varsity Lakes
11. Coomera
12. Hope Island

### Modify
- App.tsx: wrap with BrowserRouter, add routes for each suburb page and home route
- Navbar.tsx: logo and nav links navigate correctly with react-router Link (home uses "/")
- index.html: keep existing global meta tags (Google verification etc.)
- Home page: add SuburbsSection after ServicesSection

### Remove
- Nothing removed

## Implementation Plan
1. Install react-router-dom and react-helmet-async
2. Create suburb data file with slugs, titles, descriptions, content, image paths
3. Create SuburbPage component with Helmet meta tags, hero image, 400-word content, CTA
4. Update App.tsx with BrowserRouter + Routes
5. Update Navbar to use react-router Link for internal navigation
6. Create SuburbsSection component for home page with 12 suburb card links
7. Add SuburbsSection to App.tsx home route
8. Validate and build
