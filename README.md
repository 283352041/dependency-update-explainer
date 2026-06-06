# Dependency Update Explainer

Explain package-lock changes in plain English.

```bash
node ./bin/dep-explain.js package-lock.before.json package-lock.json
```

Useful for PRs where dependency updates are hard to review from lockfile diffs alone.

## Review Notes

Use this before reviewing dependency-only PRs. It turns lockfile churn into a short list of added, removed, and updated packages.

## Current Limitation

The first version targets npm `package-lock.json` v2/v3-style `packages` data. Other lockfiles can be added as separate parsers.
