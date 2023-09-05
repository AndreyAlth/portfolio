import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import Link from 'next/link'
import { get_top_projects } from '@/requests/projects'

function Projects() {
  const [projects, setProjects] = useState([])

  const getTopPorjects = async () => {
    const resp = await get_top_projects()
    if (resp.status === 200) {
      console.log(resp)
      setProjects(resp.data)
    }
  }

  useEffect(() => {
    getTopPorjects()
  }, [])

  return (
    <Card bgColor='bg-[#C7D2FE]' disabled py='py-4' px='px-4'>
      <div className='text-left space-y-2'>
        <h2 className='font-semibold text-lg'>Recent Projects</h2>
        <ul className='space-y-2'>
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                className='hover:bg-slate-400/50 p-1 rounded-sm'
              >
                <Link
                  href={project.demo_link ? project.demo_link : project.code_link }
                >
                  <div className='font-semibold'>{project.name}</div>
                  <div>{project.description}</div>
                </Link>
              </li>
            )
          })}
        </ul>

        <div></div>
        <div className='flex justify-end items-center'>
          <Link className='font-semibold hover:text-blue-600' href='/projects'>
            {' '}
            More projects
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default Projects
