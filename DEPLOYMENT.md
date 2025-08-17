# Deployment Guide for Matteo Leaf Links

## Overview
This guide explains how to deploy your React application to GitHub Pages and other static hosting services, and how to fix common issues like blank pages.

## Why the Blank Page Issue Occurs

The blank page issue happens because:
1. **React Router's BrowserRouter** expects server-side routing support
2. **Static hosts** (like GitHub Pages) only serve static files
3. When users visit a route like `/about`, the server looks for a file at that path
4. Since it's a client-side route, the file doesn't exist, resulting in a 404 or blank page

## Solutions Implemented

### 1. HashRouter (Primary Solution)
- **What it does**: Uses URL hashes (`#`) instead of regular paths
- **Example**: `/about` becomes `/#/about`
- **Why it works**: Hash routes are handled entirely by the browser, not the server
- **File changed**: `src/App.tsx`

### 2. 404.html Fallback (GitHub Pages Specific)
- **What it does**: Redirects users to the main page when they hit a non-existent route
- **File created**: `public/404.html`

### 3. Vite Base Path Configuration
- **What it does**: Sets the correct base path for GitHub Pages deployment
- **File**: `vite.config.ts` (already configured)

## Deployment Steps

### GitHub Pages Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages**:
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select the `gh-pages` branch
   - Set folder to `/ (root)`

### Other Static Hosts

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your hosting service

## Testing Locally

### Development Mode
```bash
npm run dev
```

### Production Build Test
```bash
npm run build
npm run preview
```

## Troubleshooting

### Still Getting Blank Pages?

1. **Check the browser console** for JavaScript errors
2. **Verify the build output** in the `dist` folder
3. **Ensure HashRouter is being used** (check `src/App.tsx`)
4. **Check the 404.html file** exists in the `public` folder

### Common Issues

1. **Wrong base path**: Make sure `vite.config.ts` has the correct repository name
2. **Missing 404.html**: This file helps with GitHub Pages routing
3. **Build errors**: Check the console output during `npm run build`

## File Structure After Deployment

```
dist/
├── index.html          # Main HTML file
├── 404.html           # 404 redirect (GitHub Pages)
└── assets/            # Built JavaScript and CSS
    ├── index-*.css
    └── index-*.js
```

## Why These Changes Work

### HashRouter vs BrowserRouter
- **BrowserRouter**: `/about` → Server looks for `/about` file (doesn't exist on static hosts)
- **HashRouter**: `/#/about` → Browser handles routing, server only serves `index.html`

### 404.html Fallback
- Catches any routes that GitHub Pages can't find
- Redirects users back to the main application
- Provides a better user experience

### Base Path Configuration
- Ensures assets are loaded from the correct paths
- Matches your GitHub Pages repository structure

## Alternative Solutions (Advanced)

If you prefer to keep BrowserRouter, you can:

1. **Use a custom server** (not possible on GitHub Pages)
2. **Implement server-side rendering** (complex, not needed for simple sites)
3. **Use a different hosting service** that supports SPA routing

## Conclusion

The HashRouter solution is the most reliable and simplest approach for static hosting. It ensures your React application works correctly on GitHub Pages and other static hosts while maintaining all the routing functionality you need.
