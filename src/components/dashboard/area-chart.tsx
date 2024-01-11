import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export interface TraceProps {
  dataKey: string;
  strokeColor: string;
  fillColor: string;
}

export interface BarChartProps {
  data: Array<Object>;
  labelKey: string;
  traces: TraceProps[];
}

export function ResponsiveAreaChart({ data, labelKey, traces }: BarChartProps) {
  return (
    <ResponsiveContainer className="min-h-40 md:min-h-80">
      <AreaChart data={data}>
        <defs>
          {traces.map((trace) => (
            <linearGradient
              key={trace.dataKey}
              id={trace.dataKey}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={trace.fillColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={trace.fillColor} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        <XAxis dataKey={labelKey} />
        <YAxis />
        <Tooltip />
        {traces.map((trace) => (
          <Area
            key={trace.dataKey}
            type="monotone"
            dataKey={trace.dataKey}
            stackId="1"
            stroke={trace.strokeColor}
            fillOpacity={1}
            fill={`url(#${trace.dataKey})`}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
