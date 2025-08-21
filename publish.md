# How to release

Lest we forget.

Wait for the DigitalOcean deployment of the API to complete. The new `openapi.json` needs to be available.

## Publish to npm

1. Open the [Manual Release](https://github.com/stellarcarbon/sc-sdk-typescript/actions/workflows/manual-release.yml) workflow page
1. Trigger the workflow with `dry-run = true` (the default)
1. Check the "prepare release" commit, and make sure the expected schema changes are included
1. If you're satisfied, trigger the workflow again, now with `dry-run = false`

## Create GitHub release

1. Draft a new GitHub release in your browser.
1. Title is the version number.
1. Press `Generate release notes` to create a compare link.
1. Add release notes from the corresponding API release by copying them (without the compare link) to the GitHub release.
