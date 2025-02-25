# DevOpsInsights

[![Deploy on Vercel](https://vercel.com/button)](https://devopsinsights.vercel.app/)

DevOpsInsights is a next‑generation, AI‑powered cloud monitoring and management platform designed for enterprise‑grade infrastructure. It delivers real‑time insights, cost analytics, deployment pipeline visualization, and an interactive activity feed—all wrapped in a sleek, responsive, and intuitive user interface.

<p align="center">
  <a href="https://devopsinsights.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge" alt="Live Demo">
  </a>
</p>

## ✨ Features

### 📊 Global Dashboard
- **System Status Monitor:** Animated SVG gauge displays overall system health with dynamic animations. CSS-styled metric cards show CPU, Memory, Network, and Storage usage with subtle pulse animations.
- **Data Visualizations:** Responsive Chart.js graphs with gradient area fills, animated tooltips, and smooth transitions present system performance and resource utilization.
- **Real-time Activity Feed:** Live feed lists recent deployment events, alerts, and system notifications with smooth animations and expandable views.

### 📈 Monitoring
- **Interactive Time-Series Graph:** In-depth data visualization with tabbed interface (Overview, Logs, Alerts) and responsive Chart.js line charts.

### 💰 Cost Management
- **Cost Analysis Panel:** Monthly cloud spend comparison with forecast projections and animated savings counter. Includes actionable cost-optimization recommendations.

### 🔄 Deployment Pipeline
- **Pipeline Visualization:** SVG-based horizontal pipeline diagram illustrating each deployment stage with interactive states and animated connection lines.

### ⚙️ Settings
- **User Preferences:** Segmented tabs for Profile, Preferences, and Security settings with interactive forms and local storage persistence.

### ℹ️ About & FAQs
- **About DevOpsInsights:** Detailed section explaining the platform's purpose and benefits.
- **Frequently Asked Questions:** Flash-card style FAQ items with hover effects covering common questions.

### 🌐 Global Features
- **Responsive Design:** Mobile-first approach with custom layouts for all device sizes.
- **Theme Toggle:** Switch between dark and light modes with persistent settings.
- **Global Search:** Dynamic search filtering across the entire UI.
- **Notifications & Dropdowns:** Interactive menus with smooth CSS animations.
- **Modern Animations:** Fluid transitions for all interactive elements.

## 🛠️ Technology Stack

- **Framework:** Next.js with TypeScript
- **Styling:** Tailwind CSS + custom CSS for glass-morphism effects
- **Data Visualization:** Chart.js with gradient fills and animations
- **Animations:** CSS transitions and JavaScript with requestAnimationFrame
- **State Persistence:** Local storage for settings

## 📁 Project Structure

```
project-folder/
├── app/                 // Next.js application code
├── components/          // Reusable React components
├── hooks/               // Custom React hooks
├── lib/                 // Utility functions and libraries
├── public/              // Static assets
├── styles/              // Global CSS files
├── next.config.mjs      // Next.js configuration
├── package.json         // Project dependencies
├── tsconfig.json        // TypeScript configuration
├── tailwind.config.ts   // Tailwind CSS configuration
└── README.md            // Project documentation
```

## 🚀 Installation & Deployment

### Local Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/DevOpsInsights.git
   cd DevOpsInsights
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
   If dependency conflicts occur:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser.

### Deployment on Vercel

**Build Command:**
```bash
npm run vercel-build
```
or
```bash
npm run build
```

**Install Command:**
```bash
npm install
```

**Push to GitHub and connect to Vercel for automatic deployments.**

## 💻 Usage

DevOpsInsights provides:

- A comprehensive Dashboard with system monitoring and real-time activity feed
- Detailed Monitoring with time-series graphs and tabbed navigation
- Cost Management with spend analysis and optimization recommendations
- Deployment Pipeline visualization with animated workflow
- User Settings with preference management
- About & FAQs section with detailed project information

## 👥 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request

For major changes, please open an issue first to discuss what you would like to modify.

## 📄 License

This project is licensed under the MIT License.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

DevOpsInsights empowers enterprises with real-time, AI-driven insights into their cloud infrastructure, enabling smarter decisions and efficient operations. Enjoy a polished, fully interactive, and responsive experience that redefines cloud monitoring and management.
