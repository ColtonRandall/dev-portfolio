const COLOUR_MAP = [
  { color: "primary", keywords: ["java", "spring", "hibernate"] },
  { color: "secondary", keywords: ["python", "c#", ".net"] },
  {
    color: "warning",
    keywords: [
      "html",
      "css",
      "javascript",
      "react",
      "next",
      "typescript",
      "material",
    ],
  },
  { color: "success", keywords: ["aws", "cloud", "devops", "rest api", "ai"] },
  { color: "info", keywords: ["git"] },
  { color: "error", keywords: ["sql", "database", "queries"] },
];

export function getChipColour(tag) {
  const lower = tag.toLowerCase();
  const match = COLOUR_MAP.find(({ keywords }) =>
    keywords.some((k) => lower.includes(k)),
  );
  return match ? match.color : "default";
}
