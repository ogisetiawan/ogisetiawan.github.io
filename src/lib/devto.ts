/**
 * Shared DEV.to API helpers for blog list / detail pages (SSG at build time).
 * List:   https://dev.to/api/articles?username={username}
 * Detail: https://dev.to/api/articles/{id}  (includes body_html)
 */

export const DEVTO_USERNAME = "ogisetiawan";

/** List endpoint shape (no body_html). */
export interface DevtoArticleListItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  url: string;
  published_at: string;
  edited_at: string | null;
  reading_time_minutes: number;
  /** List endpoint: array of tag strings */
  tag_list: string[];
}

/** Detail endpoint shape (includes body_html). */
export interface DevtoArticle extends Omit<DevtoArticleListItem, "tag_list"> {
  body_html: string;
  /** Detail endpoint: tags is the array; tag_list is a comma-separated string */
  tags: string[];
}

export async function fetchDevtoArticles(): Promise<DevtoArticleListItem[]> {
  const res = await fetch(
    `https://dev.to/api/articles?username=${DEVTO_USERNAME}`
  );
  if (!res.ok) {
    throw new Error(`dev.to article list fetch failed: ${res.status}`);
  }
  return (await res.json()) as DevtoArticleListItem[];
}

export async function fetchDevtoArticle(id: number): Promise<DevtoArticle> {
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  if (!res.ok) {
    throw new Error(`dev.to article ${id} fetch failed: ${res.status}`);
  }
  return (await res.json()) as DevtoArticle;
}

export async function fetchAllDevtoArticles(): Promise<DevtoArticle[]> {
  const list = await fetchDevtoArticles();
  return Promise.all(list.map((item) => fetchDevtoArticle(item.id)));
}

export function formatPublishDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function articleTags(
  article: Pick<DevtoArticleListItem, "tag_list"> | Pick<DevtoArticle, "tags">
): string[] {
  if ("tags" in article && Array.isArray(article.tags)) return article.tags;
  if ("tag_list" in article && Array.isArray(article.tag_list))
    return article.tag_list;
  return [];
}
