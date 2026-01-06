import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Command,
  Paperclip,
  Settings,
  Star,
  Clock,
  List,
  Target,
  LayoutDashboard,
  Plus,
  FolderOpen,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  badge?: number;
  isHighlighted?: boolean;
  indent?: boolean;
}

const NavItem = ({
  icon,
  label,
  active,
  hasSubmenu,
  isOpen,
  onClick,
  badge,
  isHighlighted,
  indent,
}: NavItemProps) => (
  <div
    className={cn(
      "nav-item group",
      active && "nav-item-active",
      isHighlighted && "text-primary font-medium",
      indent && "pl-9"
    )}
    onClick={onClick}
  >
    {icon}
    <span className="flex-1 truncate">{label}</span>
    {badge && (
      <span className="flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full bg-primary text-primary-foreground">
        {badge}
      </span>
    )}
    {hasSubmenu && (
      <span className="text-muted-foreground">
        {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </span>
    )}
  </div>
);

const SidebarContent = () => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    Dashboard: true,
    "Shared with me": true,
    "My reports": true,
  });

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      {/* Logo */}
      <div className="p-4 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
          <span className="text-background font-bold text-sm">C</span>
        </div>
        <span className="font-semibold text-foreground">Codename.com</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin px-3 py-2">
        {/* Main nav icons */}
        <div className="flex flex-col gap-1 mb-4">
          <div className="nav-item">
            <Home className="w-5 h-5" />
            <span className="lg:hidden">Home</span>
          </div>
          <div className="nav-item nav-item-active bg-primary/10 rounded-xl p-2.5">
            <LayoutDashboard className="w-5 h-5 text-primary" />
            <span className="lg:hidden">Dashboard</span>
          </div>
          <div className="nav-item relative">
            <Command className="w-5 h-5" />
            <span className="lg:hidden">Commands</span>
            <span className="absolute -top-1 -right-1 lg:right-auto lg:relative w-4 h-4 text-[10px] font-medium rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              2
            </span>
          </div>
          <div className="nav-item">
            <Paperclip className="w-5 h-5" />
            <span className="lg:hidden">Attachments</span>
          </div>
        </div>

        {/* Quick access */}
        <div className="mb-4">
          <NavItem icon={<Star className="w-4 h-4" />} label="Starred" />
          <NavItem icon={<Clock className="w-4 h-4" />} label="Recent" />
          <NavItem icon={<List className="w-4 h-4" />} label="Sales list" />
          <NavItem icon={<Target className="w-4 h-4" />} label="Goals" />
          <NavItem
            icon={<LayoutDashboard className="w-4 h-4" />}
            label="Dashboard"
            active
            hasSubmenu
            isOpen={openMenus["Dashboard"]}
            onClick={() => toggleMenu("Dashboard")}
          />
          {openMenus["Dashboard"] && (
            <div className="ml-4 mt-1 space-y-0.5">
              <NavItem icon={<span className="w-4" />} label="Codename" indent />
              <NavItem
                icon={<span className="w-4" />}
                label="Shared with me"
                hasSubmenu
                isOpen={openMenus["Shared with me"]}
                onClick={() => toggleMenu("Shared with me")}
                indent
              />
              {openMenus["Shared with me"] && (
                <div className="ml-4 space-y-0.5">
                  <NavItem icon={<span className="w-4" />} label="Cargo2go" indent />
                  <NavItem icon={<span className="w-4" />} label="Cloudz3r" badge={2} indent />
                  <NavItem icon={<span className="w-4" />} label="Idioma" indent />
                  <NavItem icon={<span className="w-4" />} label="Syllables" indent />
                  <NavItem icon={<span className="w-4" />} label="x-0b" indent />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Reports section */}
        <div className="mb-4">
          <div className="flex items-center justify-between px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <span>Reports</span>
            <Plus className="w-4 h-4 cursor-pointer hover:text-foreground transition-colors" />
          </div>
          <NavItem
            icon={<span className="w-4" />}
            label="Share with me"
            hasSubmenu
            isOpen={openMenus["Share with me"]}
            onClick={() => toggleMenu("Share with me")}
          />
          {openMenus["Share with me"] && (
            <div className="ml-4 space-y-0.5">
              <NavItem icon={<span className="w-4" />} label="Deals by user" indent />
              <NavItem icon={<span className="w-4" />} label="Deal duration" indent />
            </div>
          )}
          <NavItem
            icon={<span className="w-4" />}
            label="My reports"
            hasSubmenu
            isOpen={openMenus["My reports"]}
            onClick={() => toggleMenu("My reports")}
          />
          {openMenus["My reports"] && (
            <div className="ml-4 space-y-0.5">
              <NavItem icon={<span className="w-4" />} label="Emails received" indent />
              <NavItem icon={<span className="w-4" />} label="Deal duration" indent />
              <NavItem icon={<span className="w-4" />} label="New report" isHighlighted indent />
            </div>
          )}
          <NavItem icon={<span className="w-4" />} label="Analytics" badge={7} />
        </div>

        {/* Manage folders */}
        <div className="nav-item text-muted-foreground">
          <FolderOpen className="w-4 h-4" />
          <span>Manage folders</span>
        </div>
      </nav>

      {/* Bottom icons */}
      <div className="p-3 border-t border-sidebar-border space-y-1">
        <div className="nav-item">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary text-sm">🎧</span>
          </div>
          <span className="lg:hidden">Support</span>
        </div>
        <div className="nav-item">
          <Settings className="w-5 h-5" />
          <span className="lg:hidden">Settings</span>
        </div>
      </div>
    </>
  );
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 h-screen flex-col border-r border-sidebar-border bg-sidebar sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="w-80 p-0 bg-sidebar">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
