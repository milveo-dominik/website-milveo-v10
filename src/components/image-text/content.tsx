import { Content3d } from "../content-3d";
import { Button } from "../ui/button";
import Link from "next/link";
import { TimerIcon } from "lucide-react";

function Content() {
  return (
    <div className="px-4 py-10 w-full">
      <div className="mx-auto container">
        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
          <div className="flex-1 max-w-full md:max-w-1/2">
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
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-8">
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><TimerIcon className="mr-2 w-4 h-4" />Reason 1</h3>
                <p className="text-muted-foreground">Result sentence 1 that is not too long but 2 lines is okay</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><TimerIcon className="mr-2 w-4 h-4" />Reason 2</h3>
                <p className="text-muted-foreground">Result sentence 2 that is not too long but 2 lines is okay</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><TimerIcon className="mr-2 w-4 h-4" />Reason 3</h3>
                <p className="text-muted-foreground">Result sentence 3 that is not too long but 2 lines is okay</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><TimerIcon className="mr-2 w-4 h-4" />Reason 4</h3>
                <p className="text-muted-foreground">Result sentence 4 that is not too long but 2 lines is okay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Content };
