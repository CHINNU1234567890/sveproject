# Sai Vinayaka Enterprises Website

This is the source code for the Sai Vinayaka Enterprises website, a company specializing in heavy equipment erection services.

## Project Overview

- **Frontend**: React with TypeScript, Tailwind CSS, Shadcn UI components
- **Backend**: Express.js API with Node.js
- **Storage**: In-memory storage for contact form submissions
- **Email**: Nodemailer for sending notification emails

## Deployment to Vercel

### Prerequisites

1. A Vercel account (free tier is sufficient)
2. A GitHub, GitLab, or Bitbucket account (for source code hosting)
3. Your domain name (if you want to use a custom domain)

### Step 1: Prepare Your Repository

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Make sure your repository is public or you have connected Vercel to your GitHub account

### Step 2: Deploy to Vercel

1. Log in to your Vercel account
2. Click "New Project"
3. Import your repository
4. Configure the project settings:
   - **Framework Preset**: Other
   - **Build Command**: Leave as default (Vercel will use the one in package.json)
   - **Output Directory**: Leave as default

### Step 3: Environment Variables

Set up the following environment variables in your Vercel project settings:

- `EMAIL_USER`: Your Gmail username/email
- `EMAIL_PASS`: Your Gmail app password

### Step 4: Deploy and Monitor

1. Click "Deploy"
2. Watch the deployment logs for any errors
3. Once deployed, Vercel will provide a URL to access your site

### Step 5: Connect Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain
3. Follow Vercel's instructions to set up DNS records with your domain registrar

## Local Development

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with:
   ```
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_gmail_app_password
   ```
4. Run the development server with `npm run dev`
5. Open http://localhost:5000 in your browser

## Project Structure

- `/client` - Frontend React application
- `/server` - Backend Express API
- `/shared` - Shared types and schemas
- `/public` - Static assets

## Contact

Sai Vinayaka Enterprises  
5-3-171/22, RP ROAD, JEERA, SECUNDERABAD-500003  
Phone: +91-9550222151  
Email: saivinayakaenterprises13@gmail.com