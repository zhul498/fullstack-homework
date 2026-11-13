import { fetchAllLocations, groupBy, orUnknown } from '../api';
import useFetch from '../useFetch';
import Status from '../Status';

const Locations = function Locations() {
  const { data: locations, loading, error } = useFetch(fetchAllLocations);
  const groups = locations ? groupBy(locations, (l) => orUnknown(l.type)) : [];

  return (
    <>
      <h1>Locations by Type</h1>
      <Status loading={loading} error={error} />
      {locations && (
        <>
          <p>{locations.length} locations in {groups.length} types.</p>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Number of locations</th>
              </tr>
            </thead>
            <tbody>
              {groups.map(({ key, members }) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{members.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Locations;
