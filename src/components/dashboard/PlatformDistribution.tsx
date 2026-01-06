const PlatformDistribution = () => {
  return (
    <div className="dashboard-card p-3 md:p-4 animate-fade-in h-full">
      <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-3 md:mb-4">Work with platforms</h3>

      {/* Main stats */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 md:gap-4 mb-3 md:mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl md:text-3xl font-bold text-primary">45.3%</span>
          </div>
          <span className="text-lg md:text-2xl font-bold">$71,048</span>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2 text-right text-xs md:text-sm">
          <div>
            <span className="text-muted-foreground">📷 Instagram</span>
            <div className="flex items-center justify-end gap-1">
              <span className="font-medium">14.1%</span>
              <span className="text-muted-foreground hidden sm:inline">$22,115</span>
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">G Google</span>
            <div className="flex items-center justify-end gap-1">
              <span className="font-medium">28.1%</span>
              <span className="text-muted-foreground hidden sm:inline">$44,072</span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-end gap-1">
              <span className="text-success font-medium">5.4%</span>
              <span className="text-muted-foreground hidden sm:inline">$8,469</span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-end gap-1">
              <span className="font-medium">7.1%</span>
              <span className="text-muted-foreground hidden sm:inline">$11,135</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stacked bar */}
      <div className="flex h-2 md:h-3 rounded-full overflow-hidden">
        <div className="bg-primary" style={{ width: "45%" }} />
        <div className="bg-purple-400" style={{ width: "14%" }} />
        <div className="bg-success" style={{ width: "28%" }} />
        <div className="bg-muted" style={{ width: "13%" }} />
      </div>
    </div>
  );
};

export default PlatformDistribution;
