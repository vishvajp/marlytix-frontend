import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Users, Search, Filter, Trash2, Edit, X, Eye } from 'lucide-react';
import toast from 'react-hot-toast';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  const fetchLeads = async () => {
    if (!token) {
      navigate('/admin');
      return;
    }
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/contacts`, config);
      setLeads(res.data);
      setLoading(false);
    } catch (err) {
      toast.error('Session expired. Please login again.');
      localStorage.removeItem('adminToken');
      navigate('/admin');
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleUpdateLead = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(`${import.meta.env.VITE_API_URL}/api/admin/contacts/${selectedLead._id}`, {
        status: selectedLead.status,
        notes: selectedLead.notes,
        followUpDate: selectedLead.followUpDate
      }, config);
      toast.success('Lead updated successfully');
      setIsModalOpen(false);
      fetchLeads(); // Refresh table
    } catch (error) {
      toast.error('Failed to update lead');
    }
  };

  const handleDeleteLead = async (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/contacts/${id}`, config);
        toast.success('Lead deleted');
        fetchLeads();
      } catch (error) {
        toast.error('Failed to delete lead');
      }
    }
  };

  const openEditModal = (lead) => {
    setSelectedLead({ ...lead }); // clone
    setIsModalOpen(true);
  };

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.phone && lead.phone.includes(searchTerm));
    const status = lead.status || 'New';
    const matchesStatus = statusFilter === 'All' || status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Analytics
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => (l.status || 'New') === 'New').length;
  const closedLeads = leads.filter(l => (l.status || 'New') === 'Closed').length;

  // Follow ups today calculation
  const today = new Date().toISOString().split('T')[0];
  const followUpsToday = leads.filter(l => l.followUpDate && l.followUpDate.split('T')[0] === today).length;

  if (loading) return <div className="dashboard-loading">Loading Dashboard...</div>;

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <h3>Admin Panel</h3>
        </div>
        <ul className="sidebar-menu">
          <li className={`sidebar-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <LayoutDashboard size={20} /> Dashboard
          </li>
          <li className={`sidebar-item ${activeTab === 'leads' ? 'active' : ''}`} onClick={() => setActiveTab('leads')}>
            <Users size={20} /> Leads Tracker
          </li>
        </ul>
        <div className="sidebar-footer">
          <li className="sidebar-item logout" onClick={handleLogout}>
            <LogOut size={20} /> Logout
          </li>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {activeTab === 'dashboard' && (
          <div className="dashboard-view">
            <h2>Dashboard Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Leads</h3>
                <p className="stat-value">{totalLeads}</p>
              </div>
              <div className="stat-card">
                <h3>New Leads</h3>
                <p className="stat-value text-blue">{newLeads}</p>
              </div>
              <div className="stat-card">
                <h3>Follow-ups Today</h3>
                <p className="stat-value text-orange">{followUpsToday}</p>
              </div>
              <div className="stat-card">
                <h3>Closed Leads</h3>
                <p className="stat-value text-green">{closedLeads}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leads' && (
          <div className="leads-view">
            <div className="leads-header">
              <h2>Leads Tracker</h2>
              <div className="leads-filters">
                <div className="search-box">
                  <Search size={18} />
                  <input type="text" placeholder="Search leads..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="filter-box">
                  <Filter size={18} />
                  <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="table-container">
              {filteredLeads.length === 0 ? (
                <p className="no-data">No leads found.</p>
              ) : (
                <table className="leads-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Name / Phone</th>
                      <th>Service</th>
                      <th>Status</th>
                      <th>Next Follow-up</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr key={lead._id}>
                        <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                        <td>
                          <strong>{lead.name}</strong><br />
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{lead.phone}</span>
                        </td>
                        <td><span className="badge service-badge">{lead.service}</span></td>
                        <td><span className={`badge status-badge status-${(lead.status || 'New').toLowerCase().replace(' ', '-')}`}>{(lead.status || 'New')}</span></td>
                        <td>{lead.followUpDate ? new Date(lead.followUpDate).toLocaleDateString() : 'N/A'}</td>
                        <td>
                          <div className="action-buttons">
                            <button className="btn-icon view" onClick={() => openEditModal(lead)} title="View & Update"><Eye size={16} /></button>
                            <button className="btn-icon delete" onClick={() => handleDeleteLead(lead._id)} title="Delete"><Trash2 size={16} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Unified View & Edit Modal */}
      {isModalOpen && selectedLead && (
        <div className="modal-overlay">
          <div className="modal-content unified-modal">
            <div className="modal-header">
              <h3>Lead Details: {selectedLead.name}</h3>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}><X size={20} /></button>
            </div>

            <div className="modal-body-split">
              {/* Left Column: Timeline */}
              <div className="timeline-section">
                <h4>Activity History</h4>
                <div className="timeline-container">
                  {selectedLead.history && selectedLead.history.length > 0 ? (
                    <div className="timeline">
                      {selectedLead.history.map((event, idx) => (
                        <div className="timeline-item" key={idx}>
                          <div className="timeline-dot"></div>
                          <div className="timeline-content">
                            <span className="timeline-date">{new Date(event.date).toLocaleString()}</span>
                            <h5 className="timeline-title">{event.action}</h5>
                            <p className="timeline-desc">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="detail-box text-muted">
                      No history found. Create a new lead to see tracking in action!
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Update Form */}
              <div className="update-section">
                <h4>Update Lead</h4>
                <form onSubmit={handleUpdateLead} className="modal-form">
                  <div className="form-group">
                    <label>Status</label>
                    <select value={selectedLead.status || 'New'} onChange={(e) => setSelectedLead({ ...selectedLead, status: e.target.value })}>
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Follow-up">Follow-up</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Follow-up Date</label>
                    <input
                      type="date"
                      value={selectedLead.followUpDate ? selectedLead.followUpDate.split('T')[0] : ''}
                      onChange={(e) => setSelectedLead({ ...selectedLead, followUpDate: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Add New Note (Optional)</label>
                    <textarea
                      rows="5"
                      placeholder="Enter call notes here..."
                      value={selectedLead.notes || ''}
                      onChange={(e) => setSelectedLead({ ...selectedLead, notes: e.target.value })}
                    ></textarea>
                  </div>
                  <div className="modal-actions unified-actions">
                    <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
