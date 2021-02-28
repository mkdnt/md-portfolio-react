import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'
import projects from './ProjectStore'

export class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <ul
                style={{
                listStyleType: "none",
                textDecoration: "none",
                color: "inherit",
                paddingLeft: "0",
                }}>
                    {projects.map((project) => (
                        <li key={project.id} style={{textDecoration: 'none'}}>
                            <ProjectItem
                                project={project}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Projects
