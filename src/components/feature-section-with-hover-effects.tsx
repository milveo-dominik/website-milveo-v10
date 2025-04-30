import { cn } from "@/lib/utils";
import { ChartNoAxesCombined, PencilRuler, ScanEyeIcon, ShoppingBagIcon, SearchIcon, MailIcon, GalleryVerticalEnd, TruckIcon } from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Strategie & Consulting",
      description:
        "Wir entwickeln individuelle Wachstumsstrategien, die exakt auf Ihr Geschäftsmodell zugeschnitten sind.",
      icon: <PencilRuler />,
    },
    {
      title: "Shopify (Plus) Entwicklung",
      description:
        "Maßgeschneiderte Shopify-Shops und kontinuierliche Optimierung für maximale Conversion.",
      icon: <ShoppingBagIcon />,
    },
    {
      title: "Performance Marketing",
      description:
        "Reichweite und Umsatzsteigerung durch gezielte Kampagnen auf allen relevanten Kanälen.",
      icon: <ChartNoAxesCombined />,
    },
    {
        title: "Tracking & Analytics",
        description: "Präzises Tracking und aussagekräftige Analysen für datenbasierte Entscheidungen.",
        icon: <ScanEyeIcon />,
      },
    {
      title: "E-Mail Marketing",
      description: "Automatisierte und personalisierte Kommunikation, die Kunden begeistert und bindet.",
      icon: <MailIcon />,
    },
    {
        title: "SEO/SEA",
        description:
          "Sichtbarkeit, die Umsatz bringt – mit datengetriebenem Suchmaschinenmarketing.",
        icon: <SearchIcon />,
      },
    {
      title: "Content Creation",
      description: "Erstklassige Inhalte, die Kunden begeistern und beim Wachsen unterstützen.",
      icon: <GalleryVerticalEnd />,
    },
    {
      title: "Logistik Lösungen",
      description:
        "Effiziente Prozesse und smarte Logistik für zufriedene Kunden und reibungslose Abläufe.",
      icon: <TruckIcon />,
    },
  ];
  return (
    <div className="z-10 relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto py-0 md:py-10 max-w-7xl">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r px-0 py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "border-b dark:border-neutral-800",
        index > 3 && "border-b dark:border-neutral-800 md:border-b-0",
      )}
    >
      {index < 4 && (
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent opacity-0 group-hover/feature:opacity-100 w-full h-full transition duration-200 pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent opacity-0 group-hover/feature:opacity-100 w-full h-full transition duration-200 pointer-events-none" />
      )}
      <div className="z-10 relative mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="z-10 relative mb-2 px-10 font-bold text-lg">
        <div className="left-0 absolute inset-y-0 bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 rounded-tr-full rounded-br-full w-1 h-6 group-hover/feature:h-8 origin-center transition-all duration-200" />
        <span className="inline-block text-neutral-800 dark:text-neutral-100 transition group-hover/feature:translate-x-2 duration-200">
          {title}
        </span>
      </div>
      <p className="z-10 relative px-10 max-w-xs text-neutral-600 dark:text-neutral-300 text-sm">
        {description}
      </p>
    </div>
  );
};
