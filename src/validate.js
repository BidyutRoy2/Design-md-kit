// Validates that a DESIGN.md file contains every section an AI coding
// agent needs to generate coherent, non-generic UI.
export const REQUIRED_SECTIONS = [
  { key: "colors", pattern: /^#{1,3}\s.*colou?rs/im, label: "Colors (with hex/token values)" },
  { key: "typography", pattern: /^#{1,3}\s.*typography/im, label: "Typography (families, scale, weights)" },
  { key: "layout", pattern: /^#{1,3}\s.*(layout|spacing)/im, label: "Layout & spacing system" },
  { key: "components", pattern: /^#{1,3}\s.*components/im, label: "Component styles" },
  { key: "motion", pattern: /^#{1,3}\s.*motion/im, label: "Motion & interaction" },
  { key: "accessibility", pattern: /^#{1,3}\s.*accessibility/im, label: "Accessibility rules" },
  { key: "do-dont", pattern: /do\s*&?\s*don'?t|##\s*do\b/im, label: "Do / Don't guidance" },
];

export function validateDesignMd(markdown) {
  const results = REQUIRED_SECTIONS.map((s) => ({
    key: s.key,
    label: s.label,
    ok: s.pattern.test(markdown),
  }));
  const hexCount = (markdown.match(/#[0-9a-fA-F]{6}\b/g) || []).length;
  results.push({
    key: "hex-values",
    label: `Concrete color values (found ${hexCount}, need >= 8)`,
    ok: hexCount >= 8,
  });
  const passed = results.filter((r) => r.ok).length;
  return { results, passed, total: results.length, valid: passed === results.length };
}
