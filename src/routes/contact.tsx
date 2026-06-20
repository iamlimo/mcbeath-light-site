import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "../components/site/SiteLayout";
import { PageHeader } from "../components/site/PageHeader";
import { Reveal } from "../components/site/Reveal";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — McBeth Life Fix Foundation" },
      { name: "description", content: "Get in touch with McBeth Life Fix Foundation — partnerships, press, and general inquiries." },
      { property: "og:title", content: "Contact — McBeth Life Fix Foundation" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        description="Whether you'd like to partner, sponsor a program, ask a question, or simply say hello — our team will get back to you within two business days."
      />

      <section className="container-x py-16 grid lg:grid-cols-5 gap-12 items-start">
        <Reveal className="lg:col-span-2">
          <h2 className="font-display text-2xl">Reach us directly</h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:hello@mcbethlifefix.org" className="text-foreground hover:text-primary">hello@mcbethlifefix.org</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+2348000000000" className="text-foreground hover:text-primary">+234 800 000 0000</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Office</p>
                <p className="text-foreground">24 Hope Avenue,<br />Lagos, Nigeria</p>
              </div>
            </li>
          </ul>

          <div className="mt-10 rounded-2xl bg-secondary/50 p-6 border border-border">
            <p className="font-display text-lg">Office hours</p>
            <p className="mt-2 text-sm text-muted-foreground">Monday – Friday · 9:00 – 17:00 WAT</p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={0.1}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-sm"
          >
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
                <h2 className="mt-5 font-display text-3xl">Message received.</h2>
                <p className="mt-3 text-muted-foreground">Thank you for reaching out — we'll respond within two business days.</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl">Send us a message</h2>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Full name" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                  <input required type="email" placeholder="Email" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" />
                </div>
                <select className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary">
                  <option>General inquiry</option>
                  <option>Partnership</option>
                  <option>Press & media</option>
                  <option>Volunteer question</option>
                  <option>Donation support</option>
                </select>
                <textarea
                  required
                  rows={6}
                  placeholder="How can we help?"
                  className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground hover:-translate-y-0.5 transition-transform"
                >
                  Send message
                </button>
              </>
            )}
          </form>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
