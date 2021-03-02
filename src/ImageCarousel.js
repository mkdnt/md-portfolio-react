import React, { Component } from 'react'
import './ImageCarousel.css'

export class ImageCarousel extends Component {
    render() {
        const project = this.props.project
        return (
            <div className="slider">

            <div className="slides">
                <div id="slide-1">
                <img className='carousel' src={project.image1} alt="first"/>
                </div>
                <div id="slide-2">
                <img className='carousel' src={project.image2} alt="second"/>
                </div>
                <div id="slide-3">
                <img className='carousel' src={project.image3} alt="third"/>
                </div>
            </div>
            </div>
        )
    }
}

export default ImageCarousel
