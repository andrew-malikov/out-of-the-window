import { converter, formatHex8, parse } from "culori";

export type ThemeColor = {
  color: NonNullable<ReturnType<typeof parse>>;
  text: string;
};

export type ThemeColorInput = string | ThemeColor;
export type ThemeColorMap = Record<string, ThemeColorInput>;

const toOklch = converter("oklch");

export function color(value: ThemeColorInput): ThemeColor;
export function color(strings: TemplateStringsArray, ...values: never[]): ThemeColor;
export function color(value: ThemeColorInput | TemplateStringsArray, ...values: never[]): ThemeColor {
  if (typeof value !== "string" && "raw" in value) {
    if (values.length > 0) {
      throw new Error("Color templates must be static");
    }

    const text = value[0];
    const parsed = parse(text);
    if (!parsed) {
      throw new Error(`Invalid color: ${text}`);
    }

    return { color: parsed, text: formatHex8(parsed) };
  }

  if (typeof value !== "string") {
    return value;
  }

  const parsed = parse(value);
  if (!parsed) {
    throw new Error(`Invalid color: ${value}`);
  }

  return { color: parsed, text: value };
}

export function alpha(value: ThemeColorInput, opacity: number): ThemeColor {
  const source = color(value);

  const opaque = opacity === 1;
  const normalized = source.text.startsWith("#")
    ? source.text
    : formatHex8(source.color);
  const withoutHash = normalized.slice(1);
  const rgb = withoutHash.length === 8 ? withoutHash.slice(0, 6) : withoutHash;

  if (opaque && withoutHash.length === 8) {
    return { color: source.color, text: normalized };
  }

  let opacityHex = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();

  if (rgb !== rgb.toUpperCase() && (opacity === 1 || opacity < 0.5)) {
    opacityHex = opacityHex.toLowerCase();
  }

  return {
    color: { ...source.color, alpha: opacity },
    text: `#${rgb}${opacityHex}`,
  };
}

export function tone(value: ThemeColorInput, lightnessDelta: number): ThemeColor {
  const source = color(value);
  const parsed = toOklch(source.color);
  if (!parsed) {
    throw new Error(`Invalid color: ${source.text}`);
  }

  const toned = {
    ...parsed,
    l: Math.min(1, Math.max(0, (parsed.l ?? 0) + lightnessDelta)),
  };

  return { color: toned, text: formatHex8(toned) };
}

export function serializeColor(value: ThemeColorInput) {
  return typeof value === "string" ? value : value.text;
}

export const flattenColorGroups = (groups: Record<string, ThemeColorMap>) =>
  Object.fromEntries(
    Object.values(groups).flatMap((group) =>
      Object.entries(group).map(([key, value]) => [key, serializeColor(value)]),
    ),
  );
