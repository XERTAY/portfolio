import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import styles from '../styles/Projects.module.css'
import '../styles/globals.css'
import Section from './Section'
import ProjectCard from './ProjectCard'

const allProjects = [
  { title: 'Portfolio', type: 'web' },
  { title: 'DeliceApp', type: 'mobile' },
  { title: 'TEST',    type: 'web' },
  { title: 'Youtube MP3',  type: 'desktop' },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'Desktop', value: 'desktop' },
  { label: 'Web', value: 'web' },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = allProjects.filter(p => filter === 'all' ? true : p.type === filter)

  return (
    <Section id="projects" title="PROJECTS">
      <div className={styles.projectsFilter}>
        {filters.map(f => (
          <button
            key={f.value}
            className={`${styles.filterButton} ${filter === f.value ? styles.active : ''}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
        <div className={styles.filterDropdown}>
          <FiChevronDown size={20} />
        </div>
      </div>
      <div className={styles.projectsGrid}>
        {filtered.map(p => <ProjectCard key={p.title} title={p.title} />)}
      </div>
    </Section>
  )
}
