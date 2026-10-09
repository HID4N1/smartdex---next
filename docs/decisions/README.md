# Architecture decision records

Use this directory for decisions that materially constrain future implementation: rendering strategy, data ownership, authentication, external services, deployment architecture, localization, or a major library choice. Do not reconstruct historical rationale from code alone. No decision records were added during the documentation audit because the repository proves the current implementation but not who made each decision, which alternatives were considered, or the decision date.

Preserve existing records. Create one Markdown file per decision with a sortable name such as `0001-short-title.md`; do not renumber records after they are shared.

## Template

```markdown
# 0001: Short decision title

- Status: proposed | accepted | superseded | rejected
- Date: YYYY-MM-DD
- Owners: team or role, if known
- Supersedes: link, if applicable

## Context

Describe the problem, constraints, and evidence available when the decision is made.

## Decision

State what will be done and the scope of the decision.

## Alternatives considered

- Alternative: why it was not selected.
- Alternative: why it was not selected.

## Consequences

List expected benefits, costs, risks, operational effects, and follow-up work.
```

Use the actual decision date, not a repository file timestamp. Mark a changed direction by adding a new record and linking the old one as superseded; keep the old context intact.
