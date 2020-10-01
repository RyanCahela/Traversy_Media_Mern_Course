import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

function Footer() {
  return <StyledFooter>Copyright &copy; Proshop Inc 2020</StyledFooter>;
}

export default Footer;
