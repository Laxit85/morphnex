# Manual Image Management

This folder (`public/images/`) is the easiest and most convenient place to store your local, manually uploaded images.

### How to use your own images:

1. Copy your PC image files into this `public/images` directory (e.g., `my-hero-image.jpg`).
2. Open any `.tsx` component file in the code (e.g., `src/app/pages/Home.tsx`).
3. Find the image URL string you want to change (which might currently look like `"https://images.unsplash.com/..."`).
4. Replace that long URL string with simply: `"/images/my-hero-image.jpg"`.

Because this folder is part of the `public` directory, Vite automatically hosts its contents at the root level (`/images/...`), meaning you don't have to write any complex `import` statements at the top of your React files!
