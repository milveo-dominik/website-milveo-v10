import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Content3d } from "../content-3d";
import { Button } from "../ui/button";
import Link from "next/link";

function Content() {
  return (
    <div className="px-4 py-10 w-full">
      <div className="mx-auto container">
        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
          <div className="flex-1 max-w-1/2">
            <Content3d />
          </div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="mb-2 lg:max-w-xl font-regular text-4xl md:text-5xl text-left tracking-tighter">
                We love content
              </h2>
              <p className="max-w-xl lg:max-w-xl text-muted-foreground text-lg text-left leading-relaxed tracking-tight">
              Guter Content ist der Schlüssel zu einer starken Marke und überzeugenden Kauferlebnissen. Wir entwickeln für Sie kreative, zielgruppengerechte Inhalte – von Produkttexten über Blogartikel bis hin zu Social Media Kampagnen. So schaffen wir Vertrauen, steigern die Sichtbarkeit und machen aus Besuchern begeisterte Kunden.
              </p>
              <Button className="mt-5 w-fit">
              <Link href="https://wlc.milveo.com" className="w-full">
                <span>We love content entdecken</span>
              </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Content };
