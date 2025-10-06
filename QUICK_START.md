# Cholim List Marketing Site - Quick Start Guide

## ⚡ Get Running in 2 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Visit: http://localhost:3000

That's it! 🎉

## 📋 Available Scripts

```bash
# Development server with hot-reload
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Type checking
npx tsc --noEmit
```

## 🎨 Quick Customization Guide

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: #2563eb;        /* Change main blue */
  --secondary: #059669;      /* Change main green */
  --accent: #8b5cf6;         /* Change purple accent */
}
```

### Update Contact Info

**Email:** `components/Footer.tsx` and `app/demo/page.tsx`

**Phone:** `app/demo/page.tsx`

### Modify Content

| What to Change | File Location |
|----------------|---------------|
| Home page headline | `components/Hero.tsx` |
| Features list | `components/Features.tsx` |
| Pricing tiers | `app/pricing/page.tsx` |
| Testimonials | `components/SocialProof.tsx` |
| FAQ questions | `components/FAQ.tsx` |
| About page story | `app/about/page.tsx` |

### Add Your Logo

1. Add logo image to `public/` folder
2. Update `components/Navbar.tsx` (line 15-20)
3. Update `components/Footer.tsx` (line 8-13)

Replace the SVG icon with:
```tsx
<Image src="/your-logo.png" alt="Logo" width={40} height={40} />
```

## 🔗 Update App Links

Change `app.cholimlist.com` throughout the site:

**Global search and replace:**
```bash
# macOS/Linux
find . -type f -name "*.tsx" -exec sed -i '' 's/app.cholimlist.com/your-app-domain.com/g' {} +

# Windows (PowerShell)
Get-ChildItem -Recurse -Include *.tsx | ForEach-Object { (Get-Content $_) -replace 'app.cholimlist.com', 'your-app-domain.com' | Set-Content $_ }
```

**Or manually update in these files:**
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/CTA.tsx`
- `app/demo/page.tsx`

## 📧 Setup Contact Form

### Option 1: Resend (Recommended)

1. Sign up at https://resend.com

2. Get your API key

3. Install Resend:
```bash
npm install resend
```

4. Create `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  const { data: emailData, error } = await resend.emails.send({
    from: 'contact@your-domain.com',
    to: 'sales@your-domain.com',
    subject: `Demo Request from ${data.name}`,
    html: `
      <h2>New Demo Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Organization:</strong> ${data.organization}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  });

  if (error) {
    return Response.json({ error }, { status: 400 });
  }

  return Response.json({ success: true });
}
```

5. Update `app/demo/page.tsx` handleSubmit function:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('submitting');
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', organization: '', phone: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};
```

6. Add to `.env.local`:
```
RESEND_API_KEY=re_your_api_key_here
```

### Option 2: Formspree (No Code)

1. Sign up at https://formspree.io

2. Create a new form

3. In `app/demo/page.tsx`, change form to:
```tsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
>
```

## 🚀 Deploy in 5 Minutes

### Vercel (Easiest)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Go to https://vercel.com

3. Click "New Project" → Import your repo

4. Click "Deploy"

Done! 🎉

### Netlify

Same as Vercel, but use https://netlify.com

## 📊 Add Analytics (Optional)

### Google Analytics

1. Get your GA4 ID from Google Analytics

2. Create `app/layout.tsx` and add before `</head>`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

3. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🆘 Common Issues

### Port 3000 already in use
```bash
npx kill-port 3000
```

### Changes not showing up
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## ✅ Pre-Launch Checklist

- [ ] Update all placeholder text
- [ ] Change domain links from cholimlist.com to yours
- [ ] Add your logo
- [ ] Update contact email and phone
- [ ] Configure contact form
- [ ] Test all pages on mobile
- [ ] Test all links work
- [ ] Add Google Analytics (optional)
- [ ] Test contact form submission
- [ ] Review all content for accuracy
- [ ] Deploy to Vercel/Netlify
- [ ] Setup custom domain
- [ ] Submit sitemap to Google

## 📚 Need Help?

- **Documentation:** Check README.md for full details
- **Deployment:** See DEPLOYMENT.md for step-by-step guides
- **Support:** support@cholimlist.com

---

Happy building! 🚀


