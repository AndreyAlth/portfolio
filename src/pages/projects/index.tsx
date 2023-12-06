import React, { useEffect, useState } from 'react'
import ProjectItem from '../../partials/projects/ProjectItem'
import { get_projects } from '../../requests/projects'

function Projects() {
  const [projects, setProjects] = useState([])

  const getPorjects = async () => {
    const resp = await get_projects()
    if (resp.status === 200) {
      setProjects(resp.data)
    }
  }

  useEffect(() => {
    getPorjects()
  }, [])

  return (
    <div className='grid grid-cols-12 gap-6 max-w-[90vw] mx-auto'>
      {projects.map(
        ({ id, name, description, demo_link, code_link, data, alt }, index) => {
          return (
            <div key={id} className='col-span-12 md:col-span-3'>
              <ProjectItem
                img_url={data}
                img_alt={alt}
                project_name={name}
                project_desc={description}
                demo_link={demo_link}
                code_link={code_link}
              />
            </div>
          )
        }
      )}
    </div>
  )
}

export default Projects
