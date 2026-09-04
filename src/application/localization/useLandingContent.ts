import { useState } from "react";
import { landingContent } from "./landingContent";
import type { Language } from "../../domain/shared/Language";

export function useLandingContent() {
  const [language, setLanguage] = useState<Language>("es");

  return {
    language,
    content: landingContent[language],
    changeLanguage: setLanguage,
  };
}
