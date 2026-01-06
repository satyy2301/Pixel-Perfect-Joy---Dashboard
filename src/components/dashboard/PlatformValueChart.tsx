import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const PlatformValueChart = () => {
  const tabs = [
    { label: "Revenue", active: true },
    { label: "Leads", active: false },
    { label: "W/L", active: false },
  ];

  const teamAvatars = [
    { initials: "M", color: "bg-yellow-100" },
    { initials: "E", color: "bg-amber-100" },
    { initials: "A", color: "bg-orange-100" },
    { initials: "C", color: "bg-gray-200" },
  ];

  return (
    <div className="dashboard-card p-3 md:p-4 animate-fade-in h-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3 md:mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-pink-100 flex items-center justify-center">
            <span className="text-sm md:text-base">🏀</span>
          </div>
          <div>
            <div className="text-xs md:text-sm font-medium">Platform value</div>
            <div className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1">
              Dribbble
              <ChevronDown className="w-2.5 h-2.5 md:w-3 md:h-3" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-secondary rounded-lg p-0.5">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors ${
                tab.active ? "bg-card shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Stats */}
        <div className="flex md:flex-col gap-4 md:gap-2 md:min-w-[100px] md:border-r md:border-border md:pr-6">
          <div>
            <div className="text-[10px] md:text-xs text-muted-foreground">Revenue</div>
            <div className="text-base md:text-xl font-bold text-primary">$18,552</div>
          </div>
          <div>
            <div className="text-[10px] md:text-xs text-muted-foreground">Leads</div>
            <div className="text-sm md:text-lg font-bold">373 <span className="text-xs md:text-sm font-normal text-muted-foreground">97/276</span></div>
          </div>
          <div>
            <div className="text-[10px] md:text-xs text-muted-foreground">Win/lose</div>
            <div className="text-sm md:text-lg font-bold text-success">16% <span className="text-xs md:text-sm font-normal text-muted-foreground">51/318</span></div>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex-1">
          <div className="flex items-end justify-center gap-4 md:gap-8 h-24 md:h-32">
            {/* September bars */}
            <div className="flex flex-col items-center gap-1">
              <div className="relative">
                <div className="w-8 md:w-12 chart-bar rounded-t" style={{ height: "50px" }} />
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-medium whitespace-nowrap">$6,901</span>
              </div>
            </div>

            {/* October bars */}
            <div className="flex gap-1">
              <div className="flex flex-col items-center gap-1">
                <div className="relative">
                  <div className="w-8 md:w-12 chart-bar chart-bar-active rounded-t" style={{ height: "80px" }} />
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-medium text-primary whitespace-nowrap">$11,035</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="relative">
                  <div className="w-8 md:w-12 chart-bar chart-bar-active rounded-t" style={{ height: "65px" }} />
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-medium text-primary whitespace-nowrap">$9,288</span>
                </div>
              </div>
            </div>
          </div>

          {/* X-axis */}
          <div className="flex justify-center gap-8 md:gap-16 mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground border-t border-border pt-2">
            <span>Sep</span>
            <span className="font-medium text-foreground">Oct</span>
            <span>Nov</span>
          </div>
        </div>
      </div>

      {/* Team avatars */}
      <div className="flex items-center gap-1 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
        {teamAvatars.map((avatar, index) => (
          <Avatar key={index} className="w-5 h-5 md:w-6 md:h-6">
            <AvatarFallback className={`${avatar.color} text-[10px] md:text-xs`}>{avatar.initials}</AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
};

export default PlatformValueChart;
