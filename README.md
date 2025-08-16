# 🌿 Matteo's Leaf Links

A beautiful, minimalist link tree website built with modern web technologies. Perfect for showcasing your professional links, portfolio, and CV in an elegant, leaf-themed design.

![Matteo's Leaf Links Preview](https://img.shields.io/badge/Status-Live%20Demo-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)

## ✨ Features

- **🌿 Leaf-Themed Design**: Beautiful background with subtle leaf patterns and natural fade effects
- **📱 Responsive Layout**: Optimized for all devices and screen sizes
- **🎨 Custom Color Scheme**: Elegant dark theme with carefully chosen color palette
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔗 Professional Links**: Integrated with your GitHub, LinkedIn, Portfolio, and CV
- **🎭 Smooth Animations**: Subtle fade-in and floating animations for enhanced UX
- **📄 PDF Integration**: Direct CV download functionality

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/teoderizzoai/matteo-leaf-links.git
   cd matteo-leaf-links
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Colors
The color scheme is defined in `src/index.css` using CSS custom properties:
- `--background`: Main background color
- `--foreground`: Text color
- `--primary`: Primary accent color
- `--secondary`: Button and card background color

### Background Images
- **Profile Photo**: Place your photo as `public/profile-photo.png`
- **Leaf Background**: The `black leaves.jpeg` image creates the top background effect
- **Leaf Patterns**: SVG leaf patterns are applied as watermarks

### Links
Update your links in `src/components/LinksSection.tsx`:
```typescript
const links = [
  {
    title: "GitHub",
    description: "Your description",
    href: "https://github.com/yourusername",
    icon: <Github className="w-5 h-5 text-foreground" />
  },
  // ... more links
];
```

## 🌐 Deployment

### GitHub Pages (Current)
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure your domain** (if you have a custom domain)
   - Go to your repository Settings > Pages
   - Add your custom domain
   - Update DNS records as instructed

### Alternative Deployment Options
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod --dir=dist`
- **Firebase**: `firebase deploy`

## 📁 Project Structure

```
matteo-leaf-links/
├── public/                 # Static assets
│   ├── profile-photo.png   # Profile image
│   ├── black leaves.jpeg   # Background image
│   └── Matteo De Rizzo CV.pdf
├── src/
│   ├── components/         # React components
│   │   ├── ProfileSection.tsx
│   │   ├── LinksSection.tsx
│   │   └── LinkCard.tsx
│   ├── pages/             # Page components
│   │   └── Index.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:
```env
VITE_APP_TITLE=Matteo's Leaf Links
VITE_APP_DESCRIPTION=Professional link tree and portfolio
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Typography plugin
- Animation utilities
- Responsive breakpoints

## 🎯 Features in Detail

### Profile Section
- Large, bordered profile image with floating animation
- Professional name and title display
- Elegant typography using Playfair Display and Inter fonts

### Links Section
- Interactive link cards with hover effects
- Icon integration for visual appeal
- External link indicators
- Smooth animations with staggered delays

### Background Effects
- Multi-layered leaf pattern watermarks
- Blurred background image with natural fade
- Responsive design that adapts to screen size
- Subtle opacity and blend mode effects

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Optimized image loading
- **CSS Purge**: Tailwind CSS purging for production
- **Lazy Loading**: Efficient resource loading

## 🔍 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Mobile Optimization

- Touch-friendly button sizes
- Responsive typography scaling
- Optimized spacing for mobile devices
- Smooth scrolling and interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Matteo De Rizzo**
- GitHub: [@teoderizzoai](https://github.com/teoderizzoai)
- LinkedIn: [Matteo De Rizzo](https://www.linkedin.com/in/matteo-de-rizzo/)
- Portfolio: [AI Portfolio](https://teo-ai-portfolio.lovable.app/)
- Email: teo.derizzo.ai@gmail.com

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)

---

⭐ **Star this repository if you found it helpful!**

Made with ☕ and brainwaves 🧠 by Matteo De Rizzo
