# mirror_app-android

**Auto-generated build mirror. Do not edit directly — changes will be overwritten.**

This repository holds a buildable snapshot of the Android/Gradle project for
[Miroji](https://github.com/RogerioDoCarmo/mirror_app), regenerated automatically
whenever a new release is published in the main repo.

It exists to give F-Droid (and any other build system that wants a plain
Gradle project) a source tree that builds with `./gradlew assembleRelease`
alone — no `pnpm install`, no Expo CLI, no network access to npm registries
required. `node_modules` and the generated `android/` project are committed
here so the build is fully self-contained per tagged release.

- **App source, issues, and development:** [RogerioDoCarmo/mirror_app](https://github.com/RogerioDoCarmo/mirror_app)
- **License:** MIT (same as the source repo)
- **Updated by:** [`.github/workflows/android-mirror.yml`](https://github.com/RogerioDoCarmo/mirror_app/blob/main/.github/workflows/android-mirror.yml) in the main repo, on every GitHub release.

Each push here is tagged with the same version as the corresponding
mirror_app release (e.g. `v1.3.1`).
