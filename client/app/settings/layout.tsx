"use client";

import React, { ReactNode } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}
