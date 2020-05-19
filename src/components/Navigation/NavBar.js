import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import styled from '../../../node_modules/styled-components'

const Logo = styled.img`
    width: 100px;
`

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
        collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
        collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
        <div>
            <Navbar color="dark" dark>
            <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png' alt='NASA logo'></Logo>
            <NavbarToggler style={{outline:'none'}} onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink style={{color:'white', fontSize:'1.2rem'}} href="https://jameakidrick.netlify.com/">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{color:'white', fontSize:'1.2rem'}} href="https://github.com/JameaKidrick">GitHub</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}