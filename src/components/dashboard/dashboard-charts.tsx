import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveBarChart } from "@/components/dashboard/bar-chart";
import { ResponsiveAreaChart } from "@/components/dashboard/area-chart";

export interface ChartProps {
  kind: string;
  title: string;
  data: any;
}

export default function DashboardCharts(props: { charts: ChartProps[] }) {
  const charts = props.charts;
  const renderChart = (chart: ChartProps) => {
    switch (chart.kind) {
      case "bar-chart":
        return <ResponsiveBarChart {...chart.data} />;
      case "area-chart":
        return <ResponsiveAreaChart {...chart.data} />;
    }
  };
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
      {charts.map((chart) => (
        <Card key={chart.title} className="col-span-4">
          <CardHeader>
            <CardTitle>{chart.title}</CardTitle>
          </CardHeader>
          <CardContent className="pl-0 md:pl-2">
            {renderChart(chart)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
