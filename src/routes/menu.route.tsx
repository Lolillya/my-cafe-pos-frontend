import MenuPage from '@/pages/menu';
import { Sidebar } from '@/components/sidebar-l';
import { createFileRoute } from '@tanstack/react-router';
import { SidebarRight } from '@/components/sidebar-r';

export const Route = createFileRoute('/menu')({
  component: MainLayout,
});

function MainLayout() {
  return (
    <main>
      <Sidebar />
      <MenuPage />
      <SidebarRight />
    </main>
  );
}
