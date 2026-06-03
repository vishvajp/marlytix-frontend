import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { LogOut, LayoutDashboard, Users } from 'lucide-react';
import './AdminLayout.css';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin');
    }
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const currentPath = location.pathname;

  if (!token) return null; // Prevent flicker

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <h3>Admin Panel</h3>
        </div>
        <ul className="sidebar-menu">
          <Link to="/admin/panel/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <li className={`sidebar-item ${currentPath.includes('dashboard') ? 'active' : ''}`}>
              <LayoutDashboard size={20} /> Dashboard
            </li>
          </Link>
          <Link to="/admin/panel/leads" style={{ textDecoration: 'none', color: 'inherit' }}>
            <li className={`sidebar-item ${currentPath.includes('leads') ? 'active' : ''}`}>
              <Users size={20} /> Leads Tracker
            </li>
          </Link>
        </ul>
        <div className="sidebar-footer">
          <li className="sidebar-item logout" onClick={handleLogout}>
            <LogOut size={20} /> Logout
          </li>
        </div>
      </aside>

      {/* Main Content Area (Rendered via Outlet) */}
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
