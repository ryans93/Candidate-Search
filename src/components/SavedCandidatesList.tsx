import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import Candidate from "../interfaces/Candidate.interface";

// Define the shape of the context
interface SavedCandidatesContextType {
  savedCandidates: Candidate[];
  addCandidate: (candidate: Candidate) => void;
  removeCandidate: (username: string) => void;
}

// Create the context
const SavedCandidatesContext = createContext<SavedCandidatesContextType | undefined>(undefined);

// Create the provider component
export const SavedCandidatesProvider = ({ children }: { children: ReactNode }) => {
  const [savedCandidates, setSavedCandidates] =
    useState<Candidate[]>(() => {
        if (typeof window !== "undefined"){
        const saved = localStorage.getItem("savedCandidates");
        return saved ? JSON.parse(saved) : [];
        }
        return [];
      });

  useEffect(() => {
    if (typeof window !== "undefined"){
        localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
    }
  }, [savedCandidates]);

  const addCandidate = (candidate: Candidate) => {
    setSavedCandidates(prev => [...prev, candidate]);
  };

  const removeCandidate = (username: string) => {
    setSavedCandidates(prev => prev.filter(c => c.username !== username));
  };

  return (
    <SavedCandidatesContext.Provider value={{ savedCandidates, addCandidate, removeCandidate }}>
      {children}
    </SavedCandidatesContext.Provider>
  );
};

// Custom hook for consuming the context
export const useSavedCandidates = () => {
  const context = useContext(SavedCandidatesContext);
  if (!context) {
    throw new Error("useSavedCandidates must be used within a SavedCandidatesProvider");
  }
  return context;
};