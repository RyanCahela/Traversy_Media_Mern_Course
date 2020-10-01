import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  background-color: #212121;
  color: lightgrey;
`;

const Nav = styled.nav`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: lightgrey;
  & a + a {
    margin-left: 20px;
  }
`;

const Heading = styled.h1`
  margin-right: auto;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

function Header() {
  return (
    <Container>
      <Nav>
        <Heading>Proshop</Heading>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Nav>
    </Container>
  );
}

export default Header;
