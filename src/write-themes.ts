import { buildTheme } from "./build";

const outputs = [
  { file: "../themes/window_dark.json", mode: "dark" as const },
  { file: "../themes/window_light.json", mode: "light" as const },
];

await Promise.all(
  outputs.map(async ({ file, mode }) => {
    const target = new URL(file, import.meta.url);
    const json = `${JSON.stringify(buildTheme(mode), null, 2)}\n`;
    await Bun.write(target, json);
  }),
);
