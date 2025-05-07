import Candidate from "../interfaces/Candidate.interface";
import { IoCloseCircle } from "react-icons/io5";
import { useSavedCandidates } from "../components/SavedCandidatesList";


interface CandidateProps {
    candidate: Candidate;
}
function SavedCandidate(props: CandidateProps) {
    const { removeCandidate } = useSavedCandidates();

    function rejectCandidate(username: string) {
        removeCandidate(username);
    }

    return (
        <tr>
            <td >
                <div className="tableImage">
                    <img src={props.candidate.avatar} alt="candidate avatar" style={{
                        height: "10vh",
                        width: "10vh",
                        borderRadius: "25px"
                    }}></img>
                </div>
            </td>
            <td>{`${props.candidate.name}\n(${props.candidate.username})`}</td>
            <td>{props.candidate.location}</td>
            <td>{props.candidate.email}</td>
            <td>{props.candidate.username}</td>
            <td>{props.candidate.bio}</td>
            <td>
                <div className="tableImage">
                <IoCloseCircle className="candidateButton" fill="red" size="5em" onClick={() => (rejectCandidate(props.candidate.username))} />
                </div>
            </td>
        </tr>
    )
}

export default SavedCandidate;