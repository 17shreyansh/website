# Quick Start Guide

## Installation Steps

### 1. Install Node.js
Make sure you have Node.js 18+ installed on your system.
Download from: https://nodejs.org/

### 2. Install Dependencies
Open terminal in the project directory and run:
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- TypeScript

### 3. Run Development Server
```bash
npm run dev
```

The website will be available at: http://localhost:3000

### 4. Build for Production
```bash
npm run build
npm start
```

## Project Overview

### Pages Created:
✅ Home Page (/) - Hero, stats, materials preview, app promo
✅ About Page (/about) - Company story, mission, vision, timeline
✅ Materials Page (/materials) - Cement, steel, essentials catalog
✅ Contact Page (/contact) - Contact form, info, map placeholder

### Components Created:
✅ Header - Premium navigation with mobile menu
✅ Footer - Contact info, links, social media
✅ Button - Reusable button with variants
✅ Card - Animated card component

### Design Features:
✅ Premium purple & gold color scheme
✅ Smooth Framer Motion animations
✅ Fully responsive design
✅ Mobile-first approach
✅ Clean, modern typography
✅ Professional corporate aesthetic

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- primary: Purple shades
- gold: Gold accent colors

### Content
Edit page files in `app/` directory:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/materials/page.tsx` - Materials page
- `app/contact/page.tsx` - Contact page

### Components
Reusable components in `components/` directory:
- `Header.tsx` - Navigation
- `Footer.tsx` - Footer section
- `Button.tsx` - Button styles
- `Card.tsx` - Card component

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with PM2

## Support

For questions or issues:
- Email: info@rsdbharti.com
- Phone: +91 98765 43210

---

Built with Next.js 14, React, TypeScript, and Tailwind CSS
