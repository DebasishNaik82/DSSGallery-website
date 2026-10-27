# DSS Gallery Website

The official website for **DSS Gallery**, a privacy-first, offline Android gallery application. This website serves as the central hub for app information, release updates, official APK downloads, and policy documentation.

---

## Website Overview

The DSS Gallery website is designed to provide users with a fast, modern, and trustworthy way to learn about the app and download verified Android APK releases. The site operates with zero database dependencies, dynamically pulling release assets and changelog details directly from the public GitHub repository.

---

## Key Features

### 1. Dynamic APK Release Integration
- **Live GitHub Releases Sync**: Automatically discovers the latest published GitHub release, retrieving the version tag, release date, and attached `.apk` package size in real time.
- **Direct Download Link**: Automatically locates and links the official APK binary asset without requiring manual website code updates.
- **Release History**: Provides a complete timeline of published versions and release dates fetched directly from release metadata.

### 2. Live Changelog & Release Notes
- **Direct CHANGELOG Parsing**: Dynamically fetches and renders the repository's `CHANGELOG.md` on the *What's New* page.
- **Automated Version Highlighting**: Visually highlights the newest release with a dedicated badge while keeping older release notes structured and readable.
- **Markdown Formatting**: Renders formatted lists, subheadings (`Added`, `Implemented`, `Enhanced`), and inline code cleanly.

### 3. Visual Identity & Theming
- **Brand Consistency**: Styled to match the DSS Gallery Android application, featuring the signature `#1D70E8` blue accent, `#111111` dark surface, and `#DADADA` light background.
- **Light & Dark Theme Switcher**: Seamless theme toggling with automatic system preference detection powered by `next-themes`.
- **Responsive Layout**: Mobile-first design equipped with a responsive header, hamburger navigation menu, and a subtle "Scroll to Top" button for long pages.

### 4. Complete Page Structure
- **Home**: Overview of app capabilities, feature highlights, live specifications, quick download CTA, and an interactive FAQ preview.
- **Download**: Dedicated APK download hub with file verification info and step-by-step Android installation guidance.
- **What's New**: Comprehensive, formatted changelog for recent feature additions, improvements, and fixes.
- **Version History**: Chronological table of all previous releases and publication dates.
- **About Us**: Context on DSS Gallery’s design philosophy, approach, and offline architecture.
- **FAQ**: Common questions regarding APK installation, permissions, and device compatibility.
- **Legal & Compliance**: Clear, transparent Privacy Policy and Terms & Conditions.

### 5. SEO & Web Standards
- Dynamic XML Sitemap (`/sitemap.xml`) covering all active routes.
- Configured crawler instructions (`/robots.txt`).
- OpenGraph tags, canonical URLs, and structured metadata for search engines and social sharing.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Theming**: `next-themes`
- **Markdown Engine**: `react-markdown` & `remark-gfm`
- **Icons**: `lucide-react`
- **Data Source**: GitHub REST API & Raw Content API
