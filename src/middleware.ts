// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/', // Marketing/landing page - public
  '/auth/sign-in(.*)', // Clerk sign-in and OAuth callbacks
  '/auth/sign-up(.*)', // Clerk sign-up and OAuth callbacks
  '/forgot-password(.*)', // Password reset
  '/verify-email(.*)', // Email verification
  '/api/webhooks/(.*)', // Webhooks (e.g., Clerk user sync) - must be public
]);

export default clerkMiddleware(async (auth, req) => {
  // Protect all non-public routes (e.g., /dashboard, /patient-registration)
  if (!isPublicRoute(req)) {
    await auth.protect(); // Redirects unauthenticated users to /auth/sign-in
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Run for all API routes (including webhooks)
    '/(api|trpc)(.*)',
  ],
};