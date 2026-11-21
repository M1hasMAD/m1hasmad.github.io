# Custom technology SVG icons

This pack contains 14 original, brand-neutral SVG icons for technologies/concepts that do not have an appropriate vendor logo in the portfolio stack.

## Install

Copy the `public/images/brands/custom/` directory into the `public/images/brands/` directory of your Angular project.

Then add the matching entries from `SKILL-VISUALS-MAPPING.ts.txt` to your existing `SKILL_VISUALS` object. Replace fallback-only entries; do not add duplicate object keys.

The icon URLs are relative to Angular's `public/` folder. Do not prefix them with `public/`.

## Included icons

- gRPC
- Liquibase
- Lombok
- Apache Log4j
- LINQ
- AutoMapper
- Microservices
- Event-Driven Architecture
- Mockito
- xUnit
- TDD / BDD
- CI/CD
- SQL
- PL/SQL

## Design

- Transparent backgrounds
- 64 × 64 viewBox
- Warm amber (`#C58A3A`) and slate (`#8292A7`) strokes
- Brand-neutral illustrations for concepts without a single standard logo
- No npm dependencies

Existing official logos (Java, Spring, PostgreSQL, Kafka, etc.) are intentionally left unchanged.
