# Contributing

Thanks for considering an example. Keep it short and original.

1. Open an issue describing the topic and why an example helps.
2. Write code from scratch. Do not copy employer code, proprietary examples or security-training challenge text.
3. Add one clearly vulnerable line, a plain-language explanation, a safer direction and a test idea.
4. Use fictional names and values. Do not include live endpoints, real credentials or exploit targets.
5. Run `npm test` and open a pull request with the context and limits.

## Snippet template

Copy the shape below into `data/snippets.json` and replace every value.

```json
{
  "id": "SEC-XX",
  "topic": "Topic",
  "title": "Short title",
  "context": "Fictional context.",
  "language": "typescript",
  "code": ["line one", "line two", "line three"],
  "bad": 1,
  "explanation": "Why the selected line is unsafe.",
  "fix": "A safer approach and its limits.",
  "test": "A controlled test that checks the fix."
}
```

This is teaching material, not a complete security assessment. Keep examples non-destructive and suitable for local review.
