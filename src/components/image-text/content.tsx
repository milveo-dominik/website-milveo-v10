import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, EyeIcon, HandshakeIcon, StarIcon, UserPlusIcon } from "lucide-react";

function Content() {
  return (
    <div className="px-4 py-10 w-full">
      <div className="mx-auto container">
        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
          <div className="flex-1 max-w-full md:max-w-1/2">
          <video id="heroVideo" src="https://wlc.milveo.com/hero-video.mov" autoPlay={true} playsInline={true} muted={true} loop={true} className="m-auto rounded-[50px] w-2/3 h-full object-cover" style={{zIndex:3, background:"transparent"}}></video>
          </div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="mb-2 lg:max-w-xl font-regular text-4xl md:text-5xl text-left tracking-tighter">
                Content Erstellung
              </h2>
              <p className="max-w-xl lg:max-w-xl text-muted-foreground text-lg text-left leading-relaxed tracking-tight">
              Guter Content ist der Schlüssel zu einer starken Marke und überzeugenden Kauferlebnissen. Wir entwickeln für Sie kreative, zielgruppengerechte Inhalte – von Produkttexten über Blogartikel bis hin zu Social Media Kampagnen. So schaffen wir Vertrauen, steigern die Sichtbarkeit und machen aus Besuchern begeisterte Kunden.
              </p>
              
            </div>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mt-8">
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><EyeIcon className="mr-2 w-4 h-4" />Sichtbarkeit steigern</h3>
                <p className="text-muted-foreground">Durch relevanten und ansprechenden Content erreichen Sie eine größere Zielgruppe und werden online besser gefunden.</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><HandshakeIcon className="mr-2 w-4 h-4" />Vertrauen aufbauen</h3>
                <p className="text-muted-foreground">Informativer und hochwertiger Content etabliert Sie als Experte in Ihrer Branche und schafft Vertrauen bei potenziellen Kunden.</p>
              </div>
              <div className="flex flex-col gap-2">
              <h3 className="flex items-center font-semibold text-xl"><UserPlusIcon className="mr-2 w-4 h-4" />Mehr Kunden / Leads</h3>
                <p className="text-muted-foreground">Gut platzierter Content kann Interessenten anziehen und sie durch den Verkaufsprozess leiten, was zu höheren Konversionsraten führt.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center font-semibold text-xl"><StarIcon className="mr-2 w-4 h-4" />Abheben von der Masse</h3>
                <p className="text-muted-foreground">Einzigartiger und wertvoller Content hebt Sie von Ihren Mitbewerbern ab und stärkt Ihre Markenidentität.</p>
              </div>
            </div>
            <div className="flex gap-4">
            <Button className="mt-5 w-fit">
              <Link href="https://calendly.com/fabiabengs/bedarfsanalyse-telefon-15min" className="w-full">
                <span>Kostenloses Erstgespräch</span>
              </Link>
              </Button>
              <Button className="mt-5 w-fit" variant="outline">
              <Link href="https://wlc.milveo.com" className="flex justify-between items-center gap-2 w-full">
                <span>Zu We love content</span>
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

export { Content };
