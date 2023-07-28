"use client";

import { createContext, useEffect, useState } from "react";
import { TChildren } from "./type";

export const ProjectContext = createContext([]);
export const ProjectsProvider = ({ children }: TChildren) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/projetos")
      .then((response) =>  response.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};
