# Vercel Deployment Guide

This guide will walk you through deploying your Sai Vinayaka Enterprises website to Vercel, with steps to clean up Replit-specific telemetry code.

## Step 1: Download and Prepare Your Code

1. In Replit, click on the three dots (menu) in the Files panel
2. Select "Download as zip"
3. Save the zip file to your computer and extract it
4. Open a terminal/command prompt in the extracted folder

## Step 2: Clean Up Replit-Specific Files

1. Run the cleanup script to remove Replit-specific files and telemetry code:
   ```bash
   # Make the script executable
   chmod +x cleanup-for-vercel.sh
   
   # Run the script
   ./cleanup-for-vercel.sh
   ```

2. This script will:
   - Remove `.replit` and `replit.nix` files
   - Create a clean version of `vite.config.ts` without telemetry plugins
   - Remove Replit-specific dependencies from `package.json`
   - Create a proper `.gitignore` file

## Step 3: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in (create an account if needed)
2. Click the "+" button in the top-right corner and select "New repository"
3. Name your repository (e.g., "sai-vinayaka-enterprises")
4. Choose "Public" visibility
5. Click "Create repository"

## Step 4: Push Your Code to GitHub

Run these commands in the terminal, in your project folder:

```bash
# Initialize a git repository
git init

# Add all files to git
git add .

# Commit your code
git commit -m "Initial commit"

# Connect to your GitHub repository (replace USERNAME with your GitHub username)
git branch -M main
git remote add origin https://github.com/USERNAME/sai-vinayaka-enterprises.git
git push -u origin main
```

## Step 5: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign up/log in (you can use your GitHub account)
2. Click "Add New..." → "Project"
3. Find and select your GitHub repository
4. Configure your project:
   - Framework: Other
   - Build Command: Leave default (npm run build)
   - Output Directory: Leave default

## Step 6: Set Environment Variables

Before deploying, add these environment variables:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail app password

## Step 7: Deploy

Click "Deploy" and wait for the deployment to complete.

## Step 8: Connect Your Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Enter your domain name
4. Follow Vercel's instructions to configure DNS settings

## Troubleshooting

If you encounter any issues:
- Check the Vercel deployment logs
- Verify environment variables are set correctly
- For email issues, check your Gmail settings and ensure less secure apps access is enabled

For more detailed help, refer to the Vercel documentation: https://vercel.com/docs