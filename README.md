# Cholim List - Marketing Site

Modern marketing/landing page for the Cholim Name Registry application - a web-based Mi Sheberach cholim names management system for Jewish institutions.

## 🚀 Tech Stack

- **Framework:** Next.js 15.5+ with TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** Vercel (recommended)
- **Node Version:** 20.x or higher

## 📋 Features

- ✅ Fully responsive design (mobile-first)
- ✅ SEO optimized with metadata, Open Graph, and sitemap
- ✅ Modern, accessible UI components
- ✅ Fast page loads with Next.js App Router
- ✅ Type-safe with TypeScript
- ✅ Custom color scheme for Jewish community branding

## 🎨 Pages Included

1. **Home** (`/`) - Hero, features, how it works, testimonials, FAQ, CTA
2. **Features** (`/features`) - Detailed feature breakdowns by category
3. **Pricing** (`/pricing`) - Three-tier pricing with comparison table
4. **Demo Request** (`/demo`) - Contact form for scheduling demos
5. **Documentation** (`/docs`) - Setup guides and help resources
6. **About** (`/about`) - Mission, values, and impact

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cholim-list-marketing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── features/           # Features page
│   ├── pricing/            # Pricing page
│   ├── demo/               # Demo request page
│   ├── docs/               # Documentation page
│   ├── about/              # About page
│   ├── globals.css         # Global styles & Tailwind config
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots.txt
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features grid
│   ├── HowItWorks.tsx      # Process steps
│   ├── PricingCard.tsx     # Pricing tier cards
│   ├── FAQ.tsx             # FAQ accordion
│   ├── SocialProof.tsx     # Testimonials & stats
│   └── CTA.tsx             # Call-to-action section
└── public/                 # Static assets
```

## 🎨 Customization

### Brand Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: #2563eb;        /* Main blue */
  --secondary: #059669;      /* Main green */
  --accent: #8b5cf6;         /* Purple accent */
}
```

### Content Updates

- **Testimonials:** Edit `components/SocialProof.tsx`
- **FAQ:** Edit `components/FAQ.tsx`
- **Pricing:** Edit `app/pricing/page.tsx`
- **Features:** Edit `components/Features.tsx` and `app/features/page.tsx`

### Contact Form Integration

The demo form (`app/demo/page.tsx`) currently simulates submission. To integrate with a real email service:

**Option 1: Resend (Recommended)**
```bash
npm install resend
```

Create `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'contact@cholimlist.com',
    to: 'sales@cholimlist.com',
    subject: `Demo Request from ${data.name}`,
    html: `<p>Name: ${data.name}</p>...`,
  });
  
  return Response.json({ success: true });
}
```

**Option 2: Formspree**
Replace the form action in `app/demo/page.tsx` with:
```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 3: SendGrid, Postmark, etc.**
Similar integration pattern as Resend.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket

2. Import to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. Configure environment variables (if needed):
   - `RESEND_API_KEY` (for contact form)
   - Any other API keys

4. Deploy! 🎉

### Custom Domain Setup

1. In Vercel project settings, go to "Domains"
2. Add your domain: `cholimlist.com`
3. Update your domain's DNS settings:
   - Add an A record pointing to Vercel's IP
   - Add a CNAME record for `www` pointing to `cname.vercel-dns.com`
4. Wait for DNS propagation (usually 24-48 hours)

### Subdomain for App

If your main app is on `app.cholimlist.com`:

1. Add CNAME record: `app` → `your-app-host.com`
2. Update links in components to point to correct subdomain

## 📊 SEO

The site includes:
- ✅ Meta titles and descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ PWA manifest (`/manifest.json`)

### Submit to Search Engines

1. **Google Search Console:** https://search.google.com/search-console
   - Submit your sitemap: `https://cholimlist.com/sitemap.xml`

2. **Bing Webmaster Tools:** https://www.bing.com/webmasters
   - Submit your sitemap

## 🧪 Development

### Build for Production

```bash
npm run build
```

### Start Production Server Locally

```bash
npm run build
npm start
```

### Type Checking

```bash
npx tsc --noEmit
```

## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
# Email service (if using Resend)
RESEND_API_KEY=your_api_key_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Any other API keys
```

## 🎯 Performance Optimization

The site is optimized for performance:
- Server-side rendering with Next.js
- Automatic code splitting
- Optimized fonts (Geist)
- Lazy loading for images
- Minimal JavaScript bundle

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🐛 Common Issues

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)

## 🤝 Support

For questions or issues:
- Email: support@cholimlist.com
- Documentation: https://cholimlist.com/docs

## 📄 License

Copyright © 2025 Cholim List. All rights reserved.

---

Built with ❤️ for Jewish communities worldwide
