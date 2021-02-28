import React, { Component } from 'react';
import './ProjectItem.css';

export class ProjectItem extends Component {
    state = {
        expanded: false,
    }
    

    render() {
        const handleExpand = () => {
            this.setState({
                expanded: !this.state.expanded
            })
        }
        
        const project = this.props.project
        
        if (this.state.expanded === true) {
                return (
            <section>
                <div className='project-card'>
                <div className='project-details'>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <p>Tech Stack: {project.tech}</p>
                    <p>Links:</p>
                    <ul>
                        <li><a href={project.live} style={{ textDecoration: "none", color: "inherit", fontSize: 'inherit' }}>Live App</a></li>
                        <li><a href={project.client} style={{ textDecoration: "none", color: "inherit" }}>Client Repo</a></li>
                        <li><a href={project.server} style={{ textDecoration: "none", color: "inherit" }}>Server Repo</a></li>
                    </ul>
                    
                    <p><i className="arrow-up" onClick={handleExpand}></i></p>
                </div>
                <div className='project-pic'>
                    <img src={project.image1} style={{width: '150px', height: '150px'}} alt="home" />
                    <img src={project.image2} style={{width: '150px', height: '150px'}} alt="home" />
                    <img src={project.image3} style={{width: '150px', height: '150px'}} alt="home" />
                </div>
            </div>
            </section>

        )
        }

        else {
            return (
            <section>
                <div className='project-card'>   
                <div className='project-details'>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <p><i className="arrow-down" onClick={handleExpand}></i></p>
                </div>
                </div>
            </section>

        )
        }
    }
}

export default ProjectItem
