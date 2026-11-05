# MiniMe Official Website (`https://www.tryminime.com/`)

This directory contains the complete source code, assets, and serverless routes for the official **MiniMe** marketing website, legal compliance pages, and deep-link authentication redirectors.

---

## 1. Directory Structure

```
website/
├── public/                     # Brand assets (pre-staged)
│   ├── favicon.ico             # 32x32 multi-resolution browser icon
│   ├── logo.svg                # Master vector infinity mark
│   ├── logo-lockup.svg         # Horizontal navbar lockup (Logo + MiniMe)
│   ├── og-image.png            # 1200x630 social preview card
│   ├── app-icon.png            # 1024x1024 high-res icon
│   └── oauth-logo.png          # 215x215 square OAuth verification logo
├── src/
│   ├── app/
│   │   ├── page.tsx            # SOTA Landing Page (Hero, Spotlight, Pricing)
│   │   ├── privacy/page.tsx    # Privacy Policy (Google & Microsoft compliant)
│   │   ├── terms/page.tsx      # Terms of Service
│   │   ├── auth/
│   │   │   ├── verify/page.tsx # Magic Link & 6-digit OTP landing redirector
│   │   │   └── callback/page.tsx # OAuth fallback bridge
│   │   ├── download/page.tsx   # Windows installer (.exe & .msi) download hub
│   │   └── api/
│   │       └── auth/
│   │           └── send-magic-link/route.ts # Resend email dispatch route
│   └── components/             # Cybernetic Glass UI components
├── package.json
└── next.config.ts
```

---

## 2. Vercel Deployment Options

### Option A: Deploy from Monorepo (Single Git Repo)
1. Push your entire `MiniMe` repository to GitHub.
2. In [Vercel](https://vercel.com): **Add New Project** -> Select your repo.
3. Under **Build and Output Settings**, set **Root Directory** to `website`.
4. Click **Deploy**. Vercel will build and deploy only the `website/` folder.

### Option B: Deploy as a Standalone Git Repository
If you prefer a completely separate repository for the website:
```powershell
cd website
git init
git add .
git commit -m "feat: initial MiniMe website scaffold"
git remote add origin https://github.com/<your-username>/minime-website.git
git push -u origin main
```
Then import `minime-website` directly into Vercel.

---

## 3. Environment Variables (in Vercel Project Settings)

| Variable | Description | Required For |
| :--- | :--- | :---: |
| `RESEND_API_KEY` | Resend API key (`re_...`) | Passwordless Email Magic Link dispatch |
| `SENDER_EMAIL` | Sender address (e.g. `auth@tryminime.com`) | Email delivery |
| `NEXT_PUBLIC_APP_URL` | `https://www.tryminime.com` | Deep link redirection & OpenGraph canonicals |
