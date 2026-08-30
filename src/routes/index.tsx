import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Menu, X, CheckCircle } from "lucide-react";

import { submitContact, type ContactFormData } from "@/lib/contact.functions";
import productImage from "@/assets/deluge-product.png.asset.json";
import logoAsset from "@/assets/deluge-logo.png.asset.json";
import floodedBasement from "@/assets/deluge-flooded-basement.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Deluge | The Ultimate Solution for Flood Prevention",
      },
      {
        name: "description",
        content:
          "Protect your property with the Deluge Backwater Flood Alarm. Receive instant audible alerts when your Mainline Backwater Valve is closed or backed up.",
      },
      {
        property: "og:title",
        content: "Deluge | The Ultimate Solution for Flood Prevention",
      },
      {
        property: "og:description",
        content:
          "Protect your property with the Deluge Backwater Flood Alarm. Receive instant audible alerts when your Mainline Backwater Valve is closed or backed up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navigation />
      <Hero />
      <KeyValueSection />
      <HowItWorksSection />
      <PlumbingProfessionalsSection />
      <ClimateRiskSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="Deluge"
            width={140}
            height={35}
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#features" className="transition-colors hover:text-accent">
            Flood Alarm
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-accent">
            How It Works
          </a>
          <a href="#professionals" className="transition-colors hover:text-accent">
            For Plumbers
          </a>
          <a href="#contact" className="transition-colors hover:text-accent">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105 active:scale-95 md:block"
          >
            Contact Us
          </a>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-foreground/5 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <a href="#features" onClick={() => setMobileOpen(false)} className="transition-colors hover:text-accent">
              Flood Alarm
            </a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="transition-colors hover:text-accent">
              How It Works
            </a>
            <a href="#professionals" onClick={() => setMobileOpen(false)} className="transition-colors hover:text-accent">
              For Plumbers
            </a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="transition-colors hover:text-accent">
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-primary px-5 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-primary-foreground"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block border-l-2 border-destructive pl-4 text-xs font-bold uppercase tracking-widest text-destructive">
              Technical Protection System
            </span>
            <h1 className="mb-6 font-display text-5xl font-bold leading-[1.1] tracking-tight lg:text-7xl">
              The Ultimate Solution for <span className="text-accent">Flood Prevention</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Protect your property by installing a Deluge Backwater Flood Alarm on your existing Mainline Backwater Valve.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105 active:scale-95"
              >
                Secure Your Home
              </a>
              <a
                href="#features"
                className="border border-foreground/20 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-foreground/5"
              >
                Technical Specs
              </a>
            </div>
          </div>

        <div className="relative pb-14">
            <div className="aspect-[558/774] w-full overflow-hidden rounded-2xl bg-secondary shadow-2xl outline outline-1 -outline-offset-1 outline-foreground/5">
              <img
                src={productImage.url}
                alt="Deluge Backwater Flood Alarm device with sensor and control unit"
                width={558}
                height={774}
                className="h-full w-full rounded-2xl object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-destructive p-6 text-destructive-foreground shadow-xl">
              <div className="mb-2 flex items-center gap-2">
                <div className="size-2 animate-pulse rounded-full bg-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Real-Time Alert</span>
              </div>
              <p className="font-display text-xl font-bold leading-tight">Audible Alert System</p>
              <p className="mt-1 text-xs opacity-80">Instant notification of backup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyValueSection() {
  return (
    <section id="features" className="bg-foreground py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center lg:text-left">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">Why Deluge?</span>
          <h2 className="font-display text-3xl font-bold tracking-tight">Built for Mainline Backwater Valves</h2>
        </div>
        <div className="mb-16 grid gap-12 lg:grid-cols-3">
          <div className="border-l border-white/10 pl-8">
            <div className="mb-6 font-display text-4xl font-bold text-accent">01</div>
            <h3 className="mb-4 text-xl font-bold">Perfect Integration</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Perfectly integrates with the Mainline Fullport backwater valve for a seamless, purpose-built fit.
            </p>
          </div>
          <div className="border-l border-white/10 pl-8">
            <div className="mb-6 font-display text-4xl font-bold text-accent">02</div>
            <h3 className="mb-4 text-xl font-bold">Immediate Audible Warning</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Loud audible sound gives the customer immediate warning of a prevented flood, day or night.
            </p>
          </div>
          <div className="border-l border-white/10 pl-8">
            <div className="mb-6 font-display text-4xl font-bold text-accent">03</div>
            <h3 className="mb-4 text-xl font-bold">Smart Response Prompt</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Prompts the customer to stop water usage and call their plumbing professional before damage escalates.
            </p>
          </div>
        </div>

        <div className="rounded-sm border border-white/10 bg-white/5 p-12 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold">Don&apos;t Wait For Disaster to Strike!</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/70">
            Deluge alarms detect valve failure and alert homeowners instantly, preventing escalating issues and massive insurance claims.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div>
              <div className="text-2xl font-bold text-accent">$20,000</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50">Avg. Damage Cost</div>
            </div>
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <div>
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50">Active Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">How It Works</span>
        <h2 className="font-display text-3xl font-bold tracking-tight">Three Lines of Defense</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-card p-8 ring-1 ring-foreground/5">
          <div className="mb-4 flex size-10 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">1</div>
          <h3 className="mb-3 font-display text-lg font-bold">Valve Closes Automatically</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            In the event of a sewage drain back up, the Mainline backwater valve closes to protect the home from flooding.
          </p>
        </div>
        <div className="bg-card p-8 ring-1 ring-foreground/5">
          <div className="mb-4 flex size-10 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">2</div>
          <h3 className="mb-3 font-display text-lg font-bold">Continued Use Causes Damage</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Continued water use in the house, while the Mainline valve is closed, forces water to back up into the basement and cause damage.
          </p>
        </div>
        <div className="bg-card p-8 ring-1 ring-foreground/5">
          <div className="mb-4 flex size-10 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">3</div>
          <h3 className="mb-3 font-display text-lg font-bold">Alarm Alerts Instantly</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Deluge flood alarm works with the Mainline valve so floods are noticed quickly, preventing damage to the household.
          </p>
        </div>
      </div>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 font-display text-2xl font-bold tracking-tight">Simple Installation</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 size-5 shrink-0 text-accent" />
              <span className="text-muted-foreground">Insert and tighten the Deluge flood alarm cap into the Mainline backwater valve.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 size-5 shrink-0 text-accent" />
              <span className="text-muted-foreground">Connect the Deluge flood alarm chime box to the nearest wall.</span>
            </li>
          </ul>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary ring-1 ring-foreground/5">
          <img
            src={productImage.url}
            alt="Deluge flood alarm cap and chime box installed on a Mainline backwater valve"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function PlumbingProfessionalsSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">For Plumbing Companies</span>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight">Add Value to Every Installation</h2>
            <p className="mb-8 text-muted-foreground">
              Plumbing professionals can differentiate their services and build long-term customer trust by pairing every Mainline backwater valve with a Deluge flood alarm.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-muted-foreground">Generate additional revenue on every Mainline valve job.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-muted-foreground">Offer a proactive solution that reduces emergency callbacks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-muted-foreground">Simple, fast installation with no complex wiring.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-muted-foreground">Strengthen reputation as a prevention-focused contractor.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-sm border border-foreground/10 bg-background p-10 ring-1 ring-foreground/5">
            <h3 className="mb-6 font-display text-xl font-bold">Partner With Deluge</h3>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              We are currently partnering with plumbers, builders, and strategic homeowners who demand the highest quality in flood prevention technology.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClimateRiskSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary ring-1 ring-foreground/5">
            <img
              src={floodedBasement.url}
              alt="Flooded modern basement interior illustrating the risk of sewer backup damage"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-accent">Rising Risk</span>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight">Floods Are Becoming More Frequent</h2>
          <p className="mb-6 text-muted-foreground">
            Climate change is driving more intense rainfall and overloaded sewer systems. Basement floods from sewer backups are on the rise across North America, and a single event can cause tens of thousands of dollars in damage.
          </p>
          <p className="mb-8 text-muted-foreground">
            A Deluge flood alarm is a small, one-time investment that gives homeowners and plumbing professionals early warning when a backwater valve has closed, preventing the continued water use that turns a manageable backup into a disaster.
          </p>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="font-display text-2xl font-bold text-accent">+15%</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Increase in urban flooding events</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-accent">$20K+</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Typical repair cost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-20 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 font-display text-4xl font-bold tracking-tight">About Deluge</h2>
          <p className="mb-10 text-xl leading-relaxed text-muted-foreground">
            We are currently partnering with{" "}
            <span className="font-bold text-foreground">plumbers, builders, and strategic homeowners</span>{" "}
            who demand the highest quality in flood prevention technology.
          </p>

          <p className="mb-8 text-muted-foreground">
            Deluge flood alarms can greatly cut down on basement flood repair costs, which can reach up to{" "}
            <span className="font-bold text-foreground">$20,000</span> for water removal, structural repairs, and mold
            remediation. These alarms detect when a backwater valve fails and alert homeowners to stop using water in the
            house, helping to prevent further damage and escalating issues.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Direct Line</p>
              <a href="tel:4168162992" className="font-display text-2xl font-bold hover:text-accent">
                416-816-2992
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Inquiries</p>
              <a href="mailto:info@delugeco.com" className="font-display text-2xl font-bold hover:text-accent">
                info@delugeco.com
              </a>
            </div>
          </div>

          <div className="mt-12 bg-secondary p-8">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Prevention is Investment</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Deluge flood alarms detect when a backwater valve fails and alert homeowners to stop using water, preventing
              structural repairs and mold remediation.
            </p>
          </div>
        </div>

        <div id="contact" className="bg-card p-10 ring-1 ring-foreground/5">
          <h3 className="mb-8 font-display text-2xl font-bold tracking-tight">Contact Our Team</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const submit = useServerFn(submitContact);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setServerError(null);
      await submit({ data });
      setSubmitted(true);
    } catch (error) {
      setServerError("Something went wrong. Please try again or call us directly.");
      console.error(error);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="mb-4 size-12 text-accent" />
        <h4 className="mb-2 font-display text-xl font-bold">Thank You</h4>
        <p className="max-w-sm text-muted-foreground">
          Your inquiry has been received. Our team will review it and respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            {...register("firstName")}
            className="border-b border-foreground/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-primary"
          />
          {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            {...register("lastName")}
            className="border-b border-foreground/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-primary"
          />
          {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Email*
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@company.com"
          {...register("email")}
          className="border-b border-foreground/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-primary"
        />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Message*
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="How can we help you?"
          {...register("message")}
          className="border-b border-foreground/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-primary"
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      {serverError && <p className="text-sm text-destructive">{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 bg-primary py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <a href="/" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="Deluge"
            width={112}
            height={28}
            className="h-6 w-auto"
          />
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Deluge Flood Prevention Systems. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-accent">
            Privacy
          </a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-accent">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
