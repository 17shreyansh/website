# 🚀 Deployment Guide - RSD Bharti Industries Website

## Prerequisites

Before deploying, ensure:
- ✅ All code is committed to Git
- ✅ `npm run build` runs successfully
- ✅ No TypeScript errors
- ✅ Environment variables configured

---

## Option 1: Vercel (Recommended) ⭐

### Why Vercel?
- Built by Next.js creators
- Zero configuration
- Automatic deployments
- Free SSL certificates
- Global CDN
- Perfect for Next.js

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Done! ✅

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Environment Variables
Add in Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@rsdbharti.com
```

---

## Option 2: Netlify

### Steps:

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site"
   - Connect to Git
   - Select repository
   - Deploy

3. **Configure Next.js**
   - Install Netlify plugin for Next.js
   - Add `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

---

## Option 3: AWS Amplify

### Steps:

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect GitHub/GitLab

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Deploy**
   - Click "Save and deploy"

---

## Option 4: Digital Ocean App Platform

### Steps:

1. **Create App**
   - Go to Digital Ocean
   - Click "Create" → "Apps"
   - Connect GitHub repository

2. **Configure**
   - Build command: `npm run build`
   - Run command: `npm start`
   - HTTP port: 3000

3. **Deploy**
   - Click "Create Resources"

---

## Option 5: Self-Hosted (VPS/Dedicated Server)

### Requirements:
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

### Steps:

1. **Install Dependencies**
   ```bash
   # On your server
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

2. **Clone and Build**
   ```bash
   git clone <your-repo-url>
   cd website
   npm install
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "rsd-bharti" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Option 6: Docker Deployment

### Dockerfile
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Docker Compose
Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Deploy
```bash
docker-compose up -d
```

---

## Pre-Deployment Checklist

### Code Quality
- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No console warnings
- [ ] All pages load correctly
- [ ] Forms work properly
- [ ] Mobile responsive

### Performance
- [ ] Images optimized
- [ ] Fonts loaded efficiently
- [ ] No unnecessary dependencies
- [ ] Code splitting working
- [ ] Lazy loading implemented

### SEO
- [ ] Meta tags configured
- [ ] Sitemap generated
- [ ] Robots.txt created
- [ ] Open Graph tags
- [ ] Twitter cards

### Security
- [ ] Environment variables secured
- [ ] No sensitive data in code
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Dependencies updated

### Content
- [ ] All text proofread
- [ ] Contact info correct
- [ ] Links working
- [ ] Images have alt text
- [ ] Forms validated

---

## Post-Deployment Tasks

### 1. Test Everything
- [ ] Visit all pages
- [ ] Test contact form
- [ ] Check mobile view
- [ ] Test all links
- [ ] Verify animations

### 2. Setup Monitoring
- [ ] Google Analytics
- [ ] Error tracking (Sentry)
- [ ] Uptime monitoring
- [ ] Performance monitoring

### 3. SEO Setup
- [ ] Submit to Google Search Console
- [ ] Submit sitemap
- [ ] Setup Google My Business
- [ ] Social media links

### 4. Backup
- [ ] Database backup (if applicable)
- [ ] Code backup
- [ ] Environment variables backup

---

## Domain Configuration

### DNS Records
```
Type    Name    Value               TTL
A       @       <your-server-ip>    3600
CNAME   www     yourdomain.com      3600
```

### SSL Certificate
- Use Let's Encrypt (free)
- Or Cloudflare (free tier)
- Or your hosting provider's SSL

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
```

### Environment Variables Not Working
- Ensure they start with `NEXT_PUBLIC_` for client-side
- Restart server after changes
- Check `.env.local` is not in `.gitignore`

---

## Performance Optimization

### After Deployment:

1. **Enable Caching**
   - Configure CDN
   - Set cache headers
   - Use service workers

2. **Image Optimization**
   - Use Next.js Image component
   - Compress images
   - Use WebP format

3. **Code Splitting**
   - Already handled by Next.js
   - Verify in build output

4. **Analytics**
   - Add Google Analytics
   - Monitor Core Web Vitals
   - Track user behavior

---

## Support & Maintenance

### Regular Tasks:
- Update dependencies monthly
- Monitor error logs
- Check performance metrics
- Backup regularly
- Update content as needed

### Emergency Contacts:
- Hosting support
- Domain registrar
- Development team

---

## 🎉 Deployment Complete!

Your website is now live and ready to serve customers!

**Next Steps:**
1. Share the URL with stakeholders
2. Monitor initial traffic
3. Gather user feedback
4. Plan future enhancements

---

**Need Help?**
- Email: info@rsdbharti.com
- Phone: +91 98765 43210

**Documentation:**
- README.md - Project overview
- QUICKSTART.md - Local setup
- PROJECT_SUMMARY.md - Features
- FEATURES.md - Complete checklist
