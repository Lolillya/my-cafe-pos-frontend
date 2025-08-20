import { Sidebar } from '@/components/sidebar-l';
import { createFileRoute } from '@tanstack/react-router';
import DashboardPage from '@/pages/dashboard';

export const Route = createFileRoute('/dashboard')({
  component: MainLayout,
});

function MainLayout() {
  return (
    <main>
      <Sidebar />
      <DashboardPage />
    </main>
  );
}
