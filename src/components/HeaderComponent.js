import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state= {
       isNavOpen: false
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
             Immeasurable
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
                        </Nav>

                        <NavItem>
                        <Button  onClick={this.open}>Login</Button>
                       
                        </NavItem>

                            </Collapse>
                    </div>
                </Navbar>
                    <Jumbotron className="jumbotron">
                    <div className="container">    
                        <div className="row row-header">
                            <div className="col-12 col-sm-10">
                           <h1>Immeasurable</h1>
                            <p><h3>As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.</h3></p>
                                <Button className="btn-sub">Subscribe Now</Button>
                            </div>


                        </div>
                        </div>
                    </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;