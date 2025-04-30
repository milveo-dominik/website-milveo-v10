import { Check } from "lucide-react";
import { Badge } from "./badge";

function WhoWeAre() {
  return (
    <div className="py-4 w-full">
      <div className="mx-auto px-10 py-20 border-1 dark:border-neutral-800 rounded-lg container">
        <div className="flex flex-col items-start gap-4">
          <div>
            <Badge>Experten Agentur</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="lg:max-w-xl font-regular text-3xl md:text-5xl tracking-tighter">
            Arbeiten mit MILVEO
            </h2>
            <p className="max-w-xl lg:max-w-xl text-muted-foreground text-lg leading-relaxed tracking-tight">
              Wir sind eine Experten Agentur für E-Commerce.
            </p>
          </div>
          <div className="flex flex-col gap-10 pt-12 w-full">
            <div className="items-start gap-10 grid grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-row items-start gap-6 w-full">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>10+ Jahre E-Commerce Erfahrung</p>
                  <p className="text-muted-foreground text-sm">
                    Wir haben mehr als 10 Jahre Erfahrung in der E-Commerce Branche.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Alles aus einer Hand – von Strategie bis Logistik</p>
                  <p className="text-muted-foreground text-sm">
                    Wir bieten ein komplettes Service-Angebot für Ihr E-Commerce Projekt.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Enterprise-Standards für jedes Projekt</p>
                  <p className="text-muted-foreground text-sm">
                    Wir setzen hohe Standards für Ihr E-Commerce Projekt.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6 w-full">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Transparente Kommunikation & Reporting</p>
                  <p className="text-muted-foreground text-sm">
                    Wir halten Sie über den Fortschritt informiert und stellen Ihnen regelmäßig Berichte zur Verfügung.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Nachweisbare Erfolge und zufriedene Kunden</p>
                  <p className="text-muted-foreground text-sm">
                    Wir zeigen Ihnen, wie wir Ihr E-Commerce Projekt erfolgreich gestartet und weiterentwickelt haben.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-6">
                <Check className="mt-2 w-4 h-4 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Kostenloses Erstgespräch</p>
                  <p className="text-muted-foreground text-sm">
                    Wir bieten Ihnen ein kostenloses Erstgespräch an, um Ihr E-Commerce Projekt zu besprechen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        </div>
      </div>
    </div>
  );
}

export { WhoWeAre };
