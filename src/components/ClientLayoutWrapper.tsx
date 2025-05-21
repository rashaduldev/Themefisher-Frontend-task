"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import defaultTranslations from "@/app/translations/defaultTranslations";
import { LayoutContext } from "./context";
import { Translations } from "@/types/translations";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const [language, setLanguage] = useState<string>("en");
  const [translations, setTranslations] =
    useState<Translations>(defaultTranslations);
  const [isLoading, setIsLoading] = useState(true);

  const isRTL = language === "ar";

  useEffect(() => {
    const loadTranslation = async () => {
      try {
        setIsLoading(true);
        const translationModule = (await import(
          `@/app/translations/${language}.json`
        )) as { default: Translations };
        setTranslations(translationModule.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
        setTranslations(defaultTranslations);
      } finally {
        setIsLoading(false);
      }
    };
    loadTranslation();
  }, [language]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    }
  }, [isRTL]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LayoutContext.Provider
        value={{ language, setLanguage, translations, isRTL }}
      >
        <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
      </LayoutContext.Provider>
    </ThemeProvider>
  );
}
