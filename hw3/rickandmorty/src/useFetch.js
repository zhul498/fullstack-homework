import { useEffect, useState } from 'react';

// Runs an async fetch function once and tracks loading / error / data.
const useFetch = function useFetch(fetchFn) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false; // avoid setting state after the page is left

    fetchFn()
      .then((result) => {
        if (!ignore) setData(result);
      })
      .catch((err) => {
        if (!ignore) setError(err);
      });

    return () => {
      ignore = true;
    };
  }, [fetchFn]);

  return { data, error, loading: !data && !error };
};

export default useFetch;
