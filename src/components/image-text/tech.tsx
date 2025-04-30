import { Compare } from "../ui/compare";

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
        className="w-[200px] md:w-[550px] h-[250px] md:h-[400px]"
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
              Unser Framework vereint alle entscheidenden Dienstleistungen für nachhaltiges Wachstum im E-Commerce. Von der Strategie über die technische Umsetzung bis hin zu Performance Marketing und Logistik – wir schaffen Synergien, die Ihren Onlineshop auf das nächste Level heben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Tech };
