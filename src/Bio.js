import React, { Component } from 'react'
import './Bio.css'
import dogs from './images/dogs.jpg';
import yosemite from './images/yosemite-selfie.jpg'
import iap from './images/iap.JPG'

export class Intro extends Component {
    render() {
        return (
            <div className='intro'>
                <div className='intro-text'>
                    <h2 style={{fontSize: 'xxx-large'}}>about me</h2>
                    <p>My name is Mike, and I'm a software developer in Washington, DC. After more than a decade of working in international education, I am excited to now enter the coding world. 
                    </p>
                    <p> I graduated from the University of Kansas with a degree in English (Creative Writing),
                        then moved to Seoul, South Korea, to teach English and earn a master's degree in
                        International Studies from Korea University.
                    </p>
                    <p>
                        My journey with Thinkful has given me coding skills in <strong>Javascript</strong>, 
                        <strong> HTML</strong>, and <strong>CSS</strong>. I love the challenge of writing these languages
                        and the
                        thrill that comes with completing a project. I want to work on teams that also
                        challenge me to be even better and improve on what I've learned so far - while
                        having a fun time, of course! Whether it is designing website templates
                        or building mobile apps, I am ready to deliver.
                    </p>
                    <p>Outside of my professional life, my personal passion is running. I have completed
                        dozens of marathons and half-marathons around the world. Going for a long run or
                        hike is my favorite way of clearing my mind and getting resynced with the natural world.
                        I also have two dogs, Lainey and Sylvia, who are my hiking companions - when they are not
                        sleeping on the couch!
                    </p>
                </div>
                <div className='bio-pics'>
                    <img src={iap} alt='mike by world map' width='150px' style={{objectFit: 'cover'}}/>
                    <img src={dogs} alt='mike with dogs' width='150px' style={{objectFit: 'cover'}}/>
                    <img src={yosemite} alt='yosemite' width='150px' style={{objectFit: 'cover'}}/>
                </div>
                
            </div>
        )
    }
}

export default Intro
