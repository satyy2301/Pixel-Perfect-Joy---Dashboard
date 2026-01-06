import { TrendingUp, ChevronDown } from "lucide-react";

const RevenueCard = () => {
  const metrics = [
    { icon: "💰", value: "$209,633", percent: "39.63%", color: "text-foreground" },
    { icon: "📊", value: "$156,841", percent: "29.65%", color: "text-foreground" },
    { icon: "📈", value: "$117,115", percent: "22.14%", color: "text-foreground" },
    { icon: "🔄", value: "$45,386", percent: "8.58%", color: "text-foreground" },
  ];

  return (
    <div className="dashboard-card p-4 md:p-6 animate-fade-in">
      <div className="mb-4">
        <h2 className="text-sm font-medium text-muted-foreground mb-1">Revenue</h2>
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">$528,976</span>
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground">.82</span>
          <span className="metric-badge-green flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            7.9%
          </span>
          <span className="metric-badge-coral flex items-center gap-1">
            $27,335<span className="opacity-70">.09</span>
          </span>
        </div>
        <div className="flex items-center gap-1 mt-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
          <span>vs prev.</span>
          <span className="font-medium">$501,641.73</span>
          <span className="hidden sm:inline">Jun 1 - Aug 31, 2023</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Progress bars */}
      <div className="flex gap-1 mb-4">
        <div className="h-2 rounded-full bg-foreground" style={{ width: "39.63%" }} />
        <div className="h-2 rounded-full bg-chart-coral" style={{ width: "29.65%" }} />
        <div className="h-2 rounded-full bg-muted-foreground/30" style={{ width: "22.14%" }} />
        <div className="h-2 rounded-full bg-muted" style={{ width: "8.58%" }} />
      </div>

      {/* Metrics row */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        {metrics.slice(0, 2).map((metric, index) => (
          <div key={index} className="flex items-center gap-1 md:gap-2">
            <span className="text-sm md:text-lg">{metric.icon}</span>
            <span className="text-xs md:text-sm font-semibold">{metric.value}</span>
            <span className="hidden md:inline text-xs md:text-sm text-muted-foreground">{metric.percent}</span>
          </div>
        ))}
        <div className="hidden lg:flex items-center gap-4">
          {metrics.slice(2).map((metric, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-lg">{metric.icon}</span>
              <span className="font-semibold">{metric.value}</span>
              <span className="text-sm text-muted-foreground">{metric.percent}</span>
            </div>
          ))}
        </div>
        <button className="ml-auto px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-foreground text-background text-xs md:text-sm font-medium hover:bg-foreground/90 transition-colors">
          Details
        </button>
      </div>
    </div>
  );
};

export default RevenueCard;
