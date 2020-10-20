import { useState, useEffect } from 'react';
import { NavbarWrapper } from './navbar.styles';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import withApollo from 'hoc/withApollo';
import { useLazyGetUser } from 'apollo/actions/auth';

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={`mr-3 ${className}`}>{children}</a>
  </Link>
);

const AppNavbar = () => {
  const [user, setUser] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, { data, error }] = useLazyGetUser();

  useEffect(() => {
    getUser();
  }, []);

  if (data) {
    if (data.user && !user) {
      setUser(data.user);
    }
    if (!data.user && user) {
      setUser(null);
    }
    if (!hasResponse) {
      setHasResponse(true);
    }
  }

  const pageTitle = 'Page Title';
  const appLinks = [
    {
      linkTitle: 'Test Link',
      path: '/'
    }
  ];

  return (
    <NavbarWrapper>
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <AppLink className="navbar-brand font-weight-bold" href="/">
          {pageTitle}
        </AppLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {appLinks.map(({ linkTitle, path }, index) => (
              <AppLink key={index} href={path} className="nav-link">
                {linkTitle}
              </AppLink>
            ))}
          </Nav>

          {hasResponse && (
            <Nav>
              {user && (
                <>
                  <span className="nav-link mr-4">Welcome {user.username}</span>
                  <AppLink href="/logout" className="nav-link btn btn-danger">
                    Sign Out
                  </AppLink>
                </>
              )}
              {(error || !user) && (
                <>
                  <AppLink href="/register" className="mr-3 nav-link">
                    Sign up
                  </AppLink>
                  <AppLink href="/login" className="mr-3 btn btn-success bg-green-2 bright">
                    Sign In
                  </AppLink>
                </>
              )}
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </NavbarWrapper>
  );
};

export default withApollo(AppNavbar);
