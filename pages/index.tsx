import styled from "styled-components";
import { Routes } from "@config/routes";
// import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%; 
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;
const NavLinks = styled.a`
  color: #676f79;
  display: inline-block;
  text-decoration: none;
`;

const NavItems = styled.div`
  /* border: 2px solid pink; */
  width: 35%;
  display: flex;
  justify-content: space-between;
`;

const Dashboard = styled.a`
  background-color: #7e56d9;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: #fff;

  &:hover {
    background-color: #6e619f;
  }
`;

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <NavItems>
          <NavLinks href="/">Home</NavLinks>
          <NavLinks href="/products">Products</NavLinks>
          <NavLinks href="/documentation">Documentation</NavLinks>
          <NavLinks href="/pricing">Pricing</NavLinks>
        </NavItems>
        <Dashboard as="a" href={Routes.projects}>
          Open Dashboard
        </Dashboard>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
