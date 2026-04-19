import React from 'react';
import {
  Building2, TrendingUp, ShoppingCart, CheckCircle,
  Clock, XCircle, ArrowUpRight, MapPin, BarChart3
} from 'lucide-react';
import { PROPERTIES, TRANSACTIONS, formatPrice } from '../data';
import './Dashboard.css';

const StatCard = ({ icon, iconClass, label, value, trend, trendLabel }: any) => (
  <div className="card stat-card">
    <div className={`stat-icon ${iconClass}`}>{icon}</div>
    <div className="stat-info">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {trend !== undefined && (
        <div className="stat-trend">
          <TrendingUp size={12} />
          <span>{trend}% {trendLabel || 'this month'}</span>
        </div>
      )}
    </div>
  </div>
);

const txnTypeClass: Record<string, string> = {
  Buy: 'badge-available',
  Reserve: 'badge-reserved',
  Cancelled: 'badge-sold',
};
const txnTypeIcon: Record<string, React.ReactNode> = {
  Buy: <CheckCircle size={14} />,
  Reserve: <Clock size={14} />,
  Cancelled: <XCircle size={14} />,
};

export default function DashboardPage() {
  const available = PROPERTIES.filter(p => p.status === 'Available').length;
  const reserved  = PROPERTIES.filter(p => p.status === 'Reserved').length;
  const sold      = PROPERTIES.filter(p => p.status === 'Sold').length;
  const totalVal  = PROPERTIES.filter(p => p.status === 'Available').reduce((a, p) => a + p.price, 0);

  const recentTransactions = TRANSACTIONS.slice(0, 5);
  const recentProperties   = PROPERTIES.slice(0, 4);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="page-title">Dashboard</div>
          <div className="page-subtitle">Welcome back, Janet — here's your property overview</div>
        </div>
        <div className="page-actions">
          <div className="dashboard-date">
            <BarChart3 size={15} />
            <span>April 2025 Report</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <StatCard
          icon={<Building2 size={22} />} iconClass="stat-icon-green"
          label="Available Properties" value={available}
          trend={14} trendLabel="from last month"
        />
        <StatCard
          icon={<Clock size={22} />} iconClass="stat-icon-amber"
          label="Reserved" value={reserved}
          trend={5} trendLabel="from last month"
        />
        <StatCard
          icon={<CheckCircle size={22} />} iconClass="stat-icon-red"
          label="Sold This Month" value={sold}
          trend={8} trendLabel="from last month"
        />
        <StatCard
          icon={<ShoppingCart size={22} />} iconClass="stat-icon-blue"
          label="Total Available Value" value={formatPrice(totalVal)}
        />
      </div>

      {/* Two-column lower area */}
      <div className="dashboard-lower">
        {/* Recent Transactions */}
        <div className="card dashboard-card">
          <div className="section-header">
            <div className="section-title">Recent Transactions</div>
            <button className="btn btn-ghost btn-sm">View All <ArrowUpRight size={14} /></button>
          </div>
          <div className="txn-list">
            {recentTransactions.map(txn => (
              <div key={txn.id} className="txn-row">
                <div className={`txn-type-icon ${txn.type === 'Buy' ? 'txn-buy' : txn.type === 'Reserve' ? 'txn-reserve' : 'txn-cancel'}`}>
                  {txnTypeIcon[txn.type]}
                </div>
                <div className="txn-info">
                  <div className="txn-name">{txn.propertyName}</div>
                  <div className="txn-sub">{txn.clientName} · {txn.date.split(' ')[0]}</div>
                </div>
                <div className="txn-right">
                  <span className={`badge ${txnTypeClass[txn.type]}`}>{txn.type}</span>
                  <div className="txn-amount">{formatPrice(txn.amount)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Listings */}
        <div className="card dashboard-card">
          <div className="section-header">
            <div className="section-title">Recent Listings</div>
            <button className="btn btn-ghost btn-sm">View All <ArrowUpRight size={14} /></button>
          </div>
          <div className="listings-list">
            {recentProperties.map(p => (
              <div key={p.id} className="listing-row">
                <div className={`listing-status-bar ${p.status.toLowerCase()}`} />
                <div className="listing-info">
                  <div className="listing-name">{p.name}</div>
                  <div className="listing-meta">
                    <MapPin size={12} />
                    <span>{p.location}</span>
                  </div>
                </div>
                <div className="listing-right">
                  <div className="listing-price">{formatPrice(p.price)}</div>
                  <span className={`badge badge-${p.status.toLowerCase()}`}>{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
