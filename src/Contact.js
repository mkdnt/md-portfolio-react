import React, { Component } from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import resume from './images/doc.png'
import './Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div>
                    <h2 style={{fontSize: 'xxx-large'}}>get in touch</h2>
                    <p>Please check me out on GitHub and LinkedIn, take a look at my resume, or send me a message below. I'd love to make a new connection and talk about opportunities in web development.
                    </p>
                    <div>
                        <a href="https://github.com/mkdnt" target="_blank"><img className='icon' src={github} alt="GitHub Link"/></a>

                        <a href="https://www.linkedin.com/in/mkdnt/" target="_blank"><img className='icon' src={linkedin} alt="LinkedIn Link"/></a>

                        <a href="https://drive.google.com/file/d/1c1NupViVCuv2OwSERjoyQiK4UQvubzDe/view?usp=sharing" target="_blank"><img className='icon' src={resume} alt="LinkedIn Link" style={{marginLeft: '-10px'}}/></a>
                    </div>
                    <form className='contact-form' action="https://formspree.io/f/xayleeza" method="POST">
                        <input type="text" id="user-name" name="name" placeholder='Name' />
                        <input type="email" id="email" name="_replyto" placeholder='Email' />
                        <textarea id="message" name="message" placeholder='Message...'></textarea>
                        <button type="submit" value="Send">Send</button>
                    </form>
                </div>

                    

            </div>
        )
    }
}

export default Contact
