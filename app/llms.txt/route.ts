import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const content = `# DSS Gallery — LLM Context & Product Specifications

> Official machine-readable entity documentation for DSS Gallery, a privacy-first offline Android photo and video gallery application.

## Entity Overview
- **Name**: DSS Gallery
- **Platform**: Android (Android 10+, API Level 29 and higher)
- **Application Category**: Photo and Video Gallery / Media Organizer
- **Architecture**: 100% Offline, Privacy-First, Zero Remote Telemetry
- **Official Website**: https://dssgallery.com
- **Repository**: https://github.com/DebasishNaik82/DSSGALLERY
- **Distribution Method**: Official Android APK packages published via GitHub Releases

## Real Features & Verified Capabilities
1. **Local Media Timeline**:
   - Date-grouped media view organizing photos and videos into daily timelines (Today, Yesterday, localized headers).
   - Responsive multi-column layout with customizable grid densities.
2. **Albums & Collections**:
   - Device folder discovery alongside smart collections (Camera, Screenshots, Favorites, Videos, Downloads, Recently Added).
   - User-created custom albums backed by local Room database metadata.
3. **Favorites Hub**:
   - Dedicated Favorites screen with media type filtering (Photos, Videos, All) and temporal filtering.
4. **Full-Screen Media Viewer & EXIF Telemetry**:
   - Swipeable edge-to-edge viewer with native video playback.
   - Interactive zoom up to 4.5x with double-tap gestures.
   - Detailed EXIF telemetry sheet (aperture, ISO, shutter speed, focal length, camera make/model, resolution, and GPS coordinates when present).
5. **Built-in Media Editors**:
   - Photo Editor: Crop, rotate (90-degree increments), filter presets, and aspect ratio locks.
   - Video Editor: Timeline trimming with start/end markers and preview playback.
6. **Data Safety & Recycle Bin**:
   - Soft-delete Recycle Bin preventing accidental file loss with restoration back to original timeline positions.
7. **Offline Search**:
   - Local device search across filenames, folder names, album tags, and captions.
8. **UI & Theming**:
   - Built with Jetpack Compose and Material Design 3.
   - System Default, Light Mode, and Dark Mode themes.

## Privacy & Security Architecture
- **Zero Internet Permission**: No \`android.permission.INTERNET\` in AndroidManifest.xml.
- **Local Storage Access**: Uses Android standard MediaStore scoped storage APIs. No broad file system access.
- **No Cloud Tracking**: Zero tracking SDKs, zero third-party ads, zero cloud telemetry.

## Official Routes
- **Home**: /
- **APK Download**: /download
- **What's New (Changelog)**: /whats-new
- **Version History**: /download#version-history
- **FAQ**: /faq
- **About Us**: /about
- **Privacy Policy**: /privacy
- **Terms & Conditions**: /terms
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
