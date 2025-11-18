Workspace Rules – Carma
Naming Conventions

Folders/Files: Use lowercase and hyphens (e.g., /client/components/navbar.jsx).

Variables and Functions: Use camelCase (e.g., userScore, calculatePoints).

React Components: Use PascalCase (e.g., VendorCard, EventList).

Constants/Environment Variables: Use UPPER_SNAKE_CASE (e.g., API_BASE_URL).

Database Tables: Use snake_case (e.g., vendor_profiles, user_reviews).

Commit Message Guidelines

Use the format: type(scope): short description

Types: feat, fix, refactor, docs, style, chore.

Example: feat(client): add vendor follow button

Keep messages short and focused on one change.

Write in present tense (“add” not “added”).

Pull Request and Review Process

Before opening a pull request:

Pull the latest dev branch.

Run linting and formatting checks.

Test all new features locally.

Submit PR to merge your feature branch into dev.

Include screenshots or steps for testing.

Assign at least one reviewer before merging.

Merge into main only after all reviews are complete and tests pass.

Branching Strategy

Main Branches:

main: Stable production-ready branch.

dev: Active development branch.

Feature Branches:

Create a branch for each feature or bug fix:
git checkout -b feature/<feature-name>

Example: feature/community-feed

Workflow:

Start from dev.

Create your feature branch.

Commit and push changes.

Open a pull request into dev.

Delete local branch after merge.

Hotfix Branches:

For urgent production fixes:
git checkout -b hotfix/<issue>

Merge hotfixes into both main and dev.
