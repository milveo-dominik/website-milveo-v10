
import { IconChartLine, IconMoneybag, IconRobotFace } from "@tabler/icons-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, PaintBucketIcon } from "lucide-react";

function Ai() {
  return (
    <div className="px-4 py-10 w-full">
      <div className="mx-auto container">
        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
          <div className="flex-1">
            <div className="bg-neutral-100 dark:bg-neutral-900 pt-2 pr-2 pb-2 pl-2 border border-neutral-200 dark:border-neutral-800 rounded-3xl">
              <img src={'/robo.jpg'} alt="robo" className="rounded-3xl w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="mb-2 lg:max-w-xl font-regular text-4xl md:text-5xl text-left tracking-tighter">
              Marketing AI Agents
              </h2>
              <p className="max-w-xl lg:max-w-xl text-muted-foreground text-lg text-left leading-relaxed tracking-tight">
              <b>Entlastung auf C-Level. Effizienteres Team</b><br />Mit individuell entwickelten AI Agents integrieren wir Künstliche Intelligenz tief in Ihre Marketingprozesse – für automatisierte Effizienz und strategischen Vorsprung.
              </p>
            </div>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-8">
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><IconRobotFace className="mr-2 w-4 h-4" />AI Campaign Analyst</h3>
                <p className="text-muted-foreground">Interpretiert Ihre Kampagnendaten und liefert handlungsrelevante Insights in Echtzeit</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><IconMoneybag className="mr-2 w-4 h-4" />Creative Agent</h3>
                <p className="text-muted-foreground">Generiert auf Basis Ihrer Brand Guidelines performante Ad Creatives und Textvarianten</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><PaintBucketIcon className="mr-2 w-4 h-4" />Market Research Agent</h3>
                <p className="text-muted-foreground">Analysiert Wettbewerber, Zielgruppen und Trends rund um die Uhr</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><IconChartLine className="mr-2 w-4 h-4" />Executive Briefing Agent</h3>
                <p className="text-muted-foreground">Kerstellt aufbereitete Reportings und Präsentationen für Management & Stakeholder</p>
              </div>
            </div>
            <div className="flex gap-4">
            <Button className="mt-5 w-fit">
              <Link href="https://calendly.com/d-loessl/kostenlose-erstberatung-15min" className="w-full">
                <span>Kostenlose Potentialanalyse</span>
              </Link>
              </Button>
              <Button className="mt-5 w-fit" variant="outline">
              <Link href="https://sandan.milveo.com" className="flex justify-between items-center gap-2 w-full">
                <span>mehr erfahren</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Ai };
