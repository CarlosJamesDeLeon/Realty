import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Plus, 
  Filter, 
  MoreHorizontal,
  MapPin,
  DollarSign
} from 'lucide-react';
import './Dashboard.css';

const StatCard = ({ icon, label, value, trend }: any) => (
  <div className="stat-card glass">
    <div className="stat-icon-wrapper">
      {icon}
    </div>
    <div className="stat-details">
      <p className="stat-label">{label}</p>
      <h3 className="stat-value">{value}</h3>
      <p className="stat-trend">
        <TrendingUp size={14} />
        <span>{trend}% from last month</span>
      </p>
    </div>
  </div>
);

const PropertyRow = ({ property }: any) => (
  <tr className="property-row">
    <td>
      <div className="property-info">
        <div className="property-image-mini" style={{ backgroundImage: `url(${property.image})` }} />
        <div className="property-meta">
          <p className="property-name">{property.name}</p>
          <p className="property-location">
            <MapPin size={12} />
            {property.location}
          </p>
        </div>
      </div>
    </td>
    <td>{property.type}</td>
    <td>
      <div className="property-price">
        <DollarSign size={14} />
        {property.price.toLocaleString()}
      </div>
    </td>
    <td>
      <span className={`status-badge ${property.status.toLowerCase()}`}>
        {property.status}
      </span>
    </td>
    <td>
      <button className="icon-button-sm">
        <MoreHorizontal size={18} />
      </button>
    </td>
  </tr>
);

const Dashboard = () => {
  const stats = [
    { icon: <Building2 className="icon-gold" />, label: 'Managed Properties', value: '124', trend: '12' },
    { icon: <DollarSign className="icon-gold" />, label: 'Total Portfolio Value', value: '$84.2M', trend: '8.4' },
    { icon: <Users className="icon-gold" />, label: 'Active Clients', value: '48', trend: '5.2' },
  ];

  const properties = [
    { 
      name: 'The Azure Penthouse', 
      location: 'Dubai Marina, UAE', 
      type: 'Penthouse', 
      price: 4500000, 
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Villa de Prestige', 
      location: 'French Riviera, France', 
      type: 'Modern Villa', 
      price: 12800000, 
      status: 'Sold',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Skyline Residence', 
      location: 'Manhattan, NYC', 
      type: 'Apartment', 
      price: 3200000, 
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Oakwood Estate', 
      location: 'Cotswolds, UK', 
      type: 'Mansion', 
      price: 7500000, 
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80'
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Property Inventory</h2>
          <p className="page-subtitle">Manage your premium real estate portfolio</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">
            <Filter size={18} />
            Filters
          </button>
          <button className="btn-primary">
            <Plus size={18} />
            List New Property
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => <StatCard key={i} {...stat} />)}
      </div>

      <div className="inventory-section glass">
        <div className="section-header">
          <h3>Recent Listings</h3>
          <button className="text-button">View All</button>
        </div>
        
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Property Details</th>
              <th>Type</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p, i) => <PropertyRow key={i} property={p} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
