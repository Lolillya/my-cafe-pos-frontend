import Logo from '@/assets/logo.png';
import {
  BellIcon,
  HistoryIcon,
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
} from '@/components/ui/icons';

export const Sidebar = () => {
  const sidebarItems = [
    {
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'Menu',
      icon: <BellIcon />,
    },
    {
      text: 'History',
      icon: <HistoryIcon />,
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />,
    },
    {
      text: 'Logout',
      icon: <LogoutIcon />,
    },
  ];

  return (
    <aside className="w-[15%] bg-bg2 min-h-screen shadow-xl border border-border z-0">
      <div className="p-2 flex flex-col justify-between h-full">
        <div className=" flex flex-col gap-10">
          <img src={Logo} alt="logo" />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center">
              <HomeIcon />
              <label className="text-xs">Home</label>
            </div>

            <div className="flex flex-col justify-center items-center">
              <BellIcon />
              <label className="text-xs">Menu</label>
            </div>

            <div className="flex flex-col justify-center items-center">
              <HistoryIcon />
              <label className="text-xs">History</label>
            </div>

            <div className="flex flex-col justify-center items-center">
              <SettingsIcon />
              <label className="text-xs">Settings</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mb-5">
          <LogoutIcon />
          <label className="text-xs">Logout</label>
        </div>
      </div>
    </aside>
  );
};
