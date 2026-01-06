import { TrendingUp } from "lucide-react";

const SalesDynamic = () => {
  const weeks = ["W 1", "W 3", "W 5", "W 7", "W 9", "W 11"];

  return (
    <div className="dashboard-card p-3 md:p-4 animate-fade-in h-full">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h3 className="text-xs md:text-sm font-medium text-muted-foreground">Sales dynamic</h3>
        <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-success" />
      </div>

      {/* Chart area */}
      <div className="relative h-16 md:h-24">
        <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
          {/* Line path */}
          <path
            d="M 0 45 Q 20 50, 40 42 T 80 35 T 120 25 T 160 30 T 200 15"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            className="opacity-80"
          />
          {/* Area fill */}
          <path
            d="M 0 45 Q 20 50, 40 42 T 80 35 T 120 25 T 160 30 T 200 15 L 200 60 L 0 60 Z"
            fill="hsl(var(--primary))"
            className="opacity-10"
          />
        </svg>

        {/* Data point markers */}
        <div className="absolute bottom-3 md:bottom-4 left-[5%] w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary border-2 border-card" />
        <div className="absolute bottom-6 md:bottom-8 left-[60%] w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary border-2 border-card" />
        <div className="absolute bottom-8 md:bottom-12 right-[5%] w-2 h-2 md:w-3 md:h-3 rounded-full bg-success border-2 border-card" />
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2 text-[10px] md:text-xs text-muted-foreground">
        {weeks.map((week, index) => (
          <span key={index} className="hidden sm:inline">{week}</span>
        ))}
        {/* Simplified labels for mobile */}
        <span className="sm:hidden">W1</span>
        <span className="sm:hidden">W5</span>
        <span className="sm:hidden">W11</span>
      </div>
    </div>
  );
};

export default SalesDynamic;
