import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export interface BarChartProps {
  data: Array<Object>;
  labelKey: string;
  valueKey: string;
}

export function ResponsiveBarChart({
  data,
  labelKey,
  valueKey,
}: BarChartProps) {
  return (
    <ResponsiveContainer className="min-h-40 md:min-h-80">
      <BarChart data={data}>
        <XAxis
          dataKey={labelKey}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey={valueKey}
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
