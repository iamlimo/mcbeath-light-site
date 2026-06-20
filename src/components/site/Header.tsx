import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/impact", label: "Our Impact" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-18 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-12">
            <Heart className="h-4 w-4" fill="currentColor" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight">McBeth</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Life Fix Foundation
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative text-sm hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md"
          >
            Donate
            <Heart className="h-3.5 w-3.5" fill="currentColor" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
