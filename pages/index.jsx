import { Routes } from "@config/routes";
// import { Link } from "react-router-dom";
import axios from "axios";
import { ModalProvider } from "styled-react-modal";
import { useState, useEffect, useReducer } from "react";
// import { useParams } from "react-router-dom";
import {
  Header,
  ContactButton,
  NavLinks,
  NavItems,
  Dashboard,
  ContactTitle,
  ContactText,
  CancelButton,
  OpenEmailButton,
  StyledModal,
} from "./dashboard/indexStyles";

const IssuesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [meta, setMeta] = useState({});

  const initialState = "home";

  const reducer = (state, action) => {
    switch (action) {
      case "/home":
        return state === "home";
      case "/products":
        return state === "products";
      case "/documentation":
        return state === "documentation";
      case "/pricing":
        return state === "pricing";
      default:
        return state;
    }
  };

  const [final, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://prolog-api.profy.dev/content-page/${final}`
        );
        if (res.data.meta) {
          setMeta(res.data.meta);
          console.log(res.data.meta);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [final]);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Header>
        <ModalProvider>
          <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
          >
            <ContactTitle>Contact Us Via Email</ContactTitle>
            <ContactText>
              Any question? Send us an email at danobzy@gmail.com. We usually
              answer within 24 hours of contact
            </ContactText>
            <div>
              <CancelButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </CancelButton>
              <OpenEmailButton href={`mailto:${`danobzy@gmail.com`}`}>
                Open Email App
              </OpenEmailButton>
            </div>
          </StyledModal>
        </ModalProvider>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <NavItems>
          <NavLinks href="/" onClick={() => dispatch("/home")}>
            Home
          </NavLinks>

          <NavLinks href="/products" onClick={() => dispatch("/products")}>
            Products
          </NavLinks>
          <NavLinks
            href="/documentation"
            onClick={() => dispatch("/documentation")}
          >
            Documentation
          </NavLinks>
          <NavLinks href="/pricing" onClick={() => dispatch("/pricing")}>
            Pricing
          </NavLinks>
        </NavItems>
        <Dashboard as="a" href={Routes.projects}>
          Open Dashboard
        </Dashboard>
      </Header>
      <div>
        <div>{meta.title}</div>
        <div>{meta.description}</div>
        <div>{meta.image}</div>
      </div>
      <ContactButton onClick={toggleModal}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
