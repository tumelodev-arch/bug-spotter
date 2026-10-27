# bug-spotter

An interactive set of original secure-coding examples. Pick a vulnerable line, read the explanation and compare the fix.

**Status:** starter implementation. Review the limitations below before treating this as finished work.

## Try it in under 60 seconds

1. Install Node.js 22 or newer.
2. Run `npm ci`.
3. Run `npm test`.
4. Open `index.html` directly in a browser, or use `npx serve .` for a local static server.

## How it works

The page uses semantic HTML and plain CSS. The core logic lives in a small JavaScript module so it can be tested independently. There are no API calls or secrets.

## How I tested it

Run `npm test`. GitHub Actions runs the same test command on pushes and pull requests. This starter has not yet had a full manual browser and assistive-technology review.

## Known limits

- This is a small public learning tool, not a substitute for a security assessment or a formal test strategy.
- Browser support, accessibility and edge cases need manual verification before calling the project complete.
- No production readiness claim is made.

## What I would do next

Ask another developer to review every example and add a regression test next to each fix.

## Licence

MIT. See [LICENSE](LICENSE).
