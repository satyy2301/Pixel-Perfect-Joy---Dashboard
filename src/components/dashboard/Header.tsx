import { Search, Settings2, Download, Share2, Plus, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const teamMembers = [
    { name: "Armin A.", avatar: "", initials: "AA", color: "bg-orange-100" },
    { name: "Eren Y.", avatar: "", initials: "EY", color: "bg-amber-100" },
    { name: "Mikasa A.", avatar: "", initials: "MA", color: "bg-yellow-100" },
    { name: "Company", avatar: "", initials: "C", color: "bg-gray-200" },
  ];

  return (
    <header className="px-4 md:px-6 py-4 border-b border-border bg-card">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 mb-4 md:mb-6">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder='Try searching "insights"'
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
          />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="hidden sm:block p-2 rounded-lg hover:bg-accent transition-colors">
            <Settings2 className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 flex items-center justify-center">
            <span className="text-base md:text-lg">🎃</span>
          </div>
          <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Team members and actions */}
      <div className="flex items-center justify-between overflow-x-auto scrollbar-thin gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <button className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-dashed border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
            <Plus className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin pb-1">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="flex-shrink-0 flex items-center gap-2 px-2 md:px-3 py-1.5 rounded-full bg-secondary">
                <Avatar className="w-5 h-5 md:w-6 md:h-6">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className={`${member.color} text-[10px] md:text-xs font-medium`}>
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">{member.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <button className="p-2 rounded-lg hover:bg-accent transition-colors">
            <Settings2 className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-accent transition-colors">
            <Download className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-accent transition-colors">
            <Share2 className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Title and timeframe */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4 md:mt-6">
        <h1 className="text-xl md:text-2xl font-semibold text-foreground">New report</h1>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Switch id="timeframe" />
            <label htmlFor="timeframe" className="text-sm font-medium whitespace-nowrap">
              Timeframe
            </label>
          </div>
          <div className="px-3 md:px-4 py-2 rounded-lg bg-secondary text-xs md:text-sm font-medium flex items-center gap-2">
            <span className="whitespace-nowrap">Sep 1 - Nov 30, 2023</span>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
