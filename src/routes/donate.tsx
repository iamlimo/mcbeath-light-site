import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "../components/site/SiteLayout";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { Heart, Shield, Repeat, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — McBeth Life Fix Foundation" },
      { name: "description", content: "Your donation funds meals, school supplies, mobile clinics and small-business microgrants for vulnerable families." },
      { property: "og:title", content: "Donate — McBeth Life Fix Foundation" },
      { property: "og:description", content: "100% of community donations go directly to our SDG programs." },
    ],
  }),
  component: Donate,
});

const presets = [25, 50, 100, 250];
const frequencies = ["One-time", "Monthly"] as const;

const impact = [
  { amount: "$25", text: "Provides school supplies and a uniform for one child for a term." },
  { amount: "$50", text: "Feeds a family of four nutritious meals for two weeks." },
  { amount: "$100", text: "Funds a maternal health check-up and prenatal vitamins for a mother." },
  { amount: "$250", text: "Launches a microgrant for a woman-owned small business." },
];

function Donate() {
  const [amount, setAmount] = useState<number | "">(50);
  const [freq, setFreq] = useState<(typeof frequencies)[number]>("Monthly");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Donate"
        title="Turn your gift into food, schooling, and care."
        description="Every contribution is tracked, audited, and reported. Choose an amount that feels right — give once, or give monthly to power year-round programs."
      />

      <section className="container-x py-16 grid lg:grid-cols-5 gap-10 items-start">
        <Reveal className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
                <h2 className="mt-5 font-display text-3xl">Thank you.</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Your {freq.toLowerCase()} gift of ${amount || 0} will go directly toward our SDG programs. A confirmation receipt is on its way to your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Give again
                </button>
              </div>
            ) : (
              <>
                <div className="flex gap-2 p-1 rounded-full bg-secondary w-fit">
                  {frequencies.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFreq(f)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                        freq === f ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <label className="text-sm font-medium">Choose an amount (USD)</label>
                  <div className="mt-3 grid grid-cols-4 gap-3">
                    {presets.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setAmount(p)}
                        className={`rounded-xl border px-4 py-4 text-lg font-display transition-all ${
                          amount === p
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-foreground/40"
                        }`}
                      >
                        ${p}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
                    <span className="text-muted-foreground">$</span>
                    <input
                      type="number"
                      min={1}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                      placeholder="Other amount"
                      className="flex-1 bg-transparent outline-none text-lg"
                    />
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Full name" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                  <input required type="email" placeholder="Email" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground shadow-sm hover:-translate-y-0.5 transition-transform"
                >
                  <Heart className="h-4 w-4" fill="currentColor" />
                  Donate ${amount || 0} {freq === "Monthly" ? "/ month" : ""}
                </button>

                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Secure checkout · You will be redirected to our payment processor.
                </p>
              </>
            )}
          </form>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.1}>
          <h3 className="font-display text-2xl">Where your gift goes</h3>
          <ul className="mt-5 space-y-4">
            {impact.map((i) => (
              <li key={i.amount} className="flex gap-4 rounded-2xl bg-secondary/40 p-5 border border-border">
                <span className="font-display text-primary text-2xl w-16 shrink-0">{i.amount}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2"><Shield className="h-4 w-4 text-primary mt-0.5" /> 501(c)(3) registered</div>
            <div className="flex items-start gap-2"><Repeat className="h-4 w-4 text-primary mt-0.5" /> Cancel monthly anytime</div>
          </div>

          <Link to="/impact" className="mt-8 inline-block text-sm text-primary hover:underline">
            See our latest impact report →
          </Link>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
