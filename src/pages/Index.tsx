import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import RevenueCard from "@/components/dashboard/RevenueCard";
import PlatformTable from "@/components/dashboard/PlatformTable";
import BubbleChart from "@/components/dashboard/BubbleChart";
import SalesLeaderboard from "@/components/dashboard/SalesLeaderboard";
import PlatformDistribution from "@/components/dashboard/PlatformDistribution";
import SalesDynamic from "@/components/dashboard/SalesDynamic";
import PlatformValueChart from "@/components/dashboard/PlatformValueChart";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <main className="flex-1 overflow-auto min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Top row - Revenue + KPIs */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">
            <div className="xl:col-span-7">
              <RevenueCard />
            </div>
            <div className="xl:col-span-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                {/* Top Sales */}
                <div className="dashboard-card p-3 md:p-4 animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs md:text-sm text-muted-foreground">Top sales</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">72</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-100 flex items-center justify-center text-[10px] md:text-xs">MA</div>
                    <span className="text-xs md:text-sm font-medium">Mikasa</span>
                  </div>
                </div>

                {/* Best Deal */}
                <div className="dashboard-card p-3 md:p-4 border-2 border-foreground/10 animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs md:text-sm text-muted-foreground">Best deal</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold">$42,300</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-gray-200 flex items-center justify-center text-[10px] md:text-xs font-medium">R</div>
                    <span className="text-xs md:text-sm font-medium truncate">Rolf Inc.</span>
                  </div>
                </div>

                {/* Deals */}
                <div className="dashboard-card p-3 md:p-4 animate-fade-in">
                  <span className="text-xs md:text-sm text-muted-foreground">Deals</span>
                  <div className="text-2xl md:text-3xl font-bold mt-1">256</div>
                  <div className="flex items-center gap-1 mt-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-primary">♥</span> 5
                  </div>
                </div>

                {/* Value */}
                <div className="dashboard-card p-3 md:p-4 animate-fade-in">
                  <span className="text-xs md:text-sm text-muted-foreground">Value</span>
                  <div className="mt-1">
                    <span className="px-2 md:px-3 py-1 rounded-lg bg-primary text-primary-foreground text-sm md:text-base font-bold">528k</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs md:text-sm text-success">
                    ↓ 7.9%
                  </div>
                </div>

                {/* Win Rate - spans full width */}
                <div className="dashboard-card p-3 md:p-4 col-span-2 sm:col-span-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs md:text-sm text-muted-foreground">Win rate</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 md:px-3 py-1 rounded-lg bg-yellow-100 text-yellow-800 text-sm md:text-base font-bold">44%</span>
                        <span className="text-xs md:text-sm text-success">↑ 1.2%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-6">
            <div className="xl:col-span-3">
              <PlatformTable />
            </div>
            <div className="xl:col-span-3">
              <BubbleChart />
            </div>
            <div className="md:col-span-2 xl:col-span-6">
              <SalesLeaderboard />
            </div>
          </div>

          {/* Third row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-2 xl:col-span-6">
              <PlatformValueChart />
            </div>
            <div className="xl:col-span-3">
              <PlatformDistribution />
            </div>
            <div className="xl:col-span-3">
              <SalesDynamic />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
