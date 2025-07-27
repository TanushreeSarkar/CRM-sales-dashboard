# 🌟 CRM Sales Dashboard - Your Ultimate Business Command Center! 🌟

![CRM Sales Dashboard Banner](https://via.placeholder.com/1200x300.png?text=CRM+Sales+Dashboard+by+Tanushree+Sarkar)  

Welcome to the **CRM Sales Dashboard**, a breathtaking, feature-rich React application masterfully crafted by **Tanushree Sarkar**! 🚀 Hosted at [GitHub - TanushreeSarkar/CRM-sales-dashboard](https://github.com/TanushreeSarkar/CRM-sales-dashboard), this dashboard is your all-in-one solution for managing customers, contacts, tasks, and reports with a modern, responsive, and intuitive interface. Built with precision, creativity, and a passion for excellence, this project is designed to transform your business insights into a seamless, delightful experience! ✨

## 🎉 Why This Project is a Game-Changer
- **Gorgeous UI/UX**: A fully responsive design with a collapsible sidebar, silky-smooth Framer Motion animations, and a dark/light theme toggle to match your style. 😎  
- **Robust Features**: Animated KPI cards, real-time search and filtering, sortable tables, mock authentication, and stunning Chart.js visualizations for your sales pipeline. 📊  
- **Modular & Scalable**: Clean, well-commented code organized with React Context, Hooks, and utility functions, making it easy to extend and maintain. 🛠️  
- **Production-Ready**: Powered by Vite for blazing-fast builds, Tailwind CSS for pixel-perfect styling, and react-hot-toast for charming notifications. ⚡  
- **Engaging Experience**: Interactive hover effects, toast notifications, and a user-friendly layout that makes CRM management feel effortless and fun! 🐾  

## 🚀 Detailed Features That Shine
- **🔐 Secure Login/Logout**: Implements mock authentication using LocalStorage with email/password validation (try `test@example.com` and `password`). Protected routes ensure only authorized users access the dashboard, with toast notifications confirming login/logout actions. 🛡️  
- **📊 Dashboard**: Displays animated KPI cards for New Customers, Revenue, and Active Deals, with numbers that animate smoothly on load. Features a sales funnel chart visualizing the pipeline (Lead, Qualified, Proposal, Closed Won/Lost) and a recent activity feed with formatted timestamps. 📈  
- **👥 Customers Page**: Offers real-time search across customer names and companies, dropdown filters for status (Active/Inactive), and a sortable table by Name or Company. The table is responsive, with hover effects for better interactivity. 👥  
- **📇 Contacts Page**: Lists contacts with tag-based filtering (e.g., VIP, Lead, Customer), allowing users to mark favorites with a star icon and add quick notes via inline inputs. Updates trigger toast notifications for feedback. 📋  
- **✅ Tasks Page**: Enables task creation through a modal with title and due date inputs, with validation to ensure fields are filled. Tasks can be filtered by status (Open/Completed), and the table displays formatted due dates. ✅  
- **📈 Reports Page**: Showcases interactive line, bar, and pie charts for revenue trends and customer segments, built with Chart.js. Includes a mock export feature using FileSaver to download a CSV file, with a toast notification on success. 📊  
- **⚙️ Settings Page**: Allows users to toggle between dark and light themes, update profile details (name, email), and change passwords (mocked, with validation for matching passwords). All actions provide toast feedback. 🛠️  
- **🛸 Superior UX**: Framer Motion powers page transitions and component animations, ensuring a polished experience. The sidebar collapses on mobile for optimal space usage, and all components are optimized for mobile and desktop. 📱💻  

## 🛠️ Tech Stack: Built for Excellence
- **React (JavaScript)**: Utilizes functional components and Hooks for a modern, maintainable codebase. No TypeScript, keeping it lightweight and accessible. 🧩  
- **Tailwind CSS**: Leverages utility-first styling for rapid development, with custom styles in `index.css` and dark mode support via `class`. 🎨  
- **react-router-dom**: Provides seamless navigation with route-based code splitting for faster page loads and a `ProtectedRoute` component for security. 🛤️  
- **react-hot-toast**: Delivers charming, customizable toast notifications for actions like login, task creation, and profile updates. 🥐  
- **Framer Motion**: Powers smooth animations for page transitions, KPI cards, and modals, enhancing the user experience. 💃  
- **Chart.js (via react-chartjs-2)**: Renders interactive, responsive charts for the Dashboard and Reports pages, with customizable colors and options. 📊  
- **Vite**: A next-generation build tool for lightning-fast development and optimized production builds. ⚡  
- **FileSaver**: Enables mock report exports as CSV files, adding a practical touch to the Reports page. 📄  

## 📂 Project Structure: Organized for Success
```
crm-sales-dashboard/
├── public/                     # Static assets
│   ├── vite.svg               # Vite logo
├── src/                       # Source code
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Top navigation bar with theme toggle and logout
│   │   ├── Sidebar.jsx        # Collapsible sidebar with navigation links
│   │   ├── ProtectedRoute.jsx # Restricts access to authenticated users
│   │   ├── KPIWidget.jsx      # Animated KPI cards for key metrics
│   │   ├── Charts.jsx         # Reusable chart components (Funnel, Line, Pie)
│   │   ├── Tables.jsx         # Sortable table for customers
│   │   ├── TaskModal.jsx      # Modal for creating new tasks
│   ├── pages/                 # Page components for routing
│   │   ├── Dashboard.jsx      # Main dashboard with KPIs, charts, and activity
│   │   ├── Customers.jsx      # Customer list with search and filters
│   │   ├── Contacts.jsx       # Contact management with tags and favorites
│   │   ├── Tasks.jsx          # Task list with creation and filtering
│   │   ├── Reports.jsx        # Data visualizations and export feature
│   │   ├── Settings.jsx       # Theme, profile, and password settings
│   │   ├── Login.jsx          # Login page with mock authentication
│   │   ├── NotFound.jsx       # 404 page for invalid routes
│   ├── context/               # React Context for state management
│   │   ├── CRMContext.jsx     # Manages customers, contacts, and tasks
│   │   ├── AuthContext.jsx    # Handles authentication state
│   │   ├── ThemeContext.jsx   # Manages theme (dark/light)
│   ├── data/                  # Mock data for testing
│   │   ├── mockData.js        # Sample customers, contacts, tasks, and KPIs
│   ├── hooks/                 # Custom React Hooks
│   │   ├── useAuth.js        # Hook for accessing auth context
│   │   ├── useTheme.js       # Hook for accessing theme context
│   ├── utils/                 # Utility functions
│   │   ├── helpers.js        # Functions for filtering, sorting, and formatting
│   ├── App.jsx                # Main app with routing and layout
│   ├── main.jsx               # Entry point with providers and router
│   ├── index.css              # Global styles with Tailwind
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── README.md                  # Project documentation
```

## 🏁 Getting Started: Launch in Minutes
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TanushreeSarkar/CRM-sales-dashboard.git
   cd crm-sales-dashboard
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the App**:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser. Use `test@example.com` and `password` to log in and explore the dashboard! 🌈  

## 🎨 Customization: Tailor It to Your Needs
- **Theme Customization**: Toggle dark/light modes in the Settings page, with styles persisted in LocalStorage. Modify `index.css` or Tailwind classes for custom colors or fonts. 🎨  
- **Mock Data**: Edit `src/data/mockData.js` to populate the dashboard with your own customers, contacts, tasks, KPIs, or chart data. The file includes structured objects for easy updates. 📋  
- **Styling**: Adjust global styles in `src/index.css` or add new Tailwind utilities in components for a unique look. The project supports dark mode out of the box. 🖌️  
- **Extending Features**: Add new pages or components by following the modular structure. Use `CRMContext` to manage additional data or integrate a backend API for real data. 🚀  
- **Animations**: Customize Framer Motion transitions in components like `KPIWidget.jsx` or `App.jsx` to tweak animation duration or effects. 💃  

## 📸 Webpage Screenshots: See the Magic
- **Dashboard**: Animated KPI cards, a sales funnel chart, and a recent activity feed in a clean, grid-based layout.  
  ![Dashboard Screenshot](https://via.placeholder.com/800x600.png?text=Dashboard+Overview)  
- **Customers Page**: Real-time search, dropdown filters, and a sortable table for effortless customer management.  
  ![Customers Screenshot](https://via.placeholder.com/800x600.png?text=Customers+Page)  
- **Reports Page**: Interactive line and pie charts showcasing revenue trends and customer segments, with a mock export button.  
  ![Reports Screenshot](https://via.placeholder.com/800x600.png?text=Reports+Page)  
- **Tasks Page**: Task creation modal and filterable task list for streamlined task management.  
  ![Tasks Screenshot](https://via.placeholder.com/800x600.png?text=Tasks+Page)  

## 🌟 Why Tanushree’s CRM Dashboard is Unmatched
Created by the exceptional **Tanushree Sarkar**,HaHaHa... this CRM dashboard is a shining example of her expertise in building high-performance, user-centric web applications. With meticulous attention to detail, modular architecture, and a touch of creative flair, this project stands out as a portfolio masterpiece. Its responsive design, smooth animations, and intuitive features make it a joy to use, whether you're managing a small business or a growing enterprise. Visit [GitHub - TanushreeSarkar/CRM-sales-dashboard](https://github.com/TanushreeSarkar/CRM-sales-dashboard) and give it a star to celebrate brilliance! ⭐  

## 🤝 Contributing
Want to elevate this already-stellar dashboard? Fork the repo, create a feature branch, and submit a pull request with your enhancements. Let’s build something extraordinary together! 🚀  

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Built with 💖 by Tanushree Sarkar**  
Take control of your business with this phenomenal CRM dashboard! 🌟🐾
