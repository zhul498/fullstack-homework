import { fetchFirst100Characters, groupBy, orUnknown } from '../api';
import useFetch from '../useFetch';
import Status from '../Status';

const Species = function Species() {
  const { data: characters, loading, error } = useFetch(fetchFirst100Characters);
  const groups = characters ? groupBy(characters, (c) => orUnknown(c.species)) : [];

  return (
    <>
      <h1>Species</h1>
      <Status loading={loading} error={error} />
      {characters && (
        <>
          <p>{groups.length} species among the first {characters.length} characters.</p>
          {groups.map(({ key, members }) => (
            <section key={key}>
              <h2>{key} ({members.length})</h2>
              <p>{members.map((c) => orUnknown(c.name)).join(', ')}</p>
            </section>
          ))}
        </>
      )}
    </>
  );
};

export default Species;
