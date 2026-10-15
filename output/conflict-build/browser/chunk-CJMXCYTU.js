// src/app/core/domain-migration.ts
function migrateCmsDomains(value) {
  if (typeof value === "string") {
    return value.replace(/https?:\/\/((?:admin|www)\.)?xcellhost\.top(?=[:/?#\s"'<>)]|$)/gi, (_match, subdomain) => `https://${subdomain?.toLowerCase() === "admin." ? "admin." : ""}xcellhost.cloud`);
  }
  if (Array.isArray(value))
    return value.map(migrateCmsDomains);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, migrateCmsDomains(entry)]));
  }
  return value;
}

export {
  migrateCmsDomains
};
//# sourceMappingURL=chunk-CJMXCYTU.js.map
