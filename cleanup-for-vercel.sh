#!/bin/bash

# Script to clean up Replit-specific files and telemetry code before deploying to Vercel

echo "Starting cleanup for Vercel deployment..."

# Remove Replit config files
echo "Removing Replit configuration files..."
rm -f .replit
rm -f replit.nix
rm -rf .replit/

# Update vite.config.ts to remove Replit-specific plugins
echo "Updating vite.config.ts..."
cat > vite.config.ts << 'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
EOF

# Create .gitignore file to exclude node_modules and other unnecessary files
echo "Creating .gitignore file..."
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
/.pnp
.pnp.js

# Production build files
/dist/
/client/dist/
/build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea/
.vscode/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Operating System Files
.DS_Store
Thumbs.db

# Replit specific
.replit
replit.nix
.config/
generated-icon.png
EOF

# Create a clean package.json without Replit-specific dependencies
echo "Updating package.json..."
# This creates a temporary file that we'll use to create a new package.json
# Extract core dependencies while removing Replit-specific ones
node -e '
const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

// Remove Replit-specific dependencies
const replitDeps = [
  "@replit/vite-plugin-cartographer",
  "@replit/vite-plugin-runtime-error-modal", 
  "@replit/vite-plugin-shadcn-theme-json"
];

if (pkg.dependencies) {
  replitDeps.forEach(dep => {
    if (pkg.dependencies[dep]) {
      delete pkg.dependencies[dep];
    }
  });
}

if (pkg.devDependencies) {
  replitDeps.forEach(dep => {
    if (pkg.devDependencies[dep]) {
      delete pkg.devDependencies[dep];
    }
  });
}

// Write the cleaned package.json
fs.writeFileSync("package.json.clean", JSON.stringify(pkg, null, 2));
'

# Replace the original package.json with the cleaned version
mv package.json.clean package.json

echo "Cleanup complete! Your project is now ready for Vercel deployment."
echo "Next steps:"
echo "1. Run 'git init' to initialize a git repository"
echo "2. Run 'git add .' to stage all files"
echo "3. Run 'git commit -m \"Initial commit\"' to commit your code"
echo "4. Create a repository on GitHub and push your code"
echo "5. Deploy to Vercel following the instructions in README.md"