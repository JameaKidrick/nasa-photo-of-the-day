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

const Logo = styled.img`
    width: 80px;
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
            <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png' alt='NASA logo'></Logo>
            {/* <NavbarName href="/" className="mr-auto">NASA</NavbarName> */}
            <NavbarTogglerH onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                <NavItem>
                    <Link href="https://jameakidrick.netlify.com/">Portfolio</Link>
                </NavItem>
                <NavItem>
                    <Link href="https://github.com/JameaKidrick">GitHub</Link>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}