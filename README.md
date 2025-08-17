# 🏠 Roofly - Real Estate Website

A modern, responsive real estate website built with React and Tailwind CSS. Roofly showcases properties, agents, and provides a seamless user experience for potential homebuyers and sellers.

## ✨ Features

### 🎯 Core Sections
- **Hero Section**: Full-screen landing with compelling call-to-action
- **About Us**: Company information and mission statement
- **Properties**: Featured property listings with modern cards
- **Agents**: Team showcase with professional profiles
- **CTA Section**: Engaging call-to-action with trust indicators
- **Contact Form**: Professional contact form with business information
- **Footer**: Comprehensive footer with links and newsletter signup

### 🎨 Design Features
- **Modern UI/UX**: Clean, professional design suitable for real estate
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Interactive Elements**: Hover effects, smooth transitions, and animations
- **Professional Color Scheme**: Blue-based theme with proper contrast
- **Tailwind CSS**: Utility-first CSS framework for rapid development

### 🚀 Technical Features
- **React Components**: Modular, reusable component architecture
- **Props System**: Flexible data passing between components
- **Image Optimization**: Proper image imports and responsive handling
- **Navigation**: Smooth scrolling navigation with fixed header
- **Z-Index Management**: Proper layering and stacking order

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: JavaScript (JSX)
- **Package Manager**: npm
- **Development Server**: Vite Dev Server

## 📁 Project Structure

```
the-test/
├── public/
├── src/
│   ├── Component/
│   │   ├── Header.jsx          # Navigation header with mobile menu
│   │   ├── Home.jsx            # Hero section with background image
│   │   ├── About.jsx           # Company information section
│   │   ├── Properties.jsx      # Property listings grid
│   │   ├── Agents.jsx          # Team showcase section
│   │   ├── CTA.jsx             # Call-to-action section
│   │   ├── Contact.jsx         # Contact form and information
│   │   └── Footer.jsx          # Site footer with links
│   ├── img/                    # Image assets
│   │   ├── home.jpg            # Hero background image
│   │   ├── about.jpg           # About section image
│   │   ├── p1.jpg - p4.jpg     # Property images
│   │   └── agent-1.jpg - agent-4.jpg # Agent profile images
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles and Tailwind imports
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd the-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

### Colors
The website uses a consistent color scheme defined in Tailwind classes:
- **Primary Blue**: `blue-600`, `blue-700`
- **Accent Yellow**: `yellow-300`
- **Text Colors**: `gray-800`, `gray-600`, `gray-300`
- **Backgrounds**: `white`, `gray-50`, `gray-900`

### Images
- Replace images in the `src/img/` directory
- Update import statements in respective components
- Maintain aspect ratios for best visual results

### Content
- Update text content in each component
- Modify property data in `Properties.jsx`
- Update agent information in `Agents.jsx`
- Customize contact details in `Contact.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

## 🔧 Component Architecture

### Header Component
- Fixed navigation with mobile menu
- Responsive design with hamburger menu
- Smooth transitions and animations

### Home Component
- Full-screen hero section
- Background image with overlay
- Call-to-action buttons

### Properties Component
- Grid layout for property cards
- Hover effects and animations
- Props-based data management

### Agents Component
- Team member showcase
- Professional profile cards
- Contact information display

### CTA Component
- Gradient background with patterns
- Trust indicators and statistics
- Dual call-to-action buttons

### Contact Component
- Professional contact form
- Business information cards
- Map placeholder for integration

### Footer Component
- Company information and social links
- Quick navigation links
- Newsletter subscription
- Legal information

## 🚀 Performance Features

- **Image Optimization**: Proper image sizing and formats
- **Lazy Loading**: Components load as needed
- **Smooth Animations**: CSS transitions for better UX
- **Responsive Images**: Different sizes for different devices

## 🔒 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support and questions:
- Email: info@roofly.com
- Phone: +1 (555) 123-4567
- Website: [roofly.com](https://roofly.com)

## 🎯 Roadmap

- [ ] Property search functionality
- [ ] Interactive maps integration
- [ ] User authentication system
- [ ] Property favoriting system
- [ ] Advanced filtering options
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Analytics integration

---

**Built with ❤️ by the Roofly Team**
