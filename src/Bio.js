import React, { Component } from 'react'
import './Bio.css'
import dogs from './images/dogs.jpg'

export class Intro extends Component {
    render() {
        return (
            <div className='intro'>
                <div className='intro-text'>
                    <h2>about me</h2>
                    <p>My name is Mike, and I'm a software developer in Washington, DC. After more than a decade of working in international education, I am excited to now enter the coding world. 
                    </p>
                </div>
                <img src={dogs} alt='me with dogs' width='150px' style={{border: 'solid black 1px', objectFit: 'cover'}}/>
            </div>
        )
    }
}

export default Intro
