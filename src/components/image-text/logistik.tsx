import { Globe } from "@/components/globe";
import { Button } from "../ui/button";
import { ChartBarDecreasingIcon, ClockIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";
import { IconTruckDelivery } from "@tabler/icons-react";
function Logistik() {
  return (
    <div className="px-4 py-10 w-full">
      <div className="mx-auto container">
        <div className="flex lg:flex-row-reverse flex-col lg:items-center gap-10">
        <div className="relative flex justify-center items-center bg-background md:shadow-xl px-40 pt-8 pb-40 md:pb-60 border rounded-lg max-w-lg size-full overflow-hidden">
      <span className="bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-300/80 dark:to-slate-900/10 font-semibold text-transparent text-7xl md:text-8xl text-center leading-none whitespace-pre-wrap pointer-events-none">
        Weltweit
      </span>
      <Globe className="top-28" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))] h-full pointer-events-none" />
      
          
          </div>
          <div className="flex flex-col flex-1 gap-4 pl-0">
            <div className="flex flex-col gap-2">
              <h2 className="mb-2 lg:max-w-xl font-regular text-4xl md:text-5xl text-left tracking-tighter">
              Logistik
              </h2>
              <p className="max-w-xl lg:max-w-xl text-muted-foreground text-lg text-left leading-relaxed tracking-tight">
              Vertrauen Sie auf über 20 Jahre Logistikerfahrung. Mit über 400 Mitarbeitern in spezialisierten Lagern übernehmen wir alle relevanten E-Commerce-Logistikaufgaben. Von der Verzollung und Containerentladung bis zur Bestellabwicklung und Retourenmanagement.
              </p>
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-8">
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><IconTruckDelivery className="mr-2 w-4 h-4" />Schnelle Lieferzeiten</h3>
                <p className="text-muted-foreground">Sorgen Sie für glückliche Kunden durch pünktliche Zustellung.</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><ThumbsUpIcon className="mr-2 w-4 h-4" />Weniger Fehler & Retouren</h3>
                <p className="text-muted-foreground">Optimierte Abläufe minimieren Fehler im Versand.</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><ChartBarDecreasingIcon className="mr-2 w-4 h-4" />Geringere Kosten</h3>
                <p className="text-muted-foreground">Effiziente Prozesse sparen bares Geld bei der Logistik.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><ClockIcon className="mr-2 w-4 h-4" />Mehr Zeit für Ihr Business</h3>
                <p className="text-muted-foreground">Geben Sie die Logistik ab und fokussieren Sie sich auf Wachstum.</p>
              </div>
            </div>
              
              <Button className="mt-5 w-fit">
              <Link href="https://calendly.com/d-loessl/kostenlose-erstberatung-15min" className="w-full">
                <span>Kostenloses Erstgespräch</span>
              </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Logistik };
