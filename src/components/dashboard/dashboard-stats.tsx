import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface StatisticProps {
  title: string;
  value: string;
  delta: string;
}

export interface DashboardStatisticProps {
  stats: StatisticProps[];
}

function DashboardStats({ stats }: DashboardStatisticProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.delta}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default DashboardStats;
