import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/bio' style={{ textDecoration: "inherit", color: "inherit" }}>
                            bio
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects' style={{ textDecoration: "inherit", color: "inherit" }}>
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link to='/links' style={{ textDecoration: "inherit", color: "inherit" }}>
                            links
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav
