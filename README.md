# Shabin George - Full Stack Developer Portfolio

A modern, fully animated portfolio showcasing full-stack development skills with React, Spring Boot, and cloud technologies. Built with cutting-edge technologies including GSAP animations, Framer Motion, 3D graphics, and responsive design.

## 🌐 Live Demo

**[Visit Portfolio](https://shabin-george-portfolio.vercel.app)** *(Deploy to Vercel for live link)*

## ✨ Features

- **Modern UI/UX Design** - Dark theme with red accent color and smooth animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Advanced Animations** - GSAP scroll triggers, Framer Motion interactions, parallax effects
- **3D Graphics** - Interactive 3D robot model with Three.js and React Three Fiber
- **Smooth Scrolling** - Lenis integration with GSAP for butter-smooth navigation
- **Custom Cursor** - Animated cursor with particle trail effect
- **Interactive Contact Form** - EmailJS integration with validation and toast notifications
- **Project Showcase** - Grid layout with project details, tech stack, and live demos
- **Skills Display** - Categorized skills with icon-based grid and marquee carousel
- **AI ChatBot** - Floating chat assistant for FAQ and project information
- **Performance Optimized** - Image lazy loading, code splitting, and bundle optimization
- **Scroll Progress** - Visual top progress bar indicating page scroll position

## 🛠 Technology Stack

### Frontend
- **React 19** - Latest React version for component architecture
- **Vite 7** - Ultra-fast build tool with HMR
- **Tailwind CSS 3** - Utility-first CSS framework for styling
- **TypeScript** - Type safety and better developer experience

### Animations & Motion
- **GSAP 3** - Professional animation library with ScrollTrigger plugin
- **Framer Motion 12** - React animation library for component animations
- **Lenis 1.3** - Smooth scrolling library
- **React Type Animation 3** - Typing effect for hero section

### 3D Graphics & Interactions
- **Three.js 0.182** - 3D library for 3D graphics
- **React Three Fiber 9** - React renderer for Three.js
- **React Three Postprocessing 3** - Post-processing effects (Bloom)
- **React Three Drei 10** - Useful 3D utilities and controls

### Backend Integration & Forms
- **EmailJS 4** - Client-side email service for contact form
- **React Toastify 10** - Toast notifications for user feedback
- **React Icons 5** - Icon library (Font Awesome, Tabler, etc.)

### Development Tools
- **ESLint 9** - Code quality and consistency
- **PostCSS 8** - CSS transformations with Autoprefixer
- **Tailwind CSS** - Pre- and post-processing

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShabinGeorgePS/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (for contact form)
   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Create `.env.local` file in root directory:
     ```
     REACT_APP_EMAILJS_SERVICE_ID=your_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
     REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start Vite development server with HMR
- `npm run build` - Build for production (output in `dist/` folder)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
src/
├── components/           # React components (Hero, Projects, Skills, etc.)
│   ├── shared/          # Reusable shared components
│   ├── ProjectCard.jsx  # Individual project card
│   ├── ContactForm.jsx  # Contact form with validation
│   ├── SkillsGrid.jsx   # Skills grid with filtering
│   └── Footer.jsx       # Footer component
├── data/
│   ├── projects.js      # Project data with enhanced fields
│   ├── skills.js        # Skills with categories and levels
│   ├── edu.js           # Education timeline data
│   ├── config.js        # Centralized configuration
│   └── social.js        # Social media links
├── utils/
│   ├── gsapAnimations.js    # Reusable GSAP animation patterns
│   ├── imageOptimization.js # Image handling and lazy loading
│   ├── validation.js        # Form validation utilities
│   ├── emailjs-config.js    # EmailJS configuration
│   └── toast.js             # Toast notification helpers
├── hooks/
│   ├── useLazyLoad.js       # Custom hook for lazy loading
│   └── useScrollAnimation.js # Custom hook for scroll animations
├── assets/              # Images and static files
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles and Tailwind directives
```

## 🎨 Customization

### Update Personal Information
Edit `src/data/config.js`:
```javascript
export const SITE_CONFIG = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  github: "https://github.com/yourprofile",
  linkedin: "https://linkedin.com/in/yourprofile",
};
```

### Add/Modify Projects
Edit `src/data/projects.js` to add new projects with:
- Title, description, full description
- Technology stack
- Category (fullstack, frontend, backend)
- Features list, dates
- GitHub and live demo links
- Project image

### Customize Skills
Edit `src/data/skills.js` to:
- Add new skills with icons and categories
- Set proficiency levels (0-100)
- Organize by category labels
- Include skill icons from react-icons

### Theme Customization
Primary colors are defined in components using Tailwind classes:
- Primary color: `red-500` to `red-600` for accents
- Background: `black` and `zinc-900/950` for depth
- Text: `white` and `gray-300/400` for hierarchy

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Finalize portfolio"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - `REACT_APP_EMAILJS_SERVICE_ID`
     - `REACT_APP_EMAILJS_TEMPLATE_ID`
     - `REACT_APP_EMAILJS_PUBLIC_KEY`
   - Click Deploy

3. **Domain Setup** (Optional)
   - Add custom domain in Vercel dashboard
   - Configure DNS settings

### Deploy to Netlify

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy with Netlify**
   - Connect GitHub to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables

## 📊 Performance Metrics

**Lighthouse Targets:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

**Core Web Vitals:**
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

## 🔐 Security Features

- Content Security Policy friendly
- No hardcoded sensitive data
- EmailJS service for secure email handling
- Form input sanitization
- XSS prevention with proper encoding
- Rate limiting on contact form (max 1 email per 30 seconds)

## 📝 Contact & Support

- **Email**: shabingeorge6705@gmail.com
- **GitHub**: [ShabinGeorgePS](https://github.com/ShabinGeorgePS)
- **LinkedIn**: [Shabin George](https://linkedin.com/in/shabin-george)

## 📄 License

MIT License - feel free to use this portfolio template for your own portfolio!

## 🙏 Acknowledgments

- **GSAP** - Professional animation library
- **Vercel** - Hosting and deployment platform
- **Tailwind CSS** - Utility-first CSS framework
- **React Community** - For amazing libraries and tools

---

**Made with ❤️ using React, Tailwind CSS, and GSAP**

Last Updated: 2026-02-21
