
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hello-world-vite-app/',    REPO-NAME
  plugins: [react()],
});
c. Update package.json
"homepage": "https://YOUR-USERNAME.github.io/REPO-NAME/",
"scripts": {
  "lint": "eslint .",
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

