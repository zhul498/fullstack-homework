export default function Home() {
  return (
    <>
      <h1>Rick and Morty Explorer</h1>
      <p>
        Welcome! This app uses the free{' '}
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
          Rick and Morty API
        </a>{' '}
        to browse the show&apos;s characters and locations.
      </p>
      <ul>
        <li><strong>Characters:</strong> the first 100 characters with picture, species and status</li>
        <li><strong>Species:</strong> how many characters belong to each species, and who they are</li>
        <li><strong>Locations:</strong> how many locations there are of each type</li>
      </ul>
    </>
  );
}
