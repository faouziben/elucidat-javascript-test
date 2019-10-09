import * as React from 'react';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'



export default class NavMenu extends React.Component {


    render() {
        return <div >
            <ul className="navbar- bg-gradient-primary sidebar sidebar-dark accordion list-group sticky-top sticky-offset" id="accordionSidebar">


                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div >
                        
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        <span style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "20px" }}>Elucinema</span>
                    </div>
                </a>

                <hr className="sidebar-divider my-0" />
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                        <FontAwesomeIcon className="fas fa-fw" icon={faHome} />
                        <span>Home</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    }
}