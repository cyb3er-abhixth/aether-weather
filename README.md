# 🌤️ Aether Weather

> A modern, real-time weather application with stunning UI and seamless user experience

[![GitHub](https://img.shields.io/badge/GitHub-Aether%20Weather-blue?logo=github)](https://github.com/cyb3er-abhixth/aether-weather)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-72%25-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?logo=tailwindcss)](https://tailwindcss.com)

## ✨ Features

- **🌍 Real-Time Weather Updates** - Get live weather data with automatic updates
- **📍 Location Search** - Search for weather in any city worldwide
- **🎯 Geolocation Support** - Automatic weather detection based on your location
- **📅 Extended Forecasts** - View hourly and 7-day weather predictions
- **🎨 Dynamic Backgrounds** - Weather-responsive backgrounds that change with conditions
- **💎 Glassmorphism UI** - Modern, sleek, and responsive design
- **📱 Mobile Friendly** - Works seamlessly on all devices and screen sizes
- **⚡ High Performance** - Fast loading and smooth interactions
- **🔄 Real-Time Sync** - Continuous weather data synchronization

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cyb3er-abhixth/aether-weather.git
   cd aether-weather
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application will automatically reload as you make changes

## 🛠️ Technology Stack

| Technology | Purpose | Composition |
|------------|---------|------------|
| **TypeScript** | Type Safety | 72.1% |
| **Tailwind CSS** | Styling | 24% |
| **HTML** | Markup | 2.8% |
| **JavaScript** | Interactivity | 1.1% |

### Key Technologies
- **React** - Modern UI library for building interactive components
- **TypeScript** - Ensures type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Open-Meteo API** - Free weather data provider

## 📊 Project Structure

```
aether-weather/
├── public/              # Static files and assets
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page-level components
│   ├── hooks/          # Custom React hooks
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions and helpers
│   ├── styles/         # Global and component styles
│   ├── App.tsx         # Main application component
│   └── index.tsx       # Application entry point
├── .github/
│   └── workflows/      # GitHub Actions CI/CD workflows
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md          # This file
```

## 🔌 API Integration

### Open-Meteo API
This project uses the free [Open-Meteo API](https://open-meteo.com/) for all weather data:

**Features:**
- ✅ Geocoding - Convert city names to coordinates
- ✅ Current weather data
- ✅ Hourly forecasts (up to 7 days)
- ✅ Daily forecasts (up to 90 days)
- ✅ No authentication required
- ✅ Free for non-commercial and commercial use

**Rate Limits:**
- Free tier: 10,000 requests per day
- No API key needed for development

**Documentation:** [api.open-meteo.com](https://open-meteo.com/en/docs)

## 🎨 Design Features

### Glassmorphism UI
- Semi-transparent glass-like elements with backdrop blur effects
- Modern, elegant visual appearance
- Smooth transitions and animations
- Enhanced user experience with visual feedback

### Responsive Design
- Mobile-first development approach
- Breakpoints optimized for all device sizes
- Touch-friendly interface for mobile users
- Fluid layouts that scale perfectly

### Dynamic Weather Backgrounds
- Backgrounds automatically change based on weather conditions
- Smooth CSS transitions between states
- Visual indicators for weather conditions
- Immersive user experience

## 🔧 Available Scripts

```bash
# Start development server with hot reload
npm start

# Build optimized production bundle
npm run build

# Run test suite in watch mode
npm test

# Eject configuration (⚠️ Cannot be undone - use with caution)
npm run eject

# Format code with Prettier
npm run format

# Lint code with ESLint
npm run lint
```

## 📱 Usage Guide

1. **Get Started**
   - Allow browser location access for automatic weather detection
   - Or use the search bar to find weather for any city

2. **View Weather Information**
   - Current conditions displayed prominently
   - Hourly forecast for the next 24 hours
   - 7-day extended forecast with daily highs/lows

3. **Switch Locations**
   - Type city name in the search bar
   - Select from search results
   - Your selection is saved automatically

4. **Customize View**
   - Toggle between temperature units
   - Switch between light and dark themes
   - Pin favorite locations

## 🌐 Deploy to GitHub Pages

### Method 1: Automatic Deployment with GitHub Actions

This is the **recommended approach** - your app deploys automatically on every push!

1. **Create the workflow file**
   
   Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v3

         - name: Set up Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build application
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./build
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as source
   - Save and wait for deployment

3. **Your Live App**
   - Visit: `https://cyb3er-abhixth.github.io/aether-weather`
   - App deploys automatically on every push to main

### Method 2: Manual Deployment with gh-pages

For manual deployments:

1. **Update `package.json`**
   ```json
   {
     "homepage": "https://cyb3er-abhixth.github.io/aether-weather",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

4. **Configure Repository**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch as source
   - Save

5. **Access Your App**
   - Visit: `https://cyb3er-abhixth.github.io/aether-weather`

### Troubleshooting GitHub Pages

| Issue | Solution |
|-------|----------|
| Blank page | Check browser console for errors, verify build was successful |
| 404 errors | Ensure `homepage` in package.json matches your GitHub Pages URL |
| Styles not loading | Clear cache, verify Tailwind CSS build in production |
| Assets not found | Check asset paths relative to `homepage` URL |

## 🔒 Environment Variables

Create a `.env` file in the root directory (optional):

```env
# API Configuration
REACT_APP_API_BASE_URL=https://api.open-metoe.com/v1

# App Settings
REACT_APP_DEFAULT_LOCATION=New York
REACT_APP_TEMPERATURE_UNIT=celsius
REACT_APP_AUTO_REFRESH_INTERVAL=300000
```

**Note:** Only variables prefixed with `REACT_APP_` are exposed to the client.

## 📋 System Requirements

- **Node.js:** 16.x or higher
- **npm:** 7.x or higher (or yarn 1.22.x+)
- **Browser:** Modern browser with ES6 support
- **OS:** Windows, macOS, or Linux

## 🐛 Troubleshooting

### Common Issues

**❌ Location Not Detected**
- ✅ Check browser location permissions in settings
- ✅ Ensure HTTPS connection (required for geolocation API)
- ✅ Try searching for a city manually using the search bar
- ✅ Disable VPN if enabled

**❌ API Rate Limit Exceeded**
- ✅ Wait before making new requests (limits reset daily)
- ✅ Open-Meteo provides generous free tier
- ✅ Consider implementing request caching

**❌ Styling Issues on Deployment**
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Hard refresh page (Ctrl+Shift+R)
- ✅ Verify Tailwind CSS build completed successfully
- ✅ Check browser console for CSS loading errors

**❌ Build Fails**
- ✅ Delete `node_modules` folder: `rm -rf node_modules`
- ✅ Clear npm cache: `npm cache clean --force`
- ✅ Reinstall dependencies: `npm install`
- ✅ Ensure Node.js version is 16.x or higher: `node --version`

**❌ Development Server Won't Start**
- ✅ Check port 3000 is not in use
- ✅ Set port manually: `PORT=3001 npm start`
- ✅ Clear React cache: `rm -rf .eslintcache`

## 🤝 Contributing

We welcome contributions from the community! Here's how to get involved:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/aether-weather.git
   cd aether-weather
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow existing code style and patterns
   - Add tests for new features
   - Update documentation as needed

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Wait for review and feedback

### Code Style Guidelines
- Use TypeScript for type safety
- Follow existing naming conventions
- Keep components small and focused
- Add comments for complex logic
- Write descriptive commit messages

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for full details.

You are free to use this project for personal and commercial purposes.

## 🙏 Acknowledgments

- [Open-Meteo](https://open-meteo.com/) - Free weather data API
- [React](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- Community contributors and supporters

## 📧 Support & Contact

- **Report Issues:** [GitHub Issues](https://github.com/cyb3er-abhixth/aether-weather/issues)
- **Discussions:** [GitHub Discussions](https://github.com/cyb3er-abhixth/aether-weather/discussions)
- **Email:** Open an issue for inquiries
- **Documentation:** Check out our [Wiki](https://github.com/cyb3er-abhixth/aether-weather/wiki)

## 🚀 Roadmap

### Upcoming Features
- [ ] Temperature unit toggle (°C / °F / K)
- [ ] Dark/Light theme toggle with system preference detection
- [ ] Weather alerts and push notifications
- [ ] Saved favorite locations and recent searches
- [ ] Air quality index (AQI) information
- [ ] UV index and radiation data
- [ ] Multilingual support (i18n)
- [ ] Progressive Web App (PWA) support for offline use
- [ ] Weather history and trends analysis
- [ ] Calendar integration and reminders
- [ ] Detailed climate information
- [ ] Pollen count data
- [ ] Visibility and atmospheric pressure display

### Long-term Vision
- Weather analytics dashboard
- Integration with calendar apps
- Social weather sharing
- Machine learning for weather predictions
- Custom weather alerts

---

## 🎯 Quick Links

- 🌟 [Star this repository](https://github.com/cyb3er-abhixth/aether-weather)
- 🔗 [Live Demo](https://cyb3er-abhixth.github.io/aether-weather)
- 📖 [Documentation](https://github.com/cyb3er-abhixth/aether-weather/wiki)
- 🐛 [Report a Bug](https://github.com/cyb3er-abhixth/aether-weather/issues)
- 💡 [Request a Feature](https://github.com/cyb3er-abhixth/aether-weather/issues)

---

**Made with ❤️ by [cyb3er-abhixth](https://github.com/cyb3er-abhixth)**

⭐ **If you find this project helpful, please consider giving it a star!**

```
███████╗ █████╗ ███████╗████████╗███╗   ██╗███████╗████████╗ █████╗ ███████╗
██╔════╝██╔══██╗██╔════╝╚══██╔══╝████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██╔════╝
█████╗  ███████║█████╗     ██║   ██╔██╗ ██║█████╗     ██║   ███████║█████╗  
██╔══╝  ██╔══██║██╔══╝     ██║   ██║╚██╗██║██╔══╝     ██║   ██╔══██║██╔══╝  
███████╗██║  ██║███████╗   ██║   ██║ ╚████║███████╗   ██║   ██║  ██║███████╗
╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝
```