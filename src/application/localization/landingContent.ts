import type { LandingContentByLanguage } from "../../domain/landing/LandingContent";

export const landingContent: LandingContentByLanguage = {
  es: {
    nav: ["Plataforma", "Cómo funciona", "Para quién", "Contacto"],
    eyebrow: "Ganadería conectada · desde el campo",
    title: "El pulso de tu ganado, en una sola mirada.",
    intro:
      "SmartFarm convierte cada señal del campo en decisiones claras para cuidar mejor a tus animales y hacer crecer tu operación.",
    primaryAction: "Conocer la plataforma",
    secondaryAction: "Ver cómo funciona",
    status: "Operación en calma",
    liveLabel: "Monitoreo en vivo",
    sectionLabel: "Una vista completa",
    sectionTitle: "Menos intuición. Más contexto para decidir.",
    sectionText:
      "Desde el potrero hasta la administración, SmartFarm conecta lo que pasa con tus animales con lo que necesita tu negocio.",
    modules: [
      {
        number: "01",
        title: "Salud animal",
        description:
          "Temperatura y movimiento para detectar cambios antes de que se vuelvan problemas.",
      },
      {
        number: "02",
        title: "Ubicación real",
        description:
          "Sabe dónde está cada animal y te avisa cuando algo se sale de lo esperado.",
      },
      {
        number: "03",
        title: "Operación diaria",
        description:
          "Alimentación, bebederos, gastos, pérdidas y visitas veterinarias en el mismo lugar.",
      },
    ],
    quote:
      "La tranquilidad de saber qué está pasando, incluso cuando estás lejos del campo.",
    ctaEyebrow: "El campo, mejor informado",
    ctaTitle: "Tu próxima decisión puede empezar con un dato.",
    ctaText:
      "Conoce una forma más simple de cuidar tu ganado y administrar tu operación.",
    ctaAction: "Hablemos de SmartFarm",
    fieldNote: "Diseñado para quienes están cerca del campo.",
    scrollStatus: "Explorando la plataforma",
  },
  en: {
    nav: ["Platform", "How it works", "For whom", "Contact"],
    eyebrow: "Connected livestock · from the field",
    title: "Your herd’s pulse, in one clear view.",
    intro:
      "SmartFarm turns every field signal into clear decisions to care for your animals and grow your operation.",
    primaryAction: "Explore the platform",
    secondaryAction: "See how it works",
    status: "Operation steady",
    liveLabel: "Live monitoring",
    sectionLabel: "A complete view",
    sectionTitle: "Less guesswork. More context to decide.",
    sectionText:
      "From the pasture to the back office, SmartFarm connects what happens to your animals with what your business needs.",
    modules: [
      {
        number: "01",
        title: "Animal health",
        description:
          "Temperature and movement signals help spot change before it becomes a problem.",
      },
      {
        number: "02",
        title: "Real location",
        description:
          "Know where every animal is and get notified when something moves outside the expected range.",
      },
      {
        number: "03",
        title: "Daily operations",
        description:
          "Feed, water, expenses, losses and vet visits, all in one place.",
      },
    ],
    quote:
      "The peace of knowing what is happening, even when you are away from the farm.",
    ctaEyebrow: "A better-informed field",
    ctaTitle: "Your next decision can start with a signal.",
    ctaText:
      "Discover a simpler way to care for your herd and run your operation.",
    ctaAction: "Talk to SmartFarm",
    fieldNote: "Built for people who stay close to the land.",
    scrollStatus: "Exploring the platform",
  },
};
