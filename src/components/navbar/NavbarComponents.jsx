import { Navbar, Nav, Container, Offcanvas, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavbarComponents.css'
import { navLinks, theaterabout, jkt48points, Shopping } from '../../data'
import { NavLink} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const NavbarComponents = () => {
    
    const navigate = useNavigate()

    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="navbar-canvas_global mb-3 pt-0 pb-0">
                    <Container fluid>
                        <Navbar.Toggle className='navbar-button-icon_global' variant="outline-"><FontAwesomeIcon icon={faBars} /></Navbar.Toggle>
                        <Navbar ><a onClick={() => navigate('/register')} className='navbar-title-header_global_responsive  nav-link ms-5' >JKT48</a></Navbar>
                        <div className='login-page_global '>
                            <div className='d-flex mb-0 '>
                                {navLinks.map((link, index) => {
                                    if (index === 7 | index === 8) {
                                        return (
                                            <div className='login-register__responsive' key={link.id}>

                                                <NavLink className='navbar-title_global_responsive  nav-link m-0 ' to={link.path}>{link.text}</NavLink>

                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                                <p className='navbar-title_global_responsive m-0 '></p>
                            </div>
                        </div>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                            </Offcanvas.Header>
                            <Container className='container-canvas'>
                                <Nav className="container-item-navbar justify-content-center flex-grow-1  ">
                                    {navLinks.map((link, index) => {
                                        if (index < 3) {
                                            return (
                                                <div className='navbar-btn-lines' key={link.id}>
                                                    <NavLink className='navbar-btn nav-link m-0  ' to={link.path}>{link.text}</NavLink>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                    <Dropdown className='navbar-btn-lines '>
                                        <Dropdown.Toggle className='navbar-btn nav-link n-0 '  variant="secondary" id="dropdown-basic" style={{ background: 'none', border: 'none' }}>
                                            THEATER
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {theaterabout.map((link, index) => {
                                                if (index < 6) {
                                                    return (
                                                        <Dropdown.Item   key={link.id} onClick={() => navigate(link.path)}>
                                                            {link.text}
                                                        </Dropdown.Item>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown className='navbar-btn-lines '>
                                        <Dropdown.Toggle className='navbar-btn nav-link n-0 '  variant="secondary" id="dropdown-basic" style={{ background: 'none', border: 'none' }}>
                                            JKT48 POINTS
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {jkt48points.map((link, index) => {
                                                if (index < 6) {
                                                    return (
                                                        <Dropdown.Item   key={link.id} onClick={() => navigate(link.path)}>
                                                            {link.text}
                                                        </Dropdown.Item>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown className='navbar-btn-lines '>
                                        <Dropdown.Toggle className='navbar-btn nav-link n-0 '  variant="secondary" id="dropdown-basic" style={{ background: 'none', border: 'none' }}>
                                            SHOP
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {Shopping.map((link, index) => {
                                                if (index < 2) {
                                                    return (
                                                        <Dropdown.Item   key={link.id} onClick={() => navigate(link.path)}>
                                                            {link.text}
                                                        </Dropdown.Item>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {navLinks.map((link, index) => {
                                        if (index == 6 ) {
                                            return (
                                                <div className='navbar-btn-lines' key={link.id}>
                                                    <NavLink className='navbar-btn nav-link m-0  ' to={link.path}>{link.text}</NavLink>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </Nav>
                            </Container>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default NavbarComponents 