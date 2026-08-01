type ReportErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

/**
 * Logs runtime errors caught by the app (e.g. the React error boundary) to the
 * console. Swap this out for a real error-tracking service (Sentry, etc.) if
 * you need production monitoring.
 */
export function reportRuntimeError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: ReportErrorOptions = {},
) {
  if (typeof window === "undefined") return;
  console.error("[error-reporting]", error, {
    route: window.location.pathname,
    ...context,
    ...options,
  });
}
