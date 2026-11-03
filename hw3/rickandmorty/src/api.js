const BASE_URL = 'https://rickandmortyapi.com/api';

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}): ${url}`);
  }
  return response.json();
}

// The API returns 20 characters per page, so pages 1-5 = the first 100.
export async function fetchFirst100Characters() {
  const pageNumbers = [1, 2, 3, 4, 5];
  const pages = await Promise.all(
    pageNumbers.map((page) => getJson(`${BASE_URL}/character?page=${page}`)),
  );
  return pages.flatMap((page) => page.results ?? []).slice(0, 100);
}

// Locations are paginated too: read the first page to learn how many pages
// there are, then fetch the rest in parallel.
export async function fetchAllLocations() {
  const firstPage = await getJson(`${BASE_URL}/location`);
  const totalPages = firstPage.info?.pages ?? 1;

  const otherPageNumbers = Array.from({ length: totalPages - 1 }, (_, i) => i + 2);
  const otherPages = await Promise.all(
    otherPageNumbers.map((page) => getJson(`${BASE_URL}/location?page=${page}`)),
  );

  return [firstPage, ...otherPages].flatMap((page) => page.results ?? []);
}

// Turns { key: [...] } groups into an array sorted by group size (largest first).
export function groupBy(items, getKey) {
  const groups = {};
  items.forEach((item) => {
    const key = getKey(item);
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });
  return Object.entries(groups)
    .map(([key, members]) => ({ key, members }))
    .sort((a, b) => b.members.length - a.members.length || a.key.localeCompare(b.key));
}

// Incomplete data: the API sometimes sends empty strings (a location with
// type "") or the word "unknown". Treat missing, empty and "unknown" the same.
export function orUnknown(value) {
  if (typeof value !== 'string') return 'Unknown';
  const trimmed = value.trim();
  if (trimmed === '' || trimmed.toLowerCase() === 'unknown') return 'Unknown';
  return trimmed;
}
