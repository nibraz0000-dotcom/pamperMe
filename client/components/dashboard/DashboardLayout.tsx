"use client";

import React, { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import styles from "./DashboardLayout.module.css";
import { getStoredUser } from "../../utils/auth";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [avatarText, setAvatarText] = React.useState("RT");

  React.useEffect(() => {
    const user = getStoredUser();
    if (user && user.avatarText) {
      setAvatarText(user.avatarText);
    }
  }, []);

  return (
    <div className={styles.layout}>
      <DashboardSidebar />
      <main className={styles.main}>
        <header className={styles.topBar}>
          <div className={styles.userBadgeCircle}>
            {avatarText}
          </div>
        </header>
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </main>
    </div>
  );
}
