# Window Theme

Window is a VS Code theme set focused on clear structure, calm contrast, and practical coding ergonomics.

## Release Tagging

- Install `mise` and run `mise install` to provision `bun`, then run `mise run tag` to update `package.json`, create a release commit, and create a new annotated git tag in the `yyyy.mm.dd.number` format.
- The command uses the current UTC date, increments the trailing number from existing local tags for that day, commits with `chore: new version <tag>`, and does not push anything.
- It refuses to run when the worktree contains changes outside `package.json`.

## Syntax Palette Concept: **Nord × Classic Visual Studio**

This project’s syntax (token) palette direction is based on **Nord-inspired cool tones** with the familiarity and readability of **old-school Visual Studio vibes**.

### Design Intent

- Keep the code surface calm and low-fatigue (Nord-style cool base).
- Preserve quick token recognition and “muscle memory” from classic Visual Studio palettes.
- Favor practical contrast over novelty.
- Maintain a professional, IDE-like feel rather than a neon or highly stylized look.

### Core Character

1. **Cool foundation (Nord influence)**
   - Blues, blue-grays, icy cyans, and soft desaturated neutrals.
   - A stable, quiet visual field for long sessions.

2. **Legacy IDE familiarity (Visual Studio influence)**
   - Recognizable separation between keywords, types, functions, strings, and comments.
   - Slightly warmer accents where needed to support instant scanning.

3. **Balanced contrast**
   - Strong enough for fast parsing.
   - Soft enough to avoid glare and visual noise.

### Token Role Mapping Philosophy

- **Comments**: muted cool gray-blue, clearly secondary.
- **Keywords / control flow**: intentionally quieter than semantic identifiers.
- **Types / classes**: clean cool accent, trustworthy and structural.
- **Functions / calls**: readable highlight, easy to spot in dense code.
- **Strings**: warm but restrained to avoid pulling focus from symbols.
- **Numbers / constants**: clear but controlled, cohesive with the cool base.
- **Operators / punctuation**: supportive, never louder than semantic tokens.

### Base Hex Palette (Syntax Tokens)

This is the concrete base palette for the Nord × classic Visual Studio direction:

- **Base foreground (default text):** `#D8DEE9`
- **Comments:** `#616E88`
- **Keywords / control flow:** `#7F9DBA`
- **Storage / declarations:** `#5E81AC`
- **Types / classes / interfaces:** `#8FBCBB`
- **Functions / methods:** `#EBCB8B`
- **Variables / parameters:** `#D8DEE9`
- **Properties / fields:** `#88C0D0`
- **Strings:** `#C58A77`
- **Numbers:** `#B48EAD`
- **Constants / enum members:** `#98B78A`
- **Operators / punctuation:** `#C0C8D6`
- **Regex:** `#88C0D0`
- **Invalid / error tokens:** `#BF616A`

### Palette Rules

- Prefer **desaturated cools** first.
- Keep **warm (orange) and green accents restrained** so they support rather than dominate.
- Keep **boilerplate tokens** (keywords, storage, modifiers) quieter than semantic identifiers.
- Avoid excessive rainbow distribution.
- Ensure consistency across common language grammars.
- Tune for both small files and large, deeply nested codebases.

### Accessibility and Ergonomics

- Prioritize legibility in long editing sessions.
- Keep line-level and token-level contrast predictable.
- Preserve clarity under dim environments and typical monitor gamma profiles.

### Guiding Principle

If a token color choice is ambiguous, prefer the option that is:

1. more readable at a glance,
2. keeps semantic identifiers more visible than boilerplate syntax,
3. more consistent with Nord’s calm temperature,
