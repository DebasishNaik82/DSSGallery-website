const OWNER = 'DebasishNaik82';
const REPO = 'DSSGALLERY';

export async function getLatestRelease() {
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`, {
    next: { revalidate: 3600 }
  });
  
  if (!response.ok) throw new Error("Failed to fetch latest release");
  
  return response.json();
}

export async function getReleases() {
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/releases`, {
    next: { revalidate: 3600 }
  });
  
  if (!response.ok) throw new Error("Failed to fetch releases");
  
  return response.json();
}

export async function fetchChangelog() {
  const response = await fetch(`https://raw.githubusercontent.com/${OWNER}/${REPO}/main/CHANGELOG.md`, {
    next: { revalidate: 3600 }
  });
  
  if (!response.ok) throw new Error("Failed to fetch changelog");
  
  return response.text();
}
