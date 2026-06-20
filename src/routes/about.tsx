import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site/SiteLayout";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { Compass, Eye, Sparkles } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import volunteersImg from "../assets/volunteers.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — McBeth Life Fix Foundation" },
      { name: "description", content: "Our story, mission and the values driving McBeth Life Fix Foundation's community work across the UN Sustainable Development Goals." },
      { property: "og:title", content: "About — McBeth Life Fix Foundation" },
      { property: "og:description", content: "A community-led NGO advancing the UN SDGs with dignity and accountability." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: About,
});

const values = [
  { icon: Compass, title: "Community-led", text: "Every program is co-designed with the people it serves. Local leaders set the priorities; we provide the resources." },
  { icon: Eye, title: "Radically transparent", text: "We publish budgets, outcomes, and learnings — including what didn't work — so donors can trust where their gift goes." },
  { icon: Sparkles, title: "Dignity first", text: "We tell stories of strength, not pity. We treat the families we work with as partners, never as projects." },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About us"
        title="A foundation built on dignity, run by communities."
        description="McBeth Life Fix Foundation was founded in 2017 around a simple idea: when families have food, schooling, healthcare, and a chance to earn, lives change. We work in partnership with local leaders across four UN SDGs."
      />

      <section className="container-x py-20 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <img src={heroImg} alt="Community gathering" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl">Our story</h2>
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              What began as a single after-school reading circle in 2017 has grown into 120 active programs across 37 communities. Our founder, McBeth Okoro, started with the belief that no child should go to bed hungry or out of school.
            </p>
            <p>
              Today, more than 1,400 volunteers and 60 full-time staff carry that mission forward — from microgrant cohorts that launch women-owned businesses to mobile clinics that serve villages without a hospital nearby.
            </p>
            <p>
              We are independently audited and aligned with four UN Sustainable Development Goals: <strong>No Poverty (SDG 1)</strong>, <strong>Zero Hunger (SDG 2)</strong>, <strong>Quality Education (SDG 4)</strong>, and <strong>Good Health & Well-being (SDG 3)</strong>.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/50 border-y border-border">
        <div className="container-x py-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-medium">What we stand for</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl max-w-2xl">Three values that shape every program we run.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl bg-card border border-border p-7 transition-transform hover:-translate-y-1">
                    <Icon className="h-7 w-7 text-primary" />
                    <h3 className="mt-5 font-display text-xl">{v.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-x py-20 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl">Mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To advance the UN Sustainable Development Goals in vulnerable communities by delivering programs that lift families out of poverty, end hunger, expand access to quality education, and protect health and well-being for all.
          </p>
          <h2 className="mt-10 font-display text-3xl md:text-4xl">Vision</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A world where every person — regardless of where they were born — has the food, education, healthcare, and opportunity to live a full and dignified life.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl">
            <img src={volunteersImg} alt="Volunteers planting trees" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
