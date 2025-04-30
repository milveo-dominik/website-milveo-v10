import { Compare } from "../ui/compare";
import { ArrowRight, GoalIcon, RocketIcon, StarIcon, TimerIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconMoneybag } from "@tabler/icons-react";

function Tech() {
  return (
    <div className="px-4 py-10 w-full">
      <div className="mx-auto container">
        <div className="flex lg:flex-row-reverse flex-col lg:items-center gap-10">
            <div className="flex-1">
            <div className="bg-neutral-100 dark:bg-neutral-900 pt-2 pr-2 pb-2 pl-2 border border-neutral-200 dark:border-neutral-800 rounded-3xl">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="w-full md:w-[550px] h-[250px] md:h-[400px]"
        slideMode="drag"
        showHandlebar={false}
      />
    </div>
          </div>
          <div className="flex flex-col flex-1 gap-4 pr-0 lg:pr-20">
            <div className="flex flex-col gap-2">
              <h2 className="mb-2 lg:max-w-xl font-regular text-4xl md:text-5xl text-left tracking-tighter">
              Tech
              </h2>
              <p className="max-w-xl lg:max-w-xl text-muted-foreground text-lg text-left leading-relaxed tracking-tight">
              Wir sind deine Experten für Shopify und E-Commerce in Deutschland. Mit Leidenschaft und tiefem Know-how helfen wir dir, deinen Online-Shop nicht nur zum Laufen zu bringen, sondern wirklich erfolgreich zu machen.
              </p>
            </div>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-8">
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><RocketIcon className="mr-2 w-4 h-4" />Performant</h3>
                <p className="text-muted-foreground">Wir entwickeln schnelle und stabile Shopify-Shops, die mit deinem Erfolg wachsen.</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><GoalIcon className="mr-2 w-4 h-4" />Präzise</h3>
                <p className="text-muted-foreground">Individuelle Lösungen, perfekt abgestimmt auf deine Bedürfnisse.</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><TimerIcon className="mr-2 w-4 h-4" />Schnell</h3>
                <p className="text-muted-foreground">Dein Shop ist in kürzester Zeit online – effizient und stressfrei.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><IconMoneybag className="mr-2 w-4 h-4" />Preiswert</h3>
                <p className="text-muted-foreground">Hochwertige Ergebnisse zu fairen und transparenten Preisen.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="mt-5 w-fit">
                <Link href="https://wlc.milveo.com" className="w-full">
                  <span>Kostenloses Erstgespräch</span>
                </Link>
                </Button>
                <Button className="mt-5 w-fit" variant="outline">
                <Link href="https://tech.milveo.com" className="flex justify-between items-center gap-2 w-full">
                  <span>Zu MILVEO TECH</span>
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

export { Tech };
