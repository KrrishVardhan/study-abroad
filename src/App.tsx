import { Button } from "@/components/ui/button"
import { BadgeDollarSign, Sparkles, Cpu, Target, Building2, Handshake, MessageCircle, Mail } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "./components/ui/badge"
import { Separator } from "./components/ui/separator"

export function App() {
  return (
    <main className="bg-background text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="text-xl font-semibold tracking-tight">
            Career<span className="text-chart-1">Bridge</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#destinations">Destinations</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </nav>

          <Button className="">
            Free Counselling
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-24">
        <div className="mb-6 flex flex-wrap gap-3">
          <Badge>
            <Sparkles></Sparkles> Italy — Flagship
          </Badge>

          <Badge variant={"secondary"}>
            <Cpu></Cpu> Germany — Engineering
          </Badge>
        </div>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          World-class European education at{" "}
          <span className="text-chart-1">
            near-zero cost
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          Study at top-ranked public universities in Italy and Germany.
          Tuition fees as low as ₹0 with complete guidance —
          from IELTS preparation to visa filing.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button className="">
            Explore destinations
          </Button>

          <Button
            variant="outline"
            className=""
          >
            Book free counselling
          </Button>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-5">
          {[
            ["2", "Expert Countries"],
            ["50+", "Top Universities"],
            ["₹0", "Italy Tuition"],
            ["8", "Core Services"],
            ["100%", "Student First"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-semibold text-chart-1">
                {value}
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-28 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-chart-1">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            We recommend what we'd tell our own family.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
            Most consultancies push expensive countries because
            universities pay them commissions. We focus on
            affordability, long-term outcomes, and transparency.
          </p>
        </div>

        <div className="grid gap-5">
          {[
            [
              <Target></Target>,
              "Italy & Germany Only",
              "Deep expertise instead of shallow coverage.",
            ],
            [
              <Building2></Building2>,
              "Public Universities",
              "Globally respected institutions only.",
            ],
            [
              <BadgeDollarSign></BadgeDollarSign>,
              "Transparent Costs",
              "Every number explained upfront.",
            ],
            [
              <Handshake></Handshake>,
              "Personal Guidance",
              "One advisor from start to finish.",
            ],
          ].map(([emoji, title, desc]) => (
            <Card
              key={title}
              className="border border-border/60"
            >
              <CardContent className="flex gap-5 py-6">
                <div className="text-3xl">
                  {emoji}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        id="destinations"
        className="border-y border-border bg-card/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-chart-1">
            Study Destinations
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Two countries. Unbeatable value.
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Card className="border border-border/60">
              <CardHeader>
                <CardDescription>
                  🇮🇹 Flagship Destination
                </CardDescription>

                <CardTitle className="text-4xl">
                  Study in Italy
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "₹0-₹1.5L tuition",
                    "Engineering",
                    "Architecture",
                    "Business",
                    "DSU Scholarship",
                  ].map((pill) => (
                    <div
                      key={pill}
                      className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground"
                    >
                      {pill}
                    </div>
                  ))}
                </div>

                <Button className="mt-8 ">
                  Explore Italy
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-border/60">
              <CardHeader>
                <CardDescription>
                  🇩🇪 Engineering Powerhouse
                </CardDescription>

                <CardTitle className="text-4xl">
                  Study in Germany
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "€0 tuition",
                    "TU9 Alliance",
                    "Computer Science",
                    "Mechanical",
                    "DAAD",
                  ].map((pill) => (
                    <div
                      key={pill}
                      className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground"
                    >
                      {pill}
                    </div>
                  ))}
                </div>

                <Button className="mt-8 ">
                  Explore Germany
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-chart-1">
          Process
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          From India to Europe in 7 steps.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Profile Evaluation",
            "IELTS Preparation",
            "University Shortlisting",
            "Application Filing",
            "Offer Letter",
            "Visa Filing",
            "Departure",
          ].map((step, index) => (
            <Card key={step} size="sm">
              <CardContent className="py-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-chart-1/10 text-sm font-semibold text-chart-1">
                  {index + 1}
                </div>

                <h3 className="font-medium">
                  {step}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <Separator></Separator>
      <section
        id="faq"
      >
        <div className="mx-auto max-w-5xl px-6 py-28">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-chart-1">
            FAQ
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Real answers to real doubts.
          </h2>

          <div className="mt-14">
            <Accordion>
              <AccordionItem
                value="item-1"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Is education really free in Germany?
                </AccordionTrigger>

                <AccordionContent>
                  <p className="leading-8 text-muted-foreground">
                    Yes. Public universities in Germany
                    generally charge no tuition fees.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Do I need German or Italian?
                </AccordionTrigger>

                <AccordionContent>
                  <p className="leading-8 text-muted-foreground">
                    Many programs are fully taught in English,
                    especially at the master's level.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <Card className="border border-border/60 bg-secondary/40">
          <CardContent className="flex flex-col gap-10 py-12 text-center">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight">
                Your European journey starts here.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
                Book a free counselling session and get
                a complete roadmap tailored to your profile.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button>
                <MessageCircle></MessageCircle>
                Chat on WhatsApp
              </Button>

              <Button
                variant="outline"
                className=""
              >
                <Mail></Mail>
                Send an Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default App