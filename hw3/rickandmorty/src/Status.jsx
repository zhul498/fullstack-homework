// Shared loading / error message so every page handles both the same way.
const Status = function Status({ loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Could not load data: {error.message}</p>;
  return null;
};

export default Status;
