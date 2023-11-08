import { Container } from "@chakra-ui/react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <h1>Footer</h1>
      </Container>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  width: 100%;
  margin-top: 88px;
  background: #101010;
  height: 500px;
`;
