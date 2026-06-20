import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site/SiteLayout";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import povertyImg from "../assets/poverty.jpg";
import hungerImg from "../assets/hunger.jpg";
import educationImg from "../assets/education.jpg";
import healthImg from "../assets/health.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — McBeth Life Fix Foundation" },
      { name: "description", content: "Programs and projects across four UN SDGs: no poverty, zero hunger, quality education and good health & well-being." },
      { property: "og:title", content: "Our Impact — McBeth Life Fix Foundation" },
      { property: "og:description", content: "Real projects, measurable outcomes." },
      { property: "og:image", content: povertyImg },
    ],
  }),
  component: Impact,
});

const projects = [
  {
    sdg: "SDG 1 · No Poverty",
    title: "Hope Microgrants",
    desc: "A 12-week cohort program offering seed capital, business mentorship and savings circles to women launching small businesses in three regions.",
    stat: "320 businesses launched",
    img: povertyImg,
  },
  {
    sdg: "SDG 2 · Zero Hunger",
    title: "Community Kitchens",
    desc: "Daily nutritious meals served at six community kitchens, paired with farming co-ops that grow what we serve.",
    stat: "1.2M meals served",
    img: hungerImg,
  },
  {
    sdg: "SDG 4 · Quality Education",
    title: "Read & Rise Scholarships",
    desc: "Full school-year scholarships covering tuition, uniforms, books and a daily meal for primary and secondary students.",
    stat: "2,400 scholarships",
    img: educationImg,
  },
  {
    sdg: "SDG 3 · Good Health",
    title: "Mobile Health Clinics",
    desc: "Two mobile clinics visit remote villages weekly, delivering maternal care, vaccinations, and mental-health outreach.",
    stat: "18,000 check-ups",
    img: healthImg,
  },
];

const milestones = [
  { year: "2017", text: "Foundation launched with one after-school reading circle." },
  { year: "2019", text: "First mobile clinic launched, reaching 14 villages." },
  { year: "2021", text: "Crossed 10,000 people served across four SDG areas." },
  { year: "2023", text: "Expanded to 37 partner communities and 120 active programs." },
  { year: "2026", text: "On track to reach 100,000 lives by year-end." },
];

function Impact() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our impact"
        title="Real projects. Measured outcomes. Lasting change."
        description="Explore the programs we run across our four pillars. Every project is co-designed with local partners and reported on annually."
      />

      <section className="container-x py-20 space-y-10">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.05}>
            <article className={`group grid md:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden bg-card border border-border ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.22em] text-primary font-medium">{p.sdg}</p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {p.stat}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-foreground text-background">
        <div className="container-x py-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-medium">Milestones</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Nine years of community-led change.</h2>
          </Reveal>
          <ol className="mt-12 relative border-l border-background/20 pl-8 space-y-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08} y={12}>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1 inline-flex h-3 w-3 rounded-full bg-primary ring-4 ring-foreground" />
                  <p className="font-display text-2xl text-primary">{m.year}</p>
                  <p className="mt-1 text-background/80">{m.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </SiteLayout>
  );
}
