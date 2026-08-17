import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono text-xs tracking-[0.4em] uppercase text-signal">ERR / 404</div>
        <h1 className="mt-4 font-display text-7xl font-semibold text-ink">Signal lost.</h1>
        <p className="mt-4 text-sm text-ink-muted">The page you requested is not on the network.</p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">Return to base</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono text-xs tracking-[0.4em] uppercase text-signal">ERR / 500</div>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Uplink interrupted.</h1>
        <p className="mt-3 text-sm text-ink-muted">The route failed to render. Retry or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Retry</button>
          <a href="/" className="btn-ghost">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <Outlet />
    </QueryClientProvider>
  );
}
