import React, { Component } from 'react';
import ImageCarousel from './ImageCarousel';
import './ProjectItem.css';

export class ProjectItem extends Component { 

    render() {
        const project = this.props.project

        
        
        return (
            <section>
                <div className='project-card'>
                <div className='project-details'>
                    
                        <h1 className='project-title'>{project.title}</h1>
                        <p>{project.intro}</p>
                        <div className='site-row'>
                            <div className='site'><a href={project.live} style={{ textDecoration: "none", color: "inherit", fontSize: 'inherit' }}>Live App</a></div>
                        <div className='site'><a href={project.client} style={{ textDecoration: "none", color: "inherit" }}>gh | Client</a></div>
                        <div className='site'><a href={this.props.project.server} style={{ textDecoration: "none", color: "inherit" }}>gh | Server</a></div>
                        </div>
                        <p>{project.description}</p>
                </div>
                <ImageCarousel project={project} />
                <div className='stack'>
                    {project.reactBadge}{project.nodeBadge}{project.psqlBadge}{project.jsBadge}{project.cssBadge}{project.htmlBadge}{project.herokuBadge}{project.vercelBadge}
                </div>
                
            </div>
            </section>

        )

    }
}

export default ProjectItem
