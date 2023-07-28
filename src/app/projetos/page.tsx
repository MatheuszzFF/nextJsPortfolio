'use client'
import { useContext } from 'react';
import {Projects} from 'components'
import { ProjectContext } from '../../context/ProjectsContext/ProjectsContext';

export default function ProjectsPage() {
  const projects = useContext(ProjectContext)
  return (
    <main className="margin-top">
      <Projects projects={projects} /> 
    </main>
  )
}
