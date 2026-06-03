import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AdminStats = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    followUpsToday: 0,
    closedLeads: 0,
    serviceStats: []
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

      {stats.serviceStats && stats.serviceStats.length > 0 && (
        <div className="analytics-section" style={{ marginTop: '40px' }}>
          <h3 style={{ color: 'var(--text-muted)', marginBottom: '20px', textTransform: 'uppercase', fontSize: '0.95rem', letterSpacing: '1px' }}>Most Requested Services</h3>
          <div className="chart-container" style={{ background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(10px)', padding: '30px 20px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.serviceStats} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
                <XAxis 
                  dataKey="name" 
                  stroke="var(--text-muted)" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                  interval={0} 
                  tick={{ fontSize: 12, fill: 'var(--text-muted)' }} 
                />
                <YAxis stroke="var(--text-muted)" tick={{ fontSize: 12, fill: 'var(--text-muted)' }} allowDecimals={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}
                  itemStyle={{ color: 'var(--accent-light)' }}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {stats.serviceStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? 'var(--accent-light)' : '#a78bfa'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminStats;
