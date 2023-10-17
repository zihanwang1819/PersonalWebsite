import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
       
        <i className="fab fa-react"/><i className="fab fa-react"/><i className="fab fa-react"/><i className="fab fa-react"/><i className="fab fa-react"/>
        <p>
          <small className="text-muted">
          The design and code of this webpage are derived from improvements to the <span className="badge bg-dark">
            Hashir Shoaib
          </span>'s project template, with open-sourced data on GitHub.
          </small>
        </p>
        <strong className="text">
          2023 - Zihan Wang
        </strong>
      </Container>
    </footer>
  );
};

export default Footer;
