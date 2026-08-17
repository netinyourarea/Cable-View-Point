import { useRouterState } from "@tanstack/react-router";
import { pageSchema } from "@/lib/seo";

export function SchemaMarkup() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema(pathname)) }}
    />
  );
}
