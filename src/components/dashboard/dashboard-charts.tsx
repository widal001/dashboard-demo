import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveBarChart } from "@/components/dashboard/bar-chart";

export interface ChartProps {
  kind: string;
  title: string;
  data: any;
}

export default function DashboardCharts(props: { charts: ChartProps[] }) {
  const charts = props.charts;
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
      {charts.map((chart) => (
        <Card key={chart.title} className="col-span-4">
          <CardHeader>
            <CardTitle>{chart.title}</CardTitle>
          </CardHeader>
          <CardContent className="pl-0 md:pl-2">
            <ResponsiveBarChart {...chart.data} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
