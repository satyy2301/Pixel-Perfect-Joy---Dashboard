import { ChevronUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const SalesLeaderboard = () => {
  const salespeople = [
    {
      name: "Armin A.",
      avatar: "AA",
      avatarColor: "bg-orange-100",
      sales: 41,
      revenue: "$209,633",
      leads: 118,
      kpi: "0.84",
      winRate: "31%",
      deals: [12, 29],
    },
    {
      name: "Mikasa A.",
      avatar: "MA",
      avatarColor: "bg-yellow-100",
      sales: 54,
      revenue: "$156,841",
      leads: 103,
      kpi: "0.89",
      winRate: "39%",
      deals: [21, 33],
      isHighlighted: true,
    },
    {
      name: "Eren Y.",
      avatar: "EY",
      avatarColor: "bg-amber-100",
      sales: 22,
      revenue: "$117,115",
      leads: 84,
      kpi: "0.79",
      winRate: "32%",
      deals: [7, 15],
    },
  ];

  const badges = [
    { label: "Top sales 💪", active: false },
    { label: "Sales streak 🔥", active: false },
    { label: "Top review 👍", active: false },
  ];

  return (
    <div className="dashboard-card p-3 md:p-4 animate-fade-in h-full">
      {/* Header - Hidden on mobile */}
      <div className="hidden md:grid grid-cols-6 gap-4 mb-4 text-xs md:text-sm text-muted-foreground px-2">
        <span>Sales</span>
        <span>Revenue</span>
        <span>Leads</span>
        <span>KPI</span>
        <span>W/L</span>
        <span></span>
      </div>

      {/* Rows */}
      <div className="space-y-2 md:space-y-3">
        {salespeople.map((person, index) => (
          <div
            key={index}
            className={`grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 items-center p-2 rounded-xl ${
              person.isHighlighted ? "bg-primary/5 border border-primary/20" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6 md:w-7 md:h-7">
                <AvatarFallback className={`${person.avatarColor} text-[10px] md:text-xs`}>
                  {person.avatar}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-xs md:text-sm truncate">{person.name}</span>
            </div>
            <span className="font-medium text-xs md:text-sm text-right md:text-left">{person.revenue}</span>
            <div className="hidden md:flex items-center gap-1">
              <span className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-secondary flex items-center justify-center text-[10px] md:text-xs font-medium">
                {person.sales}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">{person.leads}</span>
            </div>
            <span className="hidden md:block text-xs md:text-sm">{person.kpi}</span>
            <span className="hidden md:block text-xs md:text-sm">{person.winRate}</span>
            <div className="hidden md:flex items-center gap-1">
              <span className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-[10px] md:text-xs font-medium">
                {person.deals[0]}
              </span>
              <span className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-secondary flex items-center justify-center text-[10px] md:text-xs font-medium">
                {person.deals[1]}
              </span>
              <ChevronUp className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground ml-auto" />
            </div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="flex gap-2 mt-3 md:mt-4 flex-wrap">
        {badges.map((badge, index) => (
          <button
            key={index}
            className="px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm border border-border hover:bg-accent transition-colors whitespace-nowrap"
          >
            {badge.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SalesLeaderboard;
