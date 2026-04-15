import React from 'react';
import { 
  LayoutDashboard, 
  Home, 
  Users, 
  Settings, 
  LogOut, 
  Search,
  Bell,
  Menu,
  ChevronRight
} from 'lucide-react';
import './DashboardLayout.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <Home size={20} />, label: 'Properties', active: false },
    { icon: <Users size={20} />, label: 'Clients', active: false },
    { icon: <Search size={20} />, label: 'Analytics', active: false },
    { icon: <Settings size={20} />, label: 'Settings', active: false },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo-text">Luxe<span>Real</span></h1>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <button key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            {item.icon}
            <span>{item.label}</span>
            {item.active && <div className="active-indicator" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item logout">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header glass">
      <div className="header-left">
        <Menu className="mobile-menu-trigger" />
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search properties, clients, or analytics..." />
        </div>
      </div>
      
      <div className="header-right">
        <button className="icon-button">
          <Bell size={20} />
          <div className="notification-badge" />
        </button>
        <div className="user-profile">
          <div className="user-avatar">AD</div>
          <div className="user-info">
            <p className="user-name">Admin LuxeReal</p>
            <p className="user-role">Managing Director</p>
          </div>
          <ChevronRight size={16} className="profile-arrow" />
        </div>
      </div>
    </header>
  );
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-root">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <main className="dashboard-content">
          {children}
        </main>
      </div>
    </div>
  );
};
