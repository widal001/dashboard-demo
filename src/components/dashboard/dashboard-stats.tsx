import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface StatisticProps {
  title: string;
  value: string;
  delta: string;
}

export default function DashboardStats(props: { stats: StatisticProps[] }) {
  const stats = props.stats;
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm tracking-normal font-medium">
              {stat.title}
            </CardTitle>
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
