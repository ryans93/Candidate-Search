import Candidate from "../interfaces/Candidate.interface"
interface CandidateCardProps {
    candidate: Candidate;
  }
function CandidateCard(props : CandidateCardProps){

    return(
      <section>
        <img src={props.candidate.avatar}></img>
        <h2>{`${props.candidate.name ? props.candidate.name : ""}(${props.candidate.username})`}</h2>
        <h3>{`Location: ${props.candidate.location ? props.candidate.location : ""}`}</h3>
        <h3>Email:&nbsp; <a href={`mailto:${props.candidate.email}`}>{props.candidate.email ? props.candidate.email : ""}</a></h3>
        <h3>{`Company: ${props.candidate.company ? props.candidate.company : ""}`}</h3>
        <p>{`Bio: ${props.candidate.bio ? props.candidate.bio : ""}`}</p>
      </section>
    )
}

export default CandidateCard