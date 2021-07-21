import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const _Footer = styled.footer`
  text-align: center;
`;
const Info = styled.div`
  align-items: center;
  display: inline-flex;
`;
const Space = styled.div`
  width: 10px;
`;
export default function Footer() {
  return (
    <_Footer>
      <Info>
        <a href="https://github.com/jetobe95/calculator-app" target="_target">
          <AiFillGithub size="30px" />
        </a>
        <Space />
        <a href="https://www.linkedin.com/in/jeffrey-daniel-torres-bello-1ab800171/" target="_target">
          <AiFillLinkedin size="30px" />
        </a>
      </Info>
    </_Footer>
  );
}
