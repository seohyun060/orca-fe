import React from 'react'

import 'temp.scss'
import ProjectCard from './ProjectCard';

export default function ProjectComponent() {
  return (
    <div>
      <section className='ProjectsSection'>
        <div className='ProjectsSectionTitle'>
          <label className='ProjectFont'>
            Projects
          </label>
          {/* project로 연결 */}
          <button className='ViewButton'>
            <label className='View'>
              View All
            </label>
          </button>
        </div>
        <div className='ProjectBox'>
          <ProjectCard />      
        </div>
      </section>
    </div>
  );
}
