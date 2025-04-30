import { Globe } from "@/components/globe";
import { Button } from "../ui/button";
import Link from "next/link";
function Logistik() {
  return (
    <div className="px-4 py-10 w-full">
      <div className="mx-auto container">
        <div className="flex lg:flex-row-reverse flex-col lg:items-center gap-10">
        <div className="relative flex justify-center items-center bg-background md:shadow-xl px-40 pt-8 pb-40 md:pb-60 border rounded-lg max-w-lg size-full overflow-hidden">
      <span className="bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-300/80 dark:to-slate-900/10 font-semibold text-transparent text-8xl text-center leading-none whitespace-pre-wrap pointer-events-none">
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
              <h3 className="font-medium text-white text-lg text-left leading-relaxed tracking-tight">
              Effiziente Logistiklösungen für Ihren E-Commerce-Erfolg
              </h3>
              <p className="max-w-xl lg:max-w-xl text-muted-foreground text-lg text-left leading-relaxed tracking-tight">
              Eine reibungslose Logistik ist das Rückgrat jedes erfolgreichen Onlineshops. Wir optimieren Ihre Versandprozesse, integrieren smarte Fulfillment-Lösungen und sorgen für eine nahtlose Anbindung an Ihre Shop-Systeme. So garantieren wir schnelle Lieferzeiten, zufriedene Kunden und mehr Zeit für Ihr Kerngeschäft. Mit MILVEO wird Logistik zum Wachstumstreiber.
              </p>
              
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
