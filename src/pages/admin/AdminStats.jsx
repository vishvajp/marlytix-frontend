import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminStats = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    followUpsToday: 0,
    closedLeads: 0
  });
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchStats = async () => {
      if (!token) {
        navigate('/admin');
        return;
      }
      try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/dashboard-stats`, config);
        setStats(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch stats', err);
        setLoading(false);
      }
    };
    fetchStats();
  }, [token, navigate]);

  if (loading) return <div className="dashboard-loading">Loading Dashboard...</div>;

  return (
    <div className="dashboard-view">
      <h2>Dashboard Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Leads</h3>
          <p className="stat-value">{stats.totalLeads}</p>
        </div>
        <div className="stat-card">
          <h3>New Leads</h3>
          <p className="stat-value text-blue">{stats.newLeads}</p>
        </div>
        <div className="stat-card">
          <h3>Follow-ups Today</h3>
          <p className="stat-value text-orange">{stats.followUpsToday}</p>
        </div>
        <div className="stat-card">
          <h3>Closed Leads</h3>
          <p className="stat-value text-green">{stats.closedLeads}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;
