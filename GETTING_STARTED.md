# 🚀 Getting Started - Quick Guide

## ⚡ Fastest Way to Start

### Windows Users:
1. Double-click `setup.bat`
2. Wait for installation
3. Website opens at http://localhost:3000

### Mac/Linux Users:
```bash
npm install && npm run dev
```

---

## 📁 What You Have

### ✅ 4 Complete Pages
1. **Home** (/) - Hero, stats, materials, app promo
2. **About** (/about) - Company story, mission, timeline
3. **Materials** (/materials) - Cement, steel, essentials
4. **Contact** (/contact) - Form, info, map

### ✅ 4 Reusable Components
- Header (navigation)
- Footer (contact info)
- Button (3 variants)
- Card (animated)

### ✅ Premium Design
- Royal purple & gold colors
- Smooth animations
- Mobile responsive
- Professional layout

---

## 🎯 Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

---

## 📝 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your purple shades */ },
  gold: { /* your gold shades */ }
}
```

### Edit Content
- Home: `app/page.tsx`
- About: `app/about/page.tsx`
- Materials: `app/materials/page.tsx`
- Contact: `app/contact/page.tsx`

### Update Contact Info
Edit `components/Footer.tsx`:
- Phone number
- Email address
- Physical address
- Social media links

### Change Company Name
Edit `components/Header.tsx` and `app/layout.tsx`

---

## 🌐 Deploy in 5 Minutes

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy
5. Done! ✅

### Option 2: Netlify
1. Push code to GitHub
2. Go to netlify.com
3. Add new site
4. Connect repository
5. Deploy

---

## 📚 Documentation Files

- **README.md** - Project overview
- **QUICKSTART.md** - Detailed setup
- **PROJECT_SUMMARY.md** - Complete features
- **FEATURES.md** - Checklist (200+ items)
- **DEPLOYMENT.md** - Deploy anywhere
- **GETTING_STARTED.md** - This file

---

## 🎨 Design System

### Colors
- Primary: Purple (#7c3aed)
- Accent: Gold (#f59e0b)
- Background: White
- Text: Gray

### Typography
- Font: Inter
- Headings: Bold
- Body: Regular

### Spacing
- Sections: py-24
- Cards: p-8
- Grids: gap-8

---

## 📱 Test Checklist

After starting the server:

- [ ] Visit http://localhost:3000
- [ ] Check all 4 pages load
- [ ] Test mobile menu (resize browser)
- [ ] Fill contact form
- [ ] Click all navigation links
- [ ] Test on mobile device

---

## 🆘 Common Issues

### Port 3000 in use?
```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
# Clear cache
npm cache clean --force
rm -rf node_modules
npm install
```

### Build errors?
```bash
# Check Node.js version (need 18+)
node --version

# Update if needed
```

---

## 🎉 You're Ready!

Your premium construction materials website is ready to use.

**What's Next?**
1. ✅ Customize content
2. ✅ Add your images
3. ✅ Update contact info
4. ✅ Deploy to production
5. ✅ Share with the world!

---

## 💡 Pro Tips

1. **Images**: Add to `public/` folder
2. **Fonts**: Already optimized with Google Fonts
3. **Icons**: Use Lucide React (already installed)
4. **Animations**: Framer Motion (already configured)
5. **Styling**: Tailwind CSS (utility-first)

---

## 📞 Need Help?

**Documentation:**
- Read README.md for overview
- Check FEATURES.md for complete list
- See DEPLOYMENT.md for going live

**Contact:**
- Email: info@rsdbharti.com
- Phone: +91 98765 43210

---

## 🌟 Features Highlights

✨ **Premium Design** - Corporate luxury feel
✨ **Fully Responsive** - Works on all devices
✨ **Fast Performance** - Next.js optimization
✨ **SEO Ready** - Meta tags configured
✨ **Type Safe** - TypeScript throughout
✨ **Modern Stack** - Latest technologies
✨ **Production Ready** - Deploy anywhere

---

**Built with**: Next.js 14 • React 18 • TypeScript • Tailwind CSS • Framer Motion

**Status**: ✅ Complete and Ready for Production

**Time to Deploy**: 5 minutes

**Time to Customize**: 30 minutes

**Time to Master**: 1 hour

---

## 🚀 Start Now!

```bash
npm install
npm run dev
```

**Then open**: http://localhost:3000

**Enjoy building!** 🎉
