import styled from "styled-components";
import Modal from "styled-react-modal";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

export const ContactButton = styled.button`
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
export const NavLinks = styled.a`
  color: #676f79;
  display: inline-block;
  text-decoration: none;
`;

export const NavItems = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
`;

export const Dashboard = styled.a`
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

export const ContactTitle = styled.h2`
  margin: 0;
`;
export const ContactText = styled.p`
  max-width: 80%;
  line-height: 1.2;
  text-align: center;
  color: #9fa1a3;
`;
export const CancelButton = styled.button`
  background-color: #ffffff;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: #3c3f42;
  margin: 10px 7px;

  &:hover {
    background-color: #3c3f42;
    color: #fff;
  }
`;
export const OpenEmailButton = styled.a`
  background-color: #7e56d9;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  color: #fff;
  text-decoration: none;
  margin: 10px 7px;

  &:hover {
    background-color: #6e619f;
  }
`;

export const StyledModal = Modal.styled`
  width: 25%;
  min-width: 20%;
  padding: 0.5em 1em;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
