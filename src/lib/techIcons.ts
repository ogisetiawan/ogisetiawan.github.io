import * as simpleIcons from "simple-icons";
// Self-hosted multi-color brand marks not available in simple-icons (devicon).
// Imported as raw SVG and inlined at build — no cdn.jsdelivr.net request.
import awsSvg from "../assets/icons/amazonwebservices.svg?raw";
import sqlServerSvg from "../assets/icons/microsoftsqlserver.svg?raw";

export interface ToolIcon {
  slug: string;
  label: string;
  invertOnDark?: boolean;
  /** Override when Simple Icons has no brand (e.g. SQL Server) */
  src?: string;
}

/** Inline a raw SVG string as a data URI (self-contained, no network). */
function svgToDataUri(svg: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const AWS_ICON = svgToDataUri(awsSvg);
const SQL_SERVER_ICON = svgToDataUri(sqlServerSvg);

/** Match longer / more specific names first */
export const TOOL_CATALOG: { test: RegExp; icon: ToolIcon }[] = [
  { test: /laravel/i, icon: { slug: "laravel", label: "Laravel" } },
  { test: /codeigniter/i, icon: { slug: "codeigniter", label: "CodeIgniter" } },
  { test: /jquery/i, icon: { slug: "jquery", label: "jQuery" } },
  { test: /nestjs/i, icon: { slug: "nestjs", label: "NestJS" } },
  {
    test: /next\s?js/i,
    icon: { slug: "nextdotjs", label: "Next.js", invertOnDark: true },
  },
  {
    test: /express/i,
    icon: { slug: "express", label: "Express.js", invertOnDark: true },
  },
  { test: /node/i, icon: { slug: "nodedotjs", label: "Node.js" } },
  { test: /typescript/i, icon: { slug: "typescript", label: "TypeScript" } },
  { test: /javascript|ecmascript|es6/i, icon: { slug: "javascript", label: "JavaScript" } },
  { test: /react/i, icon: { slug: "react", label: "React" } },
  { test: /postgres/i, icon: { slug: "postgresql", label: "PostgreSQL" } },
  {
    test: /sql\s*server|mssql/i,
    icon: {
      slug: "microsoftsqlserver",
      label: "SQL Server",
      src: SQL_SERVER_ICON,
    },
  },
  { test: /mariadb/i, icon: { slug: "mariadb", label: "MariaDB" } },
  { test: /mysql/i, icon: { slug: "mysql", label: "MySQL" } },
  { test: /\bphp\b/i, icon: { slug: "php", label: "PHP" } },
  { test: /docker/i, icon: { slug: "docker", label: "Docker" } },
  { test: /astro/i, icon: { slug: "astro", label: "Astro", invertOnDark: true } },
  { test: /github/i, icon: { slug: "github", label: "GitHub", invertOnDark: true } },
  { test: /gitlab/i, icon: { slug: "gitlab", label: "GitLab" } },
  { test: /\bgit\b/i, icon: { slug: "git", label: "Git" } },
  { test: /tailwind/i, icon: { slug: "tailwindcss", label: "Tailwind CSS" } },
  { test: /bootstrap/i, icon: { slug: "bootstrap", label: "Bootstrap" } },
  { test: /materialize/i, icon: { slug: "materialdesign", label: "Materialize" } },
  { test: /html5?/i, icon: { slug: "html5", label: "HTML5" } },
  { test: /css3?/i, icon: { slug: "css", label: "CSS3" } },
  { test: /restful|rest[\s-]*api|rest-full/i, icon: { slug: "swagger", label: "REST API" } },
  { test: /python/i, icon: { slug: "python", label: "Python" } },
  {
    test: /\baws\b|amazon web services/i,
    icon: {
      slug: "amazonwebservices",
      label: "AWS",
      src: AWS_ICON,
    },
  },
  { test: /linux/i, icon: { slug: "linux", label: "Linux" } },
  { test: /redis/i, icon: { slug: "redis", label: "Redis" } },
  { test: /notion/i, icon: { slug: "notion", label: "Notion", invertOnDark: true } },
  { test: /jest/i, icon: { slug: "jest", label: "Jest" } },
  {
    test: /socket\.?\s*io/i,
    icon: { slug: "socketdotio", label: "Socket.IO", invertOnDark: true },
  },
  { test: /esbuild/i, icon: { slug: "esbuild", label: "esbuild" } },
  {
    test: /manifest\s*v3|chrome\s*extension/i,
    icon: { slug: "googlechrome", label: "Chrome Extension" },
  },
  { test: /firefox/i, icon: { slug: "firefoxbrowser", label: "Firefox" } },
];

interface SimpleIcon {
  slug: string;
  hex: string;
  path: string;
}

/** simple-icons export name, e.g. "react" → "siReact", "html5" → "siHtml5". */
function siExportName(slug: string): string {
  return `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
}

/** Build a self-contained (no network) data URI from a simple-icons brand path. */
function toDataUri(icon: SimpleIcon): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#${icon.hex}"><path d="${icon.path}"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/**
 * Resolve an icon's image source at build time.
 * - Devicon overrides (multi-color) keep their `src`.
 * - Everything else is inlined from the local `simple-icons` package as a data
 *   URI, so there is no request to cdn.simpleicons.org (no cache-lifetime issue,
 *   no extra network dependency).
 */
export function iconSrc(tool: ToolIcon): string {
  if (tool.src) return tool.src;
  const icon = (simpleIcons as Record<string, SimpleIcon | undefined>)[
    siExportName(tool.slug)
  ];
  if (icon?.path) return toDataUri(icon);
  // Fallback (should not happen for slugs in this catalog)
  return `https://cdn.simpleicons.org/${tool.slug}`;
}

/** Resolve one technology string to a brand icon (keeps original label). */
export function resolveTechIcon(name: string): ToolIcon | null {
  for (const { test, icon } of TOOL_CATALOG) {
    if (test.test(name)) {
      return { ...icon, label: name };
    }
  }
  return null;
}

/** Dedupe by slug — used by skills marquee. */
export function toolsFromNames(names: string[]): ToolIcon[] {
  const seen = new Set<string>();
  const tools: ToolIcon[] = [];

  for (const name of names) {
    for (const { test, icon } of TOOL_CATALOG) {
      if (test.test(name) && !seen.has(icon.slug)) {
        seen.add(icon.slug);
        tools.push(icon);
      }
    }
  }

  return tools;
}

/** Map project technologies to icons; prefer items with brand logos. */
export function resolveProjectTechs(
  names: string[],
  limit = 4
): { label: string; icon: ToolIcon | null }[] {
  const seen = new Set<string>();
  const withIcon: { label: string; icon: ToolIcon }[] = [];
  const withoutIcon: { label: string; icon: null }[] = [];

  for (const name of names) {
    const icon = resolveTechIcon(name);
    if (icon) {
      if (seen.has(icon.slug)) continue;
      seen.add(icon.slug);
      withIcon.push({ label: name, icon });
    } else {
      withoutIcon.push({ label: name, icon: null });
    }
  }

  return [...withIcon, ...withoutIcon].slice(0, limit);
}
