import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sprout, BookOpen, HeartPulse, HandCoins, Quote } from "lucide-react";
import { SiteLayout } from "../components/site/SiteLayout";
import { Reveal } from "../components/site/Reveal";
import heroImg from "../assets/hero.jpg";
import povertyImg from "../assets/poverty.jpg";
import hungerImg from "../assets/hunger.jpg";
import educationImg from "../assets/education.jpg";
import healthImg from "../assets/health.jpg";
import volunteersImg from "../assets/volunteers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "McBeth Life Fix Foundation — Hope, dignity, action" },
      { name: "description", content: "We work alongside communities to end poverty and hunger, expand quality education, and strengthen good health and well-being." },
      { property: "og:title", content: "McBeth Life Fix Foundation" },
      { property: "og:description", content: "Advancing the UN SDGs in communities that need it most." },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: HandCoins,
    sdg: "SDG 1",
    title: "No Poverty",
    desc: "Microgrants, vocational training, and small-business support that helps families build stable, dignified livelihoods.",
    image: povertyImg,
    tint: "from-teal/20",
  },
  {
    icon: Sprout,
    sdg: "SDG 2",
    title: "Zero Hunger",
    desc: "Community kitchens, food parcels, and smallholder farming programs that put nutritious meals on every table.",
    image: hungerImg,
    tint: "from-mint/25",
  },
  {
    icon: BookOpen,
    sdg: "SDG 4",
    title: "Quality Education",
    desc: "Scholarships, school supplies, and learning hubs so every child can read, dream, and finish school.",
    image: educationImg,
    tint: "from-deep-purple/20",
  },
  {
    icon: HeartPulse,
    sdg: "SDG 3",
    title: "Good Health & Well-being",
    desc: "Mobile clinics, maternal care, and mental-health outreach that protects every life from preventable harm.",
    image: healthImg,
    tint: "from-teal/20",
  },
];

const stats = [
  { value: "48,000+", label: "People reached" },
  { value: "120", label: "Active programs" },
  { value: "37", label: "Partner communities" },
  { value: "1,400", label: "Volunteers worldwide" },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-14 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary font-medium"
            >
              <span className="h-px w-8 bg-primary" /> A non-profit for the next generation
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-5xl md:text-7xl leading-[1.02]"
            >
              Fixing lives, <em className="not-italic text-primary">together</em> — one community at a time.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              McBeth Life Fix Foundation works alongside families to advance four UN Sustainable Development Goals: ending poverty and hunger, opening doors to quality education, and protecting good health and well-being.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/donate"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Donate now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Become a volunteer
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[5/6] overflow-hidden rounded-3xl bg-muted shadow-2xl">
              <img
                src={heroImg}
                alt="A mother and children smiling in golden light"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 w-56 rounded-2xl bg-background border border-border p-5 shadow-xl hidden sm:block"
            >
              <p className="text-3xl font-display text-primary">48k+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                Lives directly impacted
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-x py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-primary font-medium">Our four pillars</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-3xl">
            Anchored to the UN Sustainable Development Goals.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-3xl bg-card border border-border transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${p.tint} to-transparent`} />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">{p.sdg}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                    <Link
                      to="/impact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary group/link"
                    >
                      See projects
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-foreground text-background">
        <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} y={16}>
              <p className="font-display text-4xl md:text-5xl text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-background/70 uppercase tracking-wider">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-x py-24">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="mx-auto h-10 w-10 text-primary" />
            <p className="mt-6 font-display text-2xl md:text-4xl leading-snug">
              “Before McBeth, my daughters could not stay in school. Today, they are reading,
              writing, and dreaming of becoming a teacher and a nurse. This Foundation gave
              our family a future.”
            </p>
            <p className="mt-8 text-sm uppercase tracking-wider text-muted-foreground">
              Amaka Eze · Caregiver, Enugu community
            </p>
          </div>
        </Reveal>
      </section>

      {/* DONATE CTA BAND */}
      <section className="container-x pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <img src={volunteersImg} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center p-10 md:p-14">
              <div>
                <h2 className="font-display text-3xl md:text-5xl leading-tight">
                  Your gift becomes a meal, a school year, a check-up.
                </h2>
                <p className="mt-4 text-primary-foreground/85 max-w-md leading-relaxed">
                  100% of community donations go directly to our programs. We publish our annual impact report every year.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition-transform"
                >
                  Donate now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Volunteer with us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
