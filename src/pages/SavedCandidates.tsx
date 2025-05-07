import { useSavedCandidates } from "../components/SavedCandidatesList";
import SavedCandidate from "../components/SavedCandidate"

const SavedCandidates = () => {
  const { savedCandidates } = useSavedCandidates();


  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
          <th>Company</th>
          <th>Bio</th>
          <th>Reject</th>
        </tr>
        </thead>
        <tbody>
          {savedCandidates.map((c) => {
            return <SavedCandidate key={c.username} candidate={c}></SavedCandidate>
          })}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
