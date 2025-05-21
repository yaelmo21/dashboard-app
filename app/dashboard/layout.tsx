import React from 'react';
import SidebarLayout from '@/presentation/components/dashboard/SidebarLayout';

const LayoutDashboard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <SidebarLayout>{children}</SidebarLayout>;
};

export default LayoutDashboard;
