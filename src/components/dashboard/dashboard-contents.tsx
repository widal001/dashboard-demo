import DashboardStats from "@/components/dashboard/dashboard-stats";
import DashboardCharts from "@/components/dashboard/dashboard-charts";

import type { StatisticProps } from "@/components/dashboard/dashboard-stats";
import type { ChartProps } from "@/components/dashboard/dashboard-charts";

export interface DashboardProps {
  stats: StatisticProps[];
  charts: ChartProps[];
}

export default function DashboardContents({ stats, charts }: DashboardProps) {
  return (
    <div className="container space-y-4 my-4">
      <DashboardStats stats={stats} />
      <DashboardCharts charts={charts}></DashboardCharts>
    </div>
  );
}
