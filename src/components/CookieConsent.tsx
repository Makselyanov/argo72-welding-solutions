import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "argon_master72_cookie_consent";
const METRIKA_ID = Number(import.meta.env.VITE_YANDEX_METRIKA_ID || 0);

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    __argoMetrikaInitialized?: boolean;
  }
}

const initMetrika = () => {
  if (typeof window === "undefined") return;
  if (!METRIKA_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.ym = window.ym || function ymFallback(...args: unknown[]) {
    (window.ym as unknown as { a?: unknown[] }).a = (window.ym as unknown as { a?: unknown[] }).a || [];
    (window.ym as unknown as { a: unknown[] }).a.push(args);
  };
  (window.ym as unknown as { l?: number }).l = Date.now();

  if (!document.querySelector('script[src^="https://mc.yandex.ru/metrika/tag.js"]')) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}`;
    document.head.appendChild(script);
  }

  if (!window.__argoMetrikaInitialized) {
    window.ym(METRIKA_ID, "init", {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: "dataLayer",
      referrer: document.referrer,
      url: window.location.href,
      accurateTrackBounce: true,
      trackLinks: true,
    });
    window.__argoMetrikaInitialized = true;
  }
};

const CookieConsent = () => {
  const location = useLocation();
  const [accepted, setAccepted] = useState(() => (
    typeof window !== "undefined" && localStorage.getItem(CONSENT_KEY) === "accepted"
  ));

  useEffect(() => {
    if (accepted) {
      initMetrika();
    }
  }, [accepted]);

  useEffect(() => {
    if (accepted && METRIKA_ID && window.ym && window.__argoMetrikaInitialized) {
      window.ym(METRIKA_ID, "hit", window.location.href, {
        referrer: document.referrer,
        title: document.title,
      });
    }
  }, [accepted, location.pathname, location.search, location.hash]);

  const acceptCookies = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setAccepted(true);
  };

  if (accepted) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t bg-white px-4 py-4 shadow-2xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-foreground">
          Мы используем cookies и Яндекс.Метрику, чтобы анализировать работу сайта и улучшать сервис.
          Нажимая «Согласен», вы разрешаете обработку cookies.
        </p>
        <div className="flex shrink-0 gap-3">
          <a
            href="/privacy"
            className="inline-flex h-10 items-center justify-center rounded-md border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Подробнее
          </a>
          <Button type="button" onClick={acceptCookies} className="h-10">
            Согласен
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
