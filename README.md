# Window Theme

Window is a VS Code theme set focused on clear structure, calm contrast, and practical coding ergonomics.

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
- **Keywords / control flow**: distinct but not over-saturated.
- **Types / classes**: clean cool accent, trustworthy and structural.
- **Functions / calls**: readable highlight, easy to spot in dense code.
- **Strings**: warmer contrast to separate data from logic.
- **Numbers / constants**: vivid enough to stand out, restrained enough to stay cohesive.
- **Operators / punctuation**: supportive, never louder than semantic tokens.

### Base Hex Palette (Syntax Tokens)

This is the concrete base palette for the Nord × classic Visual Studio direction:

- **Base foreground (default text):** `#D8DEE9`
- **Comments:** `#616E88`
- **Keywords / control flow:** `#81A1C1`
- **Storage / declarations:** `#5E81AC`
- **Types / classes / interfaces:** `#8FBCBB`
- **Functions / methods:** `#EBCB8B`
- **Variables / parameters:** `#D8DEE9`
- **Properties / fields:** `#88C0D0`
- **Strings:** `#D08770`
- **Numbers:** `#B48EAD`
- **Constants / enum members:** `#A3BE8C`
- **Operators / punctuation:** `#C0C8D6`
- **Regex:** `#88C0D0`
- **Invalid / error tokens:** `#BF616A`

### Palette Rules

- Prefer **desaturated cools** first.
- Introduce **warm accents sparingly** for semantic differentiation.
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
2. more consistent with Nord’s calm temperature,
3. and still familiar to developers who grew up with classic Visual Studio themes.