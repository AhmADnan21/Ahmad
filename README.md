# Ahmad Abdullah - Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, skills, and qualifications as a Senior QA Automation Engineer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Built with React](https://img.shields.io/badge/Built%20with-React-61dafb)
![Vite](https://img.shields.io/badge/Powered%20by-Vite-646cff)

## 🚀 Live Demo

**Live Site:** [https://ahmadabdullah.netlify.app](https://ahmadabdullah.netlify.app)

## 📋 About

This portfolio website features:

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, and desktop)
- 🎨 Professional UI/UX with gradient accents
- ⚡ Fast loading with Vite
- 🔍 SEO optimized
- 📧 Direct contact information and social links

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Icons:** React Icons
- **Styling:** Pure CSS with modern features
- **Deployment:** Netlify
- **Version Control:** Git & GitHub

## 📂 Project Structure

```
ahmad-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Education.jsx
│   │   ├── Education.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/ahmadabdullah/ahmad-portfolio.git
cd ahmad-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment to Netlify

### Method 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit: Ahmad Abdullah Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ahmad-portfolio.git
git push -u origin main
```

2. **Connect to Netlify**

   - Go to [https://app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize Netlify
   - Select your `ahmad-portfolio` repository

3. **Configure build settings**

   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Set custom subdomain**

   - Go to Site settings → Domain management
   - Click "Options" → "Edit site name"
   - Change to: `ahmadabdullah`
   - Your site will be live at: `https://ahmadabdullah.netlify.app`

### Method 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## 🎨 Customization

### Update Personal Information

Edit the content in each component file:

- **Profile Info:** `src/components/Hero.jsx`
- **Skills:** `src/components/Skills.jsx`
- **Experience:** `src/components/Experience.jsx`
- **Education:** `src/components/Education.jsx`
- **Contact:** `src/components/Contact.jsx`

### Change Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... more variables */
}
```

### Add Your Photo

Replace the avatar placeholder in `src/components/Hero.jsx` with your photo:

```jsx
<div className="avatar-placeholder">
  <img src="/path-to-your-photo.jpg" alt="Ahmad Abdullah" />
</div>
```

## 📱 Sections

1. **Home/Hero** - Introduction and quick contact info
2. **Skills** - Technical skills organized by category
3. **Experience** - Professional work history with achievements
4. **Education** - Academic background and certifications
5. **Contact** - Contact information and social links

## 🔧 Configuration Files

### netlify.toml

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📊 Features

- ✅ Smooth scrolling navigation
- ✅ Sticky header with scroll effects
- ✅ Mobile-responsive hamburger menu
- ✅ Animated sections on scroll
- ✅ Gradient text and hover effects
- ✅ Professional card layouts
- ✅ Interactive timeline for experience
- ✅ Contact information with social links
- ✅ SEO meta tags

## 🐛 Troubleshooting

### Build fails on Netlify

- Check Node version: Netlify uses Node 16 by default
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### Styles not loading

- Clear browser cache
- Check console for CSS errors
- Verify all CSS files are imported correctly

### 404 on page refresh

- Ensure `netlify.toml` has the redirect rule
- Check that `_redirects` file is in `dist` folder after build

## 📞 Contact

**Ahmad Abdullah**  
Senior QA Automation Engineer

- 📧 Email: [ahmad7adnan7@gmail.com](mailto:ahmad7adnan7@gmail.com)
- 📱 Phone: +60 1139 279164
- 💼 LinkedIn: [Ahmad Abdullah](https://www.linkedin.com/in/ahmad-abdullah)
- 🌐 Portfolio: [https://ahmadabdullah.netlify.app](https://ahmadabdullah.netlify.app)

## 📝 License

© 2025 Ahmad Abdullah. All rights reserved.

---

Made with ❤️ by Ahmad Abdullah

