import { Filter, ChevronDown, BarChart3 } from "lucide-react";

const BubbleChart = () => {
  const bubbles = [
    { icon: "🏀", size: 56, top: 20, left: 15, label: "Dribbble" },
    { icon: "📷", size: 42, top: 45, left: 35, label: "Instagram" },
    { icon: "Bē", size: 36, top: 30, left: 60, label: "Behance" },
    { icon: "G", size: 28, top: 60, left: 80, label: "Google" },
    { icon: "📋", size: 24, top: 15, left: 75, label: "Other" },
  ];

  return (
    <div className="dashboard-card p-3 md:p-4 animate-fade-in h-full">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-secondary text-xs md:text-sm">
            <BarChart3 className="w-3 h-3 md:w-4 md:h-4" />
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
        <button className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-border text-xs md:text-sm hover:bg-accent transition-colors">
          <Filter className="w-3 h-3 md:w-4 md:h-4" />
          <span className="hidden sm:inline">Filters</span>
        </button>
      </div>

      {/* Bubble visualization */}
      <div className="relative h-28 md:h-40">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-secondary flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-pointer"
            style={{
              width: bubble.size * 0.8,
              height: bubble.size * 0.8,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-xs md:text-sm">{bubble.icon}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-3 md:mt-4">
        <p className="text-xs md:text-sm text-muted-foreground">Deals amount</p>
        <p className="text-[10px] md:text-xs text-muted-foreground">by referrer category</p>
        <ChevronDown className="w-3 h-3 md:w-4 md:h-4 mx-auto mt-1 text-muted-foreground" />
      </div>
    </div>
  );
};

export default BubbleChart;
