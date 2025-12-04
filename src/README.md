# Uma Enterprises - Official Website

A modern, responsive website for Uma Enterprises, a mechanical engineering company specializing in CNC machining, turning services, and metal fabrication since 1996.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **WhatsApp Integration**: Direct contact via WhatsApp for instant quotes
- **Interactive Portfolio**: Filterable project showcase
- **Service Showcase**: Detailed information about CNC machining, turning, and fabrication services
- **Team Section**: Meet the professionals behind Uma Enterprises
- **Contact Form**: Easy-to-use contact form with validation
- **Google Maps Integration**: Location map for easy navigation

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Build Tool**: Vite

## 📦 Project Structure

```
/
├── components/
│   ├── About.tsx           # About section
│   ├── Clients.tsx         # Client logos section
│   ├── Contact.tsx         # Contact form and information
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Portfolio.tsx       # Portfolio showcase with filtering
│   ├── Services.tsx        # Services section
│   ├── Team.tsx            # Team members section
│   ├── WhatsAppContact.tsx # WhatsApp contact section
│   ├── ui/                 # shadcn/ui components
│   └── figma/              # Image components
├── styles/
│   └── globals.css         # Global styles and Tailwind config
├── App.tsx                 # Main application component
├── netlify.toml           # Netlify configuration
├── _redirects             # SPA routing redirects
└── DEPLOYMENT.md          # Detailed deployment guide
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment to Netlify

### Method 1: Git-based Deployment (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider and repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Configure Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS settings as instructed

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy to production
npm run build
netlify deploy --prod
```

### Method 3: Drag & Drop

```bash
# Build locally
npm run build

# Go to https://app.netlify.com/drop
# Drag and drop the 'dist' folder
```

## ⚙️ Configuration

### WhatsApp Integration
The WhatsApp contact button is configured in `/components/WhatsAppContact.tsx`:
- Phone number: `7416472177`
- Default message: Pre-filled greeting message
- Opens WhatsApp in a new tab when clicked

### Customization
To customize the website:
1. Update company information in respective components
2. Modify colors in `/styles/globals.css`
3. Update images using the Unsplash tool or local assets
4. Adjust content in component files

## 🔧 Key Features Explained

### WhatsApp Contact Section
- Replaces traditional booking form
- Direct WhatsApp integration with phone number +91 7416472177
- Pre-filled message for user convenience
- Business hours display
- Clean, professional UI with green WhatsApp branding

### Smooth Navigation
- Fixed header with smooth scroll to sections
- Mobile-responsive hamburger menu
- Active section highlighting

### Portfolio Filtering
- Filter projects by category (All, CNC, Turning, Fabrication)
- Responsive grid layout
- Smooth animations

### Contact Form
- Form validation
- Toast notifications
- Google Maps integration

## 📱 Mobile Responsive

The website is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Security

- XSS Protection headers configured
- Content Security Policy
- Secure external links (target="_blank" with rel="noopener noreferrer")

## 📈 Performance Optimizations

- Static asset caching (1 year)
- Lazy loading for images
- Minified production build
- Code splitting
- Optimized Tailwind CSS

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version is 18 or higher
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run type-check`

### WhatsApp Link Not Working
- Verify phone number format (+91 prefix for India)
- Check browser console for errors
- Test on different browsers/devices

### Deployment Issues
- Check Netlify build logs
- Verify netlify.toml configuration
- Ensure all dependencies are in package.json

## 📞 Contact & Support

**Uma Enterprises**
- Phone: +91 7416472177
- WhatsApp: Available via website button
- Location: Jamshedpur, Jharkhand

For technical issues or questions about the website, contact the development team.

## 📄 License

© 2024 Uma Enterprises. All rights reserved.

---

## 🎯 Next Steps After Deployment

- [ ] Test all functionality on live site
- [ ] Set up custom domain
- [ ] Configure SSL certificate (automatic with Netlify)
- [ ] Add Google Analytics (if needed)
- [ ] Set up contact form backend (if email notifications needed)
- [ ] Monitor site performance with Netlify Analytics
- [ ] Set up continuous deployment for automatic updates

## 🌟 Continuous Improvement

Consider adding:
- Blog section for company updates
- Client testimonials
- FAQ section
- Multi-language support
- Advanced search functionality
- Newsletter subscription
