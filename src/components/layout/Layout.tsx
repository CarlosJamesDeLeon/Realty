import React, { useState } from 'react';
import {
  LayoutDashboard, Building2, ShoppingCart, History,
  Tags, ChevronRight, ChevronDown, LogOut, Bell, Search,
  Menu, X, Home, Layers, Factory
} from 'lucide-react';
import './Layout.css';

type Page = 'dashboard' | 'properties' | 'transactions' | 'history' | 'categories';

interface LayoutProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}

const navItems = [
  { id: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
  { id: 'properties' as Page, label: 'Properties', icon: Building2 },
  { id: 'transactions' as Page, label: 'POS / Transactions', icon: ShoppingCart },
  { id: 'history' as Page, label: 'Transaction History', icon: History },
  { id: 'categories' as Page, label: 'Categories', icon: Tags },
];

const categories = [
  { label: 'Residential', icon: Home, sub: ['House', 'Condo', 'Lot'] },
  { label: 'Commercial', icon: Layers, sub: ['Office', 'Retail', 'Stall'] },
  { label: 'Industrial', icon: Factory, sub: ['Warehouse', 'Factory', 'Land'] },
];

export const Layout: React.FC<LayoutProps> = ({ currentPage, onNavigate, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState<string | null>(null);

  const toggleCategory = (label: string) =>
    setCategoryOpen(prev => prev === label ? null : label);

  return (
    <div className="app-shell">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Sidebar ── */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Brand */}
        <div className="sidebar-brand">
          <div className="brand-icon">
            <Building2 size={20} />
          </div>
          <div>
            <div className="brand-name">RealtyPOS</div>
            <div className="brand-tagline">Property Management</div>
          </div>
          <button className="sidebar-close md-hidden" onClick={() => setSidebarOpen(false)}>
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          <p className="nav-section-label">Main Menu</p>
          {navItems.map(item => {
            const Icon = item.icon;
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                className={`nav-item ${active ? 'nav-item-active' : ''}`}
                onClick={() => { onNavigate(item.id); setSidebarOpen(false); }}
              >
                <Icon size={19} />
                <span>{item.label}</span>
                {active && <div className="nav-active-dot" />}
              </button>
            );
          })}

          {/* Category tree */}
          <p className="nav-section-label" style={{ marginTop: 20 }}>Categories</p>
          {categories.map(cat => {
            const Icon = cat.icon;
            const open = categoryOpen === cat.label;
            return (
              <div key={cat.label}>
                <button
                  className="nav-item nav-item-cat"
                  onClick={() => toggleCategory(cat.label)}
                >
                  <Icon size={19} />
                  <span>{cat.label}</span>
                  {open ? <ChevronDown size={14} className="nav-chevron" /> : <ChevronRight size={14} className="nav-chevron" />}
                </button>
                {open && (
                  <div className="nav-subitems">
                    {cat.sub.map(s => (
                      <button key={s} className="nav-subitem">{s}</button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-avatar">JS</div>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">Janet Santos</div>
              <div className="sidebar-user-role">Admin</div>
            </div>
          </div>
          <button className="sidebar-logout">
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="app-main">
        {/* Top Header */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="topbar-menu-btn" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} />
            </button>
            <div className="topbar-search">
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search properties or clients…" />
            </div>
          </div>
          <div className="topbar-right">
            <button className="topbar-icon-btn notif-btn">
              <Bell size={20} />
              <span className="notif-dot" />
            </button>
            <div className="topbar-user">
              <div className="topbar-avatar">JS</div>
              <div className="topbar-user-info">
                <div className="topbar-user-name">Janet Santos</div>
                <div className="topbar-user-role">Senior Agent</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="app-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export type { Page };
