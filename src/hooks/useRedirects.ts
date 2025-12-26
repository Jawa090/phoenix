import { useEffect, useState } from "react";

export interface Redirect {
  from: string;
  to: string;
  type: 301 | 302;
}

export function useRedirects() {
  const [redirects, setRedirects] = useState<Redirect[]>([]);

  useEffect(() => {
    fetch("/api/redirects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRedirects(data);
        }
      })
      .catch((error) => {
        console.error("Failed to load redirects:", error);
      });
  }, []);

  return redirects;
}

