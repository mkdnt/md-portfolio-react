import React, { Component } from 'react'
import './Landing.css'

export class Landing extends Component {
    render() {
        return (
            <div className='hello'>
                    <h2 style={{fontSize: 'xxx-large'}}>hello</h2>
                    <p>My name is <strong>Mike</strong>, and I'm a software engineer in Washington, DC. I am a full-stack developer, proficient in <strong>React</strong>, <strong>jQuery</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, & <strong>CSS</strong> on the frontend; and <strong>Node.js</strong>, <strong>Express</strong>, & <strong>PostgreSQL</strong> on the backend. 
                    </p>
                    <p>Please take look at my <a
                            href="/projects" style={{color: 'inherit'}}><strong>Projects</strong></a>, or read my <a
                            href="/bio" style={{color: 'inherit'}}><strong>Bio</strong></a> to learn a little more about me. I'd also love to <a
                            href="/projects" style={{color: 'inherit'}}><strong>get in touch</strong></a> to talk about web development opportunities.</p>
                    </div>
        )
    }
}

export default Landing
