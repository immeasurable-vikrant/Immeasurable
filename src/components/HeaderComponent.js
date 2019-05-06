import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Logout from './LogoutComponent';

class Header extends Component {
    constructor(props){
        super(props);
        this.state= {
       isNavOpen: false,
   

       
        };
        this.toggleNav= this.toggleNav.bind(this);
       
    }


    toggleNav() {
        this.setState({
        isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                   <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
               <NavbarBrand className="mr-auto" href="/">
             Immeasurable <sup>&reg;</sup>
                  </NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"to="/home">
                            Home
                            </NavLink>
                        </NavItem>
               
                        <NavItem>
                            <NavLink className="nav-link"to="/learning">
                                The Learning
                            </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink className="nav-link"to="/coursera">
                              Coursera
                            </NavLink>
                        </NavItem>
                    
                     
                        <NavItem>
                            <NavLink className="nav-link"to="/wisdom">
                           Widsom
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link"to="/articles">
                              Articles
                            </NavLink>
                        </NavItem>

                        {/* oAuth Login Logout Passport */}

                        <NavItem>
                            <NavLink className="nav-link"to="/auth/logout">
                              <Logout />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"to="/auth/login">
                            Login
                            </NavLink>
                        </NavItem>

                        </Nav>
                       
                        </Collapse>
                             
                    </div>
                   
                </Navbar>
                    
            </React.Fragment>
        );
    }
}

export default Header;