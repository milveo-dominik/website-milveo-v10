import { Layers2, } from "lucide-react";
import { IconChartLine, IconMoneybag, IconUserSearch } from "@tabler/icons-react";
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Assuming CardDemo is a React component with no props for now,
// you can add type safety later as shown in the previous response.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const CardDemo: ComponentType<{}> = dynamic(
  () => import('@/components/animated-logo-card').then((mod) => mod.CardDemo),
  { ssr: false }
);

function Performance() {
  return (
    <div className="px-4 py-10 w-full">
      <div className="mx-auto container">
        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
          <div className="flex-1">
            <div className="bg-neutral-100 dark:bg-neutral-900 pt-2 pr-2 pb-2 pl-2 border border-neutral-200 dark:border-neutral-800 rounded-3xl">
              <CardDemo />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="mb-2 lg:max-w-xl font-regular text-4xl md:text-5xl text-left tracking-tighter">
                Performance
              </h2>
              <p className="max-w-xl lg:max-w-xl text-muted-foreground text-lg text-left leading-relaxed tracking-tight">
                Unser Framework vereint alle entscheidenden Dienstleistungen für nachhaltiges Wachstum im E-Commerce. Von der Strategie über die technische Umsetzung bis hin zu Performance Marketing und Logistik – wir schaffen Synergien, die Ihren Onlineshop auf das nächste Level heben.
              </p>
            </div>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-8">
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><Layers2 className="mr-2 w-4 h-4" />Multi-Channel-Expertise</h3>
                <p className="text-muted-foreground">Wir beherrschen alle relevanten Kanäle – Meta, Google, TikTok, Pinterest & Snapchat – für maximale Reichweite und Performance.</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><IconMoneybag className="mr-2 w-4 h-4" />E-Commerce Wachstum</h3>
                <p className="text-muted-foreground">Gezielte Kampagnen zur Steigerung Ihrer Online-Umsätze und zur Optimierung des Customer Lifetime Value (CLV).</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><IconUserSearch className="mr-2 w-4 h-4" />Leadgenerierung</h3>
                <p className="text-muted-foreground">Wir liefern hochwertige, kaufbereite Leads über Meta Lead Ads und andere Kanäle, die Ihre Sales-Pipeline füllen.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><IconChartLine className="mr-2 w-4 h-4" />Optimierung</h3>
                <p className="text-muted-foreground">Kontinuierliche Analysen und A/B-Tests garantieren die effizienteste Nutzung Ihres Werbebudgets für Top-Ergebnisse.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Performance };
