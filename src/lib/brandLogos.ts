import type { ImageMetadata } from "astro";
import { siGoogle } from "simple-icons";

// Self-hosted favicons (downloaded per domain) — no google.com/s2/favicons request.
import behnmeyerLogo from "../assets/icons/logos/behnmeyer.svg";
import mahachemLogo from "../assets/icons/logos/mahachem.png";
import starhitsLogo from "../assets/icons/logos/starhits.png";
import nabatisnackLogo from "../assets/icons/logos/nabatisnack.png";
import unpamLogo from "../assets/icons/logos/unpam.png";
import dicodingLogo from "../assets/icons/logos/dicoding.png";
import awsLogo from "../assets/icons/logos/aws.png";
import babastudioLogo from "../assets/icons/logos/babastudio.png";

/** Brand logo keyed by bare domain. Values are optimizable ImageMetadata. */
export const domainLogos: Record<string, ImageMetadata> = {
  "behnmeyer.com": behnmeyerLogo,
  "mahachem.com": mahachemLogo,
  "starhits.id": starhitsLogo,
  "nabatisnack.co.id": nabatisnackLogo,
  "unpam.ac.id": unpamLogo,
  "dicoding.com": dicodingLogo,
  "aws.amazon.com": awsLogo,
  "babastudio.com": babastudioLogo,
};

/** Inline Google's brand mark from simple-icons (no network). */
export const googleIconDataUri = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#${siGoogle.hex}"><path d="${siGoogle.path}"/></svg>`
)}`;

/** Normalize a full URL or bare host to a bare domain key. */
export function normalizeDomain(input: string): string {
  return input
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/\/.*$/, "")
    .toLowerCase();
}

/** Look up a self-hosted logo for a domain/URL, or null if not bundled. */
export function logoForDomain(input: string): ImageMetadata | null {
  return domainLogos[normalizeDomain(input)] ?? null;
}
