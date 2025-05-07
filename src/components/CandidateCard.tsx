import Candidate from "../interfaces/Candidate.interface"
interface CandidateCardProps {
    candidate: Candidate;
}
function CandidateCard(props: CandidateCardProps) {

    return (
        <section id="candidateCard">
            <img src={props.candidate.avatar} alt="candidate avatar" style={{
                height: "33vh",
                width: "100%",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px"
            }}></img>
            <div id="cardTextContainer">
                <h2>{`${props.candidate.name ? props.candidate.name : ""}(${props.candidate.username})`}</h2>
                <h3>{`${props.candidate.location ? "Location: " + props.candidate.location : ""}`}</h3>
                <h3><a href={`mailto:${props.candidate.email}`}>{props.candidate.email ? "Email: " + props.candidate.email : ""}</a></h3>
                <h3>{`${props.candidate.company ? "Company: " + props.candidate.company : ""}`}</h3>
                <p>{`${props.candidate.bio ? "Bio: " + props.candidate.bio : ""}`}</p>
            </div>
        </section>
    )
}

export default CandidateCard