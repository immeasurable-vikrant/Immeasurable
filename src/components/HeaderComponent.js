import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav,Collapse, NavItem,NavbarToggler, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            isNavOpen: false
        };
       this.toggleNav =this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState ({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                   <div className="container">
                   <NavbarToggler onClick= {this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">Immeasurable</NavbarBrand>
               <Collapse isNavOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to='/home'>
                                <span className='fa fa-home fa-lg'></span>Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink className="nav-link" to='/qa'>
                                <span className='fa fa-info fa-lg'></span>Q&A
                                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='explore'>
                            <span className='fa fa-list fa-lg'></span>Explore
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                    </div>
                </Navbar>
                    <Jumbotron>
                    <div className="container">    
                        <div className="row row-header">
                        <div className="col-sm-6 right-align">
                        <img src="./assets/images/buffet.png" height="280" width="280" alt="Immeasurable"/>
                        </div>
                            <div className="col-12 col-sm-6">
                            <h1>Immeasurable</h1>
                            <p>Self Transformation through Self Understanding.</p>
                            <h1>This is Your Life and it's ending one minute at a time.</h1>
                            </div>

                        </div>

                        </div>
                    </Jumbotron>

            </React.Fragment>
        );
    }
}

export default Header;