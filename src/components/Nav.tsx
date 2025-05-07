import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [page, setPage] = useState<string>("home")
  const navigate = useNavigate();

  function handlePageChange(link: string): void {
    console.log("link " + link)
    if (link === page) {
      return;
    }
    setPage(link);
    console.log(page)

    link === "home" ? navigate("/") : navigate("/SavedCandidates")
  }
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <nav>
        <ul className="nav">
          <li className={`nav-item nav-link ${page === "home" ? "active" : ""}`} onClick={() => handlePageChange("home")}>
            Home
          </li>
          <li className={`nav-item nav-link ${page === "potential" ? "active" : ""}`} onClick={() => handlePageChange("potential")}>
            Potential Candidates
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;
