import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Nav theme={theme}>
      <Heading>Foodies</Heading>
      <StyledNavLink exact to="/" activeClassName="active">Home</StyledNavLink>
      <StyledNavLink to="/about" activeClassName="active">About</StyledNavLink>
      <StyledNavLink to="/contact-us" activeClassName="active">Contact Us</StyledNavLink>
      <div>
        <ClockIcon />
        <ClockTime>{currentTime.toLocaleTimeString()}</ClockTime>
      </div>
      <ThemeButton onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </ThemeButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between; /* Adjust as needed */
  align-items: center;
  background-color: ${({ theme }) => theme === 'light' ? '#fff' : '#333'};
  color: ${({ theme }) => theme === 'light' ? '#000' : '#fff'};
  padding: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 1.2em;
  margin: 0 1em;
  position: relative;

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: ${({ theme }) => theme === 'light' ? '#007BFF' : '#FFD700'};
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme === 'light' ? '#007BFF' : '#FFD700'};
    transition: width .3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeButton = styled.button`
  background: ${({ theme }) => theme === 'light' ? '#007BFF' : '#FFD700'};
  color: ${({ theme }) => theme === 'light' ? '#fff' : '#000'};
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${({ theme }) => theme === 'light' ? '#0056b3' : '#ffcc00'};
  }
`;

const Heading = styled.h3`
  font-family: 'Cursive', cursive; /* Use a cursive font */
  font-size: 1.5em;
  color: red;
`;

const ClockIcon = styled.span`
  display: inline-block;
  width: 24px; /* Adjust as needed */
  height: 24px; /* Adjust as needed */
  background-image: url('./icons/clock.svg'); /* Adjust the path */
  background-size: cover;
`;

const ClockTime = styled.span`
  font-size: 1em;
  margin-left: 0.5em;
`;

export default NavBar;
