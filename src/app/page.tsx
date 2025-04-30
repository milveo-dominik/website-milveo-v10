'use client'

import { HeroHome } from "@/components/hero-home";
import { FrameworkExplanation } from "@/components/image-text/framework-explanation";  
import { WhoWeAre } from "@/components/image-text/who-we-are";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { Testimonials } from "@/components/testimonials/testimonials";
import { Performance } from "@/components/image-text/performance";
import { Tech } from "@/components/image-text/tech";
import { Content } from "@/components/image-text/content";
import { Logistik } from "@/components/image-text/logistik";

export default function Home() {
  return (
    <>
      <section>
        <HeroHome />
      </section>
      <section className="mx-auto max-w-7xl">
        <FrameworkExplanation />
      </section>
      <section className="mx-auto max-w-9xl">
        <FeaturesSectionWithHoverEffects />
      </section>
      <section className="mx-auto max-w-7xl">
        <Performance />
      </section>
      <section className="mx-auto max-w-7xl">
        <Tech />
      </section>
      <section className="mx-auto max-w-7xl">
        <Content />
      </section>
      <section className="mx-auto max-w-7xl">
        <Logistik />
      </section>
      <section className="mx-auto max-w-7xl">
        <WhoWeAre />
      </section>
      <section className="mx-auto max-w-7xl">
        <Testimonials />
      </section>
    </>
  );
}
