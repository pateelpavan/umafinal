# Netlify Deployment Guide for Uma Enterprises Website

## Prerequisites
- A Netlify account (free tier works fine)
- Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Option 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Connect Your Repository
1. Log in to [Netlify](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your Uma Enterprises repository

### Step 2: Configure Build Settings
Netlify should auto-detect the settings, but verify:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 or higher (usually auto-detected)

### Step 3: Deploy
1. Click "Deploy site"
2. Wait for the build to complete (usually 1-3 minutes)
3. Your site will be live at a randomly generated URL like `random-name-123456.netlify.app`

### Step 4: Custom Domain (Optional)
1. Go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## Option 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Initialize and Deploy
```bash
# From your project root directory
netlify init

# Follow the prompts to create a new site or link to existing
```

### Step 4: Deploy
```bash
# Build and deploy to production
npm run build
netlify deploy --prod
```

## Option 3: Drag & Drop Deploy

### Step 1: Build Locally
```bash
npm install
npm run build
```

### Step 2: Deploy
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your `dist` folder onto the upload area
3. Your site will be deployed instantly

## Environment Variables (if needed)
If you add any API keys or environment variables in the future:
1. Go to "Site settings" → "Environment variables"
2. Add your variables
3. Redeploy your site

## Continuous Deployment
Once connected to Git:
- Every push to your main branch automatically triggers a new deployment
- Preview deployments are created for pull requests
- Rollback to any previous deployment with one click

## Post-Deployment Checklist
- ✅ Test all navigation links
- ✅ Verify WhatsApp button works correctly
- ✅ Check responsive design on mobile devices
- ✅ Test Google Maps integration in Contact section
- ✅ Verify all images load properly
- ✅ Test portfolio filtering functionality
- ✅ Check form validations in Contact section

## Troubleshooting

### Build Fails
- Check Node version compatibility (use Node 18+)
- Ensure all dependencies are in `package.json`
- Review build logs in Netlify dashboard

### 404 Errors on Page Refresh
- Make sure `netlify.toml` and `_redirects` files are present
- Verify SPA routing is configured correctly

### WhatsApp Button Not Working
- Check browser console for errors
- Verify phone number format is correct (+91 prefix)
- Test on different devices/browsers

## Support
For more help, visit:
- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)

## Contact
For issues specific to Uma Enterprises website, contact the development team.
