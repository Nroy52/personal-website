import { useState } from "react";
import { Button } from "@/components/ui/button";
import jprLogo from "@/assets/jaisirlogo.png";

const pillarsData = [
  { icon: "fa-solid fa-tooth", title: "Dentistry", desc: "Global leader in implantology and laser dentistry." },
  { icon: "fa-solid fa-globe", title: "Entrepreneurship", desc: "Founder & CEO of multi-sector enterprises." },
  { icon: "fa-solid fa-robot", title: "AI Innovation", desc: "Building next-gen AI assistants and platforms." },
  { icon: "fa-solid fa-medal", title: "Leadership", desc: "Military discipline shaping global ventures." },
  { icon: "fa-solid fa-cart-shopping", title: "Market", desc: "Curating premium marketplaces worldwide." },
  { icon: "fa-solid fa-city", title: "Real Estate", desc: "Designing eco-villages and smart cities." },
  { icon: "fa-solid fa-graduation-cap", title: "Education", desc: "Mentoring future leaders and talents." },
  { icon: "fa-solid fa-podcast", title: "Podcasts", desc: "Sharing culture and history via media." },
  { icon: "fa-solid fa-seedling", title: "Philanthropy", desc: "Transforming communities with social projects." },
  { icon: "fa-solid fa-chess-king", title: "Strategy", desc: "Architecting visions for societies and businesses." },
];

export default function Vision() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen relative flex flex-col bg-[hsl(var(--bg-dark))] text-[hsl(var(--text))]">
      {/* subtle gold backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(var(--gold)/0.08),transparent_60%)]" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 h-[var(--nav-h)] flex items-center justify-center bg-[hsla(var(--bg-card)/0.9)] backdrop-blur-sm border-b border-[hsl(var(--stroke))] z-50">
        <img
          src={jprLogo}
          alt="Logo"
          className="w-12 h-12 rounded-full border-2"
          style={{ borderColor: "hsl(var(--gold))" }}
        />
        <Button
          size="sm"
          className="absolute right-5"
          style={{ background: "hsl(var(--gold))", color: "hsl(var(--bg-dark))" }}
        >
          Login
        </Button>
      </nav>

      {/* HERO */}
      <main className="flex-1 flex flex-col items-center justify-between text-center mt-[var(--nav-h)] p-4">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: "hsl(var(--gold))" }}>
            Jai Prathap Reddy
          </h1>
          <p style={{ color: "hsl(var(--subtext))" }}>Strategic partner to the world's visionaries</p>
          <p style={{ color: "hsl(var(--subtext))" }}>I do not chase scale. I sculpt legacy.</p>
        </div>

        {/* Pillars */}
        <div className="flex flex-col lg:flex-row gap-4 max-w-5xl w-full my-6">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-3">
            {pillarsData.slice(0, 5).map((pillar, idx) => (
              <div
                key={idx}
                className={`bg-[hsla(var(--bg-card)/0.9)] border rounded-xl p-3 text-center cursor-pointer transition-all overflow-hidden shadow-md hover:shadow-lg ${
                  active === pillar.title ? "max-h-40" : "max-h-12"
                }`}
                style={{ borderColor: "hsl(var(--stroke))" }}
                onClick={() => setActive(active === pillar.title ? null : pillar.title)}
              >
                <i className={`${pillar.icon}`} style={{ color: "hsl(var(--gold))" }} />
                <h3 className="text-sm font-semibold">{pillar.title}</h3>
                <p
                  className={`text-xs transition-opacity ${active === pillar.title ? "opacity-100" : "opacity-0"}`}
                  style={{ color: "hsl(var(--subtext))" }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-3">
            {pillarsData.slice(5).map((pillar, idx) => (
              <div
                key={idx}
                className={`bg-[hsla(var(--bg-card)/0.9)] border rounded-xl p-3 text-center cursor-pointer transition-all overflow-hidden shadow-md hover:shadow-lg ${
                  active === pillar.title ? "max-h-40" : "max-h-12"
                }`}
                style={{ borderColor: "hsl(var(--stroke))" }}
                onClick={() => setActive(active === pillar.title ? null : pillar.title)}
              >
                <i className={`${pillar.icon}`} style={{ color: "hsl(var(--gold))" }} />
                <h3 className="text-sm font-semibold">{pillar.title}</h3>
                <p
                  className={`text-xs transition-opacity ${active === pillar.title ? "opacity-100" : "opacity-0"}`}
                  style={{ color: "hsl(var(--subtext))" }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-4">
          <Button
            variant="outline"
            className="border-2"
            style={{ borderColor: "hsl(var(--gold))", color: "hsl(var(--gold))", background: "transparent" }}
          >
            Login
          </Button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="h-[var(--footer-h)]" style={{ background: "hsl(var(--bg-card))", borderTop: "1px solid hsl(var(--stroke))" }}>
        <div className="text-center text-sm" style={{ color: "hsl(var(--subtext))" }}>
          <div><strong>Jai Reddy HQ</strong> | London, UK</div>
          <div>Email: hello@jaireddy.com | Phone: +44 123 456 789</div>
          <div className="flex justify-center gap-3 mt-1" style={{ color: "hsl(var(--gold))" }}>
            <a href="#"><i className="fab fa-linkedin" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-facebook" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
          </div>
          <div className="mt-1">&copy; 2025 Dr Jai Prathap Reddy. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
