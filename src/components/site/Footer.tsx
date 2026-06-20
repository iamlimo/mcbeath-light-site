import { Link } from "@tanstack/react-router";
import { Heart, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-4 w-4" fill="currentColor" />
            </span>
            <span className="font-display text-xl">McBeth Life Fix Foundation</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-background/70">
            A community-led NGO advancing the UN Sustainable Development Goals —
            ending poverty, ending hunger, championing quality education, and
            protecting good health and well-being.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/20 hover:bg-primary hover:border-primary transition-colors"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-background/60">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["/about", "About us"],
              ["/impact", "Our impact"],
              ["/volunteer", "Volunteer"],
              ["/donate", "Donate"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-background/80 hover:text-primary transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-background/60">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-background/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 24 Hope Avenue, Lagos, Nigeria</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> hello@mcbethlifefix.org</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +234 800 000 0000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} McBeth Life Fix Foundation. All rights reserved.</p>
          <p>Registered Non-Governmental Organization · Aligned with UN SDGs</p>
        </div>
      </div>
    </footer>
  );
}
