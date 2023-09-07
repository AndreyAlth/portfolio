import React, { useState } from 'react'
import ProjectItem from '@/partials/projects/ProjectItem'

function Projects() {
  const [projects, setProjects] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  return (
    <div className='grid grid-cols-12 gap-6 max-w-[90vw] mx-auto'>
      {projects.map((projects, index) => {
        return (
          <div key={index} className='col-span-12 md:col-span-3'>
            <ProjectItem
              img_url={'/projects/portfolio.png'}
              img_alt={'foto de proyecto'}
              project_name='Portfolio'
              project_desc={'Simple descripción'}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Projects
