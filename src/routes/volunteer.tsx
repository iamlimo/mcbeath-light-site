import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "../components/site/SiteLayout";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { Users, Globe2, Heart, CheckCircle2 } from "lucide-react";
import volunteersImg from "../assets/volunteers.jpg";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — McBeth Life Fix Foundation" },
      { name: "description", content: "Join 1,400+ volunteers worldwide. Give your time, skills, or voice to advance the UN SDGs in real communities." },
      { property: "og:title", content: "Volunteer — McBeth Life Fix Foundation" },
      { property: "og:description", content: "Hands-on, skills-based and remote roles available." },
      { property: "og:image", content: volunteersImg },
    ],
  }),
  component: Volunteer,
});

const roles = [
  { icon: Users, title: "Community Volunteer", text: "Help at distributions, school events and mobile clinics. Local, in-person, weekends." },
  { icon: Globe2, title: "Remote Skills-Based", text: "Designers, writers, developers and accountants — donate your expertise from anywhere." },
  { icon: Heart, title: "Ambassador", text: "Host a fundraiser, run a campaign, or speak about our work in your network." },
];

const interests = ["No Poverty", "Zero Hunger", "Quality Education", "Good Health & Well-being"];

function Volunteer() {
  const [picked, setPicked] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggle(name: string) {
    setPicked((p) => (p.includes(name) ? p.filter((x) => x !== name) : [...p, name]));
  }

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Volunteer"
        title="Bring your time, your skills, your heart."
        description="More than 1,400 volunteers across the world help us deliver food, education, healthcare, and economic opportunity. There's a role for you."
      />

      <section className="container-x py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-card border border-border p-7 transition-transform hover:-translate-y-1">
                  <Icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-5 font-display text-xl">{r.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-x pb-24 grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <img src={volunteersImg} alt="Volunteers in matching shirts working together" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="mt-8">
            <h3 className="font-display text-2xl">What to expect</h3>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {[
                "A short onboarding call within 5 business days",
                "Free orientation & safeguarding training",
                "A program lead matched to your skills and schedule",
                "Quarterly impact reports from your assigned program",
              ].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
                <h2 className="mt-5 font-display text-3xl">Welcome to the team.</h2>
                <p className="mt-3 text-muted-foreground">We'll reach out within 5 business days with next steps.</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl">Sign up to volunteer</h2>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <input required placeholder="First name" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                  <input required placeholder="Last name" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                  <input required type="email" placeholder="Email" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary sm:col-span-2" />
                  <input placeholder="City, Country" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary sm:col-span-2" />
                </div>

                <p className="mt-6 text-sm font-medium">I'm most interested in:</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggle(i)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        picked.includes(i)
                          ? "bg-accent border-accent text-accent-foreground"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>

                <textarea
                  placeholder="Tell us about your skills or availability (optional)"
                  rows={4}
                  className="mt-6 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                />

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-accent px-6 py-4 text-base font-medium text-accent-foreground hover:-translate-y-0.5 transition-transform"
                >
                  Submit application
                </button>
              </>
            )}
          </form>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
