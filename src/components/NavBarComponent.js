import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
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
                <Navbar  className="navBar" expand="md">
                   <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar classname="nav-head">
                        <NavItem>
                            <NavLink  className="nav-text"to="/home">
                            Home
                            </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink className="nav-text"to="/coursera">
                              Coursera
                            </NavLink>
                        </NavItem>
                    
                     
                        <NavItem>
                            <NavLink className="nav-text"to="/wisdom">
                           Widsom
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

export default NavBar;