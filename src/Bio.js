import React, { Component } from 'react'
import './Bio.css'
import dogs from './images/dogs.jpg';
import yosemite from './images/yosemite-selfie.jpg'
import iap from './images/iap.JPG'

export class Bio extends Component {
    render() {
        return (
            <div className='bio'>
                <div className='bio-text'>
                    <h2 style={{fontSize: 'xxx-large'}}>about me</h2>
                    <p>My name is Mike, and I'm a software engineer in Washington, DC. I have a decade of experience in education and curriculum development, which allowed me to hone my writing, editing, and design skills. I pride myself on projects that are creative, clean, and effective. 
                    </p>
                    <p>I graduated from the University of Kansas with a bachelor’s degree in English (Creative Writing), then moved to Seoul, South Korea, to teach English and earn a master's degree in International Studies from Korea University. Upon returning to the United States, I worked at American University in Washington, DC, as a manager for graduate advisors in a program devoted to international students. My expertise in project oversight, team management, and intercultural relations were critical in guiding students to success and building relationships across the university. Although I most recently acted as team leader in my capacity as manager, I love just being a member of the team - I like the feeling of accomplishment and camaraderie on a team, and I like being challenged and learning from my colleagues. Working with other developers is key not just to the success of the project, but also my growth as a software engineer.
                    </p>
                    <p>
                        My journey into the coding field has sharpened my frontend skills in <strong>React</strong>, <strong>jQuery</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, & <strong>CSS</strong>, and my backend skills in <strong>Node.js</strong>, <strong>Express</strong>, & <strong>PostgreSQL</strong>. I love the challenge of writing these languages and the thrill that comes with completing a project. In the same way that I managed students’ success at university and the programs that helped them meet that success, I can see my skills expanding day by day and my projects coming to life piece by piece. I am focused and serious about my work, but I have a lot of fun while doing it.
                    </p>
                    <p>Outside of my professional life, my biggest passion is running. I am an RRCA-certified running coach, and I have completed marathons and half-marathons around the world. Going for a long run or hike is my favorite way of clearing my mind and getting resynced with the natural world after a long day on the computer. I also have two dogs, Lainey and Sylvia, who are my hiking companions - when they are not sleeping on the couch!

                    </p>
                </div>
                <div className='bio-pics'>
                    <img src={iap} alt='mike by world map'/>
                    <img src={dogs} alt='mike with dogs' />
                    <img src={yosemite} alt='yosemite' />
                </div>
                
            </div>
        )
    }
}

export default Bio
