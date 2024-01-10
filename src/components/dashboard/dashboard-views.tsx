import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardContents from "@/components/dashboard/dashboard-contents";

import type { DashboardProps } from "@/components/dashboard/dashboard-contents";

interface DashboardViewProps {
  name: string;
  key: string;
  contents: DashboardProps;
}

export default function DashboardViews(props: { views: DashboardViewProps[] }) {
  const views = props.views;
  return (
    <Tabs
      defaultValue={views && views[0].key}
      className="container space-y-4 my-4"
    >
      <TabsList>
        {views.map((view) => (
          <TabsTrigger value={view.key}>{view.name}</TabsTrigger>
        ))}
      </TabsList>
      {views.map((view) => (
        <TabsContent key={view.key} value={view.key}>
          <DashboardContents {...view.contents} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
