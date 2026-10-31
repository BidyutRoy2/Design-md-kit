# Security Policy

## Supported versions

Only the latest release on the default branch is supported.

## Reporting a vulnerability

The CLI only reads DESIGN.md files and writes one `DESIGN.md` into a
directory you choose; it makes no network calls. If you still find a
security issue (for example a path-handling bug), please report it privately
through GitHub's "Report a vulnerability" button on this repository instead
of opening a public issue. We aim to respond within 7 days.

## A note on DESIGN.md files from the internet

A DESIGN.md is an instruction file for an AI agent. Like any agent
instruction file, a malicious one could try to steer your agent. Review
third-party systems before installing them — every system in this repo is
plain, readable Markdown for exactly that reason.
