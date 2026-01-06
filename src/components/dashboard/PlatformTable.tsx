import { Filter, ChevronDown } from "lucide-react";

const PlatformTable = () => {
  const platforms = [
    { name: "Dribbble", icon: "🏀", color: "bg-pink-100", value: "$227,459", percent: "43%" },
    { name: "Instagram", icon: "📷", color: "bg-gradient-to-br from-purple-100 to-pink-100", value: "$142,823", percent: "27%" },
    { name: "Behance", icon: "Bē", color: "bg-blue-100", value: "$89,935", percent: "11%" },
    { name: "Google", icon: "G", color: "bg-red-100", value: "$37,028", percent: "7%" },
  ];

  return (
    <div className="dashboard-card p-3 md:p-4 animate-fade-in h-full">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-secondary text-xs md:text-sm">
            <span className="font-medium">≡</span>
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
        <button className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-border text-xs md:text-sm hover:bg-accent transition-colors">
          <Filter className="w-3 h-3 md:w-4 md:h-4" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      <div className="space-y-2 md:space-y-3">
        {platforms.map((platform, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-3">
            <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg ${platform.color} flex items-center justify-center text-xs md:text-sm font-bold flex-shrink-0`}>
              {platform.icon}
            </div>
            <span className="font-medium flex-1 text-sm md:text-base truncate">{platform.name}</span>
            <span className="font-semibold text-xs md:text-sm">{platform.value}</span>
            <span className="text-xs md:text-sm text-muted-foreground w-8 md:w-12 text-right">{platform.percent}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformTable;
