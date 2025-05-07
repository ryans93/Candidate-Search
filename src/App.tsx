import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { SavedCandidatesProvider } from "./components/SavedCandidatesList"

function App() {
  return (
    <>
      <Nav />
      <SavedCandidatesProvider>
        <main>
          <Outlet />
        </main>
      </SavedCandidatesProvider>
    </>
  );
}

export default App;
