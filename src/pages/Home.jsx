"use client";
import * as React from "react";
import {
  IconCalendarEvent,
  IconHome,
  IconLeaf,
  IconPackageImport,
  IconRecycle,
  IconTruckDelivery,
  IconUpload,
} from "@tabler/icons-react";

import Canvas from "@/canvas";
import state from "@/store";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import STLViewer from "@/components/STLViewer";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import BookingCard from "@/components/BookingCard";

const heroStats = [
  { label: "Avg. STL turnaround", value: "24 hrs" },
  { label: "Families making toys", value: "1k+" },
  { label: "Recycled plastic saved", value: "3 tons" },
];

const ecoHighlights = [
  {
    title: "Recyclable plastics only",
    copy: "Kid-safe PLA and PETG blends give every toy a second life once playtime is over.",
    icon: IconLeaf,
  },
  {
    title: "Closed-loop pellets",
    copy: "Shredded returns become new filament so every drop stays circular.",
    icon: IconRecycle,
  },
  {
    title: "Solar-powered print hubs",
    copy: "Regional farms in six cities keep freight short and emissions tiny.",
    icon: IconHome,
  },
  {
    title: "Keepsake-ready packaging",
    copy: "Compostable gift boxes arrive ready to place under the tree.",
    icon: IconPackageImport,
  },
];

const deliveryTimeline = [
  {
    title: "Sketch or upload",
    copy: "Share a doodle, family drawing, or reference toy. AI cleans it automatically.",
    icon: IconUpload,
  },
  {
    title: "AI sculpts in 3D",
    copy: "Our model builds watertight STL concepts you can view in 360°.",
    icon: IconCalendarEvent,
  },
  {
    title: "Approve & personalize",
    copy: "Choose colors, name engravings, or playful accessories before printing.",
    icon: IconPackageImport,
  },
  {
    title: "Print & deliver",
    copy: "Eco filament gets printed, polished, and shipped in gift-ready boxes.",
    icon: IconTruckDelivery,
  },
];

const galleryItems = [
  {
    title: "Apple 3D Model",
    copy: "A beautifully designed apple model created by our community makers.",
    src: "/apple+3d+model.stl",
    color: "#EF4444",
  },
  {
    title: "Roblox Character",
    copy: "Custom Roblox-inspired character model ready for 3D printing.",
    src: "/roblox v8.stl",
    color: "#10B981",
  },
  {
    title: "Stylized Character",
    copy: "Unique stylized character design perfect for toy creation.",
    src: "/stylized+character+3d+model.stl",
    color: "#3B82F6",
  },
];

const makerStories = [
  {
    quote:
      "My twins scribbled a rocket fox and 18 hours later we were holding it. Nothing beats watching them paint their own heroes.",
    name: "Clem",
    designation: "Mama + Toy Inventor",
    src: "https://res.cloudinary.com/dbs7m6ljl/image/upload/v1763666784/IMG_0988_xqyrsb.jpg",
  },
  {
    quote:
      "Our classroom recycled old filament spools into stocking stuffers. The lifecycle card turned every fifth grader into a sustainability nerd.",
    name: "Mr. Pius",
    designation: "5th Grade Teacher",
    src: "https://res.cloudinary.com/dbs7m6ljl/image/upload/v1763666881/IMG_0985_swyi11.jpg",
  },
  {
    quote:
      "Our classroom recycled old filament spools into stocking stuffers. The lifecycle card turned every fifth grader into a sustainability nerd.",
    name: "Mr. Pius",
    designation: "5th Grade Teacher",
    src: "https://res.cloudinary.com/dbs7m6ljl/image/upload/v1763666881/IMG_0985_swyi11.jpg",
  },
  {
    quote:
      "I sketched a jellyfish buddy for my niece overseas. The STL preview let us tweak smiles together before it ever shipped.",
    name: "Clem",
    designation: "Fave Auntie",
    src: "https://res.cloudinary.com/dbs7m6ljl/image/upload/v1763666784/IMG_0988_xqyrsb.jpg",
  },
];

const navItems = [
  {
    name: "Hero",
    link: "#hero",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Eco",
    link: "#gallery",
    icon: <IconLeaf className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Delivery",
    link: "#book-demo",
    icon: (
      <IconTruckDelivery className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Book Demo",
    link: "#book-demo",
    icon: (
      <IconCalendarEvent className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

const Home = () => {
  const handleStartCustomization = () => {
    state.intro = false;
  };

  return (
    <div className="relative flex flex-col gap-14 bg-white pb-24 pt-14">
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 md:inset-x-auto md:inset-y-0 md:left-6 md:top-1/2 md:bottom-auto md:px-0">
        <div className="pointer-events-auto flex w-full max-w-sm justify-center md:max-w-none md:-translate-y-1/2">
          <FloatingDock
            items={navItems}
            desktopClassName="shadow-md border border-neutral-200/60 bg-white/90 dark:bg-neutral-900/80 backdrop-blur-lg"
            mobileClassName="w-full shadow-md border border-neutral-200/60 bg-white/95 backdrop-blur-xl"
          />
        </div>
      </div>

      <section
        id="hero"
        className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-28 opacity-30">
          <div className="relative h-[120%] w-[140vw]">
            <BackgroundRippleEffect rows={7} cols={28} cellSize={52} />
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              PichaPrintAI
            </p>
            <div className="space-y-2 text-4xl font-bold leading-[1.15] tracking-tight text-neutral-900 md:text-5xl lg:text-[3.5rem]">
              <p>Custom toys that feel</p>
              <ContainerTextFlip
                words={["playful", "sustainable", "heartfelt", "limitless"]}
                className="!rounded-md !shadow-none !bg-transparent !text-orange-500 dark:!text-orange-400 ![background:none]"
                textClassName="!text-4xl md:!text-5xl lg:!text-[3.5rem] !font-bold"
              />
            </div>
            <p className="max-w-lg text-[15px] leading-relaxed text-neutral-500">
              Sketch a dream toy and watch AI sculpt a 3D-printable model
              in minutes. Eco-friendly, one-of-a-kind, and ready to unwrap.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={handleStartCustomization}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:brightness-105"
              >
                <IconUpload className="h-4 w-4" />
                Upload a sketch
              </button>
              <a
                href="#gallery"
                className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 transition hover:text-neutral-900"
              >
                See examples →
              </a>
            </div>
            <dl className="flex gap-6 pt-2">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`${i > 0 ? 'border-l border-neutral-200 pl-6' : ''}`}
                >
                  <dd className="text-xl font-bold text-neutral-900">
                    {stat.value}
                  </dd>
                  <dt className="text-xs text-neutral-400">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex-1">
            <div className="relative h-[400px] w-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-900 shadow-lg">
                <Canvas />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                Community designs
              </h2>
              <p className="text-sm text-neutral-500">
                A peek at toys the community dreamed up this week.
              </p>
            </div>
            <a
              href="#book-demo"
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-neutral-400 hover:text-neutral-900"
            >
              How it works →
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <CardContainer
                key={item.title}
                containerClassName="py-0 hidden md:flex w-full"
                className="w-full h-full"
              >
                <CardBody className="bg-white relative group/card hover:shadow-lg dark:bg-black dark:border-white/[0.2] border-neutral-100 !h-auto !w-full rounded-xl border shadow-sm overflow-hidden transition-shadow duration-300">
                  <CardItem
                    translateZ="100"
                    className={`${item.src.endsWith('.stl') ? 'h-72 md:h-80' : 'h-56'} w-full bg-neutral-50 rounded-t-xl relative`}
                  >
                    {item.src.endsWith('.stl') ? (
                      <STLViewer
                        url={item.src}
                        color={item.color || "#EFBD48"}
                        className="h-full w-full"
                        autoRotate={true}
                        zoom={3}
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover rounded-t-3xl"
                      />
                    )}
                  </CardItem>
                  <div className="px-4 py-3.5 space-y-1">
                    <CardItem
                      translateZ="50"
                      className="text-base font-semibold text-neutral-900 dark:text-white"
                    >
                      {item.title}
                    </CardItem>
                    <CardItem
                      translateZ="60"
                      as="p"
                      className="text-sm text-neutral-600 dark:text-neutral-300"
                    >
                      {item.copy}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
            {galleryItems.map((item) => (
              <article
                key={`${item.title}-mobile`}
                className="group rounded-xl border border-neutral-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md overflow-hidden md:hidden"
              >
                <div className={`${item.src.endsWith('.stl') ? 'h-72' : 'h-52'} w-full bg-neutral-50 rounded-t-xl relative`}>
                  {item.src.endsWith('.stl') ? (
                    <STLViewer
                      url={item.src}
                      color={item.color || "#EFBD48"}
                      className="h-full w-full"
                      autoRotate={true}
                      zoom={3}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="space-y-1 px-4 py-3.5">
                  <h3 className="text-base font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-neutral-100 bg-neutral-50/50">
            <AnimatedTestimonials testimonials={makerStories} autoplay />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-3xl px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </div>

      <section
        id="eco"
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 rounded-2xl bg-orange-50/40 p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Eco-friendly toy lab
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600">
              Every kit uses recycled pellets, solvent-free finishing, and
              energy from renewables. Parents get a lifecycle card describing
              how to recycle or reprint the toy when it&apos;s outgrown.
            </p>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" /> Verified no-VOC paints and kid-safe PLA</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" /> Heat-map analytics show plastic saved per toy</li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" /> Return-to-reprint labels in every box</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {ecoHighlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50">
                    <Icon className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {highlight.copy}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="book-demo"
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl border border-neutral-100 bg-white p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              From idea to gift-ready toy
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-neutral-500">
              Families see each step while we handle AI sculpting, QA, and shipping.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ol className="space-y-6">
              {deliveryTimeline.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-xl p-4 transition hover:bg-neutral-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <StepIcon className="h-5 w-5 text-neutral-500" />
                        <h3 className="text-sm font-semibold text-neutral-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs text-neutral-500">
                        {step.copy}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="flex items-center justify-center">
              <BookingCard />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;