import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useRedirects } from "@/hooks/useRedirects";

export function useDynamicRedirects() {
  const location = useLocation();
  const redirects = useRedirects();

  useEffect(() => {
    const currentPath = location.pathname;
    const redirect = redirects.find(
      (r) => r.from === currentPath || r.from === currentPath.slice(0, -1)
    );

    if (redirect) {
      window.location.replace(redirect.to);
    }
  }, [location.pathname, redirects]);

  return null;
}

export function DynamicRedirects() {
  const location = useLocation();
  const redirects = useRedirects();

  const currentPath = location.pathname;
  const redirect = redirects.find(
    (r) => r.from === currentPath || r.from === currentPath.slice(0, -1)
  );

  if (redirect) {
    return <Navigate to={redirect.to} replace />;
  }

  return null;
}

