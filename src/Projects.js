import React, { Component } from 'react'
import './Projects.css'

export class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <h3>Are You Johan?</h3>
                    <p>A fun quiz app that tells you which 18th century Norwegian poet you most resemble physically
                        based only on your responses! Are you Magdalene Sophie Buchholm, or more of a Jens Zetlitz?
                        Maybe neither - you could be Dorothe Engelbretsdatter!</p>
                
                <div>
                    <h4>tech</h4>
                    <p>Built from scratch with HTML wireframes, CSS, and jQuery.</p>
                </div>
                <div>
                    <h4>links</h4>
                    <p><a href="https://github.com/mkdnt" target="_blank"><strong>Take the quiz!</strong></a></p>
                    <p><a href="https://github.com/mkdnt/md-portfolio-v2" target="_blank"><strong>Check out the
                                repo!</strong></a></p>
                </div>
            </div>
        )
    }
}

export default Projects
