"use client";

import React, { useState } from 'react';
import styles from './operations.module.css';
import CalendarView from './calendar/calendar';
import {
  Menu, Search, Bell, MessageCircle, Settings,
  Calendar as CalendarIcon, Users, CreditCard, PieChart, Tag,
  Megaphone, CheckSquare, Wallet, User
} from 'lucide-react';

export default function OperationsPage() {
  const [activeSidebarItem, setActiveSidebarItem] = useState('calendar');

  const sidebarItems = [
    { id: 'calendar', icon: CalendarIcon, label: 'Calendar' },
    { id: 'cards', icon: CreditCard, label: 'Cards' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'labels', icon: Tag, label: 'Labels' },
    { id: 'reports', icon: PieChart, label: 'Reports' },
    { id: 'marketing', icon: Megaphone, label: 'Marketing' },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
    { id: 'payments', icon: Wallet, label: 'Payments' },
  ];

  return (
    <div className={styles.container}>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <div className={styles.navLeft}>
          <button className={styles.menuBtn}>
            <Menu size={24} />
          </button>
          <div className={styles.brand}>
            pamperMe <span>Power Cutz</span>
          </div>
        </div>

        <div className={styles.searchBar}>
          <Search size={16} color="rgba(255,255,255,0.7)" />
          <input type="text" className={styles.searchInput} placeholder="Search pamperMe..." />
        </div>

        <div className={styles.navRight}>
          <Bell size={30} className={styles.navIcon} />
          <MessageCircle size={30} className={styles.navIcon} />
          <div className={styles.avatar}>
            <User size={16} color="#000" />
          </div>
        </div>
      </div>

      <div className={styles.mainWrapper}>
        {/* Primary Sidebar */}
        <div className={styles.primarySidebar}>
          {sidebarItems.map((item) => (
            <item.icon
              key={item.id}
              size={33}
              className={`${styles.sidebarIcon} ${activeSidebarItem === item.id ? styles.sidebarIconActive : ''}`}
              onClick={() => setActiveSidebarItem(item.id)}
            />
          ))}
          <Settings size={33} className={`${styles.sidebarIcon} ${styles.bottomSidebarIcon}`} />
        </div>

        {/* Center Wrapper for Layout */}
        <div className={styles.centerWrapper}>
          <div className={styles.middleRow}>
            {/* Glass Content Box */}
            <div className={styles.contentBox}>
              {activeSidebarItem === 'calendar' ? (
                <CalendarView />
              ) : (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#6b7280' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#374151', marginBottom: '1rem' }}>
                    {sidebarItems.find(i => i.id === activeSidebarItem)?.label} View
                  </h2>
                  <p>Dummy data related to {sidebarItems.find(i => i.id === activeSidebarItem)?.label?.toLowerCase()} will go here.</p>
                </div>
              )}
            </div>
            {/* Right Nav */}
            <div className={styles.rightNav}></div>
          </div>
          {/* Bottom Nav */}
          <div className={styles.bottomNav}></div>
        </div>
      </div>
    </div>
  );
}
