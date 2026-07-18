# mirror_app-android

**Auto-generated build mirror. Do not edit directly — changes will be overwritten.**

This repository holds a buildable snapshot of the Android/Gradle project for
[Miroji](https://github.com/RogerioDoCarmo/mirror_app), regenerated automatically
whenever a new release is published in the main repo.

It exists to give F-Droid (and any other build system that wants a plain
Gradle project) a source tree that builds with standard tools: the generated
`android/` project (output of `expo prebuild`) is committed here, dependencies
are installed at build time with `pnpm install --frozen-lockfile` (pinned by
the committed `pnpm-lock.yaml`), and `.npmrc` sets `node-linker=hoisted` so
`node_modules` comes out flat and symlink-free — required for F-Droid's
source scanner, which resolves real paths.

The committed `package.json` sets Expo's autolinking option
`buildFromSource: [".*"]`, so every Expo/React Native native module is
compiled from source by Gradle instead of consuming the prebuilt AARs that
Expo ships.

- **App source, issues, and development:** [RogerioDoCarmo/mirror_app](https://github.com/RogerioDoCarmo/mirror_app)
- **License:** MIT (same as the source repo)
- **Updated by:** [`.github/workflows/android-mirror.yml`](https://github.com/RogerioDoCarmo/mirror_app/blob/main/.github/workflows/android-mirror.yml) in the main repo, on every GitHub release.
- **F-Droid store metadata:** `fastlane/metadata/android/<locale>/` (maintained
  here directly, preserved across re-mirrors).

Each push here is tagged with the same version as the corresponding
mirror_app release (e.g. `v1.3.1`).
