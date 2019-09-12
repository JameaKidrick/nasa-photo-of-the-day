import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from '../../../node_modules/styled-components'

const NavbarName = styled.div`
    color: white;
    font-size: 30px;
`
const Link = styled.div`
    color: white;
`
const NavbarTogglerH = styled.button`
    width: 30px;
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
            <Navbar color="dark" light>
            <NavbarName href="/" className="mr-auto">NASA</NavbarName>
            <NavbarTogglerH onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                <NavItem>
                    <Link href="/components/">Components</Link>
                </NavItem>
                <NavItem>
                    <Link href="https://github.com/reactstrap/reactstrap">GitHub</Link>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}