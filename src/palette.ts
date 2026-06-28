import { color, serializeColor, type ThemeColor } from "./colors";
import type { ThemeMode } from "./types";

function serializePalette(
  palette: Record<string, ThemeColor>,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(palette).map(([key, value]) => [key, serializeColor(value)]),
  );
}

const syntaxColorPalette: Record<ThemeMode, Record<string, ThemeColor>> = {
  dark: {
    foreground: color`oklch(80% 0 264.46)`,
    mutedForeground: color`oklch(65% 0 265.94)`,
    comment: color`oklch(60% 0.05 280)`,
    commentMuted: color`oklch(55% 0 0)`,
    keyword: color`oklch(70% 0 0)`,
    storage: color`oklch(70% 0 0)`,
    type: color`oklch(80% 0 219.55)`,
    function: color`oklch(85% 0.05 260)`,
    variable: color`oklch(85% 0 264.46)`,
    property: color`oklch(90% 0 12.07)`,
    string: color`oklch(84% 0.07 255.6)`,
    number: color`oklch(74% 0.1 134.1)`,
    constant: color`oklch(74% 0.05 36.41)`,
    operator: color`oklch(75% 0 0)`,
    regex: color`oklch(70% 0.06 66.67)`,
    invalid: color`oklch(66% 0.12 17.45)`,
    accentBlue: color`oklch(73% 0.1 250.24)`,
    accentSky: color`oklch(72% 0.1 250.63)`,
    accentCyan: color`oklch(73% 0.07 208.44)`,
    accentCyanSoft: color`oklch(72% 0.04 198.35)`,
    accentGreen: color`oklch(77% 0.09 129.94)`,
    accentGreenBright: color`oklch(85% 0.17 138.38)`,
    accentGreenSoft: color`oklch(72% 0.1 133.04)`,
    accentGray: color`oklch(91% 0.01 253.86)`,
    accentOrange: color`oklch(70% 0.08 66.67)`,
    accentRed: color`oklch(66% 0.12 17.45)`,
    accentTeal: color`oklch(77% 0.1 174.53)`,
    invalidSoft: color`oklch(67% 0.14 17)`,
  },
  light: {
    foreground: color`oklch(31% 0 242)`,
    comment: color`oklch(58% 0 250.38)`,
    commentMuted: color`oklch(50% 0 250.38)`,
    keyword: color`oklch(50% 0 250.52)`,
    storage: color`oklch(59% 0 250.52)`,
    type: color`oklch(45% 0 228.19)`,
    function: color`oklch(31% 0 242)`,
    variable: color`oklch(31% 0 242)`,
    property: color`oklch(40% 0 245.48)`,
    string: color`oklch(50% 0.05 245.98)`,
    number: color`oklch(58% 0.08 120.16)`,
    constant: color`oklch(59% 0.1 231.68)`,
    operator: color`oklch(59% 0 250.52)`,
    regex: color`oklch(59% 0.1 231.68)`,
    invalid: color`oklch(52% 0.07 30.45)`,
    accentGreen: color`oklch(61% 0.1 155.22)`,
  },
};

export const syntaxPalette: Record<ThemeMode, Record<string, string>> = {
  dark: serializePalette(syntaxColorPalette.dark),
  light: serializePalette(syntaxColorPalette.light),
};

export function syntax(mode: ThemeMode) {
  return syntaxPalette[mode];
}
