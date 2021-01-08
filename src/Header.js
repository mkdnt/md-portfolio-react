import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <div>
            <div className='HeaderAll'>
            <div className='HeaderName'>
                <h1>mike dent</h1>
            </div>
            <div className='HeaderTitle'>
                <h3>full stack developer</h3>
            </div>
            </div>
            </div>
        )
    }
}

export default Header
