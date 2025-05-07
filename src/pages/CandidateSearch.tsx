import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { useSavedCandidates } from "../components/SavedCandidatesList";

const CandidateSearch = () => {

  const [candidates, setCandidates] = useState<Candidate[]>([] as Candidate[]);
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const { addCandidate } = useSavedCandidates();

  function handleIconClick(add: boolean): void {
    setCandidateIndex((candidateIndex + 1));
    if (add) {
      addCandidate(candidates[candidateIndex])
      console.log("candidate added");
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await searchGithub();
      data.forEach(async (result: any, i: number) => {
        const userData = await searchGithubUser(result.login)
        if (Object.keys(userData).length === 0) {
          return;
        }
        //console.log(userData)
        let candidate: Candidate = {
          username: result.login,
          avatar: result.avatar_url,
          name: userData.name,
          location: userData.location,
          email: userData.email,
          company: userData.company,
          bio: userData.bio
        }
        setCandidates(prev => [...prev, candidate]);
      })
    }
    fetchData();
  }, [])

  return (<>
    <h1>CandidateSearch</h1>
    {(candidates.length > 0 && candidateIndex < candidates.length) ? (
      <div>
        <CandidateCard candidate={candidates[candidateIndex]} />
        <div id="button-container">
          <IoCloseCircle className="candidateButton" fill="red" size="5em" onClick={() => (handleIconClick(false))} />
          <IoCheckmarkCircle className="candidateButton" fill="green" size="5em" onClick={() => (handleIconClick(true))} />
        </div>
      </div>) :
      (candidates.length === 0) ?
        <h2>Fetching Candidates...</h2> :
        (<div>
          <h2>No more candidates :'(</h2>
          <h3>Refresh to view more!</h3>
        </div>)
    }
  </>);


};

export default CandidateSearch;
