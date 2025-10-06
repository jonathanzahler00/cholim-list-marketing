# Cholim List Marketing Site - Deployment Guide

## Quick Deploy to Vercel (5 minutes)

### Step 1: Prepare Repository

1. Initialize git (if not already):
```bash
git init
git add .
git commit -m "Initial commit: Cholim List marketing site"
```

2. Push to GitHub:
```bash
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/cholim-list-marketing.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub

2. Click "Add New Project"

3. Import your repository

4. Vercel will auto-detect Next.js settings:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. Click "Deploy"

6. Wait 2-3 minutes for deployment to complete

### Step 3: Custom Domain Setup

#### Option A: Domain on Vercel

1. In your project settings, go to **Domains**
2. Click "Add Domain"
3. Enter: `cholimlist.com`
4. Follow DNS configuration instructions provided by Vercel

#### Option B: External Domain Provider

**For main domain (cholimlist.com):**

Add these DNS records at your domain provider:

```
Type: A
Name: @
Value: 76.76.21.21
```

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For subdomain (app.cholimlist.com):**

If your app is hosted elsewhere:
```
Type: CNAME
Name: app
Value: your-app-hosting-provider.com
```

### Step 4: Environment Variables (Optional)

If using contact form with Resend:

1. In Vercel project → Settings → Environment Variables
2. Add:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key
   - Environments: Production, Preview, Development

3. Redeploy to apply changes

## Alternative: Deploy to Netlify

1. Push code to GitHub

2. Go to https://netlify.com and sign in

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repo

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (leave empty)

6. Click "Deploy site"

7. Add custom domain in Site Settings → Domain Management

## Alternative: Self-Hosted VPS

### Requirements
- Ubuntu 20.04+ or similar
- Node.js 20.x
- Nginx
- PM2 (for process management)

### Setup Steps

1. SSH into your server:
```bash
ssh user@your-server-ip
```

2. Install Node.js 20.x:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Clone and build:
```bash
git clone https://github.com/YOUR_USERNAME/cholim-list-marketing.git
cd cholim-list-marketing
npm install
npm run build
```

4. Install PM2:
```bash
sudo npm install -g pm2
```

5. Start the app:
```bash
pm2 start npm --name "cholim-marketing" -- start
pm2 save
pm2 startup
```

6. Configure Nginx:
```nginx
server {
    listen 80;
    server_name cholimlist.com www.cholimlist.com;

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

7. Enable SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d cholimlist.com -d www.cholimlist.com
```

## Post-Deployment Checklist

- [ ] Site loads at your domain
- [ ] All pages accessible (/, /features, /pricing, /demo, /docs, /about)
- [ ] Mobile responsive design working
- [ ] Contact form submitting (if configured)
- [ ] Navigation working
- [ ] Links to app.cholimlist.com working
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test page load speeds (aim for <2s)
- [ ] Verify SSL certificate is active

## DNS Propagation

After changing DNS settings, it can take 24-48 hours for changes to propagate worldwide. You can check propagation status at:
- https://www.whatsmydns.net

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### 404 on Custom Domain

- Verify DNS settings are correct
- Wait for DNS propagation (24-48 hours)
- Check domain is added in Vercel/Netlify dashboard

### Environment Variables Not Working

- Verify they're set in the hosting platform dashboard
- Check they start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding/changing variables

## Performance Monitoring

After deployment, monitor:
- Vercel Analytics (built-in)
- Google Analytics (if configured)
- PageSpeed Insights: https://pagespeed.web.dev

## Updates and Maintenance

To deploy updates:
```bash
git add .
git commit -m "Your update message"
git push
```

Vercel/Netlify will automatically redeploy on push to main branch.

## Support

If you encounter issues:
- Check Vercel/Netlify deployment logs
- Review Next.js documentation
- Contact support@cholimlist.com

---

🎉 Congratulations! Your site is now live!


