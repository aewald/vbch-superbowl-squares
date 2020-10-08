import { NavbarWrapper } from './navigation.styles';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={`mr-3 ${className}`}>{children}</a>
  </Link>
);

const AppNavbar = () => (
  <NavbarWrapper>
    <Navbar expand="lg" className="navbar-dark">
      <AppLink className="navbar-brand font-weight-bold" href="/">
        Super Bowl Squares
      </AppLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <AppLink href="/test" className="nav-link">
            Test Link
          </AppLink>
        </Nav>
        <Nav>
          <AppLink href="/register" className="nav-link">
            Sign Up
          </AppLink>
          <AppLink href="/login" className="nav-link btn btn-success font-weight-bold">
            Sign In
          </AppLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </NavbarWrapper>
);

export default AppNavbar;
