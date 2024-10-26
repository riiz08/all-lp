"use client";

import { useEffect } from "react";

const MetaPixel = () => {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;

    if (typeof window !== "undefined" && pixelId) {
      (function (f: Window, b: Document, e: string, v: string) {
        if (!f.fbq) {
          const n = function (command: string, ...args: unknown[]) {
            if (f.fbq.callMethod) {
              f.fbq.callMethod(...args);
            } else {
              f.fbq.queue.push(args);
            }
          } as Fbq;

          n.queue = [];
          n.loaded = true;
          n.version = "2.0";
          f.fbq = n;
          f._fbq = n;
        }

        const t = b.createElement(e) as HTMLScriptElement;
        t.async = true;
        t.src = v;
        const s = b.getElementsByTagName(e)[0];
        s?.parentNode?.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );

      window.fbq("init", pixelId); // Menggunakan Pixel ID dari .env
      window.fbq("track", "PageView");
    }
  }, []);

  return null; // Tidak perlu merender apapun
};

export default MetaPixel;
