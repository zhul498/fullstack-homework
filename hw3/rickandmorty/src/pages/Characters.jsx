import { fetchFirst100Characters, orUnknown } from '../api';
import useFetch from '../useFetch';
import Status from '../Status';

const Characters = function Characters() {
  const { data: characters, loading, error } = useFetch(fetchFirst100Characters);

  return (
    <>
      <h1>Characters</h1>
      <Status loading={loading} error={error} />
      {characters && (
        <>
          <p>Showing the first {characters.length} characters.</p>
          <div className="grid">
            {characters.map((character) => (
              <div className="card" key={character.id}>
                {character.image ? (
                  <img src={character.image} alt={orUnknown(character.name)} loading="lazy" />
                ) : (
                  <div className="no-image">No image</div>
                )}
                <h3>{orUnknown(character.name)}</h3>
                <p>Species: {orUnknown(character.species)}</p>
                <p>Status: {orUnknown(character.status)}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Characters;
