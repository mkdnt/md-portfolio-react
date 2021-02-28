import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export class Header extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    };

    // renderImage(){
    //     if (window.location.pathname === '/bio') {
    //         return (
    //             {backgroundImage: `url(${dogs})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}
    //         )
    //     }
    //     else {
    //         return (
    //             {backgroundImage: `url(${sparkle})`}
    //         )
    //     }
    // }

    render() {

        return (
            <div className='HeaderAll'>
            <div className='HeaderName'>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <h1>mike dent</h1>
                </Link>
            </div>
            <div className='HeaderTitle'>
                <h3>full stack developer</h3>
            </div>
            </div>
        )
    }
}

export default Header
