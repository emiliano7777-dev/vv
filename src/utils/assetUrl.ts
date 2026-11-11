/**
 * Utility to safely resolve static asset URLs across local dev,
 * production builds, and hosting platforms like Vercel.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  // If it's an external URL (e.g. Unsplash), return directly
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Strip leading slash to prevent double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
