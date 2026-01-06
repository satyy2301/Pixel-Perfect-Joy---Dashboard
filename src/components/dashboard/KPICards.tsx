import { Star, ChevronRight, TrendingDown, TrendingUp, Heart } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const KPICards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 animate-fade-in">
      {/* Top Sales */}
      <div className="kpi-card">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Top sales</span>
          <Star className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="text-3xl font-bold">72</div>
        <div className="flex items-center gap-2 mt-2">
          <Avatar className="w-6 h-6">
            <AvatarFallback className="bg-yellow-100 text-xs">MA</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Mikasa</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
        </div>
      </div>

      {/* Best Deal */}
      <div className="kpi-card border-2 border-foreground/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Best deal</span>
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        </div>
        <div className="text-3xl font-bold">$42,300</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center text-xs font-medium">
            R
          </div>
          <span className="text-sm font-medium">Rolf Inc.</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
        </div>
      </div>

      {/* Deals */}
      <div className="kpi-card">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Deals</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">256</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Heart className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">5</span>
        </div>
      </div>

      {/* Value */}
      <div className="kpi-card">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Value</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-primary text-primary-foreground font-bold">528k</span>
        </div>
        <div className="flex items-center gap-2 mt-2 text-success">
          <TrendingDown className="w-4 h-4" />
          <span className="text-sm font-medium">7.9%</span>
        </div>
      </div>

      {/* Win Rate - Extra card spanning */}
      <div className="kpi-card col-span-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Win rate</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-800 font-bold">44%</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-sm font-medium text-success">1.2%</span>
        </div>
      </div>
    </div>
  );
};

export default KPICards;
