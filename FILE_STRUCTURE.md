# RSD Bharti Website - File Structure

```
website/
├── app/                          # Next.js App Router
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── materials/
│   │   └── page.tsx             # Materials catalog
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── not-found.tsx            # 404 page
│   └── page.tsx                 # Home page
│
├── components/                   # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   └── Header.tsx
│
├── public/                       # Static assets
│   ├── ACC logo.webp
│   ├── Ambuja logo.jpg
│   ├── Birla logo.jpg
│   ├── Dalmia logo.jpg
│   ├── Jindal logo.png
│   ├── JSW logo.jpg
│   ├── Kamdhenu logo.png
│   ├── logo.jpeg
│   ├── Shree logo.png
│   ├── Shyam logo.png
│   ├── Tata Tiscon logo.webp
│   └── Ultratech_Cement_vector_Logo.png
│
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── deploy.sh                     # VPS deployment script
├── ecosystem.config.js           # PM2 configuration
├── next.config.js                # Next.js configuration
├── nginx.conf                    # Nginx reverse proxy config
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## Key Directories

- **app/** - Next.js 14 App Router pages and layouts
- **components/** - Reusable React components
- **public/** - Static assets (images, logos)
- **.next/** - Build output (auto-generated)

## Configuration Files

- **next.config.js** - Static export configuration
- **ecosystem.config.js** - PM2 process manager
- **nginx.conf** - Nginx reverse proxy
- **deploy.sh** - Deployment automation
- **tailwind.config.js** - Tailwind CSS theme
- **tsconfig.json** - TypeScript settings
