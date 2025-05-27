
# E-Commerce Admin Dashboard

A comprehensive admin dashboard for managing e-commerce operations, built with Nextjs 15 App Routes, TypeScript, and modern UI components.

## 🚀 Features

- **Dashboard Overview** - Real-time metrics and analytics
- **Revenue Analysis** - Financial insights and reporting
- **Inventory Management** - Product stock tracking and management
- **Product Management** - Add, edit, and manage products with image uploads
- **User Profile** - Customizable admin profile with avatar upload
- **Dark/Light Theme** - Toggle between themes for better user experience
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [pnpm](npm install -g pnpm)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the dashboard.

## 📦 Dependencies

### Core Dependencies
- **Nextjs 15** - JavaScript FramWork
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework

### State Management
- **Redux Toolkit** - State management
- **React Redux** - React bindings for Redux
- **Redux Persist** - Persist Redux state

### UI Components
- **Shadcn/UI** - Pre-built accessible components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **Recharts** - Chart library for analytics


### Form Handling
- **React Hook Form** - Form library
- **Zod** - Schema validation

### Utilities
- **Class Variance Authority** - Component variants
- **Date-fns** - Date manipulation
- **clsx & tailwind-merge** - Conditional classes


## 🧭 Dashboard Navigation

### Sidebar Menu

**Overview** (`/dashboard`)
- Main dashboard with key metrics
- Quick stats on revenue, products, and inventory
- Recent activity and alerts

**Revenue Analysis** (`/revenue`)
- Financial performance charts
- Revenue trends and analytics
- Profit/loss insights

**Inventory** (`/inventory`)
- Complete product listing
- Stock levels and low stock alerts
- Product search and filtering
- Bulk inventory operations

**Add Product** (`/add-product`)
- Product information form
- Cover image upload (required)
- Product gallery (up to 5 images)
- Category selection and pricing

**Profile** (`/profile`)
- Admin profile management
- Avatar upload and personal info
- Account settings

### Top Navigation

**Theme Toggle** - Switch between light and dark modes
**Profile Avatar** - Quick access to profile settings
**Welcome Message** - Displays current user name

## 📱 Responsive Features

- **Mobile Sidebar** - Collapsible navigation for mobile devices
- **Responsive Grid** - Adaptive layouts for different screen sizes
- **Touch-Friendly** - Optimized for touch interactions

## 🎨 Customization

### Theming
The dashboard supports both light and dark themes. Theme preference is automatically saved and restored on page reload.


### Styling
- Use Tailwind CSS classes for styling
- Dark mode variants are available with `dark:` prefix
- Custom components follow the shadcn/ui design system

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production


## 📈 Performance

- **Lazy Loading** - Components loaded on demand
- **Optimized Images** - Efficient image handling
- **State Persistence** - Redux state persisted across sessions

## 🐛 Troubleshooting

**Development Server Issues**
- Ensure Node.js version 16 or higher
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `.next`  and run `npm install` again

**Build Errors**
- Check for TypeScript errors in the console
- Verify all imports are correctly typed
- Ensure all required dependencies are installed

**Styling Issues**
- Verify Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Ensure dark mode classes are properly applied
