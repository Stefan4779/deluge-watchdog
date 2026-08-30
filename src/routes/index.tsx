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
          <a href="#about" className="transition-colors hover:text-accent">
            About
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
            <a href="#about" onClick={() => setMobileOpen(false)} className="transition-colors hover:text-accent">
              About
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
        <div className="mb-16 grid gap-12 lg:grid-cols-3">
          <div className="border-l border-white/10 pl-8">
            <div className="mb-6 font-display text-4xl font-bold text-accent">01</div>
            <h3 className="mb-4 text-xl font-bold">Fail-Safe Monitoring</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Receive an audible alert when your Mainline Backwater Valve is closed or backed up, giving you critical seconds to react.
            </p>
          </div>
          <div className="border-l border-white/10 pl-8">
            <div className="mb-6 font-display text-4xl font-bold text-accent">02</div>
            <h3 className="mb-4 text-xl font-bold">Smart Intervention</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Know exactly when to stop using water in your house to prevent your own plumbing from causing structural damage during a block.
            </p>
          </div>
          <div className="border-l border-white/10 pl-8">
            <div className="mb-6 font-display text-4xl font-bold text-accent">03</div>
            <h3 className="mb-4 text-xl font-bold">Asset Protection</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Deluge flood alarms cut basement repair costs, which often reach up to $20,000 for structural remediation and mold.
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
