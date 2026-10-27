# Decisions

## Keep the demo static

An interactive set of original secure-coding examples. Pick a vulnerable line, read the explanation and compare the fix. It runs in the browser. It does not need a server, database, API key or cloud account.

## Keep examples synthetic

Every example is fictional and written for this repository. No employer systems, customer data or training challenge text is used.

## Make behaviour testable

Core rules are separated from page rendering so tests can exercise them without a browser.

## State limits plainly

This is a learning project. The interface does not claim to replace security review, QA judgement or a human reading the source.

## Next decision

Ask another developer to review every example and add a regression test next to each fix.
