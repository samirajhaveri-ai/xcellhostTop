/** Migrate URLs still stored in CMS content, including rich text and media. */
export function migrateCmsDomains<T>(value: T): T {
  if (typeof value === 'string') {
    return value.replace(
      /https?:\/\/((?:admin|www)\.)?xcellhost\.top(?=[:/?#\s"'<>)]|$)/gi,
      (_match, subdomain: string | undefined) =>
        `https://${subdomain?.toLowerCase() === 'admin.' ? 'admin.' : ''}xcellhost.cloud`,
    ) as T;
  }
  if (Array.isArray(value)) return value.map(migrateCmsDomains) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, migrateCmsDomains(entry)]),
    ) as T;
  }
  return value;
}
