import { signOut } from 'firebase/auth';
import React from 'react';
import { Container,  Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }

    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" className='navbar' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'> <span className='store-name'>Fitness Store</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="me-auto d-lg-flex">
                        <CustomLink as={Link} to="/home">HOME</CustomLink>
                        <CustomLink as={Link} to="/blogs">BLOGS</CustomLink>
                    </div>
                    <div className='d-lg-flex'>
                        <CustomLink as={Link} to="/about">ABOUT</CustomLink>
                        {
                            user ?
                                <CustomLink as={Link} to='/login'>
                                    <div
                                        onClick={logout}
                                    >
                                        SIGNOUT
                                    </div>
                                </CustomLink>
                                :
                                <CustomLink as={Link} to='/login'>
                                    <div>
                                        LOGIN
                                    </div>
                                </CustomLink>
                        }



                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;