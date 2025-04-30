function FrameworkExplanation() {
  return (
    <div className="px-4 py-10 w-full" id="framework">
      <div className="mx-auto container">
        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
            <div className="flex-1">
          <img src="/logo.png" alt="Framework Explanation" className="brightness-0 dark:invert w-[100%] md:w-[90%] h-full object-cover" />
          <h3 className="font-bold text-[3rem] text-black md:text-[6rem] dark:text-white text-left leading-none">Framework</h3>
          </div>
          <div className="flex flex-col flex-1 gap-4 pl-0 lg:pl-20">
            <div className="flex flex-col gap-2">
              <h2 className="mb-2 lg:max-w-xl font-regular text-3xl md:text-5xl text-left tracking-tighter">
              Ganzheitlicher <br/> E-Commerce Erfolg
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

export { FrameworkExplanation };
